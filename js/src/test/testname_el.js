/*
 * testname_en.js - test the name object in Japanese
 * 
 * Copyright © 2013, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICJASE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testJAJPParseSimpleName_el_GR() {
	var parsed = new ilib.Name("Dimitri Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSimpleName_el_GR() {
	var parsed = new ilib.Name("Dimitri Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
               
	};
	
	assertObjectContains(expected, parsed);
};



function testDEParseSingleNameWithPrefixAndAdjunct_el_GR() {
	var parsed = new ilib.Name("Dimitri Αλεξόπουλος κατώτερος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		 suffix : "κατώτερος",
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_el_GR1() {
	var parsed = new ilib.Name("Ο κ. Dimitri Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Ο κ.",
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitle_el_GR_second() {
	var parsed = new ilib.Name("Κυρία. Dimitri Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix : "Κυρία.",
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseTitleWithFamilyOnlyAndAdjunct_el_GR() {

	var name = new ilib.Name({
		prefix: "Ο κ.",
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος",
		suffix: "μουσκεύω"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Ο κ. Dimitri Αλεξόπουλος μουσκεύω";
	
	assertEquals(expected, formatted);

};


function testDEParseTitleWithFamilyOnlyAndAdjunctex_el_GR() {
	var parsed = new ilib.Name("αντιπρόεδρος Dimitri Αλεξόπουλος μουσκεύω", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "αντιπρόεδρος",
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος",
		suffix : "μουσκεύω"
	};
	
	assertObjectContains(expected, parsed);
};


function testDEParseCompoundHonorific_el_GR() {
	var parsed = new ilib.Name("Ο κ. Αλεξόπουλος", {locale: 'el-GR'});
	assertNotUndefined(parsed);
	
	var expected = {
		prefix: "Ο κ.",
		familyName: "Αλεξόπουλος"
	};
	
	assertObjectContains(expected, parsed);
};

/*
 * Format Tests
 */

function testDEFormatSimpleNameShort_el_GR() {
	var name = new ilib.Name({
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dimitri Αλεξόπουλος";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameMedium_el_GR() {
	var name = new ilib.Name({
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dimitri Αλεξόπουλος";
	
	assertEquals(expected, formatted);
};

function testDEFormatSimpleNameFull_el_GR() {
	var name = new ilib.Name({
		
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος",
		suffix: "μουσκεύω"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dimitri Αλεξόπουλος μουσκεύω";
	
	assertEquals(expected, formatted);
};

function testDEFormatComplexNameShort_el_GR() {
	var name = new ilib.Name({
		suffix: "μουσκεύω",
		givenName: "Dimitri",
		familyName: "Αλεξόπουλος"
	});
	var fmt = new ilib.NameFmt({
		style: "short", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "Dimitri Αλεξόπουλος";
	
	assertEquals(expected, formatted);
};


function testDEFormatAsianNameMedium_el_GR() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "medium", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "地獸";
	
	assertEquals(expected, formatted);
};

function testDEFormatAsianNameLong_el_GR() {
	var name = new ilib.Name({
		prefix: "小",
		givenName: "獸",
		familyName: "地",
		suffix: "太太"
	});
	var fmt = new ilib.NameFmt({
		style: "full", 
		locale: 'el-GR'
	});
	var formatted = fmt.format(name);
	assertNotUndefined(formatted);
	
	var expected = "小地獸太太";
	
	assertEquals(expected, formatted);
};



