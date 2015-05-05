/*
 * ilib-rhino.js - glue code for rhino apps to load local ilib code and data 
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

var module = {
	exports: {},
	filename:null
};

var console = {
	log: function() {
		print.apply(undefined, arguments);
	}
};

console.log("root environment is " + JSON.stringify(environment, undefined, 4));

var requireClass = function() {
	this.cache = {};
	this.loading = {};
	this.updateRequire = /require\(("[^/][^"+]*")\)/g;
	
	this.root = environment["user.dir"];
	if (this.root[this.root.length-1] === '/') {
		this.root = this.normalize(this.root.substring(0,this.root.length-1));
	}
};

requireClass.prototype.dirname = function(pathname) {
	pathname = pathname.replace("\\", "/");
	var i = pathname.lastIndexOf("/");
	return i !== -1 ? pathname.substring(0,i) : pathname;
};

requireClass.prototype.normalize = function(pathname) {
	if (pathname) {
		var previousLen;
		pathname = pathname.replace(/\\/g, "/");
		do {
			previousLen = pathname.length;
			pathname = pathname.replace(/\/\//g, "/");
			pathname = pathname.replace(/\/[^/]*[^\./]\/\.\./g, "/.");
			pathname = pathname.replace(/\/\.\//g, "/");
			pathname = pathname.replace(/^\.\//, "");
			pathname = pathname.replace(/\/\.$/, "/");
			if (pathname.length > 1) pathname = pathname.replace(/\/$/, "");
			if (pathname.length === 0) pathname = '.';
		} while (pathname.length < previousLen);
	}
	return pathname;
};
	
requireClass.prototype.require = function(parent, pathname) {
	//console.log("------------------------\nrequire: called with " + pathname);

	//console.log("this.root is " + this.root + " and pathname before was " + pathname);
	//console.log("require: module.filename is " + module.filename);
	//console.log("require: parent is " + parent);
	
	var base = parent || (module.filename && this.dirname(module.filename)) || this.root;

	//console.log("require: base is " + base);
	
	if (pathname.charAt(0) !== '/') {
		pathname = base + "/" + pathname;
	}
	
	pathname = this.normalize(pathname);
	//console.log("require: pathname after is " + pathname);
	
	if (this.cache[pathname]) {
		//console.log("require: cache hit");
		return this.cache[pathname];
	}
	
	// don't try to load things that are currently in the process of loading
	if (this.loading[pathname]) {
		//console.log("require: already loading...");
		return {};
	}
	//console.log("require: loading the file");
	
	// communicate the current dir to the included js file
	var tmp = module.filename;
	module.filename = pathname;
	this.loading[pathname] = true;
	module.require = requireClass.prototype.require.bind(r, this.dirname(pathname));

	try {
		load(pathname);
		
		module.filename = tmp;
		this.loading[pathname] = undefined;
		
		module.exports.module = {
			filename: pathname,
			require: requireClass.prototype.require.bind(r, this.dirname(pathname))
		};
		this.cache[pathname] = module.exports;
		return module.exports;
	} catch (e) {
		console.log("Failed loading " + pathname);
		console.log("exception was " + e);
		return undefined;
	}
};

var r = new requireClass();
var require = requireClass.prototype.require.bind(r, undefined);

var RhinoLoader = require("../lib/RhinoLoader.js");
var ilib = require("../lib/ilib.js");
ilib._dyncode = true; // indicate that we are using dynamically loaded code
ilib._dyndata = true;

ilib.setLoaderCallback(new RhinoLoader());