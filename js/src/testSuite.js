/*
 * testSuite.js - top level test suite
 * 
 * Copyright © 2013, JEDLSoft
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

var util = require("util");
var path = require("path");

var JsUnit = require("./testcli/runner.js");

var runner = new JsUnit.TestRunner("../..");

var suiteDefinitions = {
	"core": {
        "util": {
			suite: "util/test/testSuite.js"
		},
        ".": "test/testSuite.js"
	},
	"standard": {
        "util": {
			suite: "util/test/testSuite.js"
		},
        ".": {
			suite: "test/testSuite.js"
		},
	    "calendar": {
			suite: "calendar/test/testSuite.js",
			includes: ["ilib-calendar"]
		},
	    "date1": {
			suite: "date/test/testSuite.js",
			includes: ["ilib-calendar","ilib-date"]
		},
	    "date2": {
			suite: "date/test/testSuite2.js",
			includes: ["ilib-calendar","ilib-date"]
		},
	    "date3": {
			suite: "date/test/testSuite3.js",
			includes: ["ilib-calendar","ilib-date"]
		},
	    "daterange1": {
			suite: "daterange/test/testSuite.js",
			includes: ["ilib-calendar","ilib-date","ilib-daterange"]
		},
	    "daterange2": {
			suite: "daterange/test/testSuite2.js",
			includes: ["ilib-calendar","ilib-date","ilib-daterange"]
		},
	    "daterange3": {
			suite: "daterange/test/testSuite3.js",
			includes: ["ilib-calendar","ilib-date","ilib-daterange"]
		},
	    "durfmt": {
			suite: "durfmt/test/testSuite.js",
			includes: ["ilib-calendar","ilib-date","ilib-durfmt"]
		},
	    "number": {
			suite: "number/test/testSuite.js",
			includes: ["ilib-ctype","ilib-number"]
		},
	    "maps": {
			suite: "maps/test/testSuite.js"
		},
	    "ctype": {
	    	suite: "ctype/test/testSuite.js",
			includes: ["ilib-ctype"]
	    }
	},
	"full": {
        "util": {
			suite: "util/test/testSuite.js"
		},
        ".": {
			suite: "test/testSuite.js"
		},
	    "calendar": {
			suite: "calendar/test/testSuite.js",
			includes: ["ilib-calendar"]
		},
	    "date1": {
			suite: "date/test/testSuite.js",
			includes: ["ilib-calendar","ilib-date"]
		},
	    "date2": {
			suite: "date/test/testSuite2.js",
			includes: ["ilib-calendar","ilib-date"]
		},
	    "date3": {
			suite: "date/test/testSuite3.js",
			includes: ["ilib-calendar","ilib-date"]
		},
	    "daterange1": {
			suite: "daterange/test/testSuite.js",
			includes: ["ilib-calendar","ilib-date","ilib-daterange"]
		},
	    "daterange2": {
			suite: "daterange/test/testSuite2.js",
			includes: ["ilib-calendar","ilib-date","ilib-daterange"]
		},
	    "daterange3": {
			suite: "daterange/test/testSuite3.js",
			includes: ["ilib-calendar","ilib-date","ilib-daterange"]
		},
	    "durfmt": {
			suite: "durfmt/test/testSuite.js",
			includes: ["ilib-calendar","ilib-date","ilib-durfmt"]
		},
	    "number": {
			suite: "number/test/testSuite.js",
			includes: ["ilib-ctype","ilib-number"]
		},
	    "maps": {
			suite: "maps/test/testSuite.js"
		},
	    "ctype": {
			suite: "ctype/test/testSuite.js",
			includes: ["ilib-ctype"]
		},
	    "strings-ext": {
			suite: "strings-ext/test/testSuite.js",
			includes: ["ilib-ctype","ilib-strings-ext"]
		},
	    "phone1": {
			suite: "phone/test/testSuite.js",
			includes: ["ilib-phone"]
		},
	    "phone2": {
			suite: "phone/test/testSuite2.js",
			includes: ["ilib-phone"]
		},
	    "phone3": {
			suite: "phone/test/testSuite3.js",
			includes: ["ilib-phone"]
		},
	    "units": {
			suite: "units/test/testSuite.js",
			includes: ["ilib-units"]
		},
	    "name": {
			suite: "name/test/testSuite.js",
			includes: ["ilib-name","ilib-ctype"]
		},
	    "address1": {
			suite: "address/test/testSuite.js",
			includes: ["ilib-address","ilib-ctype"]
		},
	    "address2": {
			suite: "address/test/testSuite2.js",
			includes: ["ilib-address","ilib-ctype"]
		},
	    "address3": {
			suite: "address/test/testSuite3.js",
			includes: ["ilib-address","ilib-ctype"]
		},
	    "collate": {
			suite: "collate/test/testSuite.js",
			includes: ["ilib-ctype","ilib-strings-ext","ilib-number","ilib-collate"]
		}
	}
};

// override the possible node environment to make the tests uniform
process.env.TZ = "";
process.env.LANG = "";
process.env.LC_ALL = "";

var assembly = "dynamic";
var compilation = "uncompiled";
var size = "full";
var suite = suiteDefinitions.full;

if (process.argv.length > 2) {
	if (process.argv.length > 3) {
		if (process.argv.length > 4) {
			size = process.argv[4];
			switch (size) {
				case "core":
				case "standard":
				case "full":
					suite = suiteDefinitions[size];
					break;
				default:
					suite = size;
					if (!suiteDefinitions.full[suite] && suite !== "all") {
						util.print("Suite " + suite + " is unrecognized. Testing all suites by default.\n");
						suite = suiteDefinitions.full;
					} else {
						util.print("Only running test " + size + "\n");
						suite = {};
						suite[size] = suiteDefinitions.full[size];
					}
					break;
			}
		}
		compilation = process.argv[3];
		if (compilation !== "uncompiled" && compilation !== "compiled") {
			util.print("Compilation " + compilation + " is unknown. Using 'compiled' by default.\n");
			compilation = "compiled";
		}
	}
	assembly = process.argv[2];
	if (assembly !== "assembled" && assembly !== "dynamic") {
		util.print("Assembly " + assembly + " is unknown. Using 'dynamic' by default.\n");
		compilation = "dynamic";
	}
}

util.print("Running " + compilation + " " + assembly + " suites: " + JSON.stringify(Object.keys(suite)) + "\n");

var s;
for (s in suite) {
	var ts;
	
	ts = new JsUnit.TestSuite(suite[s].suite);
	// ts.addToContext({ilib: require("./ilib-dyn-ut.js").ilib});
	var inc = "./ilib" + ((assembly === "dynamic") ? "-dyn" : "") + "-ut" + ((compilation === "compiled") ? "-compiled" : "") + ".js";
	ts.include(inc); 
	ts.include("testglue.js");
	for (var i in suite[s].includes) {
		inc = "../output/js/" + suite[s].includes[i] + ((assembly === "dynamic") ? "-dyn" : "") + ((compilation === "compiled") ? "-compiled" : "") + ".js";
		util.print("for test " + s + " I am adding inc " + inc + "\n");
		ts.include(inc);
	}
	
	runner.addSuite(ts);
	// util.print("Adding suite " + suite[s] + " and including ilib file " + inc + "\n");
}

runner.runTests();