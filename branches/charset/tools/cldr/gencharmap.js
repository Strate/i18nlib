/*
 * genccharmap.js - ilib tool to generate the charset mappings from the Unicode 
 * data files
 * 
 * Copyright © 2014, JEDLSoft
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
var CharmapFile = require('./charmapfile.js').CharmapFile;
var path = require('path');
var charIterator = common.charIterator;
var isMember = common.isMember;

function usage() {
	util.print("Usage: gencharmap [-h] path_to_charmaps charsetaliases.json [toDir]\n" +
			"Generate the character type data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"path_to_charmaps\n" +
			"  path to the charmap directory containing the charset mappings\n" +
			"charsealiases.json\n" +
			"  path to json file with the mappings to standard IANA charset names\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: <currentdir>/charmaps.\n");
	process.exit(1);
}

var charmapDir;
var toDir = ".";
var aliasesFile;

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 3) {
	util.error('Error: not enough arguments');
	usage();
}

charmapDir = process.argv[2];

aliasesFile = process.argv[3];

if (process.argv.length > 4) {
	toDir = process.argv[4];
}

toDir = path.join(toDir, "charmaps");

util.print("gencharmap - generate charmap mapping data.\n" +
		"Copyright (c) 2014 JEDLSoft\n");

if (!fs.existsSync(charmapDir)) {
	util.error("Could not access dir " + charmapDir);
	usage();
}

if (!fs.existsSync(aliasesFile)) {
	util.error("Could not access aliases file " + aliasesFile);
	usage();
}

if (!fs.existsSync(toDir)) {
	if (!common.makeDirs(toDir)) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
}

var aliasesData = fs.readFileSync(aliasesFile);
var aliases = JSON.parse(aliasesData);

var map = {};

function walk(dir) {
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		var fullpath = dir + '/' + file;
		// util.print("fullpath is " + fullpath + "\n");
		var stat = fs.statSync(fullpath);
		if (stat && stat.isDirectory()) {
			walk(fullpath);
		} else {
			//if (fullpath.match(/.gz$/)) {
				// util.print("found charmap file " + fullpath + "\n");
				try {
					var fileName = aliases[file.replace(/[-_:\+\.\(\)]/g, '').toUpperCase()] || file;
					var toFileName = path.join(toDir, fileName + ".json");
					// util.print("Writing results to file " + toFileName + "\n");
					var map = {
						to: {},
						from: {}
					};
					var uf = new CharmapFile({path: fullpath});
					var len = uf.length();
					var native, unicode;
					var uniRE = /^<U([0-9a-fA-F]+)>/;
					var mapRE = /^\/x/;
						
					// util.print("len is " + len + "\n");
					for (var i = 0; i < len; i++) {
						row = uf.get(i);

						// util.print("row is " + JSON.stringify(row) + "\n");
						var uniResult = uniRE.exec(row[0]);
						if (uniResult !== null && mapRE.test(row[1])) {
							nativeByteStrings = row[1].split(/\/x/g);
							native = []; 
							for (var j = 0; j < nativeByteStrings.length; j++) {
								if (nativeByteStrings[j].length > 0) {
									//native <<= 8;
									//native = native | parseInt(nativeByteStrings[j], 16);
									native.push(parseInt(nativeByteStrings[j], 16));
								}
							}
							unicode = parseInt(uniResult[1], 16);
							if (unicode < 32) {
								unicode = String.fromCharCode(0x5C) + "u" + row[1].substring(2);
							} else {
								unicode = String.fromCharCode(unicode);	
							}
							if (native.length > 0 && unicode) {
								var trienode = map.to;
								for (var j = 0; j < native.length-1; j++) {
									if (typeof(trienode[native[j]]) === 'undefined') {
										trienode[native[j]] = {};
									}
									
									trienode = trienode[native[j]];
								}
								trienode[native[j]] = unicode;
								map.from[unicode] = native;	
							} else {
								util.print("skipping bad mapping from " + row[0] + " to " + row[1] + "\n");
							}
						} else {
							util.print("row " + row + " did not pass the test\n");
							util.print("uniRE.exec(row[0]) was " + JSON.stringify(uniRE.exec(row[0])) + "\n");
							util.print("mapRE.test(row[1]) was " + mapRE.test(row[1]) + "\n");
						}
					}
					
					if (!common.isEmpty(map.to)) {
						if (fs.writeFileSync(toFileName, JSON.stringify(map, undefined, 4), "utf-8") < 0) {
							util.print("Could not write to output file " + toFileName + "\n");
						}
					}
				} catch (err) {
					util.print("File " + fullpath + " is not readable or does not contain valid unicode mapping data.\n");
					util.print(err + "\n");
				}
			//}
		}
	});
}

walk(charmapDir);
