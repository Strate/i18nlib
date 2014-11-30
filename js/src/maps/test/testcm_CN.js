/*
 * testcm_CN.js - Test the charset mapping routines for the various Chinese 
 * character sets
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

var aliasesCN = {
    "ISO-2022-CN-EXT": [
      	"ISO2022CNEXT",
    	"ISO_2022_CN_EXT",
    	"iso-2022-CN-ext"
	],
	"ISO-2022-CN": [
      	"ISO2022CN",
    	"ISO_2022_CN",
    	"iso-2022-CN"
    ],
    "Big5": [
		"big5",
		"Big-5"
    ],
    "GB18030": [
        "GB-18030",
        "gb18030",
        "GB",
        "GB-18030:2005"
    ],
    "GB2312": [
        "GB-2312",
        "gb2312"
    ],
    "GB_2312-80": [
       "GB-2312-80",
       "gb231280"
    ],
    "GBK": [
        "gbk"
    ]
};

function testCharmapCNTestAliases() {
	for (var charset in aliasesCN) {
		for (var i = 0; i < aliasesCN[charset].length; i++) {
			var cm = new ilib.Charmap({
				name: aliasesCN[charset][i]
			});
		    assertNotUndefined(cm);
		    assertEquals(charset, cm.getName());
		}
	}
}

var testDataCN = {
	"EUC-JP": {
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
			0x8e, 0xb1, // ｱ
			0x8e, 0xb6, // ｶ
			0x8e, 0xd3, // ﾓ
			0x8e, 0xc4  // ﾄ
	    ],
	    "ひらがなです": [
			0xa4, 0xd2, // ひ
			0xa4, 0xe9, // ら
			0xa4, 0xac, // が
			0xa4, 0xca, // な
			0xa4, 0xc7, // で
			0xa4, 0xb9  // す
	    ],
	    "カタカナです": [
			0xa5, 0xab, // カ
			0xa5, 0xbf, // タ
			0xa5, 0xab, // カ
			0xa5, 0xca, // ナ
			0xa4, 0xc7, // で
			0xa4, 0xb9  // す   
	    ],
	    "Ελλασ": [
			0xa6, 0xa5, // Ε
			0xa6, 0xcb, // λ
			0xa6, 0xcb, // λ
			0xa6, 0xc1, // α
			0xa6, 0xd2  // σ
	    ],
	    "Русский": [
			0xa7, 0xb2, // Р
			0xa7, 0xe5, // у
			0xa7, 0xe3, // с
			0xa7, 0xe3, // с
			0xa7, 0xdc, // к
			0xa7, 0xda, // и
			0xa7, 0xdb  // й
	    ],
	    "日本語は美しいです": [
			0xc6, 0xfc, // 日
			0xcb, 0xdc, // 本
			0xb8, 0xec, // 語
			0xa4, 0xcf, // は
			0xc8, 0xfe, // 美
			0xa4, 0xb7, // し
			0xa4, 0xa4, // い
			0xa4, 0xc7, // で
			0xa4, 0xb9  // す
	    ]
	},
	"EUC-JIS_X0213": {
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
			0x8e, 0xb1, // ｱ
			0x8e, 0xb6, // ｶ
			0x8e, 0xd3, // ﾓ
			0x8e, 0xc4  // ﾄ
		],
		"ひらがなです": [
			0xa4, 0xd2, // ひ
			0xa4, 0xe9, // ら
			0xa4, 0xac, // が
			0xa4, 0xca, // な
			0xa4, 0xc7, // で
			0xa4, 0xb9  // す
		],
		"カタカナです": [
			0xa5, 0xab, // カ
			0xa5, 0xbf, // タ
			0xa5, 0xab, // カ
			0xa5, 0xca, // ナ
			0xa4, 0xc7, // で
			0xa4, 0xb9  // す   
		],
   	    "Ελλασ": [
   			0xa6, 0xa5, // Ε
   			0xa6, 0xcb, // λ
   			0xa6, 0xcb, // λ
   			0xa6, 0xc1, // α
   			0xa6, 0xd2  // σ
   	    ],
   	    "Русский": [
   			0xa7, 0xb2, // Р
   			0xa7, 0xe5, // у
   			0xa7, 0xe3, // с
   			0xa7, 0xe3, // с
   			0xa7, 0xdc, // к
   			0xa7, 0xda, // и
   			0xa7, 0xdb  // й
   	    ],
   	    "日本語は美しいです": [
   			0xc6, 0xfc, // 日
   			0xcb, 0xdc, // 本
   			0xb8, 0xec, // 語
   			0xa4, 0xcf, // は
   			0xc8, 0xfe, // 美
   			0xa4, 0xb7, // し
   			0xa4, 0xa4, // い
   			0xa4, 0xc7, // で
   			0xa4, 0xb9  // す
   	    ]
	},
	"Shift_JIS": {
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
			0xB6, // ｶEUC-JIS_X_0213
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
	},
	"Shift_JIS_X0213": {
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
	}
};

function testCharmapCNMapToUnicode() {
	for (var charset in testDataCN) {
		var cm = new ilib.Charmap({
			name: charset
		});
	    assertNotUndefined(cm);
	    var data = testDataCN[charset];
	    for (var element in data) {
	    	// console.log("testing " + charset + " element " + element);
		    assertEquals("testing " + charset + " element " + element + "\n", element, cm.mapToUnicode(data[element]));
	    }
	}
}

function testCharmapCNMapToNative() {
	for (var charset in testDataCN) {
		var cm = new ilib.Charmap({
			name: charset
		});
	    assertNotUndefined(cm);
	    var data = testDataCN[charset];
	    for (var element in data) {
	    	var array = cm.mapToNative(element);
	    	// console.log("cm.mapToNative returned " + JSON.stringify(cm.mapToUnicode(array)));
		    
	        for (var i = 0; i < data[element].length; i++) {
	        	// console.log("testing " + charset + " element " + element + " array index " + i);
			    assertEquals("testing " + charset + " element " + element + " array index " + i + "\n", data[element][i], array[i]);
	        }
	    }
	}
}

