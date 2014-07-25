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

function testCharmapShiftJISLoadMap() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    assertEquals("Shift_JIS", cm.getName());
}

function testCharmapShiftJISMapToUnicodeASCII() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array(14);
    var str = "This is a test";
    for (var i = 0; i < str.length; i++) {
    	input[i] = str.charCodeAt(i); 
    }
    
    assertEquals("This is a test", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToUnicodeHalfWidthKatakana() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0xB1, // ｱ
        0xB6, // ｶ
        0xD3, // ﾓ
        0xC4  // ﾄ
	]);
    
    assertEquals("ｱｶﾓﾄ", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToUnicodeHiragana() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x82, 0xD0, // ひ 
        0x82, 0xE7, // ら 
        0x82, 0xAA, // が 
        0x82, 0xC8, // な 
        0x82, 0xC5, // で 
        0x82, 0xB7  // す
	]);
    
    assertEquals("ひらがなです", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToUnicodeKatakana() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x83, 0x4A, // カ
        0x83, 0x5E, // タ
        0x83, 0x4A, // カ 
        0x83, 0x69, // ナ
        0x82, 0xC5, // で 
        0x82, 0xB7  // す
	]);
    
    assertEquals("カタカナです", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToUnicodeGreek() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x83, 0xA3, // Ε
        0x83, 0xC9, // λ
        0x83, 0xC9, // λ 
        0x83, 0xBF, // α
        0x83, 0xD0  // σ 
	]);
    
    assertEquals("Ελλασ", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToUnicodeCyrillic() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
        0x84, 0x51, // Р
        0x84, 0x85, // у
        0x84, 0x83, // с
        0x84, 0x83, // с
        0x84, 0x7B, // к
        0x84, 0x79, // и
        0x84, 0x7A  // й
	]);
    
    assertEquals("Русский", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToUnicodeKanji() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var input = new Uint8Array([
		0x93, 0xFA, // 日
		0x96, 0x7B, // 本
		0x8c, 0xEA, // 語
		0x82, 0xCD, // は
		0x94, 0xFC, // 美
		0x82, 0xB5, // し
		0x82, 0xA2, // い
		0x82, 0xC5, // で
		0x82, 0xB7  // す
	]);
    
    assertEquals("日本語は美しいです", cm.mapToUnicode(input));
}

function testCharmapShiftJISMapToNativeASCII() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    var array = cm.mapToNative("This is a test");
    var expected = [
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
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapShiftJISMapToNativeHalfWidthKatakana() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ｱｶﾓﾄ");
    var expected = [
        0xB1, // ｱ
        0xB6, // ｶ
        0xD3, // ﾓ
        0xC4  // ﾄ
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapShiftJISMapToNativeHiragana() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("ひらがなです");
    var expected = [
        0x82, 0xD0, // ひ 
        0x82, 0xE7, // ら 
        0x82, 0xAA, // が 
        0x82, 0xC8, // な 
        0x82, 0xC5, // で 
        0x82, 0xB7  // す
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapShiftJISMapToNativeKatakana() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("カタカナです");
    var expected = [
        0x83, 0x4A, // カ
        0x83, 0x5E, // タ
        0x83, 0x4A, // カ 
        0x83, 0x69, // ナ
        0x82, 0xC5, // で 
        0x82, 0xB7  // す
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapShiftJISMapToNativeGreek() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("Ελλασ");
    var expected = [
        0x83, 0xA3, // Ε
        0x83, 0xC9, // λ
        0x83, 0xC9, // λ 
        0x83, 0xBF, // α
        0x83, 0xD0  // σ 
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapShiftJISMapToNativeCyrillic() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("Русский");
    var expected = [
        0x84, 0x51, // Р
        0x84, 0x85, // у
        0x84, 0x83, // с
        0x84, 0x83, // с
        0x84, 0x7B, // к
        0x84, 0x79, // и
        0x84, 0x7A  // й
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

function testCharmapShiftJISMapToNativeKanji() {
	var cm = new ilib.Charmap({
		name: "Shift_JIS"
	});
    assertNotUndefined(cm);
    
    var array = cm.mapToNative("日本語は美しいです");
    var expected = [
		0x93, 0xFA, // 日
		0x96, 0x7B, // 本
		0x8c, 0xEA, // 語
		0x82, 0xCD, // は
		0x94, 0xFC, // 美
		0x82, 0xB5, // し
		0x82, 0xA2, // い
		0x82, 0xC5, // で
		0x82, 0xB7  // す
    ];
   
    for (var i = 0; i < expected.length; i++) {
    	assertEquals("testing index " + i, expected[i], array[i]);
    }
}

