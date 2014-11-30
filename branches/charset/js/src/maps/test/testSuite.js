/*
 * testSuite.js - test suite for this directory
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

var cli = require('../testcli/runner.js');

function newSuite(path, include) {
	return new cli.TestSuite("maps/test/" + path);
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
	    "testtoupper.js",
	    "testtolower.js",
	    "testcharmap.js",
	    "testcm_ISO-8859-1.js",
	    "testcm_UTF-8.js",
	    "testcm_UTF-16.js",
	    "testcm_JP.js",
	    //"testcm_KR.js",
	    //"testcm_SA.js",
	    //"testcm_TH.js",
	    //"testcm_RU.js",
	    //"testcm_GE.js",
	    //"testcm_GR.js",
	    //"testcm_IL.js",
	    //"testcm_IN.js",
	    "testcm_CN.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

