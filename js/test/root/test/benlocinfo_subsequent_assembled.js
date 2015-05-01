/*
 * benlocinfo_subsequent_assembled.js - benchmark the LocaleInfo object with subsequent assembled formats
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

var ilib = require("./../lib/ilib.js");
var LocaleInfo = require("./../lib/LocaleInfo.js");
ilib.data.plurals_en={one:{is:["n",1]}};
ilib.data.plurals_de={one:{is:["n",1]}};
ilib.data.plurals_fr={one:{and:[{within:["n",[[0,2]]]},{isnot:["n",2]}]}};

ilib.data.pseudomap = {"a":"à","c":"ç","d":"ð","e":"ë","g":"ğ","h":"ĥ","i":"í","j":"ĵ","k":"ķ","l":"ľ","n":"ñ","o":"õ","p":"þ","r":"ŕ","s":"š","t":"ţ","u":"ü","w":"ŵ","y":"ÿ","z":"ž","A":"Ã","B":"ß","C":"Ç","D":"Ð","E":"Ë","G":"Ĝ","H":"Ħ","I":"Ï","J":"Ĵ","K":"ĸ","L":"Ľ","N":"Ň","O":"Ø","R":"Ŗ","S":"Š","T":"Ť","U":"Ú","W":"Ŵ","Y":"Ŷ","Z":"Ż"};

ilib.data.localeinfo = {"calendar":"gregorian","clock":"24","currency":"USD","delimiter":{"quotationStart":"“","quotationEnd":"”","alternateQuotationStart":"‘","alternateQuotationEnd":"’"},"firstDayOfWeek":1,"numfmt":{"script":"Latn","decimalChar":",","groupChar":".","prigroupSize":3,"pctFmt":"{n}%","pctChar":"%","roundingMode":"halfdown","exponential":"e","currencyFormats":{"common":"{s}{n}","commonNegative":"{s}-{n}"}},"timezone":"Etc/UTC","units":"metric"};
ilib.data.localeinfo_en = {"clock":"12","language.name":"English","numfmt":{"decimalChar":".","groupChar":",","currencyFormats":{"commonNegative":"({s}{n})"}},"scripts":["Latn","Dsrt","Shaw"],"locale":"en"};
ilib.data.localeinfo_US = {"currency":"USD","firstDayOfWeek":0,"paperSizes":{"regular":"8x11"},"region.name":"United States","timezone":"America/New_York","units":"uscustomary","locale":"US"};
ilib.data.localeinfo_de = {"delimiter":{"quotationStart":"„","quotationEnd":"“","alternateQuotationStart":"‚","alternateQuotationEnd":"‘"},"language.name":"German","numfmt":{"exponential":"E","currencyFormats":{"common":"{n} {s}"},"pctFmt":"{n} %"},"paperSizes":{"regular":"A4","photo":"4x6"},"scripts":["Latn","Runr"],"locale":"de"};
ilib.data.localeinfo_DE = {"currency":"EUR","firstDayOfWeek":1,"region.name":"Germany","timezone":"Europe/Berlin","locale":"DE"};
ilib.data.localeinfo_fr = {"delimiter":{"quotationStart":"«","quotationEnd":"»","alternateQuotationStart":"«","alternateQuotationEnd":"»"},"language.name":"French","numfmt":{"groupChar":" ","exponential":"E","currencyFormats":{"common":"{n} {s}","commonNegative":"({n} {s})"},"pctFmt":"{n} %"},"paperSizes":{"regular":"A4","photo":"4x6"},"scripts":["Latn"],"locale":"fr"};
ilib.data.localeinfo_FR = {"currency":"EUR","firstDayOfWeek":1,"region.name":"France","timezone":"Europe/Paris","locale":"FR"};
ilib.data.localeinfo_zh = {"clock":"12","language.name":"Chinese","native_numfmt":{"script":"Hani","decimalChar":".","groupChar":",","pctChar":"%","exponential":"E","prigroupSize":3,"currencyFormats":{"common":"{s}{n}","commonNegative":"({s}{n})"},"pctFmt":"{n}%","roundingMode":"halfdown","useNative":true,"digits":"〇一二三四五六七八九"},"numfmt":{"decimalChar":".","groupChar":",","exponential":"E","useNative":false,"currencyFormats":{"commonNegative":"({s}{n})"}},"scripts":["Hans","Hant","Bopo","Phag"],"locale":"zh"};
ilib.data.localeinfo_TW = {"currency":"TWD","firstDayOfWeek":0,"region.name":"Taiwan","timezone":"Asia/Taipei","locale":"TW"};

function testLocaleInfoConstructorEmptySubsequent(results) {
	new LocaleInfo();
	
	var tt = new TimedTest({
		name: "LocaleInfo-assembled-empty-subsequent",
		iterations: 100,
		fn: function () {
		    var fmt = new LocaleInfo();	    
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorRealSubsequent(results) {
	new LocaleInfo("de-DE");
	
	var tt = new TimedTest({
		name: "LocaleInfo-assembled-normal-subsequent",
		iterations: 100,
		fn: function () {
			var fmt = new LocaleInfo("de-DE");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorNonexistentSubsequent(results) {
	new LocaleInfo("xx-YY");
	
	var tt = new TimedTest({
		name: "LocaleInfo-assembled-nonexistent-subsequent",
		iterations: 100,
		fn: function () {
			var fmt = new LocaleInfo("xx-YY");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorOtherComplexSubsequent(results) {
	new LocaleInfo("zh-Hant-TW");
	
	var tt = new TimedTest({
		name: "LocaleInfo-assembled-otherfile-complex-subsequent",
		iterations: 100,
		fn: function () {
			var fmt = new LocaleInfo("zh-Hant-TW");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}
