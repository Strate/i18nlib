/*
 * testcm_ISO-8859-1.js - Test the charset mapping routines for ISO-8859-1
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

function testCharmap88591LoadMap() {
	var cm = new ilib.Charmap({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    assertEquals("ISO-8859-1", cm.getName());
}

function testCharmap88591MapToUnicodeUint8Array() {
	var cm = new ilib.Charmap({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmap88591MapToUnicodeUint8ArrayExtended() {
	var cm = new ilib.Charmap({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "\u00C0\u00C1\u00E2\u00E3";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("ÀÁâã", cm.mapToUnicode(input));
}

function testCharmap88591MapToUnicodeNumberArray() {
	var cm = new ilib.Charmap({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = [];
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input.push(str.charCodeAt(i)); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmap88591MapToUnicodeNumberArrayExtended() {
	var cm = new ilib.Charmap({
		name: "ISO-8859-1"
	});
    assertNotUndefined(cm);
    var input = [];
    var str = "\u00C0\u00C1\u00E2\u00E3";
    for (var i = 0; i < str.length; i++) {
    	input.push(str.charCodeAt(i)); 
    }
    
    assertEquals("ÀÁâã", cm.mapToUnicode(input));
}

