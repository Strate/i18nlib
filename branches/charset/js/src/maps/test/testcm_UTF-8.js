/*
 * testcm_UTF-8.js - Test the charset mapping routines for UTF-8
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

function testCharmapUTF8LoadMap() {
	var cm = new ilib.Charmap({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    assertEquals("UTF-8", cm.getName());
}

function testCharmapUTF8MapToUnicodeUint8Array() {
	var cm = new ilib.Charmap({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeUint8ArrayExtended() {
	var cm = new ilib.Charmap({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0xC3, 0x80,
        0xC3, 0x81,
        0xC3, 0xA2,
        0xC3, 0xA3,
        0x00
	]);
    
    assertEquals("ÀÁâã", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeNumberArray() {
	var cm = new ilib.Charmap({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = [];
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input.push(str.charCodeAt(i)); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmapUTF8MapToUnicodeNumberArrayExtended() {
	var cm = new ilib.Charmap({
		name: "UTF-8"
	});
    assertNotUndefined(cm);
    var input = [
        0xC3, 0x80,
        0xC3, 0x81,
        0xC3, 0xA2,
        0xC3, 0xA3,
        0x00
	];
    
    assertEquals("ÀÁâã", cm.mapToUnicode(input));
}

