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

function loadFile(fileName) {
	var fileContents = fs.readFileSync(fileName, "utf-8");
	return eval(fileContents);
}

function getName(name, prop) {
	if (!name || name.length < 1) {
		return prop;
	}
	return name + "." + prop;
}

function checkObject(obj, name) {
	for (var prop in obj) {
		//util.print("Checking " + getName(name, prop) + "\n");
		if (obj.hasOwnProperty(prop)) {
			if (typeof(obj[prop]) === 'function') {
				util.print(getName(name, prop) + " = function() {};\n");
				global[getName(name, prop)] = function() {};
			} else if (typeof(obj[prop]) === 'object') {
				if (obj[prop] instanceof Array) {
					util.print(getName(name, prop) + " = [];\n");
					global[getName(name, prop)] = [];
				} else {
					util.print(getName(name, prop) + " = {};\n");
					global[getName(name, prop)] = {};
					checkObject(obj[prop], getName(name, prop));
				}
			}
		}
	}
}

for (var i = 0; i < inputFiles.length; i++) {
	util.print("Processing ./" + inputFiles[i] + "\n");
	
	//var f = fs.readFileSync(inputFiles[i], "utf-8");
	
	util.print("Current dir is " + process.cwd() + "\n");
	
	var mod = loadFile(process.cwd() + "/" + inputFiles[i]);
	checkObject(mod, "");
}