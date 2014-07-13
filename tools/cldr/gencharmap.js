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
var path = require('path');
var UnicodeFile = unifile.UnicodeFile;
var charIterator = common.charIterator;
var isMember = common.isMember;

function usage() {
	util.print("Usage: gencharmap [-h] path_to_UCD [toDir]\n" +
			"Generate the character type data.\n\n" +
			"-h or --help\n" +
			"  this help\n" +
			"path_to_UCDE\n" +
			"  path to the Unicode Character Data directory containing the MAPPINGS dir\n" +
			"toDir\n" +
			"  directory to output the normalization json files. Default: <currentdir>/charmaps.\n");
	process.exit(1);
}

var ucdDir;
var toDir = ".";

process.argv.forEach(function (val, index, array) {
	if (val === "-h" || val === "--help") {
		usage();
	}
});

if (process.argv.length < 3) {
	util.error('Error: not enough arguments');
	usage();
}

ucdDir = path.join(process.argv[2], "MAPPINGS");
if (process.argv.length > 3) {
	toDir = process.argv[3];
}

toDir = path.join(toDir, "charmaps");

util.print("gencharmap - generate charmap mapping data.\n" +
		"Copyright (c) 2014 JEDLSoft\n");

if (!fs.existsSync(ucdDir)) {
	util.error("Could not access dir " + ucdDir);
	usage();
}

if (!fs.existsSync(toDir)) {
	if (!common.makeDirs(toDir)) {
		util.error("Could not access target directory " + toDir);
		usage();
	}
}

var map = {};

function walk(dir) {
	var list = fs.readdirSync(dir);
	list.forEach(function (file) {
		var fullpath = dir + '/' + file;
		var stat = fs.statSync(fullpath);
		if (stat && stat.isDirectory()) {
			walk(fullpath);
		} else {
			if (fullpath.match(/[a-z]+\.txt$/)) {
				try {
					var toFileName = path.join(toDir, path.basename(file, ".txt") + ".json");
					
					var map = {
						to: {},
						from: {}
					};
					var uf = new UnicodeFile({
						path: fullpath,
						splitChar: /\s+/
					});
					var len = uf.length();
					var native, unicode;
						
					for (var i = 0; i < len; i++ ) {
						row = uf.get(i);

						util.print("row is " + JSON.stringify(row) + "\n");
						native = parseInt(row[0], 16);
						unicode = parseInt(row[1], 16);
						map.to[native] = unicode;
						map.from[unicode] = native;
					}
					
					if (fs.writeFileSync(toFileName, JSON.stringify(map, undefined, 4), "utf-8") < 0) {
						util.print("Could not write to output file " + toFileName + "\n");
					}
				} catch (err) {
					util.print("File " + fullpath + " is not readable or does not contain valid unicode mapping data.\n");
					util.print(err + "\n");
				}
			}
		}
	});
}

walk(ucdDir);
