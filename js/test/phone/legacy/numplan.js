/*
 * numplan.js - Test the phone numbering plan.
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

function testGet1() {
	var plan = new ilib.NumPlan({locale: "en-US"});
	assertNotUndefined(plan);
	assertEquals("US", plan.getName());
}

function testGet2() {
	var plan = new ilib.NumPlan({locale: "de-DE"});
	assertNotUndefined(plan);
	assertEquals("DE", plan.getName());
};

function testGetUnknown() {
	var plan = new ilib.NumPlan({locale: "unknown-unknown"});
	assertNotUndefined(plan);
	assertEquals("XX", plan.getName());
};

function testGetUnrecognized () {
	var plan = new ilib.NumPlan({locale: "zu-ZZ"});
	assertNotUndefined(plan);
	assertEquals("XX", plan.getName());
};

function testGetDefault() {
	var plan = new ilib.NumPlan({});
	assertNotUndefined(plan);
	assertEquals("US", plan.getName());
};

function testGetContextFreeContent() {
	var plan = new ilib.NumPlan({locale: "en-GB"});
	assertNotUndefined(plan);
	assertEquals(false, plan.getContextFree());
};

function testGetContextFreeContent() {
	var plan = new ilib.NumPlan({locale: "en-US"});
	assertNotUndefined(plan);
	assertEquals(undefined, plan.getContextFree());
};

function testRightContents() {
	var plan = new ilib.NumPlan({locale: "en-US"});
	assertNotUndefined(plan);
	assertEquals("US", plan.getName());
	assertEquals("1", plan.getTrunkCode());
	assertEquals("011", plan.getIDDCode());
	assertEquals(3, plan.getFieldLength('areaCode'));
	assertEquals(7, plan.getFieldLength('minLocalLength'));
	assertEquals(0, plan.getFieldLength('serviceCode'));
	assertEquals(7, plan.getFieldLength('cic'));
	assertEquals(0, plan.getFieldLength('mobilePrefix'));
	assertEquals(0, plan.getFieldLength('emergency'));
	assertEquals(0, plan.getFieldLength('vsc'));
	assertEquals("closed", plan.getPlanStyle());
	assertEquals(" ()-.", plan.getCommonFormatChars());	
};

function mockLoader(paths, sync, params, callback) {
	var data = [];
	
	data.push(ilib.data.numplan); // for the generic, shared stuff
	data.push(ilib.data.numplan_US);
	
	if (typeof(callback) !== 'undefined') {
		callback.call(this, data);	
	}
	return data;
}

function testNumPlanLoadLocaleDataSynch() {
	if (typeof(ilib._load) !== 'undefined') {
		// don't need to test loading on the dynamic load version because we are testing
		// it via all the other tests already.
		return;
	}
	
	ilib.NumPlan.cache = {};
	ilib.setLoaderCallback(mockLoader);

	new ilib.NumPlan({
		locale: "en-US",
		sync: false,
		onLoad: function (plan) {
    		assertNotNull(plan);
    		assertEquals("US", plan.getName());    			
    	}
	});

    ilib.setLoaderCallback(undefined);
};