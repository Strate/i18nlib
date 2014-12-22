/*
 * testSuiteDates.js - test suite for the date tests
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
	var suite = new cli.TestSuite("collate/test/" + path);
	suite.include("test/testUtils.js");
	return suite;
};

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
		"testcollation_de.js",
		"testcollation_es.js",
		"testcollation_et.js",
		"testcollation.js",
		"testcollation_lt.js",
		"testcollation_lv.js",
		"testcollation_general.js",
		"testcollation_ko.js",
		"testcollation_fo.js",
		"testcollation_da.js",
		"testcollation_sv.js",
		"testcollation_nb.js",
		"testcollation_no.js",
		"testcollation_nn.js",
		"testcollation_fi.js"
	];

    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}

