/*
 * ilib-stubs-map.js - define a fake require() function so that dynamic
 * code can run properly in an assembled environment
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

// !dependencies: false


var oldRequire = require;
var require = function(pathname) {
	// console.log("new require: looking up pathname " + pathname);
	var i = pathname.lastIndexOf('/');
	var file = i > -1 ? pathname.substring(i+1) : pathname;
	if (file.substring(file.length-3) === ".js") {
    	var moduleName = file.substring(0, file.length-3); // strip the ".js" part
    	// console.log("new require: module name is " + moduleName);
    	// console.log("new require: module is: ");
    	var module = ilib._global(moduleName) || this[moduleName]; 
    	// console.dir(module);
    	if (module) return module;
	}
	return oldRequire && oldRequire(pathname);
};
