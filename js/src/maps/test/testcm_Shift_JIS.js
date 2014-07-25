/*
 * testcm_Shift_JIS.js - Test the charset mapping routines for Shift_JIS
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

var aliases = [
	"Shift_JIS",
	"Shift-JIS",
	"SHIFT_JIS",
	"SJIS"
];

function testCharmapShiftJISTestAliases() {
	for (var i = 0; i < aliases.length; i++) {
		var cm = new ilib.Charmap({
			name: aliases[i]
		});
	    assertNotUndefined(cm);
	    assertEquals("Shift_JIS", cm.getName());
	}
}

var testData = {
    "This is a test": [
		0x54, // T
	    0x68, // h
	    0x69, // i
	    0x73, // s
	    0x20, // 
	    0x69, // i
	    0x73, // s
	    0x20, // 
	    0x61, // a
	    0x20, //
	    0x74, // t
	    0x65, // e
	    0x73, // s
	    0x74  // t
    ],
    "ｱｶﾓﾄ": [
		0xB1, // ｱ
	    0xB6, // ｶ
	    0xD3, // ﾓ
	    0xC4  // ﾄ
    ],
    "ひらがなです": [
		0x82, 0xD0, // ひ
	    0x82, 0xE7, // ら
	    0x82, 0xAA, // が
	    0x82, 0xC8, // な
	    0x82, 0xC5, // で
	    0x82, 0xB7  // す
    ],
    "カタカナです": [
		0x83, 0x4A, // カ
	    0x83, 0x5E, // タ
	    0x83, 0x4A, // カ
	    0x83, 0x69, // ナ
	    0x82, 0xC5, // で
	    0x82, 0xB7  // す
    ],
    "Ελλασ": [
		0x83, 0xA3, // Ε
	    0x83, 0xC9, // λ
	    0x83, 0xC9, // λ
	    0x83, 0xBF, // α
	    0x83, 0xD0  // σ
    ],
    "Русский": [
		0x84, 0x51, // Р
	    0x84, 0x85, // у
	    0x84, 0x83, // с
	    0x84, 0x83, // с
	    0x84, 0x7B, // к
	    0x84, 0x79, // и
	    0x84, 0x7A  // й
    ],
    "日本語は美しいです": [
		0x93, 0xFA, // 日
	    0x96, 0x7B, // 本
	    0x8c, 0xEA, // 語
	    0x82, 0xCD, // は
	    0x94, 0xFC, // 美
	    0x82, 0xB5, // し
	    0x82, 0xA2, // い
	    0x82, 0xC5, // で
	    0x82, 0xB7  // す
    ]
};

function testCharmapShiftJISMapToUnicode() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    for (var element in testData) {
	    assertEquals(element, cm.mapToUnicode(testData[element]));
    }
}

function testCharmapShiftJISMapToNative() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    for (var element in testData) {
    	var array = cm.mapToNative(element);
    	
        for (var i = 0; i < testData[element].length; i++) {
        	assertEquals("testing " + element + " index " + i, testData[element][i], array[i]);
        }
    }
}

