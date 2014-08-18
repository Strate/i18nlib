


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
	var suite = new cli.TestSuite("phone/test/" + path);
	return suite;
}

function suite() {
    var s = new cli.TestSuite();
    
    var suites = [
        "numplan.js",
        "phoneloc.js",
        "phonenum.js",
        "normalize.js",
  		"phonenum_AU.js",
		"phonenum_BE.js",
		"phonenum_CN.js",
		"phonenum_DE.js",
		"phonenum_ES.js",
		"phonenum_FR.js",
		"phonenum_GB.js",
		"phonenum_HK.js",
		"phonenum_IE.js",
		"phonenum_IN.js",
		"phonenum_IT.js",
		// "phonenum_KR.js",
		"phonenum_LU.js",
		"phonenum_MX.js",
		"phonenum_NL.js",
		"phonenum_NZ.js",
		"phonenum_SG.js",
		"phonenum_US.js",
		"phonefmt_AU.js",
		"phonefmt_BE.js",
		"phonefmt_DE.js",
		"phonefmt_ES.js",
		"phonefmt_FR.js",
		"phonefmt_GB.js",
		"phonefmt_HK.js",
		"phonefmt_IE.js",
		"phonefmt_IN.js",
		"phonefmt_IT.js",
		// "phonefmt_KR.js",
		"phonefmt_LU.js",
		"phonefmt_MX.js",
		"phonefmt_NL.js",
		"phonefmt_NZ.js",
		"phonefmt_SG.js",
		"phonefmt_US.js",
		"phonefmt_US.js"
		/*"phonefmt.js",
		"normalize.js",
		"phonefmt.js",
		"imsi.js",
		"phoneloc.js",
		"phone.js",
		"states.js",
		"utils.js"
		*/
    ];
    
    suites.forEach(function (path) {
    	s.addSuite(newSuite(path));
    });
    
    return s;
}
