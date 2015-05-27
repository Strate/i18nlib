/*
 * datefmts.js - auxillary tools used to generate the dateformats.json files
 *
 * Copyright © 2015, JEDLSoft
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
var path = require('path');

var common = require('./common');
var merge = common.merge;
var Locale = common.Locale;
var mergeAndPrune = common.mergeAndPrune;
var makeDirs = common.makeDirs;

function loadFile(path) {
    var ret = undefined;
    if (fs.existsSync(path)) {
        json = fs.readFileSync(path, "utf-8");
        // before parsing, first remove comments which are not valid in real json
		json = json.replace(/\/\/[^\n]*\n/g, "\n").replace(/\/\*(\*[^\/]|[^\*])*\*\//g, "");
		ret = JSON.parse(json);
    }
    return ret;
}

function addDateFormat(formats, locale, data) {
	if (!locale) {
		// root
		formats.data = data;
		return;
	}
	
	var language = locale.getLanguage(),
		script = locale.getScript(),
		region = locale.getRegion();
	
	if (language) {
		if (!formats[language]) formats[language] = {};
		if (script) {
			if (!formats[language][script]) formats[language][script] = {};
			if (region) {
				formats[language][script][region] = {data: data};
			} else {
				formats[language][script].data = data;
			}
		} else if (region) {
			formats[language][region] = {data: data};
		} else {
			formats[language].data = data;
		}
	}
}

function getFormatGroup(formats, localeComponents) {
	var group = formats;
	for (var i = 0; i < localeComponents.length; i++) {
		if (!group[localeComponents[i]]) group[localeComponents[i]] = {};
		group = group[localeComponents[i]];
	}
	return group;
}

function convertOrderFormat(fmt) {
	return fmt.replace(/\{0\}/, "{time}").replace(/\{1\}/, "{date}");
}

function correctedYear(fmt) {
	ret = "";
	var i = 0;
	var skipMode = false;
	while (i < fmt.length) {
		if (fmt.charAt(i) === "'") {
			skipMode = !skipMode;
		} else if (!skipMode) {
			var c = fmt.charAt(i),
				start = i; 
			while (c === 'y' && i < fmt.length) {
				c = fmt.charAt(++i);
			}
			if (i - start > 0) {
				ret += (i - start > 1) ? "yy" : "yyyy";
			}
		}
		ret += fmt.charAt(i++);
	}
	return ret;
}

function dateOrder(fmt) {
	var stripped = fmt.replace(/'[^']*'/g, "");
	if (stripped.match(/d.*M.*y/)) {
		return "dmy";
	} else if (stripped.match(/M.*d.*y/)) {
		return "mdy";
	} else if (stripped.match(/y.*M.*d/)) {
		return "ymd";
	} else if (stripped.match(/y.*d.*M/)) {
		return "ydm";
	} else {
		util.print("WARNING: unknown date order: " + fmt + "\n");
	}
}

function dateOrder2(fmt) {
	var stripped = fmt.replace(/'[^']*'/g, "");
	if (stripped.match(/[Ec].*M.*d/)) {
		return "wmd";
	} else if (stripped.match(/d.*M.*[Ec]/)) {
		return "dmw";
	} else if (stripped.match(/[Ec].*d.*M/)) {
		return "wdm";
	} else if (stripped.match(/M.*d.*[Ec]/)) {
		return "mdw";
	} else {
		util.print("WARNING: unknown date order: " + fmt + "\n");
	}
}

function getDateFormat(calendar, length) {
	var ret = "";
	if (calendar.dateFormats && calendar.dateFormats[length]) {
		ret = typeof(calendar.dateFormats[length]) === "string" ? calendar.dateFormats[length] : calendar.dateFormats[length]._value;
	}
	return ret;
}

function getTimeFormat(calendar, length) {
	var ret = "";
	if (calendar.timeFormats && calendar.timeFormats[length]) {
		ret = typeof(calendar.timeFormats[length]) === "string" ? calendar.timeFormats[length] : calendar.timeFormats[length]._value;
	}
	return ret;
}

/**
 * Return the index of the first occurrence of a character from set
 * in the string that is not inside of quotes.
 * 
 * @param string
 * @param set
 * @returns {Number} the index of the first character that matches, or -1
 * if no characters match
 */
function scanForChars(string, set) {
	var i = 0;
	var skipMode = false;
	while (i < string.length) {
		if (string.charAt(i) === "'") {
			skipMode = !skipMode;
		} else if (!skipMode) {
			if (set.indexOf(string.charAt(i)) > -1) {
				return i;
			}
		}
		i++;
	}
	return -1;
}

/**
 * Return the index of one past the last occurrence of a character from set
 * in the string that is not inside of quotes. 
 * 
 * @param string
 * @param set
 * @returns {Number} the index of the first character that matches, or -1
 * if no characters match
 */
function scanForLastChars(string, set) {
	var i = string.length - 1;
	var skipMode = false;
	while (i < string.length) {
		if (string.charAt(i) === "'") {
			skipMode = !skipMode;
		} else if (!skipMode) {
			if (set.indexOf(string.charAt(i)) > -1) {
				return i+1;
			}
		}
		i--;
	}
	return -1;
}

module.exports = {
	loadFile: loadFile,
    getFormatGroup: getFormatGroup,

    walkLocaleDir: function (formats, filename, root, dir) {
    	var results = [];
    	var list = fs.readdirSync(path.join(root, dir));
    	var localeSpec = dir.replace(/\//g, '-');
    	var locale = dir ? new Locale(localeSpec) : undefined;
    	
    	list.forEach(function (file) {
    		var sourcePathRelative = path.join(dir, file);
    		var sourcePath = path.join(root, sourcePathRelative);
    		var stat = fs.statSync(sourcePath);
    		if (stat && stat.isDirectory()) {
    			module.exports.walkLocaleDir(formats, filename, root, sourcePathRelative);
    		} else {
    			var obj;
    			if (file.match(filename)) {
    				try {
    					obj = loadFile(sourcePath);
    					if (obj) {
    						util.print("reading " + sourcePath + " ...\n");
    						
    						addDateFormat(formats, locale, obj);
    					}
    				} catch (err) {
    					util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
    					util.print(err + "\n");
    					process.exit(2);
    				}
    			}
    		}
    	});
    
    	return results;
    },

    mergeFormats: function(formats, group, localeComponents) {
    	if (localeComponents.length) {
    		var parent = getFormatGroup(formats, localeComponents.slice(0, -1)); 
    		group.data = merge(parent.data || {}, group.data || {});
    	}
    	
    	for (var comp in group) {
    		if (comp && comp !== "data") {
    			module.exports.mergeFormats(formats, group[comp], localeComponents.concat([comp]));
    		}
    	}
    },

    createDateFormats: function (cldrData) {
    	var formats = {},
    		cldrCalendar,
    		calendar;
    	
    	for (var calendarName in cldrData) {
    		cldrCalendar = cldrData[calendarName];
        	calendar = formats[calendarName] = {};
        	
        	var lengths = ["full", "long", "medium", "short"];
        	
        	var order = cldrCalendar.dateTimeFormats["full"];
        	if (order === cldrCalendar.dateTimeFormats["long"] &&
        		order === cldrCalendar.dateTimeFormats["medium"] &&
        		order === cldrCalendar.dateTimeFormats["short"]) {
        		calendar.order = convertOrderFormat(order);
        	} else {
        		calendar.order = {
        			"full": convertOrderFormat(order),
        			"long": convertOrderFormat(cldrCalendar.dateTimeFormats["long"]),
        			"medium": convertOrderFormat(cldrCalendar.dateTimeFormats["medium"]),
        			"short": convertOrderFormat(cldrCalendar.dateTimeFormats["short"])
        		};
        	}
        	
        	// glean the lengths of the various parts
        	var cldrFormats = {},
        		d = {},
        		m = {},
        		y = {};
        	
        	for (i = 0; i < lengths.length; i++) {
        		var len = lengths[i];

        		cldrFormats[len] = getDateFormat(cldrCalendar, len);
        		
        		d[len] = cldrFormats[len].replace(/[^d]/g, "");
        		m[len] = cldrFormats[len].replace(/[^M]/g, "");
        		y[len] = cldrFormats[len].replace(/[^y]/g, ""); 
        	};

        	calendar.date = {
        		"dmwy": {},
        		"dmy": {},
        		"dmw": {},
        		"dm": {},
        		"my": {},
        		"dw": {},
        		"w": {},
        		"d": {},
        		"m": {},
        		"y": {}
        	};

        	// Determine whether or not this locale distinguishes between stand-alone month or day-of-week 
        	// names and in-format month or day-of-week names. The stand-alone months are typically used
        	// when combined with the date. eg. The in-format format for "5th of November" would have 
        	// "November" written in the genitive case, where as "November" at the top of a calendar would
        	// be written in in the nominative case.
        	
        	var monthNamesFormat = cldrCalendar.months.format.wide,
        		monthNamesStandAlone = cldrCalendar.months["stand-alone"].wide,
        		usesStandAlone = false;

        	for (var month in monthNamesFormat) {
        		if (	month && 
        				monthNamesFormat[month] && 
        				monthNamesStandAlone[month] && 
        				monthNamesFormat[month] !== monthNamesStandAlone[month]) {
        			usesStandAlone = true;
        			calendar.date.l = {};
        			calendar.date.e = {};
        			break;
        		} 
        	}

        	var w;
        	
        	i = scanForChars(cldrFormats["full"], "Ec");
        	if (i > -1 && cldrFormats["full"].charAt(i) === "c") {
            	w = {
            		"full": "cccc",
            		"long": "ccc",
            		"medium": "cc",
            		"short": "c"
            	};
        	} else { 
            	w = {
            		"full": "EEEE",
            		"long": "EEE",
            		"medium": "EE",
            		"short": "E"
            	};
    		}

        	// First attempt to find the "w" template:
        	// Lengthen all components of the long to the full size, because in CLDR, the "long" format is "dmy", and then
        	// find that in the full template to figure out which parts are the "w" parts and which are the "dmy" parts
        	var tmp,
        		wTemplate = "E {date}";
        	var longFormat = cldrFormats["long"];
        	var longPlus = longFormat;
        	if (d["full"] !== d["long"]) {
        		longPlus = longPlus.replace(d["long"], d["full"]);
        	}
        	if (m["full"] !== m["long"]) {
        		longPlus = longPlus.replace(m["long"], m["full"]);
        	}
        	if (y["full"] !== y["long"]) {
        		longPlus = longPlus.replace(y["long"], y["full"]);
        	}
        	util.print("Search for '" + longPlus + "' in '" + cldrFormats["full"] + "'\n");
        	i = cldrFormats["full"].indexOf(longPlus);
        	if (i > -1) {
            	tmp = cldrFormats["full"].replace(longPlus, "{date}");
            	util.print("tmp is " + tmp + "\n");
        		wTemplate = tmp;
        	} else {
        		// didn't work. Next attempt: try searching for the w components and see if the dmy parts come before
        		// or after it in the format. If it comes before, take after the the first "d", "M", or "y" as the "dmy"
        		// part. If it comes after take everything up to the first "d", "M", or "y" as the "dmy" part.
        		util.print("Not found. Trying positional method\n");
        		
        		// strip out the quoted parts so we don't accidentally match the characters inside the quotes
        		var full = cldrFormats["full"];
        		var min = scanForChars(full, "dMy"),
        			max = scanForLastChars(full, "dMy");
        		
        		if (scanForLastChars(full, "E") < min) {
        			wTemplate = full.substring(0, min) + "{date}";
        			longPlus = full.substring(min);
        		} else if (scanForChars(full, "E") > max) {
        			// scan backwards to find the last dmy char
        			i = full.length-1;
        			var skipMode = false;
        			while (i > -1) {
        				if (full.charAt(i) === "'") {
        					skipMode = !skipMode;
        				} else if (!skipMode) {
        					var c = full.charAt(i); 
        					if (c === 'd' || c === 'M' || c === 'y') {
        						break;
        					}
        				}
        				i--;
        			}
        			wTemplate = "{date}" + full.substring(i+1);
        			longPlus = full.substring(0, i);
        		} else {
        			// the w is in the middle of the dmy... not sure what to do about that!
        			util.print("failed. Using fallback.\n");
        		}
        	}
        	util.print("wTemplate is " + wTemplate + "\n");
            
        	calendar.date.dmwy["f"] = correctedYear(cldrFormats["full"]);
        	calendar.date.dmy["f"] = correctedYear(longPlus);
        	
        	for (i = 1; i < lengths.length; i++) {
        		var len = lengths[i];
        		var lenAbbr = len.charAt(0);
        		tmp = wTemplate.replace(/\{date\}/, cldrFormats[len]);
        		tmp = tmp.replace(/[Ec]+/, w[len]);
        		tmp = correctedYear(tmp);
        		 
        		calendar.date.dmwy[lenAbbr] = tmp;
        		calendar.date.dmy[lenAbbr] = correctedYear(cldrFormats[len]);
        	}
        	
        	var orders = {};
        	
        	for (i = 0; i < lengths.length; i++) {
        		var len = lengths[i];
        		var lenAbbr = len.charAt(0);
        		calendar.date.w[lenAbbr] = w[len];
        		calendar.date.d[lenAbbr] = d[len];
        		calendar.date.m[lenAbbr] = m[len];
        		calendar.date.y[lenAbbr] = correctedYear(y[len]);
        		
        		orders[len] = dateOrder(cldrFormats[len]);
        		
        		var dmy = calendar.date.dmy[lenAbbr];
        		
        		// generate the "dm" and the "my" formats by stripping off the appropriate part of
        		// the long format
        		switch (orders[len]) {
            		case "dmy":
            			util.print("Length " + len + " order dmy\n");
            			calendar.date.my[lenAbbr] = dmy.substring(scanForChars(dmy, "M"));
            			calendar.date.dm[lenAbbr] = dmy.substring(0, scanForLastChars(dmy, "M"));
            			break;
            		case "mdy":
            			util.print("Length " + len + " order mdy\n");
            			calendar.date.my[lenAbbr] = dmy.substring(0, scanForLastChars(dmy, "M")) + 
            				dmy.substring(scanForLastChars(dmy, "d"));
            			calendar.date.dm[lenAbbr] = dmy.substring(0, scanForLastChars(dmy, "d"));
            			break;
            		case "ymd":
            			util.print("Length " + len + " order ymd\n");
            			calendar.date.dm[lenAbbr] = dmy.substring(scanForChars(dmy, "M"));
            			calendar.date.my[lenAbbr] = dmy.substring(0, scanForChars(dmy, "d"));
            			break;

            		case "ydm":
            			util.print("Length " + len + " order ydm\n");
            			calendar.date.dm[lenAbbr] = dmy.substring(scanForChars(dmy, "d"));
            			calendar.date.my[lenAbbr] = dmy.substring(0, scanForChars(dmy, "d")) +
            				dmy.substring(scanForChars(dmy, "M"));
            			break;
        		}
        		
        		if (usesStandAlone) {
        			calendar.date.my[lenAbbr] = calendar.date.my[lenAbbr].replace(/MMMM/, "LLLL").replace(/MMM/, "LLL");
        			calendar.date.l[lenAbbr] = calendar.date.m[lenAbbr].replace(/MMMM/, "LLLL").replace(/MMM/, "LLL");
        			
        			calendar.date.e[lenAbbr] = calendar.date.w[lenAbbr].replace(/E/g, "c");
        		}
        		
    			tmp = wTemplate.replace(/\{date\}/, calendar.date.dm[lenAbbr]);
        		tmp = tmp.replace(/[Ec]+/, w[len]);
        		calendar.date.dmw[lenAbbr] = tmp;
        		
        		var dmw = calendar.date.dmw[lenAbbr];
        		
        		switch (dateOrder2(dmw)) {
            		case "dmw":
            			util.print("Length " + len + " dw order dmw\n");
            			calendar.date.dw[lenAbbr] = dmw.substring(0, scanForChars(dmw, "M")) +
            				dmw.substring(scanForChars(dmw, "Ec"));
            			break;
            		case "wdm":
            			util.print("Length " + len + " dw order wdm\n");
            			calendar.date.dw[lenAbbr] = dmw.substring(0, scanForLastChars(dmw, "d"));
            			break;
            		case "mdw":
            			util.print("Length " + len + " dw order mdw\n");
            			calendar.date.dw[lenAbbr] = dmw.substring(scanForChars(dmw, "d"));
            			break;
            		case "wmd":
            			util.print("Length " + len + " dw order wmd\n");
            			calendar.date.dw[lenAbbr] = dmw.substring(0, scanForChars(dmw, "M")) +
            				dmw.substring(scanForChars(dmw, "d"));
            			break;
        		}
        	}
        	
        	calendar.time = {
        		"12": {},
        		"24": {}
        	};
        	
        	var available = cldrCalendar.dateTimeFormats.availableFormats;

        	if (available["Hms"]) {
        		calendar.time["24"]["hms"] = calendar.time["24"]["ahms"] = available["Hms"];
        	}
        	
        	if (available["Hm"]) {
        		calendar.time["24"]["hm"] = calendar.time["24"]["ahm"] = available["Hm"];
        		calendar.time["24"]["h"] = calendar.time["24"]["ah"] = available["Hm"].replace(/[^H]/g, "");
        	}

        	if (available["ms"]) {
        		calendar.time["24"]["ms"] = calendar.time["12"]["ms"] = available["ms"];
        		calendar.time["24"]["m"] = calendar.time["12"]["m"] = available["ms"].replace(/[^m]/g, "");
        		calendar.time["24"]["s"] = calendar.time["12"]["s"] = available["ms"].replace(/[^s]/g, "");
        	}
        	
        	if (available["hms"]) {
        		calendar.time["12"]["ahms"] = calendar.time["12"]["hms"] = available["hms"];
        	}

        	if (available["hm"]) {
        		calendar.time["12"]["ahm"] = calendar.time["12"]["hm"] = available["hm"];
        	}
        	
        	if (available["h"]) {
        		calendar.time["12"]["ah"] = available["h"];
        		calendar.time["12"]["h"] = available["h"].replace(/[^h]/g, "");
        	}
        	
        	if (cldrCalendar.timeFormats && cldrCalendar.timeFormats["long"]) {
        		var longtime = cldrCalendar.timeFormats["long"];
        		if (longtime.indexOf("H") > -1) {
        			util.print("24-hour locale\n");
        			calendar.time["24"]["ahmsz"] = calendar.time["24"]["hmsz"] = longtime.replace(/z+/, "z");
        			calendar.time["12"]["ahmsz"] = calendar.time["24"]["ahmsz"].replace(calendar.time["24"]["ahms"], calendar.time["12"]["ahms"]); 
        		} else {
        			util.print("12-hour locale\n");
        			calendar.time["12"]["ahmsz"] = longtime.replace(/z+/, "z");
        			calendar.time["24"]["ahmsz"] = calendar.time["12"]["ahmsz"].replace(calendar.time["12"]["ahms"], calendar.time["24"]["ahms"]);
        			calendar.time["24"]["hmsz"] = calendar.time["24"]["ahmsz"].replace(/ a /, " ").replace(/a/, "");
        		}
        	}
        	
			calendar.time["12"]["hmsz"] = calendar.time["12"]["ahmsz"].replace(/ a /, " ").replace(/a/, "");

			calendar.time["12"]["ahmz"] = calendar.time["12"]["ahmsz"].replace(calendar.time["12"]["ahms"], calendar.time["12"]["ahm"]);
        	calendar.time["12"]["hmz"] = calendar.time["12"]["ahmz"].replace(/ a /, " ").replace(/a/, "");

        	calendar.time["24"]["ahmz"] = calendar.time["24"]["ahmsz"].replace(calendar.time["24"]["ahms"], calendar.time["24"]["ahm"]);
        	calendar.time["24"]["hmz"] = calendar.time["24"]["ahmz"].replace(/ a /, " ").replace(/a/, "");
    	}
    	return formats;
    },
    
    createSystemResources: function (cldrData) {
    	var formats = {},
    		cldrCalendar,
    		calendar;
    	
    	for (var calendarName in cldrData) {
    		cldrCalendar = cldrData[calendarName];
        	calendar = formats[calendarName] = {};
        	
        	var lengths = ["full", "long", "medium", "short"];
        	
        	// glean the lengths of the various parts
        	var cldrFormats = {},
        		h = {},
        		m = {},
        		y = {};
        	
        	// Determine whether or not this locale distinguishes between stand-alone month or day-of-week 
        	// names and in-format month or day-of-week names. The stand-alone months are typically used
        	// when combined with the date. eg. The in-format format for "5th of November" would have 
        	// "November" written in the genitive case, where as "November" at the top of a calendar would
        	// be written in in the nominative case.
        	
        	var monthNamesFormat = cldrCalendar.months.format.wide,
        		monthNamesStandAlone = cldrCalendar.months["stand-alone"].wide,
        		usesStandAlone = false;

        	for (var month in monthNamesFormat) {
        		if (	month && 
        				monthNamesFormat[month] && 
        				monthNamesStandAlone[month] && 
        				monthNamesFormat[month] !== monthNamesStandAlone[month]) {
        			usesStandAlone = true;
        			break;
        		} 
        	}
    	}
    	
    	return formats;
    },
    
    writeFormats: function(outputDir, outfile, group, localeComponents) {
    	var dir = path.join.apply(undefined, [outputDir].concat(localeComponents));
    	var filename = path.join(dir, outfile);
    	
    	util.print(filename + " ...\n");
    	makeDirs(dir);
    	fs.writeFileSync(filename, JSON.stringify(group.data, undefined, 4), 'utf8');
    	
    	for (var comp in group) {
    		if (comp && comp !== "data") {
    			module.exports.writeFormats(outputDir, outfile, group[comp], localeComponents.concat([comp]));
    		}
    	}
    }    
};