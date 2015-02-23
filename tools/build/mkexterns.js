/* 
 * mkexterns.js - ilib tool to create externs files for a library
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
var common = require('../cldr/common');
var path = require('path');

function usage() {
	util.print("Usage: mkexterns.js [-h] [-o ouputfile] js_file [js_file ...]\n" +
		"Extract functions and properties of ilib for use in node externs.js files.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"-o ouptutfile\n" +
		'  name the output file. Default "./externs.js"\n');
	process.exit(1);
}

var outputFileName = "externs.js";
var inputFiles = [];

if (process.argv.length < 3) {
	usage();
}

for (var i = 2; i < process.argv.length; i++) {
	if (process.argv[i].toUpperCase() === "-H") {
		usage();
	} else if (process.argv[i].toUpperCase() === "-O") {
		if (i+1 < process.argv.length) {
			outputFileName = process.argv[i+1];
			i++;
		} else {
			util.print("Error: -o parameter specified without an output file name following it.\n");
			process.exit(2);
		}
	} else {
		inputFiles.push(process.argv[i]);
	}
}

function loadFile(mod, fileName) {
	// return mod.require(fileName);
	return fs.readFileSync(fileName, "utf-8");
	// return eval(fileContents);
}

function getVarName(name, prop) {
	if (!name || name.length < 1 && prop) {
		return prop;
	}
	if (prop.indexOf("/") > -1 || prop.indexOf(".") > -1) {
		return name + '["' + prop + '"]';
	}
	return name + "." + prop;
}

function getExternName(name, prop) {
	if (!name || name.length < 1 && prop) {
		return "var " + getVarName(name, prop);
	}
	return getVarName(name, prop);
}

/*
function checkObject(obj, name) {
	var ret = "";
	if (obj) {
		for (var prop in obj) {
			util.print("Checking " + getVarName(name, prop) + "\n");
			if (obj.hasOwnProperty(prop)) {
				if (typeof(obj[prop]) === 'function') {
					util.print("found function " + getVarName(name, prop) + "\n");
					if (obj[prop].prototype.constructor !== obj[prop]) {
						ret += "/** @constructor * /\n";
					}
					ret += getVarName(name, prop) + " = function() {};\n";
					global[getVarName(name, prop)] = function() {};
				} else if (typeof(obj[prop]) === 'object') {
					if (obj[prop] instanceof Array) {
						util.print("found array " + getVarName(name, prop) + "\n");
						ret += getExternName(name, prop) + " = [];\n";
						global[getVarName(name, prop)] = [];
					} else if (prop !== "exports" && prop !== "module") {
						util.print("found object " + getVarName(name, prop) + "\n");
						ret += getExternName(name, prop) + " = {};\n";
						global[getVarName(name, prop)] = {};
						ret += checkObject(obj[prop], getVarName(name, prop));
					}
				}
			}
		}
	}
	return ret;
}
*/
function checkObject(file) {
	var lines = file.split(/\r?\n/);
	var ret = "";
	var tags = "";
	var prefix = "";
	for (var i = 0; i < lines.length; i++) {
		if (lines[i].match(/@constructor/) || lines[i].match(/@param/) || lines[i].match(/@return/) || lines[i].match(/@interface/)) {
			// util.print("found tag: " + lines[i] + "\n");
			tags += lines[i] + "\n";
		} else if (lines[i].match(/^[a-zA-Z_\$].*= function/)) {
			// util.print("found function " + lines[i] + "\n");
			if (tags.length > 0) {
				ret += "/**\n" + tags + "*/\n";
				tags = "";
			}
			ret += lines[i];
			if (!lines[i].match(/\};$/)) {
				ret += "};";
			}
			ret += "\n";
		} else if (lines[i].match(/^[a-zA-Z_\$].*=/)) {
			tags = "";
			var proto = lines[i].indexOf("prototype");
			if (proto > -1) {
				prefix = lines[i].substring(0, proto + 9) + ".";
				// util.print("found prefix " + prefix + "\n");
			} else if (lines[i].substring(0,3) !== "if ") {
				// util.print("found property " + lines[i] + "\n");
				prefix = lines[i].substring(0, lines[i].indexOf(" ")) + ".";
				if (lines[i].match(/\{/)) {
					ret += lines[i].substring(0, lines[i].indexOf("=")+1);
					ret += " {};";
				} else if (lines[i].match(/\[/)) {
					ret += lines[i].substring(0, lines[i].indexOf("=")+1);
					ret += " [];";
				} else {
					ret += lines[i];
				}
			}
			ret += "\n";
		} else if (lines[i].match(/[a-zA-Z_\$][a-zA-Z_\$0-9]*: function/)) {
			var name = lines[i].replace(/^[ \t]*/, prefix);
			name = name.replace(":", " =");
			// util.print("found prototype function " + name + "\n");
			if (tags.length > 0) {
				ret += "/**\n" + tags + "*/\n";
				tags = "";
			}
			ret += name;
			if (!name.match(/\};$/)) {
				ret += "};";
			}
			ret += "\n";
		} else if (lines[i].match(/^\}/)) {
			prefix = "";
			tags = "";
		}
	}
	return ret;
}

for (var i = 0; i < inputFiles.length; i++) {
	var name = inputFiles[i].charAt(0) === path.sep ? inputFiles[i] : process.cwd() + "/" + inputFiles[i];
	util.print("mkexterns: Processing " + name + "\n");
	
	// var f = fs.readFileSync(inputFiles[i], "utf-8");
	
	// util.print("Current dir is " + process.cwd() + "\n");

	var newmod = loadFile(module, name);
	// util.print("mod is " + JSON.stringify(mod, undefined, 4) + "\n");
	var externs = checkObject(newmod);
	
	util.print("Writing externs to " + outputFileName + "\n");
	fs.writeFileSync(outputFileName, externs, "utf-8");
}