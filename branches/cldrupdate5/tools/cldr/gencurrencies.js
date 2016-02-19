/*
 * gencurrency.js - ilib tool to generate the json data about currency
 *
 * Copyright © 2016, LGE
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
var unifile = require('./unifile.js');
var common = require('./common.js');
var UnicodeFile = unifile.UnicodeFile;
var coelesce = common.coelesce;
var mkdirs = common.makeDirs;
var path = require("path");

function usage() {
	console.log("Usage: gencurrency [-h] CLDR_dir [toDir]\n" +
		"Generate the currency.jf files for each country.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"CLDR_dir\n" +
		"  directory with CLDR represented in json format downloaded from the Unicode site\n" +
		"toDir\n" +
		"  directory to output the currency.jf json files. Default: current dir.\n");
	process.exit(1);
}

function getUsingCurrency(object) {
	var i, curObj, cur, ret = [];
	for (i = 0; i < object.length; i++) {
		for (curObj in object[i]) {
			if(object[i][curObj]._to === undefined && object[i][curObj]._from !== undefined) {
				ret.push(curObj);
			}
		}
	}
	return ret;
}

function getDecimals(currency, fractions) {
	var cur;
	for(cur in fractions) {
		if(cur === currency) {
			return Number(fractions[cur]._digits);
		}
	}
	/*
	in CLDR, default _digits value is 2
	"DEFAULT": {
          "_rounding": "0",
          "_digits": "2"
    }
    */
	return 2;
}

function getNameAndSign(currency, currencies) {
	var cur, arr = [];
	for(cur in currencies) {
		if(cur === currency) {
			if(currencies[cur]['symbol-alt-narrow'] === undefined) {
				arr['sign'] = currencies[cur]['symbol'];
			} else {
				arr['sign'] = currencies[cur]['symbol-alt-narrow'];
			}
			arr['name'] = currencies[cur].displayName;
			return arr;
		}
	}
	return undefined;
}

var cldrDir, currencyDataFileName;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 3) {
	console.error('Error: not enough arguments');
	usage();
}

cldrDir = process.argv[2];

if (process.argv.length > 3) {
	toDir = process.argv[3];
}

console.log("gencurrency - generate currency information files.\n" + "Copyright (c) 2016 LGE\n");
console.log("CLDR dir: " + cldrDir + "\n");
console.log("output dir: " + toDir + "\n");

currencyDataFileName = path.join(cldrDir, "supplemental/currencyData.json");
currencyDisplayFileName = path.join(cldrDir, "main/en-US/currencies.json");

if (!fs.existsSync(currencyDataFileName)) {
	console.log("Could not access CLDR supplemental data file " + currencyDataFileName);
	usage();
}
if (!fs.existsSync(currencyDisplayFileName)) {
	console.log("Could not access CLDR region data file " + currencyDisplayFileName);
	usage();
}
if (!fs.existsSync(toDir)) {
	console.log("Could not access target directory " + toDir);
	usage();
}

var currencyDataString = fs.readFileSync(currencyDataFileName, "utf-8");
var currencyDisplayString = fs.readFileSync(currencyDisplayFileName, "utf-8");
var supplementalData = JSON.parse(currencyDataString);
var mainData = JSON.parse(currencyDisplayString);
var currencyData = supplementalData.supplemental.currencyData;
var currencyDispData = mainData.main['en-US'].numbers.currencies;
var currencyObj = {}; // for saving currency.jf in each directory
var currencyInfoObj = {}; // currency information object for currency.json
var filename, fnJf, nameAndSign = [], cur = [];

for (var region in currencyData.region) {
	if (region && currencyData.region[region]) {
		if (region == "150") { // 150 code: europe
			continue;
		} else {
			filename = path.join(toDir, 'und', region);
		}
		if (!fs.existsSync(filename)) {
			mkdirs(filename);
		}

		cur = getUsingCurrency(currencyData.region[region]);

		if(cur.length === 0) {
			continue;
		}

		for (var i = 0; i < cur.length; i++) {
			nameAndSign = getNameAndSign(cur[i], currencyDispData);
			currencyObj.currency = cur[i];
			currencyInfoObj[cur[i]] = {};
			console.log(region + '/' + cur[i]);
			currencyInfoObj[cur[i]].name = nameAndSign['name'];
			currencyInfoObj[cur[i]].decimals = getDecimals(cur[i], currencyData.fractions);
			currencyInfoObj[cur[i]].sign = nameAndSign['sign'];
			fn = path.join(filename, "currency.jf");
			fs.writeFileSync(fn, JSON.stringify(currencyObj, true, 4), "utf-8");
		}
	}
}

var fnJson = path.join(toDir, "currency.json");
fs.writeFileSync(fnJson, JSON.stringify(currencyInfoObj, true, 4), "utf-8");