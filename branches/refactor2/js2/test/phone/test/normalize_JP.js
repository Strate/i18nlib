/*
 * normalize.js - test phonenumber normalize function()
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

var PhoneNumber = require("./../lib/PhoneNumber.js");
function testIDDPrefix() {
	var parsed = new PhoneNumber("010 31 456 3453434", {locale: 'ja-JP'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ja-JP'})); // 'ja-JP'
};

function testIDDPrefixAlreadyPlus() {
	var parsed = new PhoneNumber("+31 456 3453434", {locale: 'ja-JP'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({locale: 'ja-JP'})); // 'ja-JP'
};

function testWithNoLocale() {
	var parsed = new PhoneNumber("01031 456 3453434", {locale: 'ja-JP'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize({}));
};

function testNoHints() {
	var parsed = new PhoneNumber("01031 456 3453434", {locale: 'ja-JP'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize()); // 'ja-JP'
};

function testWithNoHintsNoLocale() {
	var parsed = new PhoneNumber("01031 456 3453434", {locale: 'ja-JP'});
	var expected = "+314563453434";
	
	assertEquals(expected, parsed.normalize());
};

function testLDNumberUsingJPMCC() {
	var parsed = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "440"
	};
	var expected = "+8156531111111";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ko-KR'
};

function testLDNumberUsingJPMCCOtherLocale() {
	var parsed = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "440",
		locale: 'de-DE'
	};
	var expected = "+8156531111111";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ja-JP'
};

function testLDNumberUsingJPMCC() {
	var parsed = new PhoneNumber("02302 654321", {locale: 'de-DE'});
	var hints = {
		mcc: "440" //ja-JP
	};
	var expected = "+492302654321";
	
	assertEquals(expected, parsed.normalize(hints)); // 'de-DE'
};

function testAreaCodeFromHint() {
	var parsed = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
	var hints = {
		defaultAreaCode: "565"
	};
	var expected = "+8156531111111";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ja-JP'
};

function testAreaCodeIgnoreHint() {
	var parsed = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		defaultAreaCode: "650"
	};
	var expected = "+8156531111111";
	
	assertEquals(expected, parsed.normalize(hints)); // 'ja-JP'
};

function testNoAreaCodeAndNoCountry() {
	var parsed = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
	var expected = "31111111";
	
	assertEquals(expected, parsed.normalize());
};

function testAssistedDialingLocalToLocalUMTS() {
	var phone = new PhoneNumber("32622391", {locale: 'ja-JP'});
	var hints = {
		mcc: "440",
		networkType: "umts",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "32622391";

	assertEquals(expectedString, phone.normalize(hints)); // 'ja-JP'	
};

function testAssistedDialingLocalToLocalUMTSAddTrunkOpen() {
	var phone = new PhoneNumber("+81-56-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "440",
		networkType: "umts",
		assistedDialing: true
	};
	var expectedString = "056531111111";
	assertEquals(expectedString, phone.normalize(hints,{locale: 'ja-JP'})); // 'ja-JP'	
};

function testAssistedDialingLocalToLocalCDMA() {
	var phone = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "440",
		networkType: "cdma",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "31111111";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingLocalToLocalCDMAAddTrunkOpen() {
	var phone = new PhoneNumber("+81-56-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "440",
		networkType: "cdma",
		defaultAreaCode: "565",
		assistedDialing: true
	};
	var expectedString = "056531111111";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingIntlToLocalUMTS() {
	var phone = new PhoneNumber("31111111", {locale: 'ja-JP'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "565",
		assistedDialing: true
	};
	var expectedString = "+8156531111111";

	assertEquals(expectedString, phone.normalize(hints)); 
};

function testAssistedDialingIntlToLDUMTS() {
	var phone = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "208", // from France
		networkType: "umts",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "+8156531111111";

	assertEquals(expectedString, phone.normalize(hints)); // 'ja-JP'	
};

function testAssistedDialingIntlToLocalCDMA() {
	var phone = new PhoneNumber("3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "505", // From Australia
		networkType: "cdma",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "001181331111111";

	assertEquals(expectedString, phone.normalize(hints)); // 'ja-JP'	
};

function testAssistedDialingIntlToLDCDMA() {
	var phone = new PhoneNumber("056-5-3111-1111", {locale: 'ja-JP'});
	var hints = {
		mcc: "208", // from France
		networkType: "cdma",
		defaultAreaCode: "3",
		assistedDialing: true
	};
	var expectedString = "008156531111111";

	assertEquals(expectedString, phone.normalize(hints)); // 'ja-JP'	
};

