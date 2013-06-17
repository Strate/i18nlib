/* 
 * gennumfmts.js - ilib tool to generate the  number json fragments from  
 * the CLDR data files 
 *  
 * Copyright © 2013, LGE 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
/* 
 * This code is intended to be run under node.js  
 */
var fs = require('fs');
var util = require('util');
var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function usage() {
	util.print("Usage: gennumfmts [-h] CLDR_json_dir locale_data_dir\n" +
		"Generate number formats information files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_json_dir\n" +
		"  the top level of the Unicode CLDR distribution in json format\n" +
		"locale_data_dir\n" +
		"  the top level of the ilib locale data directory\n");
	process.exit(1);
}

var cldrDirName;
var localeDirName;

process.argv.forEach(function (val, index, array) {
		if (val === "-h" || val === "--help") {
			usage();
		}
	});

if (process.argv.length < 4) {
	util.error('Error: not enough arguments');
	usage();
}

cldrDirName = process.argv[2];
localeDirName = process.argv[3];

util.print("gennumfmts - generate number formats information files.\n" +
	"Copyright (c) 2013 LGE\n");

util.print("CLDR dir: " + cldrDirName + "\n");
util.print("locale dir: " + localeDirName + "\n");

fs.exists(cldrDirName, function (exists) {
		if (!exists) {
			util.error("Could not access CLDR dir " + cldrDirName);
			usage();
		}
	});

fs.exists(localeDirName, function (exists) {
		if (!exists) {
			util.error("Could not access locale data directory " + localeDirName);
			usage();
		}
	});

var filename, root, json, suppData, languageData, numberingSystemsData, digitsData, scripts = {};

try {
	filename = cldrDirName + "/main/en.json";
	json = fs.readFileSync(filename, "utf-8");
	root = JSON.parse(json);

	filename = cldrDirName + "/supplemental/supplementalData.json";
	json = fs.readFileSync(filename, "utf-8");
	suppData = JSON.parse(json);

	languageData = suppData.languageData;
} catch (e) {
	util.print("Error: Could not load file " + filename + "\n");
	process.exit(2);
}

for (var locale in languageData) {
	if (locale && languageData[locale]) {
		if (typeof (languageData[locale]["@scripts"]) === 'string') {
			var language = (locale.length <= 3) ? locale : locale.split(/-/)[0];
			if (typeof (scripts[language]) === 'undefined') {
				scripts[language] = [];
			}
			var newLangs = languageData[locale]["@scripts"].split(/ /g);
			if (locale.length <= 3) {
				// util.print("language " + language + " prepending " + JSON.stringify(newLangs)); 
				scripts[language] = newLangs.concat(scripts[language]);

			} else {
				// util.print("language " + language + " appending " + JSON.stringify(newLangs)); 
				scripts[language] = scripts[language].concat(newLangs);
			}
		}
	}
}



function loadFile(path) {
	var ret = undefined;

	if (fs.existsSync(path)) {
		json = fs.readFileSync(path, "utf-8");
		ret = JSON.parse(json);
		//util.print("path is :"+path+"\n"); 
	}

	return ret;
}

function loadFile_jf(path) {
	var ret = undefined;

	if (fs.existsSync(path)) {

		//util.print("path is :" + path + "\n");
		json = fs.readFileSync(path, "utf-8");
		var lastComma = json.lastIndexOf(",");
		json = json.substring(0, lastComma);
		ret = JSON.parse("{" + json + "}");
		//util.print("path is :"+path+"\n"); 
	}
	return ret;
}

function calcLocalePath(language, script, region, filename) {
	var path = localeDirName + "/";
	if (language) {
		path += language + "/";
	}
	if (script) {
		path += script + "/";
	}
	if (region) {
		path += region + "/";
	}
	path += filename;
	return path;
}

function loadFileNonGenerated(language, script, region) {
	var path = calcLocalePath(language, script, region, "numfmt.jf");
	var obj = loadFile_jf(path);
	//var obj = loadFile(path);
	if (typeof (obj) !== 'undefined' && (typeof (obj.generated) === 'undefined' || obj.generated === false)) {
		// only return non-generated files 
		return obj;
	}
	return undefined;
}

var localeData = {};

function getLocaleData(path, language, script, region) {
	var data;
	try {
		filename = cldrDirName + "/main/" + path;
		data = loadFile(filename);

		if (script) {
			if (region) {
				if (!localeData[language]) {
					localeData[language] = {};
				}
				if (!localeData[language][script]) {
					localeData[language][script] = {};
				}
				if (!localeData[language][script][region]) {
					localeData[language][script][region] = {};
				}
				localeData[language][script][region].data = data;
			}
		} else if (region) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			if (!localeData[language][region]) {
				localeData[language][region] = {};
			}
			localeData[language][region].data = data;
		} else if (language) {
			if (!localeData[language]) {
				localeData[language] = {};
			}
			localeData[language].data = data;
		} else {
			// root locale 
			localeData.data = data;
		}
	} catch (e) {
		return undefined;
	}

	return data;
}

function anyProperties(data) {
	var count = 0;
	for (var prop in data) {
		if (prop && data[prop]) {
			count++;
		}
		if (count > 1) {
			return true;
		}
	}
	return false;
}

function writeNumberFormats(language, script, region, data) {

	var path = calcLocalePath(language, script, region, "");
	//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(data)+"\n");
	if (data.generated) {
		if (anyProperties(data)) {
			util.print("Writing " + path + "\n");

			var empty_data_default = data["numfmt"]["defaults"];
			var empty_data_native = data["numfmt"]["native"];
			if ((Object.keys(empty_data_default).length === 0)) {
				//util.print("no need to create the file " + "\n");
				return;
			}

			makeDirs(path);

			var numfmt = {};
			var default_data={};
			var native_data={};
			var arr_data = ["decimalChar", "groupChar", "pctChar", "prigroupSize", "pctFmt", "curFmt", "secgroupSize", "negativenumFmt", "negativepctFmt", "negativecurFmt", "roundingMode" , "digits"];
			var arr_keys_default = [empty_data_default["decimalChar"], empty_data_default["groupChar"] , empty_data_default["pctChar"], empty_data_default["prigroupSize"], empty_data_default["pctFmt"], empty_data_default["curFmt"], empty_data_default["secgroupSize"], empty_data_default["negativenumFmt"], empty_data_default["negativepctFmt"], empty_data_default["negativecurFmt"], empty_data_default["roundingMode"], empty_data_default["digits"] ];

			for (var i = 0; i < arr_data.length; i++) {
				if (typeof (arr_keys_default[i]) != undefined) {
					default_data[arr_data[i]] = arr_keys_default[i];
				}
			}
			numfmt["defaults"]=default_data;
			if(typeof(empty_data_native)!='undefined') {
			var arr_keys_native = [empty_data_native["decimalChar"], empty_data_native["groupChar"] , empty_data_native["pctChar"], empty_data_native["prigroupSize"], empty_data_native["pctFmt"], empty_data_native["curFmt"], empty_data_native["secgroupSize"], empty_data_native["negativenumFmt"], empty_data_native["negativepctFmt"], empty_data_native["negativecurFmt"], empty_data_native["roundingMode"], empty_data_native["digits"] ];

			for (var i = 0; i < arr_data.length; i++) {
				if (typeof (arr_keys_native[i]) != undefined) {
					native_data[arr_data[i]] = arr_keys_native[i];
				}
			}
			numfmt["native"]=native_data;
		}
			/*if(typeof (empty_data_default["digits"]) != 'undefined'){
			if ((Object.keys(empty_data_default["digits"]).length != 0)) {
				//util.print("no need to create the file " + "\n");
				numfmt["digits"]=empty_data_default["digits"];
				}
			}*/

			//util.print("data to be written into jf files" + path + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+JSON.stringify(numfmt)+"\n"); */
			fs.writeFileSync(path + "/numfmt.jf", '\"numfmt\" :' + JSON.stringify(numfmt) + ',\n', "utf-8");
			//fs.writeFileSync(path + "/numfmt.jf",JSON.stringify(data), "utf-8");
		} else {
			util.print("Skipping empty " + path + "\n");
		}
	} else {
		util.print("Skipping existing " + path + "\n");
	}
}

function getNumberFormats(language, script, region, data) {
	// if it is already there and non-generated, return it 
	var numbers = loadFileNonGenerated(language, script, region);

	if (numbers) {
		util.print("\nLoaded existing resources from " + calcLocalePath(language, script, region, "numfmt.jf") + "\n");
		//util.print("\nLoaded existing resources data " + JSON.stringify(numbers) + "\n");
		numbers.generated = false;
		return numbers;
	}

	// else generate a new one 
	numbers = {
		generated: true
	};
	var symbols = data.numbers;

	var def_num_system = symbols.defaultNumberingSystem;
	var native_num_system =symbols["otherNumberingSystems"]["native"];

	util.print("the language is  " + JSON.stringify(language) + "\n");
	util.print("the script is  " + JSON.stringify(script) + "\n");
	util.print("the region is  " + JSON.stringify(region) + "\n");
	util.print("the default numbering system is " + JSON.stringify(def_num_system) + "\n");
	util.print("the native numbering system is " + JSON.stringify(native_num_system) + "\n");
	var default_data={};
	var native_data={};
	var numfmt={};
	default_data = getNumberFormats_num_system(def_num_system,data);
	numfmt["defaults"]=default_data;
	if(native_num_system!=def_num_system) {
	native_data = getNumberFormats_num_system(native_num_system,data);
	util.print("the native numbering system  data is ---------------------------------------- " + JSON.stringify(native_data) + "\n");
	numfmt["native"]=native_data;
		}
	

	
	numbers["numfmt"] = numfmt;
	
	return numbers;
}



function getNumberFormats_num_system(def_num_system, data) {
	var symbol = "symbols-numberSystem-";

	var decimal = "decimalFormats-numberSystem-";

	var percentage = "percentFormats-numberSystem-";

	var currency = "currencyFormats-numberSystem-";

	symbol_number_system = symbol.concat(def_num_system);
	decimal_number_system = decimal.concat(def_num_system);
	percentage_number_system = percentage.concat(def_num_system);
	currency_number_system = currency.concat(def_num_system);

	//util.print("the symbol numbering system " + symbol_number_system + "\n");

	var symbol_format = data.numbers[symbol_number_system];
	var decimal_format = data.numbers[decimal_number_system]["standard"]["decimalFormat"]["pattern"];
	var percent_format = data.numbers[percentage_number_system]["standard"]["percentFormat"]["pattern"];
	var currency_format = data.numbers[currency_number_system]["standard"]["currencyFormat"]["pattern"];
	var symbol_format_data = {};

	var decimal_separator = symbol_format["decimal"];
	var group_separator = symbol_format["group"];

	//    var index_of_semi_colon=0; 
	var index_of_decimal = 0;
	var index_of_group = 0;

	var primarygroupsize = 0;
	var secondarygroupsize = 0;
	
	decimal_format = decimal_format.replace(/'(.)+'/g, "");
	var decimal_fmt = decimal_format;
	if (decimal_format.lastIndexOf(",") === -1) {
		primarygroupsize = 0;
	}

	//var decimal_format = "";
	
	if (decimal_format.indexOf(";") != -1) {
		index_of_semi_colon = decimal_format.indexOf(";");
		decimal_format = decimal_format.substring(index_of_semi_colon, decimal_format.length);
	}

	//else { 
	if (decimal_format.lastIndexOf(".") !== -1) {
		if (decimal_format.lastIndexOf(".") > decimal_format.lastIndexOf(",")) {
			index_of_decimal = decimal_format.lastIndexOf(".");
			index_of_group = decimal_format.lastIndexOf(",") + 1;
		} else if (decimal_format.lastIndexOf(".") < (decimal_format.lastIndexOf(","))) {
			index_of_decimal = decimal_format.lastIndexOf(".") + 1;
			index_of_group = decimal_format.lastIndexOf(",");
		}
		primarygroupsize = Math.abs(index_of_decimal - index_of_group);
	} else {
		primarygroup_size = decimal_format.length - (decimal_format.lastIndexOf(",") + 1);
	}

	var separator_count = (decimal_format.match(/,/g));
	if (separator_count != null) {
		if (separator_count.length > 1) {
			secondarygroupsize = decimal_format.lastIndexOf(",") - (decimal_format.indexOf(",") + 1);
		} else
			secondarygroupsize = 0;
	}
	//} 

	percent_format = percent_format.replace(/'(.)+'/g, "");
	var pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");

	symbol_format_data["decimalChar"] = decimal_separator;
	symbol_format_data["groupChar"] = group_separator;
	symbol_format_data["pctChar"]=symbol_format["percentSign"];
	symbol_format_data["prigroupSize"] = primarygroupsize;
	symbol_format_data["secgroupSize"] = secondarygroupsize;
	//    symbol_format_data["pctFmt"]=pctFmt; 

	currency_format = currency_format.replace(/'(.)+'/g, "");
	if (currency_format.indexOf(";") != -1) {
		index_of_semi_colon = currency_format.indexOf(";");
		var cur_fmt = currency_format.substring(0, index_of_semi_colon);
		//util.print("cur_fmt      is  ...................." + cur_fmt + "===================" + "\n");
		var curFmt = cur_fmt.replace(/[0#,\.]+/, "{n}");
		curFmt = curFmt.replace(/¤/g, "{s}");
		symbol_format_data["curFmt"] = curFmt;
	} else {
		curFmt = currency_format.replace(/[0#,\.]+/, "{n}");
		curFmt = curFmt.replace(/¤/g, "{s}");
		symbol_format_data["curFmt"] = curFmt;
	}

	//    symbol_format_data["curFmt"]=curFmt; 
	if (decimal_fmt.indexOf(";") != -1) {
		index_of_semi_colon = decimal_fmt.indexOf(";");
		var negative_num_format = decimal_fmt.substring(index_of_semi_colon, decimal_fmt.length);
		var numfmtnegative = negative_num_format.replace(/[0#,\.]+/, "{n}");
		symbol_format_data["negativenumFmt"] = numfmtnegative;
	}

	if (percent_format.indexOf(";") != -1) {
		index_of_semi_colon = percent_format.indexOf(";");
		var negative_pct_format = percent_format.substring(index_of_semi_colon, percent_format.length);
		var pctfmtnegative = negative_pct_format.replace(/[0#,\.]+/, "{n}");
		symbol_format_data["negativepctFmt"] = pctfmtnegative;

		var positive_pct_format = percent_format.substring(0, index_of_semi_colon - 1);
		pctFmt = positive_pct_format.replace(/[0#,\.]+/, "{n}");
		//pctFmt=pctFmt.replace(/¤/g,"{s}"); 
		symbol_format_data["pctFmt"] = pctFmt;
	} else {
		pctFmt = percent_format.replace(/[0#,\.]+/, "{n}");
		//pctFmt=pctFmt.replace(/¤/g,"{s}"); 
		symbol_format_data["pctFmt"] = pctFmt;
	}

	if ((JSON.stringify(currency_format).indexOf(";")) != -1) {
		index_of_semi_colon = currency_format.indexOf(";");
		var negative_cur_format = currency_format.substring(index_of_semi_colon + 1, currency_format.length);
		var curfmtnegative = negative_cur_format.replace(/[0#,\.]+/, "{n}");
		curfmtnegative = curfmtnegative.replace(/¤/g, "{s}");
		symbol_format_data["negativecurFmt"] = curfmtnegative;
	}

	symbol_format_data["roundingMode"] = "halfdown";
	//var numfmt={};
	//numfmt=symbol_format_data;
	//var digits= {};
	var native_digits;
	//if(typeof(script) == 'undefined') {
	native_digits= getNativeDigits(def_num_system.toLowerCase());
	//}
	/*else if(script) {
		native_digits= getNativeDigits_default(def_num_system.toLowerCase(),script.toLowerCase());
		}*/
	//util.print("native digits are...................." + JSON.stringify(native_digits) + "===================" + "\n");
	//var digits= {};
	/*for(var i=0;i<native_digits.length;i++) {
		digits[native_digits[i]]= native_digits[i+1];
		i++;
		}
	}*/
	//native_digits
	
	util.print("native digits are...................." + JSON.stringify(native_digits) + "===================" + "\n");
	
	
	symbol_format_data["digits"]= native_digits;
	//numbers["numfmt"] = symbol_format_data;

	return symbol_format_data;
}
//code for getting the native digits for the locales

/*function getNativeDigits(def_script,script) {
	//var digits=[];
	
	util.print("script for native digits "+ script + "\n");
	var numberingSystemsfile= cldrDirName + "/supplemental/numberingSystems.json";
	json = fs.readFileSync(numberingSystemsfile, "utf-8");
	numberingSystemsData = JSON.parse(json);
	digitsData= numberingSystemsData.numberingSystems;
	digits_script=digitsData[script];
	digits_defscript=digitsData[def_script];
	util.print("digits for script are:" + JSON.stringify(digits_script)+"\n");
	if(typeof(digits_script)!='undefined') {
		if(digits_script["@type"]=="numeric") {
		var digits=digits_script["@digits"];
		return digits;
			}
		}
	else if(typeof(digits_defscript)!='undefined') {
		if(digits_defscript["@type"]=="numeric") {
		var digits=digits_defscript["@digits"];
		return digits;
			}
	}
	//util.print("numbersystemdata is :" + JSON.stringify(digitsData)+"\n");
	
}
*/
function getNativeDigits(script) {
	//var digits=[];
	
	util.print("script for native digits "+ script + "\n");
	var numberingSystemsfile= cldrDirName + "/supplemental/numberingSystems.json";
	json = fs.readFileSync(numberingSystemsfile, "utf-8");
	numberingSystemsData = JSON.parse(json);
	digitsData= numberingSystemsData.numberingSystems;
	digits_script=digitsData[script];
	//digits_defscript=digitsData[def_script];
	util.print("digits for script are:" + JSON.stringify(digits_script)+"\n");
	if(typeof(digits_script)!='undefined') {
		if(digits_script["@type"]=="numeric") {
		var digits=digits_script["@digits"];
		util.print("digits for script are:" + JSON.stringify(digits)+"\n");
		return digits;
			}
		}
	/*else if(typeof(digits_defscript)!='undefined') {
		if(digits_defscript["@type"]=="numeric") {
		var digits=digits_defscript["@digits"];
		return digits;
			}
	}
	//util.print("numbersystemdata is :" + JSON.stringify(digitsData)+"\n");*/
	
}




//code for getting the native digits for the locales for native scripts

/*function getNativeDigits() {
	var digits=[];
	//util.print("language for native digits "+ language + "\n");
	var numberingSystemsfile= cldrDirName + "/supplemental/numberingSystems.json";
	json = fs.readFileSync(numberingSystemsfile, "utf-8");
	numberingSystemsData = JSON.parse(json);
	digitsData= numberingSystemsData.numberingSystems;
	var j=0;
	//util.print("numbersystemdata is :" + JSON.stringify(digitsData)+"\n");
	if(typeof(language)!='undefined') {
	for (var script_number in digitsData) {
		util.print("SCRIPT is  : " +script_number+"\n");
		util.print("language for native digits "+ language + "\n");
		util.print("script for language is "+ JSON.stringify(scripts[language])+ "\n");
		//var digits=[];
		for(var i=0;i<scripts[language].length;i++) {
			//var digits=[];
			if (JSON.stringify(scripts[language][i]).toLowerCase() ==JSON.stringify(script_number).toLowerCase()) {
				util.print("script of language  : " +scripts[language][i]+"\n");
				util.print("script in numberdata  : " +script_number+"\n");
				if(digitsData[script_number]["@type"]=="numeric") {
				//util.print("language for native digits "+ language + "\n");
				//var digits=[];
				util.print("script for native digits "+ script_number + "\n");
				digits[j] =script_number;
				digits[j+1] = digitsData[script_number]["@digits"];
				j=j+2;
				digitsData[script_number]= "done";
				//util.print("Digits are : " +digits+"\n");
				//return digits;
					}
				}
			}
		//return digits;
		}
	util.print("Digits are : " +digits+"\n");
	return digits;
	}
}*/
var language, region, script, files;
files = fs.readdirSync(cldrDirName + "/main/");

util.print("Reading locale data into memory...\n");

for (var i = 0; i < files.length; i++) {
	file = files[i];
	if (file === "root.json") {
		// special case because "root" is not a valid locale specifier 
		getLocaleData(file, undefined, undefined, undefined);
	} else {
		locale = file.split(/\./)[0].replace(/_/g, "-");
		var l = new Locale(locale);
		if(typeof(l.getVariant())!=undefined)
		getLocaleData(file, l.getLanguage(), l.getScript(), l.getRegion());
	}
}
util.print("\n");

util.print("Merging and pruning locale data...\n");

mergeAndPrune(localeData);

var resources = {};

resources.data = getNumberFormats(undefined, undefined, undefined, localeData.data);
for (language in localeData) {
	if (language && localeData[language] && language !== 'data' && language !== 'merged') {
		resources[language] = resources[language] || {};
		util.print(language + " "); 
		for (var subpart in localeData[language]) {
			if (subpart && localeData[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				resources[language][subpart] = resources[language][subpart] || {};
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in localeData[language][script]) {
						resources[language][script][region] = resources[language][script][region] || {};
						if (region && localeData[language][script][region] && region !== 'data' && region !== 'merged') {
							resources[language][script][region].data = getNumberFormats(language, script, region, localeData[language][script][region].merged);
						}
					}
				}
				resources[language][subpart].data = getNumberFormats(language, subpart, undefined, localeData[language][subpart].merged);
			}
		}
		resources[language].data = getNumberFormats(language, undefined, undefined, localeData[language].merged);
	}
}

//resources.data = getNumberFormats(undefined, undefined, undefined, localeData.data); 
util.print("\nMerging and pruning r...\n");
//util.print("\nLoaded existing resources " + JSON.stringify(resources) + "\n");
//writeNumberFormats(undefined, undefined, undefined, resources.data); 
//util.print("\ndata before merge and pruning\n"+JSON.stringify(resources)+"\n");
mergeAndPrune(resources);
//util.print("\ndata after merge and pruning\n"+JSON.stringify(resources)+"\n");
//writeNumberFormats(undefined, undefined, undefined, resources.data);

for (language in resources) {
	if (language && resources[language] && language !== 'data' && language !== 'merged') {
		for (var subpart in resources[language]) {
			if (subpart && resources[language][subpart] && subpart !== 'data' && subpart !== 'merged') {
				if (Locale.isScriptCode(subpart)) {
					script = subpart;
					for (region in resources[language][script]) {
						if (region && resources[language][script][region] && region !== 'data' && region !== 'merged') {
							writeNumberFormats(language, script, region, resources[language][script][region].data);
						}
					}
					writeNumberFormats(language, script, undefined, resources[language][script].data);
				} else {
					writeNumberFormats(language, undefined, subpart, resources[language][subpart].data);
				}
			}
		}
		writeNumberFormats(language, undefined, undefined, resources[language].data);
	}
}

writeNumberFormats(undefined, undefined, undefined, resources.data); 


/*util.print("digits data is "+  digitsData);

for (var script_number in digitsData) {
			if(digitsData[script_number]!="done") {
					if(digitsData[script_number]["@type"]=="numeric"){
						var path = localeDirName + "/" + "und/"+digitsData[script_number];
						if (!fs.existsSync(path)) {
						fs.mkdirSync(path);
					}
	fs.writeFile(path + "/numfmt.jf", '\t"digits": ' + JSON.stringify(digitsData[script_number]["@digits"])+ ',\n', function (err) {
						if (err) {
						console.log(err);
						throw err;
							}
					});	
				
				}
		}
	}*/
process.exit(0);

