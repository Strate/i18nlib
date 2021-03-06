/*
 * bencurinfo_initial_dynamic.js - benchmark the Currency object with initial dynamic formats
 *
 * Copyright © 2014-2015, JEDLSoft
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

var Currency = require("./../lib/Currency.js");
function testCurrencyConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "Currency-dynamic-empty-initial",
		fn: function () {
		    var fmt = new Currency();
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testCurrencyConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "Currency-dynamic-normal-initial",
		fn: function () {
			var fmt = new Currency({
				code: "USD"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}

function testCurrencyConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "Currency-dynamic-bysign-initial",
		fn: function () {
			var fmt = new Currency({
				sign: "$"
			});
		    assertNotNull(fmt);
		}
	});

	tt.run(results);
}
