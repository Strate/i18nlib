/*
 * testcollation_zh-Hans.js - test the Collator object in simplified Chinese
 * 
 * Copyright © 2015, JEDLSoft
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

function testJSCollatorQuatHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorTerHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorSecHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorPriHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	assertTrue("阿 < 拜", col.compare("阿", "拜") < 0);
	assertTrue("拜 < 𩑻", col.compare("拜", "𩑻") < 0);
	assertTrue("𩑻 < 䯋", col.compare("𩑻", "䯋") < 0);
	assertTrue("䯋 < 𧀱", col.compare("䯋", "𧀱") < 0);
	assertTrue("𧀱 < 捶", col.compare("𧀱", "捶") < 0);
	assertTrue("捶 < 峒", col.compare("捶", "峒") < 0);
	assertTrue("峒 < 㶥", col.compare("峒", "㶥") < 0);
	assertTrue("㶥 < 㜳", col.compare("㶥", "㜳") < 0);
	assertTrue("㜳 < 䌸", col.compare("㜳", "䌸") < 0);
	assertTrue("䌸 < 䢧", col.compare("䌸", "䢧") < 0);
	assertTrue("䢧 < 苜", col.compare("䢧", "苜") < 0);
	assertTrue("苜 < 肶", col.compare("苜", "肶") < 0);
	assertTrue("肶 < 埁", col.compare("肶", "埁") < 0);
	assertTrue("埁 < 泩", col.compare("埁", "泩") < 0);
	assertTrue("泩 < 窱", col.compare("泩", "窱") < 0);
	assertTrue("窱 < 扤", col.compare("窱", "扤") < 0);
	assertTrue("扤 < 辥", col.compare("扤", "辥") < 0);
	assertTrue("辥 < 䓰", col.compare("辥", "䓰") < 0);
	assertTrue("䓰 < 赵", col.compare("䓰", "赵") < 0);
	assertTrue("赵 < 蓙", col.compare("赵", "蓙") < 0);
}

function testJSCollatorPinyinQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("bā < bá", col.compare("bā", "bá") < 0);
	assertTrue("bá < bǎ", col.compare("bá", "bǎ") < 0);
	assertTrue("bǎ < bà", col.compare("bǎ", "bà") < 0);
	assertTrue("bà < ba", col.compare("bà", "ba") < 0);
	assertTrue("bāi < bai", col.compare("bāi", "bai") < 0);
	assertTrue("bai < chái", col.compare("bai", "chái") < 0);
	assertTrue("chái < chē", col.compare("chái", "chē") < 0);
	assertTrue("chē < chēn", col.compare("chē", "chēn") < 0);
	assertTrue("chēn < ché", col.compare("chēn", "ché") < 0);
	assertTrue("ché < chě", col.compare("ché", "chě") < 0);
	assertTrue("chě < chè", col.compare("chě", "chè") < 0);
	
	assertTrue("Ā < Ā", col.compare("Ā", "Ā") < 0);
	assertTrue("Ā < ā", col.compare("Ā", "ā") < 0);
	assertTrue("ā < ā", col.compare("ā", "ā") < 0);
	assertTrue("ā < Á", col.compare("ā", "Á") < 0);
	assertTrue("Á < Á", col.compare("Á", "Á") < 0);
	assertTrue("Á < á", col.compare("Á", "á") < 0);
	assertTrue("á < á", col.compare("á", "á") < 0);
	assertTrue("á < Ǎ", col.compare("á", "Ǎ") < 0);
	assertTrue("Ǎ < Ǎ", col.compare("Ǎ", "Ǎ") < 0);
	assertTrue("Ǎ < ǎ", col.compare("Ǎ", "ǎ") < 0);
	assertTrue("ǎ < ǎ", col.compare("ǎ", "ǎ") < 0);
	assertTrue("ǎ < À", col.compare("ǎ", "À") < 0);
	assertTrue("À < À", col.compare("À", "À") < 0);
	assertTrue("À < à", col.compare("À", "à") < 0);
	assertTrue("à < à", col.compare("à", "à") < 0);
	assertTrue("à < A", col.compare("à", "A") < 0);
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < Ē", col.compare("d", "Ē") < 0);
	assertTrue("Ē < Ē", col.compare("Ē", "Ē") < 0);
	assertTrue("Ē < ē", col.compare("Ē", "ē") < 0);
	assertTrue("ē < ē", col.compare("ē", "ē") < 0);
	assertTrue("ē < É", col.compare("ē", "É") < 0);
	assertTrue("É < É", col.compare("É", "É") < 0);
	assertTrue("É < é", col.compare("É", "é") < 0);
	assertTrue("é < é", col.compare("é", "é") < 0);
	assertTrue("é < Ě", col.compare("é", "Ě") < 0);
	assertTrue("Ě < Ě", col.compare("Ě", "Ě") < 0);
	assertTrue("Ě < ě", col.compare("Ě", "ě") < 0);
	assertTrue("ě < ě", col.compare("ě", "ě") < 0);
	assertTrue("ě < È", col.compare("ě", "È") < 0);
	assertTrue("È < È", col.compare("È", "È") < 0);
	assertTrue("È < è", col.compare("È", "è") < 0);
	assertTrue("è < è", col.compare("è", "è") < 0);
	assertTrue("è < E", col.compare("è", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < Ê̄", col.compare("e", "Ê̄") < 0);
	assertTrue("Ê̄ < Ē̂", col.compare("Ê̄", "Ē̂") < 0);
	assertTrue("Ē̂ < Ê̄", col.compare("Ē̂", "Ê̄") < 0);
	assertTrue("Ê̄ < ê̄", col.compare("Ê̄", "ê̄") < 0);
	assertTrue("ê̄ < ē̂", col.compare("ê̄", "ē̂") < 0);
	assertTrue("ē̂ < ê̄", col.compare("ē̂", "ê̄") < 0);
	assertTrue("ê̄ < Ế", col.compare("ê̄", "Ế") < 0);
	assertTrue("Ế < É̂", col.compare("Ế", "É̂") < 0);
	assertTrue("É̂ < Ế", col.compare("É̂", "Ế") < 0);
	assertTrue("Ế < ế", col.compare("Ế", "ế") < 0);
	assertTrue("ế < é̂", col.compare("ế", "é̂") < 0);
	assertTrue("é̂ < ế", col.compare("é̂", "ế") < 0);
	assertTrue("ế < Ê̌", col.compare("ế", "Ê̌") < 0);
	assertTrue("Ê̌ < Ě̂", col.compare("Ê̌", "Ě̂") < 0);
	assertTrue("Ě̂ < Ê̌", col.compare("Ě̂", "Ê̌") < 0);
	assertTrue("Ê̌ < ê̌", col.compare("Ê̌", "ê̌") < 0);
	assertTrue("ê̌ < ě̂", col.compare("ê̌", "ě̂") < 0);
	assertTrue("ě̂ < ê̌", col.compare("ě̂", "ê̌") < 0);
	assertTrue("ê̌ < Ề", col.compare("ê̌", "Ề") < 0);
	assertTrue("Ề < È̂", col.compare("Ề", "È̂") < 0);
	assertTrue("È̂ < Ề", col.compare("È̂", "Ề") < 0);
	assertTrue("Ề < ề", col.compare("Ề", "ề") < 0);
	assertTrue("ề < è̂", col.compare("ề", "è̂") < 0);
	assertTrue("è̂ < ề", col.compare("è̂", "ề") < 0);
	assertTrue("ề < F", col.compare("ề", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < Ī", col.compare("h", "Ī") < 0);
	assertTrue("Ī < Ī", col.compare("Ī", "Ī") < 0);
	assertTrue("Ī < ī", col.compare("Ī", "ī") < 0);
	assertTrue("ī < ī", col.compare("ī", "ī") < 0);
	assertTrue("ī < Í", col.compare("ī", "Í") < 0);
	assertTrue("Í < Í", col.compare("Í", "Í") < 0);
	assertTrue("Í < í", col.compare("Í", "í") < 0);
	assertTrue("í < í", col.compare("í", "í") < 0);
	assertTrue("í < Ǐ", col.compare("í", "Ǐ") < 0);
	assertTrue("Ǐ < Ǐ", col.compare("Ǐ", "Ǐ") < 0);
	assertTrue("Ǐ < ǐ", col.compare("Ǐ", "ǐ") < 0);
	assertTrue("ǐ < ǐ", col.compare("ǐ", "ǐ") < 0);
	assertTrue("ǐ < Ì", col.compare("ǐ", "Ì") < 0);
	assertTrue("Ì < Ì", col.compare("Ì", "Ì") < 0);
	assertTrue("Ì < ì", col.compare("Ì", "ì") < 0);
	assertTrue("ì < ì", col.compare("ì", "ì") < 0);
	assertTrue("ì < I", col.compare("ì", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
	assertTrue("i < J", col.compare("i", "J") < 0);
	assertTrue("J < j", col.compare("J", "j") < 0);
	assertTrue("j < K", col.compare("j", "K") < 0);
	assertTrue("K < k", col.compare("K", "k") < 0);
	assertTrue("k < L", col.compare("k", "L") < 0);
	assertTrue("L < l", col.compare("L", "l") < 0);
	assertTrue("l < M̄", col.compare("l", "M̄") < 0);
	assertTrue("M̄ < M̄", col.compare("M̄", "M̄") < 0);
	assertTrue("M̄ < m̄", col.compare("M̄", "m̄") < 0);
	assertTrue("m̄ < m̄", col.compare("m̄", "m̄") < 0);
	assertTrue("m̄ < Ḿ", col.compare("m̄", "Ḿ") < 0);
	assertTrue("Ḿ < Ḿ", col.compare("Ḿ", "Ḿ") < 0);
	assertTrue("Ḿ < ḿ", col.compare("Ḿ", "ḿ") < 0);
	assertTrue("ḿ < ḿ", col.compare("ḿ", "ḿ") < 0);
	assertTrue("ḿ < M̌", col.compare("ḿ", "M̌") < 0);
	assertTrue("M̌ < M̌", col.compare("M̌", "M̌") < 0);
	assertTrue("M̌ < m̌", col.compare("M̌", "m̌") < 0);
	assertTrue("m̌ < m̌", col.compare("m̌", "m̌") < 0);
	assertTrue("m̌ < M̀", col.compare("m̌", "M̀") < 0);
	assertTrue("M̀ < M̀", col.compare("M̀", "M̀") < 0);
	assertTrue("M̀ < m̀", col.compare("M̀", "m̀") < 0);
	assertTrue("m̀ < m̀", col.compare("m̀", "m̀") < 0);
	assertTrue("m̀ < M", col.compare("m̀", "M") < 0);
	assertTrue("M < m", col.compare("M", "m") < 0);
	assertTrue("m < N̄", col.compare("m", "N̄") < 0);
	assertTrue("N̄ < N̄", col.compare("N̄", "N̄") < 0);
	assertTrue("N̄ < n̄", col.compare("N̄", "n̄") < 0);
	assertTrue("n̄ < n̄", col.compare("n̄", "n̄") < 0);
	assertTrue("n̄ < Ń", col.compare("n̄", "Ń") < 0);
	assertTrue("Ń < Ń", col.compare("Ń", "Ń") < 0);
	assertTrue("Ń < ń", col.compare("Ń", "ń") < 0);
	assertTrue("ń < ń", col.compare("ń", "ń") < 0);
	assertTrue("ń < Ň", col.compare("ń", "Ň") < 0);
	assertTrue("Ň < Ň", col.compare("Ň", "Ň") < 0);
	assertTrue("Ň < ň", col.compare("Ň", "ň") < 0);
	assertTrue("ň < ň", col.compare("ň", "ň") < 0);
	assertTrue("ň < Ǹ", col.compare("ň", "Ǹ") < 0);
	assertTrue("Ǹ < Ǹ", col.compare("Ǹ", "Ǹ") < 0);
	assertTrue("Ǹ < ǹ", col.compare("Ǹ", "ǹ") < 0);
	assertTrue("ǹ < ǹ", col.compare("ǹ", "ǹ") < 0);
	assertTrue("ǹ < N", col.compare("ǹ", "N") < 0);
	assertTrue("N < n", col.compare("N", "n") < 0);
	assertTrue("n < Ō", col.compare("n", "Ō") < 0);
	assertTrue("Ō < Ō", col.compare("Ō", "Ō") < 0);
	assertTrue("Ō < ō", col.compare("Ō", "ō") < 0);
	assertTrue("ō < ō", col.compare("ō", "ō") < 0);
	assertTrue("ō < Ó", col.compare("ō", "Ó") < 0);
	assertTrue("Ó < Ó", col.compare("Ó", "Ó") < 0);
	assertTrue("Ó < ó", col.compare("Ó", "ó") < 0);
	assertTrue("ó < ó", col.compare("ó", "ó") < 0);
	assertTrue("ó < Ǒ", col.compare("ó", "Ǒ") < 0);
	assertTrue("Ǒ < Ǒ", col.compare("Ǒ", "Ǒ") < 0);
	assertTrue("Ǒ < ǒ", col.compare("Ǒ", "ǒ") < 0);
	assertTrue("ǒ < ǒ", col.compare("ǒ", "ǒ") < 0);
	assertTrue("ǒ < Ò", col.compare("ǒ", "Ò") < 0);
	assertTrue("Ò < Ò", col.compare("Ò", "Ò") < 0);
	assertTrue("Ò < ò", col.compare("Ò", "ò") < 0);
	assertTrue("ò < ò", col.compare("ò", "ò") < 0);
	assertTrue("ò < O", col.compare("ò", "O") < 0);
	assertTrue("O < o", col.compare("O", "o") < 0);
	assertTrue("o < P", col.compare("o", "P") < 0);
	assertTrue("P < p", col.compare("P", "p") < 0);
	assertTrue("p < Q", col.compare("p", "Q") < 0);
	assertTrue("Q < q", col.compare("Q", "q") < 0);
	assertTrue("q < R", col.compare("q", "R") < 0);
	assertTrue("R < r", col.compare("R", "r") < 0);
	assertTrue("r < S", col.compare("r", "S") < 0);
	assertTrue("S < s", col.compare("S", "s") < 0);
	assertTrue("s < T", col.compare("s", "T") < 0);
	assertTrue("T < t", col.compare("T", "t") < 0);
	assertTrue("t < Ū", col.compare("t", "Ū") < 0);
	assertTrue("Ū < Ū", col.compare("Ū", "Ū") < 0);
	assertTrue("Ū < ū", col.compare("Ū", "ū") < 0);
	assertTrue("ū < ū", col.compare("ū", "ū") < 0);
	assertTrue("ū < Ú", col.compare("ū", "Ú") < 0);
	assertTrue("Ú < Ú", col.compare("Ú", "Ú") < 0);
	assertTrue("Ú < ú", col.compare("Ú", "ú") < 0);
	assertTrue("ú < ú", col.compare("ú", "ú") < 0);
	assertTrue("ú < Ǔ", col.compare("ú", "Ǔ") < 0);
	assertTrue("Ǔ < Ǔ", col.compare("Ǔ", "Ǔ") < 0);
	assertTrue("Ǔ < ǔ", col.compare("Ǔ", "ǔ") < 0);
	assertTrue("ǔ < ǔ", col.compare("ǔ", "ǔ") < 0);
	assertTrue("ǔ < Ù", col.compare("ǔ", "Ù") < 0);
	assertTrue("Ù < Ù", col.compare("Ù", "Ù") < 0);
	assertTrue("Ù < ù", col.compare("Ù", "ù") < 0);
	assertTrue("ù < ù", col.compare("ù", "ù") < 0);
	assertTrue("ù < U", col.compare("ù", "U") < 0);
	assertTrue("U < u", col.compare("U", "u") < 0);
	assertTrue("u < Ǖ", col.compare("u", "Ǖ") < 0);
	assertTrue("Ǖ < Ṻ", col.compare("Ǖ", "Ṻ") < 0);
	assertTrue("Ṻ < Ǖ", col.compare("Ṻ", "Ǖ") < 0);
	assertTrue("Ǖ < ǖ", col.compare("Ǖ", "ǖ") < 0);
	assertTrue("ǖ < ṻ", col.compare("ǖ", "ṻ") < 0);
	assertTrue("ṻ < ǖ", col.compare("ṻ", "ǖ") < 0);
	assertTrue("ǖ < Ǘ", col.compare("ǖ", "Ǘ") < 0);
	assertTrue("Ǘ < Ú̈", col.compare("Ǘ", "Ú̈") < 0);
	assertTrue("Ú̈ < Ǘ", col.compare("Ú̈", "Ǘ") < 0);
	assertTrue("Ǘ < ǘ", col.compare("Ǘ", "ǘ") < 0);
	assertTrue("ǘ < ú̈", col.compare("ǘ", "ú̈") < 0);
	assertTrue("ú̈ < ǘ", col.compare("ú̈", "ǘ") < 0);
	assertTrue("ǘ < Ǚ", col.compare("ǘ", "Ǚ") < 0);
	assertTrue("Ǚ < Ǔ̈", col.compare("Ǚ", "Ǔ̈") < 0);
	assertTrue("Ǔ̈ < Ǚ", col.compare("Ǔ̈", "Ǚ") < 0);
	assertTrue("Ǚ < ǚ", col.compare("Ǚ", "ǚ") < 0);
	assertTrue("ǚ < ǔ̈", col.compare("ǚ", "ǔ̈") < 0);
	assertTrue("ǔ̈ < ǚ", col.compare("ǔ̈", "ǚ") < 0);
	assertTrue("ǚ < Ǜ", col.compare("ǚ", "Ǜ") < 0);
	assertTrue("Ǜ < Ù̈", col.compare("Ǜ", "Ù̈") < 0);
	assertTrue("Ù̈ < Ǜ", col.compare("Ù̈", "Ǜ") < 0);
	assertTrue("Ǜ < ǜ", col.compare("Ǜ", "ǜ") < 0);
	assertTrue("ǜ < ù̈", col.compare("ǜ", "ù̈") < 0);
	assertTrue("ù̈ < ǜ", col.compare("ù̈", "ǜ") < 0);
	assertTrue("ǜ < Ü", col.compare("ǜ", "Ü") < 0);
	assertTrue("Ü < Ü", col.compare("Ü", "Ü") < 0);
	assertTrue("Ü < ü", col.compare("Ü", "ü") < 0);
	assertTrue("ü < ü", col.compare("ü", "ü") < 0);
	assertTrue("ü < V", col.compare("ü", "V") < 0);
	assertTrue("V < v", col.compare("V", "v") < 0);
	assertTrue("v < W", col.compare("v", "W") < 0);
	assertTrue("W < w", col.compare("W", "w") < 0);
	assertTrue("w < X", col.compare("w", "X") < 0);
	assertTrue("X < x", col.compare("X", "x") < 0);
	assertTrue("x < Y", col.compare("x", "Y") < 0);
	assertTrue("Y < y", col.compare("Y", "y") < 0);
	assertTrue("y < Z", col.compare("y", "Z") < 0);
	assertTrue("Z < z", col.compare("Z", "z") < 0);
}

function testJSCollatorPinyinTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	// Hanzi are all primary differences from each other
	
	assertNotUndefined(col);
	
	assertTrue("bā < bá", col.compare("bā", "bá") < 0);
	assertTrue("bá < bǎ", col.compare("bá", "bǎ") < 0);
	assertTrue("bǎ < bà", col.compare("bǎ", "bà") < 0);
	assertTrue("bà < ba", col.compare("bà", "ba") < 0);
	assertTrue("bāi < bai", col.compare("bāi", "bai") < 0);
	assertTrue("bai < chái", col.compare("bai", "chái") < 0);
	assertTrue("chái < chē", col.compare("chái", "chē") < 0);
	assertTrue("chē < chēn", col.compare("chē", "chēn") < 0);
	assertTrue("chēn < ché", col.compare("chēn", "ché") < 0);
	assertTrue("ché < chě", col.compare("ché", "chě") < 0);
	assertTrue("chě < chè", col.compare("chě", "chè") < 0);
	
}


/*
function testJSCollatorHiraganaQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か < が", col.compare("か", "が") < 0);
	assertTrue("が < が", col.compare("が", "が") < 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き < ぎ", col.compare("き", "ぎ") < 0);
	assertTrue("ぎ < ぎ", col.compare("ぎ", "ぎ") < 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く < ぐ", col.compare("く", "ぐ") < 0);
	assertTrue("ぐ < ぐ", col.compare("ぐ", "ぐ") < 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け < げ", col.compare("け", "げ") < 0);
	assertTrue("げ < げ", col.compare("げ", "げ") < 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ < ご", col.compare("こ", "ご") < 0);
	assertTrue("ご < ご", col.compare("ご", "ご") < 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ < ざ", col.compare("さ", "ざ") < 0);
	assertTrue("ざ < ざ", col.compare("ざ", "ざ") < 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し < じ", col.compare("し", "じ") < 0);
	assertTrue("じ < じ", col.compare("じ", "じ") < 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す < ず", col.compare("す", "ず") < 0);
	assertTrue("ず < ず", col.compare("ず", "ず") < 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ < ぜ", col.compare("せ", "ぜ") < 0);
	assertTrue("ぜ < ぜ", col.compare("ぜ", "ぜ") < 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ < ぞ", col.compare("そ", "ぞ") < 0);
	assertTrue("ぞ < ぞ", col.compare("ぞ", "ぞ") < 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た < だ", col.compare("た", "だ") < 0);
	assertTrue("だ < だ", col.compare("だ", "だ") < 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち < ぢ", col.compare("ち", "ぢ") < 0);
	assertTrue("ぢ < ぢ", col.compare("ぢ", "ぢ") < 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ < づ", col.compare("つ", "づ") < 0);
	assertTrue("づ < づ", col.compare("づ", "づ") < 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て < で", col.compare("て", "で") < 0);
	assertTrue("で < で", col.compare("で", "で") < 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と < ど", col.compare("と", "ど") < 0);
	assertTrue("ど < ど", col.compare("ど", "ど") < 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は < ば", col.compare("は", "ば") < 0);
	assertTrue("ば < ば", col.compare("ば", "ば") < 0);
	assertTrue("ば < ぱ", col.compare("ば", "ぱ") < 0);
	assertTrue("ぱ < ぱ", col.compare("ぱ", "ぱ") < 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ < び", col.compare("ひ", "び") < 0);
	assertTrue("び < び", col.compare("び", "び") < 0);
	assertTrue("び < ぴ", col.compare("び", "ぴ") < 0);
	assertTrue("ぴ < ぴ", col.compare("ぴ", "ぴ") < 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
	assertTrue("ぶ < ぶ", col.compare("ぶ", "ぶ") < 0);
	assertTrue("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
	assertTrue("ぷ < ぷ", col.compare("ぷ", "ぷ") < 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ < べ", col.compare("へ", "べ") < 0);
	assertTrue("べ < べ", col.compare("べ", "べ") < 0);
	assertTrue("べ < ぺ", col.compare("べ", "ぺ") < 0);
	assertTrue("ぺ < ぺ", col.compare("ぺ", "ぺ") < 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
	assertTrue("ぼ < ぼ", col.compare("ぼ", "ぼ") < 0);
	assertTrue("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
	assertTrue("ぽ < ぽ", col.compare("ぽ", "ぽ") < 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か < が", col.compare("か", "が") < 0);
	assertTrue("が = が", col.compare("が", "が") === 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き < ぎ", col.compare("き", "ぎ") < 0);
	assertTrue("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く < ぐ", col.compare("く", "ぐ") < 0);
	assertTrue("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け < げ", col.compare("け", "げ") < 0);
	assertTrue("げ = げ", col.compare("げ", "げ") === 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ < ご", col.compare("こ", "ご") < 0);
	assertTrue("ご = ご", col.compare("ご", "ご") === 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ < ざ", col.compare("さ", "ざ") < 0);
	assertTrue("ざ = ざ", col.compare("ざ", "ざ") === 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し < じ", col.compare("し", "じ") < 0);
	assertTrue("じ = じ", col.compare("じ", "じ") === 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す < ず", col.compare("す", "ず") < 0);
	assertTrue("ず = ず", col.compare("ず", "ず") === 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ < ぜ", col.compare("せ", "ぜ") < 0);
	assertTrue("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ < ぞ", col.compare("そ", "ぞ") < 0);
	assertTrue("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た < だ", col.compare("た", "だ") < 0);
	assertTrue("だ = だ", col.compare("だ", "だ") === 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち < ぢ", col.compare("ち", "ぢ") < 0);
	assertTrue("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ < づ", col.compare("つ", "づ") < 0);
	assertTrue("づ = づ", col.compare("づ", "づ") === 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て < で", col.compare("て", "で") < 0);
	assertTrue("で = で", col.compare("で", "で") === 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と < ど", col.compare("と", "ど") < 0);
	assertTrue("ど = ど", col.compare("ど", "ど") === 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は < ば", col.compare("は", "ば") < 0);
	assertTrue("ば = ば", col.compare("ば", "ば") === 0);
	assertTrue("ば < ぱ", col.compare("ば", "ぱ") < 0);
	assertTrue("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ < び", col.compare("ひ", "び") < 0);
	assertTrue("び = び", col.compare("び", "び") === 0);
	assertTrue("び < ぴ", col.compare("び", "ぴ") < 0);
	assertTrue("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
	assertTrue("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
	assertTrue("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
	assertTrue("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ < べ", col.compare("へ", "べ") < 0);
	assertTrue("べ = べ", col.compare("べ", "べ") === 0);
	assertTrue("べ < ぺ", col.compare("べ", "ぺ") < 0);
	assertTrue("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
	assertTrue("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
	assertTrue("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
	assertTrue("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か < が", col.compare("か", "が") < 0);
	assertTrue("が = が", col.compare("が", "が") === 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き < ぎ", col.compare("き", "ぎ") < 0);
	assertTrue("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く < ぐ", col.compare("く", "ぐ") < 0);
	assertTrue("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け < げ", col.compare("け", "げ") < 0);
	assertTrue("げ = げ", col.compare("げ", "げ") === 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ < ご", col.compare("こ", "ご") < 0);
	assertTrue("ご = ご", col.compare("ご", "ご") === 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ < ざ", col.compare("さ", "ざ") < 0);
	assertTrue("ざ = ざ", col.compare("ざ", "ざ") === 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し < じ", col.compare("し", "じ") < 0);
	assertTrue("じ = じ", col.compare("じ", "じ") === 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す < ず", col.compare("す", "ず") < 0);
	assertTrue("ず = ず", col.compare("ず", "ず") === 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ < ぜ", col.compare("せ", "ぜ") < 0);
	assertTrue("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ < ぞ", col.compare("そ", "ぞ") < 0);
	assertTrue("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た < だ", col.compare("た", "だ") < 0);
	assertTrue("だ = だ", col.compare("だ", "だ") === 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち < ぢ", col.compare("ち", "ぢ") < 0);
	assertTrue("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ < づ", col.compare("つ", "づ") < 0);
	assertTrue("づ = づ", col.compare("づ", "づ") === 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て < で", col.compare("て", "で") < 0);
	assertTrue("で = で", col.compare("で", "で") === 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と < ど", col.compare("と", "ど") < 0);
	assertTrue("ど = ど", col.compare("ど", "ど") === 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は < ば", col.compare("は", "ば") < 0);
	assertTrue("ば = ば", col.compare("ば", "ば") === 0);
	assertTrue("ば < ぱ", col.compare("ば", "ぱ") < 0);
	assertTrue("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ < び", col.compare("ひ", "び") < 0);
	assertTrue("び = び", col.compare("び", "び") === 0);
	assertTrue("び < ぴ", col.compare("び", "ぴ") < 0);
	assertTrue("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ < ぶ", col.compare("ふ", "ぶ") < 0);
	assertTrue("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
	assertTrue("ぶ < ぷ", col.compare("ぶ", "ぷ") < 0);
	assertTrue("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ < べ", col.compare("へ", "べ") < 0);
	assertTrue("べ = べ", col.compare("べ", "べ") === 0);
	assertTrue("べ < ぺ", col.compare("べ", "ぺ") < 0);
	assertTrue("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ < ぼ", col.compare("ほ", "ぼ") < 0);
	assertTrue("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
	assertTrue("ぼ < ぽ", col.compare("ぼ", "ぽ") < 0);
	assertTrue("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う = ゔ", col.compare("う", "ゔ") === 0);
	assertTrue("ゔ = ゔ", col.compare("ゔ", "ゔ") === 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);
	assertTrue("え < お", col.compare("え", "お") < 0);
	assertTrue("お < か", col.compare("お", "か") < 0);
	assertTrue("か = が", col.compare("か", "が") === 0);
	assertTrue("が = が", col.compare("が", "が") === 0);
	assertTrue("が < き", col.compare("が", "き") < 0);
	assertTrue("き = ぎ", col.compare("き", "ぎ") === 0);
	assertTrue("ぎ = ぎ", col.compare("ぎ", "ぎ") === 0);
	assertTrue("ぎ < く", col.compare("ぎ", "く") < 0);
	assertTrue("く = ぐ", col.compare("く", "ぐ") === 0);
	assertTrue("ぐ = ぐ", col.compare("ぐ", "ぐ") === 0);
	assertTrue("ぐ < け", col.compare("ぐ", "け") < 0);
	assertTrue("け = げ", col.compare("け", "げ") === 0);
	assertTrue("げ = げ", col.compare("げ", "げ") === 0);
	assertTrue("げ < こ", col.compare("げ", "こ") < 0);
	assertTrue("こ = ご", col.compare("こ", "ご") === 0);
	assertTrue("ご = ご", col.compare("ご", "ご") === 0);
	assertTrue("ご < さ", col.compare("ご", "さ") < 0);
	assertTrue("さ = ざ", col.compare("さ", "ざ") === 0);
	assertTrue("ざ = ざ", col.compare("ざ", "ざ") === 0);
	assertTrue("ざ < し", col.compare("ざ", "し") < 0);
	assertTrue("し = じ", col.compare("し", "じ") === 0);
	assertTrue("じ = じ", col.compare("じ", "じ") === 0);
	assertTrue("じ < す", col.compare("じ", "す") < 0);
	assertTrue("す = ず", col.compare("す", "ず") === 0);
	assertTrue("ず = ず", col.compare("ず", "ず") === 0);
	assertTrue("ず < せ", col.compare("ず", "せ") < 0);
	assertTrue("せ = ぜ", col.compare("せ", "ぜ") === 0);
	assertTrue("ぜ = ぜ", col.compare("ぜ", "ぜ") === 0);
	assertTrue("ぜ < そ", col.compare("ぜ", "そ") < 0);
	assertTrue("そ = ぞ", col.compare("そ", "ぞ") === 0);
	assertTrue("ぞ = ぞ", col.compare("ぞ", "ぞ") === 0);
	assertTrue("ぞ < た", col.compare("ぞ", "た") < 0);
	assertTrue("た = だ", col.compare("た", "だ") === 0);
	assertTrue("だ = だ", col.compare("だ", "だ") === 0);
	assertTrue("だ < ち", col.compare("だ", "ち") < 0);
	assertTrue("ち = ぢ", col.compare("ち", "ぢ") === 0);
	assertTrue("ぢ = ぢ", col.compare("ぢ", "ぢ") === 0);
	assertTrue("ぢ < つ", col.compare("ぢ", "つ") < 0);
	assertTrue("つ = づ", col.compare("つ", "づ") === 0);
	assertTrue("づ = づ", col.compare("づ", "づ") === 0);
	assertTrue("づ < て", col.compare("づ", "て") < 0);
	assertTrue("て = で", col.compare("て", "で") === 0);
	assertTrue("で = で", col.compare("で", "で") === 0);
	assertTrue("で < と", col.compare("で", "と") < 0);
	assertTrue("と = ど", col.compare("と", "ど") === 0);
	assertTrue("ど = ど", col.compare("ど", "ど") === 0);
	assertTrue("ど < な", col.compare("ど", "な") < 0);
	assertTrue("な < に", col.compare("な", "に") < 0);
	assertTrue("に < ぬ", col.compare("に", "ぬ") < 0);
	assertTrue("ぬ < ね", col.compare("ぬ", "ね") < 0);
	assertTrue("ね < の", col.compare("ね", "の") < 0);
	assertTrue("の < は", col.compare("の", "は") < 0);
	assertTrue("は = ば", col.compare("は", "ば") === 0);
	assertTrue("ば = ば", col.compare("ば", "ば") === 0);
	assertTrue("ば = ぱ", col.compare("ば", "ぱ") === 0);
	assertTrue("ぱ = ぱ", col.compare("ぱ", "ぱ") === 0);
	assertTrue("ぱ < ひ", col.compare("ぱ", "ひ") < 0);
	assertTrue("ひ = び", col.compare("ひ", "び") === 0);
	assertTrue("び = び", col.compare("び", "び") === 0);
	assertTrue("び = ぴ", col.compare("び", "ぴ") === 0);
	assertTrue("ぴ = ぴ", col.compare("ぴ", "ぴ") === 0);
	assertTrue("ぴ < ふ", col.compare("ぴ", "ふ") < 0);
	assertTrue("ふ = ぶ", col.compare("ふ", "ぶ") === 0);
	assertTrue("ぶ = ぶ", col.compare("ぶ", "ぶ") === 0);
	assertTrue("ぶ = ぷ", col.compare("ぶ", "ぷ") === 0);
	assertTrue("ぷ = ぷ", col.compare("ぷ", "ぷ") === 0);
	assertTrue("ぷ < へ", col.compare("ぷ", "へ") < 0);
	assertTrue("へ = べ", col.compare("へ", "べ") === 0);
	assertTrue("べ = べ", col.compare("べ", "べ") === 0);
	assertTrue("べ = ぺ", col.compare("べ", "ぺ") === 0);
	assertTrue("ぺ = ぺ", col.compare("ぺ", "ぺ") === 0);
	assertTrue("ぺ < ほ", col.compare("ぺ", "ほ") < 0);
	assertTrue("ほ = ぼ", col.compare("ほ", "ぼ") === 0);
	assertTrue("ぼ = ぼ", col.compare("ぼ", "ぼ") === 0);
	assertTrue("ぼ = ぽ", col.compare("ぼ", "ぽ") === 0);
	assertTrue("ぽ = ぽ", col.compare("ぽ", "ぽ") === 0);
	assertTrue("ぽ < ま", col.compare("ぽ", "ま") < 0);
	assertTrue("ま < み", col.compare("ま", "み") < 0);
	assertTrue("み < む", col.compare("み", "む") < 0);
	assertTrue("む < め", col.compare("む", "め") < 0);
	assertTrue("め < も", col.compare("め", "も") < 0);
	assertTrue("も < や", col.compare("も", "や") < 0);
	assertTrue("や < ゆ", col.compare("や", "ゆ") < 0);
	assertTrue("ゆ < よ", col.compare("ゆ", "よ") < 0);
	assertTrue("よ < ら", col.compare("よ", "ら") < 0);
	assertTrue("ら < り", col.compare("ら", "り") < 0);
	assertTrue("り < る", col.compare("り", "る") < 0);
	assertTrue("る < れ", col.compare("る", "れ") < 0);
	assertTrue("れ < ろ", col.compare("れ", "ろ") < 0);
	assertTrue("ろ < わ", col.compare("ろ", "わ") < 0);
	assertTrue("わ < ゐ", col.compare("わ", "ゐ") < 0);
	assertTrue("ゐ < ゑ", col.compare("ゐ", "ゑ") < 0);
	assertTrue("ゑ < を", col.compare("ゑ", "を") < 0);
	assertTrue("を < ん", col.compare("を", "ん") < 0);
}

function testJSCollatorHiraganaLengthMarksQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);
	assertTrue("ざー < ざぁ", col.compare("ざー", "ざぁ") < 0);
	assertTrue("たー < たぁ", col.compare("たー", "たぁ") < 0);
	assertTrue("だー < だぁ", col.compare("だー", "だぁ") < 0);
	assertTrue("なー < なぁ", col.compare("なー", "なぁ") < 0);
	assertTrue("はー < はぁ", col.compare("はー", "はぁ") < 0);
	assertTrue("ばー < ばぁ", col.compare("ばー", "ばぁ") < 0);
	assertTrue("ぱー < ぱぁ", col.compare("ぱー", "ぱぁ") < 0);
	assertTrue("まー < まぁ", col.compare("まー", "まぁ") < 0);
	assertTrue("ゃー < ゃぁ", col.compare("ゃー", "ゃぁ") < 0);
	assertTrue("やー < やぁ", col.compare("やー", "やぁ") < 0);
	assertTrue("らー < らぁ", col.compare("らー", "らぁ") < 0);
	assertTrue("ゎー < ゎぁ", col.compare("ゎー", "ゎぁ") < 0);
	assertTrue("わー < わぁ", col.compare("わー", "わぁ") < 0);
	
	assertTrue("ぃー < ぃぃ", col.compare("ぃー", "ぃぃ") < 0);
	assertTrue("いー < いぃ", col.compare("いー", "いぃ") < 0);
	assertTrue("きー < きぃ", col.compare("きー", "きぃ") < 0);
	assertTrue("ぎー < ぎぃ", col.compare("ぎー", "ぎぃ") < 0);
	assertTrue("しー < しぃ", col.compare("しー", "しぃ") < 0);
	assertTrue("じー < じぃ", col.compare("じー", "じぃ") < 0);
	assertTrue("ちー < ちぃ", col.compare("ちー", "ちぃ") < 0);
	assertTrue("ぢー < ぢぃ", col.compare("ぢー", "ぢぃ") < 0);
	assertTrue("にー < にぃ", col.compare("にー", "にぃ") < 0);
	assertTrue("ひー < ひぃ", col.compare("ひー", "ひぃ") < 0);
	assertTrue("びー < びぃ", col.compare("びー", "びぃ") < 0);
	assertTrue("ぴー < ぴぃ", col.compare("ぴー", "ぴぃ") < 0);
	assertTrue("みー < みぃ", col.compare("みー", "みぃ") < 0);
	assertTrue("りー < りぃ", col.compare("りー", "りぃ") < 0);
	assertTrue("ゐー < ゐぃ", col.compare("ゐー", "ゐぃ") < 0);
	
	assertTrue("ぅー < ぅぃ", col.compare("ぅー", "ぅぅ") < 0);
	assertTrue("うー < うぃ", col.compare("うー", "うぅ") < 0);
	assertTrue("くー < くぃ", col.compare("くー", "くぅ") < 0);
	assertTrue("ぐー < ぐぃ", col.compare("ぐー", "ぐぅ") < 0);
	assertTrue("すー < すぃ", col.compare("すー", "すぅ") < 0);
	assertTrue("ずー < ずぃ", col.compare("ずー", "ずぅ") < 0);
	assertTrue("っー < っぃ", col.compare("っー", "っぅ") < 0);
	assertTrue("つー < つぃ", col.compare("つー", "つぅ") < 0);
	assertTrue("づー < づぃ", col.compare("づー", "づぅ") < 0);
	assertTrue("ぬー < ぬぃ", col.compare("ぬー", "ぬぅ") < 0);
	assertTrue("ふー < ふぃ", col.compare("ふー", "ふぅ") < 0);
	assertTrue("ぶー < ぶぃ", col.compare("ぶー", "ぶぅ") < 0);
	assertTrue("ぷー < ぷぃ", col.compare("ぷー", "ぷぅ") < 0);
	assertTrue("むー < むぃ", col.compare("むー", "むぅ") < 0);
	assertTrue("ゅー < ゅぃ", col.compare("ゅー", "ゅぅ") < 0);
	assertTrue("ゆー < ゆぃ", col.compare("ゆー", "ゆぅ") < 0);
	assertTrue("るー < るぃ", col.compare("るー", "るぅ") < 0);
	assertTrue("ゔー < ゔぃ", col.compare("ゔー", "ゔぅ") < 0);
	
	assertTrue("ぇー < ぇぇ", col.compare("ぇー", "ぇぇ") < 0);
	assertTrue("えー < えぇ", col.compare("えー", "えぇ") < 0);
	assertTrue("けー < けぇ", col.compare("けー", "けぇ") < 0);
	assertTrue("ゖー < ゖぇ", col.compare("ゖー", "ゖぇ") < 0);
	assertTrue("げー < げぇ", col.compare("げー", "げぇ") < 0);
	assertTrue("せー < せぇ", col.compare("せー", "せぇ") < 0);
	assertTrue("ぜー < ぜぇ", col.compare("ぜー", "ぜぇ") < 0);
	assertTrue("てー < てぇ", col.compare("てー", "てぇ") < 0);
	assertTrue("でー < でぇ", col.compare("でー", "でぇ") < 0);
	assertTrue("ねー < ねぇ", col.compare("ねー", "ねぇ") < 0);
	assertTrue("へー < へぇ", col.compare("へー", "へぇ") < 0);
	assertTrue("べー < べぇ", col.compare("べー", "べぇ") < 0);
	assertTrue("ぺー < ぺぇ", col.compare("ぺー", "ぺぇ") < 0);
	assertTrue("めー < めぇ", col.compare("めー", "めぇ") < 0);
	assertTrue("れー < れぇ", col.compare("れー", "れぇ") < 0);
	assertTrue("ゑー < ゑぇ", col.compare("ゑー", "ゑぇ") < 0);
	
	assertTrue("ぉー < ぉぉ", col.compare("ぉー", "ぉぉ") < 0);
	assertTrue("おー < おぉ", col.compare("おー", "おぉ") < 0);
	assertTrue("こー < こぉ", col.compare("こー", "こぉ") < 0);
	assertTrue("ごー < ごぉ", col.compare("ごー", "ごぉ") < 0);
	assertTrue("そー < そぉ", col.compare("そー", "そぉ") < 0);
	assertTrue("ぞー < ぞぉ", col.compare("ぞー", "ぞぉ") < 0);
	assertTrue("とー < とぉ", col.compare("とー", "とぉ") < 0);
	assertTrue("どー < どぉ", col.compare("どー", "どぉ") < 0);
	assertTrue("のー < のぉ", col.compare("のー", "のぉ") < 0);
	assertTrue("ほー < ほぉ", col.compare("ほー", "ほぉ") < 0);
	assertTrue("ぼー < ぼぉ", col.compare("ぼー", "ぼぉ") < 0);
	assertTrue("ぽー < ぽぉ", col.compare("ぽー", "ぽぉ") < 0);
	assertTrue("もー < もぉ", col.compare("もー", "もぉ") < 0);
	assertTrue("ょー < ょぉ", col.compare("ょー", "ょぉ") < 0);
	assertTrue("よー < よぉ", col.compare("よー", "よぉ") < 0);
	assertTrue("ろー < ろぉ", col.compare("ろー", "ろぉ") < 0);
	assertTrue("をー < をぉ", col.compare("をー", "をぉ") < 0);
}

function testJSCollatorHiraganaLengthMarksTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);
	assertTrue("ざー < ざぁ", col.compare("ざー", "ざぁ") < 0);
	assertTrue("たー < たぁ", col.compare("たー", "たぁ") < 0);
	assertTrue("だー < だぁ", col.compare("だー", "だぁ") < 0);
	assertTrue("なー < なぁ", col.compare("なー", "なぁ") < 0);
	assertTrue("はー < はぁ", col.compare("はー", "はぁ") < 0);
	assertTrue("ばー < ばぁ", col.compare("ばー", "ばぁ") < 0);
	assertTrue("ぱー < ぱぁ", col.compare("ぱー", "ぱぁ") < 0);
	assertTrue("まー < まぁ", col.compare("まー", "まぁ") < 0);
	assertTrue("ゃー < ゃぁ", col.compare("ゃー", "ゃぁ") < 0);
	assertTrue("やー < やぁ", col.compare("やー", "やぁ") < 0);
	assertTrue("らー < らぁ", col.compare("らー", "らぁ") < 0);
	assertTrue("ゎー < ゎぁ", col.compare("ゎー", "ゎぁ") < 0);
	assertTrue("わー < わぁ", col.compare("わー", "わぁ") < 0);
	
	assertTrue("ぃー < ぃぃ", col.compare("ぃー", "ぃぃ") < 0);
	assertTrue("いー < いぃ", col.compare("いー", "いぃ") < 0);
	assertTrue("きー < きぃ", col.compare("きー", "きぃ") < 0);
	assertTrue("ぎー < ぎぃ", col.compare("ぎー", "ぎぃ") < 0);
	assertTrue("しー < しぃ", col.compare("しー", "しぃ") < 0);
	assertTrue("じー < じぃ", col.compare("じー", "じぃ") < 0);
	assertTrue("ちー < ちぃ", col.compare("ちー", "ちぃ") < 0);
	assertTrue("ぢー < ぢぃ", col.compare("ぢー", "ぢぃ") < 0);
	assertTrue("にー < にぃ", col.compare("にー", "にぃ") < 0);
	assertTrue("ひー < ひぃ", col.compare("ひー", "ひぃ") < 0);
	assertTrue("びー < びぃ", col.compare("びー", "びぃ") < 0);
	assertTrue("ぴー < ぴぃ", col.compare("ぴー", "ぴぃ") < 0);
	assertTrue("みー < みぃ", col.compare("みー", "みぃ") < 0);
	assertTrue("りー < りぃ", col.compare("りー", "りぃ") < 0);
	assertTrue("ゐー < ゐぃ", col.compare("ゐー", "ゐぃ") < 0);
	
	assertTrue("ぅー < ぅぅ", col.compare("ぅー", "ぅぅ") < 0);
	assertTrue("うー < うぅ", col.compare("うー", "うぅ") < 0);
	assertTrue("くー < くぅ", col.compare("くー", "くぅ") < 0);
	assertTrue("ぐー < ぐぅ", col.compare("ぐー", "ぐぅ") < 0);
	assertTrue("すー < すぅ", col.compare("すー", "すぅ") < 0);
	assertTrue("ずー < ずぅ", col.compare("ずー", "ずぅ") < 0);
	assertTrue("っー < っぅ", col.compare("っー", "っぅ") < 0);
	assertTrue("つー < つぅ", col.compare("つー", "つぅ") < 0);
	assertTrue("づー < づぅ", col.compare("づー", "づぅ") < 0);
	assertTrue("ぬー < ぬぅ", col.compare("ぬー", "ぬぅ") < 0);
	assertTrue("ふー < ふぅ", col.compare("ふー", "ふぅ") < 0);
	assertTrue("ぶー < ぶぅ", col.compare("ぶー", "ぶぅ") < 0);
	assertTrue("ぷー < ぷぅ", col.compare("ぷー", "ぷぅ") < 0);
	assertTrue("むー < むぅ", col.compare("むー", "むぅ") < 0);
	assertTrue("ゅー < ゅぅ", col.compare("ゅー", "ゅぅ") < 0);
	assertTrue("ゆー < ゆぅ", col.compare("ゆー", "ゆぅ") < 0);
	assertTrue("るー < るぅ", col.compare("るー", "るぅ") < 0);
	assertTrue("ゔー < ゔぅ", col.compare("ゔー", "ゔぅ") < 0);
	
	assertTrue("ぇー < ぇぇ", col.compare("ぇー", "ぇぇ") < 0);
	assertTrue("えー < えぇ", col.compare("えー", "えぇ") < 0);
	assertTrue("けー < けぇ", col.compare("けー", "けぇ") < 0);
	assertTrue("ゖー < ゖぇ", col.compare("ゖー", "ゖぇ") < 0);
	assertTrue("げー < げぇ", col.compare("げー", "げぇ") < 0);
	assertTrue("せー < せぇ", col.compare("せー", "せぇ") < 0);
	assertTrue("ぜー < ぜぇ", col.compare("ぜー", "ぜぇ") < 0);
	assertTrue("てー < てぇ", col.compare("てー", "てぇ") < 0);
	assertTrue("でー < でぇ", col.compare("でー", "でぇ") < 0);
	assertTrue("ねー < ねぇ", col.compare("ねー", "ねぇ") < 0);
	assertTrue("へー < へぇ", col.compare("へー", "へぇ") < 0);
	assertTrue("べー < べぇ", col.compare("べー", "べぇ") < 0);
	assertTrue("ぺー < ぺぇ", col.compare("ぺー", "ぺぇ") < 0);
	assertTrue("めー < めぇ", col.compare("めー", "めぇ") < 0);
	assertTrue("れー < れぇ", col.compare("れー", "れぇ") < 0);
	assertTrue("ゑー < ゑぇ", col.compare("ゑー", "ゑぇ") < 0);
	
	assertTrue("ぉー < ぉぉ", col.compare("ぉー", "ぉぉ") < 0);
	assertTrue("おー < おぉ", col.compare("おー", "おぉ") < 0);
	assertTrue("こー < こぉ", col.compare("こー", "こぉ") < 0);
	assertTrue("ごー < ごぉ", col.compare("ごー", "ごぉ") < 0);
	assertTrue("そー < そぉ", col.compare("そー", "そぉ") < 0);
	assertTrue("ぞー < ぞぉ", col.compare("ぞー", "ぞぉ") < 0);
	assertTrue("とー < とぉ", col.compare("とー", "とぉ") < 0);
	assertTrue("どー < どぉ", col.compare("どー", "どぉ") < 0);
	assertTrue("のー < のぉ", col.compare("のー", "のぉ") < 0);
	assertTrue("ほー < ほぉ", col.compare("ほー", "ほぉ") < 0);
	assertTrue("ぼー < ぼぉ", col.compare("ぼー", "ぼぉ") < 0);
	assertTrue("ぽー < ぽぉ", col.compare("ぽー", "ぽぉ") < 0);
	assertTrue("もー < もぉ", col.compare("もー", "もぉ") < 0);
	assertTrue("ょー < ょぉ", col.compare("ょー", "ょぉ") < 0);
	assertTrue("よー < よぉ", col.compare("よー", "よぉ") < 0);
	assertTrue("ろー < ろぉ", col.compare("ろー", "ろぉ") < 0);
	assertTrue("をー < をぉ", col.compare("をー", "をぉ") < 0);
}

function testJSCollatorHiraganaLengthMarksSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー = ぁぁ", col.compare("ぁー", "ぁぁ") === 0);
	assertTrue("あー = あぁ", col.compare("あー", "あぁ") === 0);
	assertTrue("かー = かぁ", col.compare("かー", "かぁ") === 0);
	assertTrue("ゕー = ゕぁ", col.compare("ゕー", "ゕぁ") === 0);
	assertTrue("がー = がぁ", col.compare("がー", "がぁ") === 0);
	assertTrue("さー = さぁ", col.compare("さー", "さぁ") === 0);
	assertTrue("ざー = ざぁ", col.compare("ざー", "ざぁ") === 0);
	assertTrue("たー = たぁ", col.compare("たー", "たぁ") === 0);
	assertTrue("だー = だぁ", col.compare("だー", "だぁ") === 0);
	assertTrue("なー = なぁ", col.compare("なー", "なぁ") === 0);
	assertTrue("はー = はぁ", col.compare("はー", "はぁ") === 0);
	assertTrue("ばー = ばぁ", col.compare("ばー", "ばぁ") === 0);
	assertTrue("ぱー = ぱぁ", col.compare("ぱー", "ぱぁ") === 0);
	assertTrue("まー = まぁ", col.compare("まー", "まぁ") === 0);
	assertTrue("ゃー = ゃぁ", col.compare("ゃー", "ゃぁ") === 0);
	assertTrue("やー = やぁ", col.compare("やー", "やぁ") === 0);
	assertTrue("らー = らぁ", col.compare("らー", "らぁ") === 0);
	assertTrue("ゎー = ゎぁ", col.compare("ゎー", "ゎぁ") === 0);
	assertTrue("わー = わぁ", col.compare("わー", "わぁ") === 0);
	
	assertTrue("ぃー = ぃぃ", col.compare("ぃー", "ぃぃ") === 0);
	assertTrue("いー = いぃ", col.compare("いー", "いぃ") === 0);
	assertTrue("きー = きぃ", col.compare("きー", "きぃ") === 0);
	assertTrue("ぎー = ぎぃ", col.compare("ぎー", "ぎぃ") === 0);
	assertTrue("しー = しぃ", col.compare("しー", "しぃ") === 0);
	assertTrue("じー = じぃ", col.compare("じー", "じぃ") === 0);
	assertTrue("ちー = ちぃ", col.compare("ちー", "ちぃ") === 0);
	assertTrue("ぢー = ぢぃ", col.compare("ぢー", "ぢぃ") === 0);
	assertTrue("にー = にぃ", col.compare("にー", "にぃ") === 0);
	assertTrue("ひー = ひぃ", col.compare("ひー", "ひぃ") === 0);
	assertTrue("びー = びぃ", col.compare("びー", "びぃ") === 0);
	assertTrue("ぴー = ぴぃ", col.compare("ぴー", "ぴぃ") === 0);
	assertTrue("みー = みぃ", col.compare("みー", "みぃ") === 0);
	assertTrue("りー = りぃ", col.compare("りー", "りぃ") === 0);
	assertTrue("ゐー = ゐぃ", col.compare("ゐー", "ゐぃ") === 0);
	
	assertTrue("ぅー = ぅぃ", col.compare("ぅー", "ぅぅ") === 0);
	assertTrue("うー = うぃ", col.compare("うー", "うぅ") === 0);
	assertTrue("くー = くぃ", col.compare("くー", "くぅ") === 0);
	assertTrue("ぐー = ぐぃ", col.compare("ぐー", "ぐぅ") === 0);
	assertTrue("すー = すぃ", col.compare("すー", "すぅ") === 0);
	assertTrue("ずー = ずぃ", col.compare("ずー", "ずぅ") === 0);
	assertTrue("っー = っぃ", col.compare("っー", "っぅ") === 0);
	assertTrue("つー = つぃ", col.compare("つー", "つぅ") === 0);
	assertTrue("づー = づぃ", col.compare("づー", "づぅ") === 0);
	assertTrue("ぬー = ぬぃ", col.compare("ぬー", "ぬぅ") === 0);
	assertTrue("ふー = ふぃ", col.compare("ふー", "ふぅ") === 0);
	assertTrue("ぶー = ぶぃ", col.compare("ぶー", "ぶぅ") === 0);
	assertTrue("ぷー = ぷぃ", col.compare("ぷー", "ぷぅ") === 0);
	assertTrue("むー = むぃ", col.compare("むー", "むぅ") === 0);
	assertTrue("ゅー = ゅぃ", col.compare("ゅー", "ゅぅ") === 0);
	assertTrue("ゆー = ゆぃ", col.compare("ゆー", "ゆぅ") === 0);
	assertTrue("るー = るぃ", col.compare("るー", "るぅ") === 0);
	assertTrue("ゔー = ゔぃ", col.compare("ゔー", "ゔぅ") === 0);
	
	assertTrue("ぇー = ぇぇ", col.compare("ぇー", "ぇぇ") === 0);
	assertTrue("えー = えぇ", col.compare("えー", "えぇ") === 0);
	assertTrue("けー = けぇ", col.compare("けー", "けぇ") === 0);
	assertTrue("ゖー = ゖぇ", col.compare("ゖー", "ゖぇ") === 0);
	assertTrue("げー = げぇ", col.compare("げー", "げぇ") === 0);
	assertTrue("せー = せぇ", col.compare("せー", "せぇ") === 0);
	assertTrue("ぜー = ぜぇ", col.compare("ぜー", "ぜぇ") === 0);
	assertTrue("てー = てぇ", col.compare("てー", "てぇ") === 0);
	assertTrue("でー = でぇ", col.compare("でー", "でぇ") === 0);
	assertTrue("ねー = ねぇ", col.compare("ねー", "ねぇ") === 0);
	assertTrue("へー = へぇ", col.compare("へー", "へぇ") === 0);
	assertTrue("べー = べぇ", col.compare("べー", "べぇ") === 0);
	assertTrue("ぺー = ぺぇ", col.compare("ぺー", "ぺぇ") === 0);
	assertTrue("めー = めぇ", col.compare("めー", "めぇ") === 0);
	assertTrue("れー = れぇ", col.compare("れー", "れぇ") === 0);
	assertTrue("ゑー = ゑぇ", col.compare("ゑー", "ゑぇ") === 0);
	
	assertTrue("ぉー = ぉぉ", col.compare("ぉー", "ぉぉ") === 0);
	assertTrue("おー = おぉ", col.compare("おー", "おぉ") === 0);
	assertTrue("こー = こぉ", col.compare("こー", "こぉ") === 0);
	assertTrue("ごー = ごぉ", col.compare("ごー", "ごぉ") === 0);
	assertTrue("そー = そぉ", col.compare("そー", "そぉ") === 0);
	assertTrue("ぞー = ぞぉ", col.compare("ぞー", "ぞぉ") === 0);
	assertTrue("とー = とぉ", col.compare("とー", "とぉ") === 0);
	assertTrue("どー = どぉ", col.compare("どー", "どぉ") === 0);
	assertTrue("のー = のぉ", col.compare("のー", "のぉ") === 0);
	assertTrue("ほー = ほぉ", col.compare("ほー", "ほぉ") === 0);
	assertTrue("ぼー = ぼぉ", col.compare("ぼー", "ぼぉ") === 0);
	assertTrue("ぽー = ぽぉ", col.compare("ぽー", "ぽぉ") === 0);
	assertTrue("もー = もぉ", col.compare("もー", "もぉ") === 0);
	assertTrue("ょー = ょぉ", col.compare("ょー", "ょぉ") === 0);
	assertTrue("よー = よぉ", col.compare("よー", "よぉ") === 0);
	assertTrue("ろー = ろぉ", col.compare("ろー", "ろぉ") === 0);
	assertTrue("をー = をぉ", col.compare("をー", "をぉ") === 0);
}

function testJSCollatorHiraganaLengthMarksPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("ぁー = ぁぁ", col.compare("ぁー", "ぁぁ") === 0);
	assertTrue("あー = あぁ", col.compare("あー", "あぁ") === 0);
	assertTrue("かー = かぁ", col.compare("かー", "かぁ") === 0);
	assertTrue("ゕー = ゕぁ", col.compare("ゕー", "ゕぁ") === 0);
	assertTrue("がー = がぁ", col.compare("がー", "がぁ") === 0);
	assertTrue("さー = さぁ", col.compare("さー", "さぁ") === 0);
	assertTrue("ざー = ざぁ", col.compare("ざー", "ざぁ") === 0);
	assertTrue("たー = たぁ", col.compare("たー", "たぁ") === 0);
	assertTrue("だー = だぁ", col.compare("だー", "だぁ") === 0);
	assertTrue("なー = なぁ", col.compare("なー", "なぁ") === 0);
	assertTrue("はー = はぁ", col.compare("はー", "はぁ") === 0);
	assertTrue("ばー = ばぁ", col.compare("ばー", "ばぁ") === 0);
	assertTrue("ぱー = ぱぁ", col.compare("ぱー", "ぱぁ") === 0);
	assertTrue("まー = まぁ", col.compare("まー", "まぁ") === 0);
	assertTrue("ゃー = ゃぁ", col.compare("ゃー", "ゃぁ") === 0);
	assertTrue("やー = やぁ", col.compare("やー", "やぁ") === 0);
	assertTrue("らー = らぁ", col.compare("らー", "らぁ") === 0);
	assertTrue("ゎー = ゎぁ", col.compare("ゎー", "ゎぁ") === 0);
	assertTrue("わー = わぁ", col.compare("わー", "わぁ") === 0);
	
	assertTrue("ぃー = ぃぃ", col.compare("ぃー", "ぃぃ") === 0);
	assertTrue("いー = いぃ", col.compare("いー", "いぃ") === 0);
	assertTrue("きー = きぃ", col.compare("きー", "きぃ") === 0);
	assertTrue("ぎー = ぎぃ", col.compare("ぎー", "ぎぃ") === 0);
	assertTrue("しー = しぃ", col.compare("しー", "しぃ") === 0);
	assertTrue("じー = じぃ", col.compare("じー", "じぃ") === 0);
	assertTrue("ちー = ちぃ", col.compare("ちー", "ちぃ") === 0);
	assertTrue("ぢー = ぢぃ", col.compare("ぢー", "ぢぃ") === 0);
	assertTrue("にー = にぃ", col.compare("にー", "にぃ") === 0);
	assertTrue("ひー = ひぃ", col.compare("ひー", "ひぃ") === 0);
	assertTrue("びー = びぃ", col.compare("びー", "びぃ") === 0);
	assertTrue("ぴー = ぴぃ", col.compare("ぴー", "ぴぃ") === 0);
	assertTrue("みー = みぃ", col.compare("みー", "みぃ") === 0);
	assertTrue("りー = りぃ", col.compare("りー", "りぃ") === 0);
	assertTrue("ゐー = ゐぃ", col.compare("ゐー", "ゐぃ") === 0);
	
	assertTrue("ぅー = ぅぃ", col.compare("ぅー", "ぅぅ") === 0);
	assertTrue("うー = うぃ", col.compare("うー", "うぅ") === 0);
	assertTrue("くー = くぃ", col.compare("くー", "くぅ") === 0);
	assertTrue("ぐー = ぐぃ", col.compare("ぐー", "ぐぅ") === 0);
	assertTrue("すー = すぃ", col.compare("すー", "すぅ") === 0);
	assertTrue("ずー = ずぃ", col.compare("ずー", "ずぅ") === 0);
	assertTrue("っー = っぃ", col.compare("っー", "っぅ") === 0);
	assertTrue("つー = つぃ", col.compare("つー", "つぅ") === 0);
	assertTrue("づー = づぃ", col.compare("づー", "づぅ") === 0);
	assertTrue("ぬー = ぬぃ", col.compare("ぬー", "ぬぅ") === 0);
	assertTrue("ふー = ふぃ", col.compare("ふー", "ふぅ") === 0);
	assertTrue("ぶー = ぶぃ", col.compare("ぶー", "ぶぅ") === 0);
	assertTrue("ぷー = ぷぃ", col.compare("ぷー", "ぷぅ") === 0);
	assertTrue("むー = むぃ", col.compare("むー", "むぅ") === 0);
	assertTrue("ゅー = ゅぃ", col.compare("ゅー", "ゅぅ") === 0);
	assertTrue("ゆー = ゆぃ", col.compare("ゆー", "ゆぅ") === 0);
	assertTrue("るー = るぃ", col.compare("るー", "るぅ") === 0);
	assertTrue("ゔー = ゔぃ", col.compare("ゔー", "ゔぅ") === 0);
	
	assertTrue("ぇー = ぇぇ", col.compare("ぇー", "ぇぇ") === 0);
	assertTrue("えー = えぇ", col.compare("えー", "えぇ") === 0);
	assertTrue("けー = けぇ", col.compare("けー", "けぇ") === 0);
	assertTrue("ゖー = ゖぇ", col.compare("ゖー", "ゖぇ") === 0);
	assertTrue("げー = げぇ", col.compare("げー", "げぇ") === 0);
	assertTrue("せー = せぇ", col.compare("せー", "せぇ") === 0);
	assertTrue("ぜー = ぜぇ", col.compare("ぜー", "ぜぇ") === 0);
	assertTrue("てー = てぇ", col.compare("てー", "てぇ") === 0);
	assertTrue("でー = でぇ", col.compare("でー", "でぇ") === 0);
	assertTrue("ねー = ねぇ", col.compare("ねー", "ねぇ") === 0);
	assertTrue("へー = へぇ", col.compare("へー", "へぇ") === 0);
	assertTrue("べー = べぇ", col.compare("べー", "べぇ") === 0);
	assertTrue("ぺー = ぺぇ", col.compare("ぺー", "ぺぇ") === 0);
	assertTrue("めー = めぇ", col.compare("めー", "めぇ") === 0);
	assertTrue("れー = れぇ", col.compare("れー", "れぇ") === 0);
	assertTrue("ゑー = ゑぇ", col.compare("ゑー", "ゑぇ") === 0);
	
	assertTrue("ぉー = ぉぉ", col.compare("ぉー", "ぉぉ") === 0);
	assertTrue("おー = おぉ", col.compare("おー", "おぉ") === 0);
	assertTrue("こー = こぉ", col.compare("こー", "こぉ") === 0);
	assertTrue("ごー = ごぉ", col.compare("ごー", "ごぉ") === 0);
	assertTrue("そー = そぉ", col.compare("そー", "そぉ") === 0);
	assertTrue("ぞー = ぞぉ", col.compare("ぞー", "ぞぉ") === 0);
	assertTrue("とー = とぉ", col.compare("とー", "とぉ") === 0);
	assertTrue("どー = どぉ", col.compare("どー", "どぉ") === 0);
	assertTrue("のー = のぉ", col.compare("のー", "のぉ") === 0);
	assertTrue("ほー = ほぉ", col.compare("ほー", "ほぉ") === 0);
	assertTrue("ぼー = ぼぉ", col.compare("ぼー", "ぼぉ") === 0);
	assertTrue("ぽー = ぽぉ", col.compare("ぽー", "ぽぉ") === 0);
	assertTrue("もー = もぉ", col.compare("もー", "もぉ") === 0);
	assertTrue("ょー = ょぉ", col.compare("ょー", "ょぉ") === 0);
	assertTrue("よー = よぉ", col.compare("よー", "よぉ") === 0);
	assertTrue("ろー = ろぉ", col.compare("ろー", "ろぉ") === 0);
	assertTrue("をー = をぉ", col.compare("をー", "をぉ") === 0);
}

function testJSCollatorHiraganaIterationMarksQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);
	assertTrue("ゔゞ < ゔう", col.compare("ゔゞ", "ゔう") < 0);
	assertTrue("えゝ < ええ", col.compare("えゝ", "ええ") < 0);
	assertTrue("ぇゝ < ぇえ", col.compare("ぇゝ", "ぇえ") < 0);
	assertTrue("おゝ < おお", col.compare("おゝ", "おお") < 0);
	assertTrue("ぉゝ < ぉお", col.compare("ぉゝ", "ぉお") < 0);

	assertTrue("かゝ < かか", col.compare("かゝ", "かか") < 0);
	assertTrue("ゕゝ < ゕか", col.compare("ゕゝ", "ゕか") < 0);
	assertTrue("がゝ < がが", col.compare("がゝ", "がが") < 0);
	assertTrue("きゝ < きき", col.compare("きゝ", "きき") < 0);
	assertTrue("ぎゝ < ぎき", col.compare("ぎゝ", "ぎき") < 0);
	assertTrue("きゞ < きき", col.compare("きゞ", "きき") < 0);
	assertTrue("ぎゞ < ぎき", col.compare("ぎゞ", "ぎき") < 0);
	assertTrue("くゝ < くく", col.compare("くゝ", "くく") < 0);
	assertTrue("ぐゝ < ぐく", col.compare("ぐゝ", "ぐく") < 0);
	assertTrue("くゞ < くく", col.compare("くゞ", "くく") < 0);
	assertTrue("ぐゞ < ぐく", col.compare("ぐゞ", "ぐく") < 0);
	assertTrue("けゝ < けけ", col.compare("けゝ", "けけ") < 0);
	assertTrue("ゖゝ < ゖけ", col.compare("ゖゝ", "ゖけ") < 0);
	assertTrue("げゝ < げげ", col.compare("げゝ", "げげ") < 0);
	assertTrue("こゝ < ここ", col.compare("こゝ", "ここ") < 0);
	assertTrue("ごゝ < ごこ", col.compare("ごゝ", "ごこ") < 0);
	assertTrue("こゞ < ここ", col.compare("こゞ", "ここ") < 0);
	assertTrue("ごゞ < ごこ", col.compare("ごゞ", "ごこ") < 0);

	assertTrue("さゝ < ささ", col.compare("さゝ", "ささ") < 0);
	assertTrue("ざゝ < ざさ", col.compare("ざゝ", "ざさ") < 0);
	assertTrue("さゞ < ささ", col.compare("さゞ", "ささ") < 0);
	assertTrue("ざゞ < ざさ", col.compare("ざゞ", "ざさ") < 0);
	assertTrue("しゝ < しし", col.compare("しゝ", "しし") < 0);
	assertTrue("じゝ < じし", col.compare("じゝ", "じし") < 0);
	assertTrue("しゞ < しし", col.compare("しゞ", "しし") < 0);
	assertTrue("じゞ < じし", col.compare("じゞ", "じし") < 0);
	assertTrue("すゝ < すす", col.compare("すゝ", "すす") < 0);
	assertTrue("ずゝ < ずす", col.compare("ずゝ", "ずす") < 0);
	assertTrue("すゞ < すす", col.compare("すゞ", "すす") < 0);
	assertTrue("ずゞ < ずす", col.compare("ずゞ", "ずす") < 0);
	assertTrue("せゝ < せせ", col.compare("せゝ", "せせ") < 0);
	assertTrue("ぜゝ < ぜせ", col.compare("ぜゝ", "ぜせ") < 0);
	assertTrue("せゞ < せせ", col.compare("せゞ", "せせ") < 0);
	assertTrue("ぜゞ < ぜせ", col.compare("ぜゞ", "ぜせ") < 0);
	assertTrue("そゝ < そそ", col.compare("そゝ", "そそ") < 0);
	assertTrue("ぞゝ < ぞそ", col.compare("ぞゝ", "ぞそ") < 0);
	assertTrue("そゞ < そそ", col.compare("そゞ", "そそ") < 0);
	assertTrue("ぞゞ < ぞそ", col.compare("ぞゞ", "ぞそ") < 0);

	assertTrue("たゝ < たた", col.compare("たゝ", "たた") < 0);
	assertTrue("だゝ < だた", col.compare("だゝ", "だた") < 0);
	assertTrue("たゞ < たた", col.compare("たゞ", "たた") < 0);
	assertTrue("だゞ < だた", col.compare("だゞ", "だた") < 0);
	assertTrue("ちゝ < ちち", col.compare("ちゝ", "ちち") < 0);
	assertTrue("ぢゝ < ぢち", col.compare("ぢゝ", "ぢち") < 0);
	assertTrue("ちゞ < ちち", col.compare("ちゞ", "ちち") < 0);
	assertTrue("ぢゞ < ぢち", col.compare("ぢゞ", "ぢち") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゝ < っつ", col.compare("っゝ", "っつ") < 0);
	assertTrue("づゝ < づつ", col.compare("づゝ", "づつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("づゞ < づつ", col.compare("づゞ", "づつ") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゞ < っつ", col.compare("っゞ", "っつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("てゝ < てて", col.compare("てゝ", "てて") < 0);
	assertTrue("でゝ < でて", col.compare("でゝ", "でて") < 0);
	assertTrue("てゞ < てて", col.compare("てゞ", "てて") < 0);
	assertTrue("でゞ < でて", col.compare("でゞ", "でて") < 0);
	assertTrue("とゝ < とと", col.compare("とゝ", "とと") < 0);
	assertTrue("どゝ < どと", col.compare("どゝ", "どと") < 0);
	assertTrue("とゞ < とと", col.compare("とゞ", "とと") < 0);
	assertTrue("どゞ < どと", col.compare("どゞ", "どと") < 0);

	assertTrue("なゝ < なな", col.compare("なゝ", "なな") < 0);
	assertTrue("にゝ < にに", col.compare("にゝ", "にに") < 0);
	assertTrue("ぬゝ < ぬぬ", col.compare("ぬゝ", "ぬぬ") < 0);
	assertTrue("ねゝ < ねね", col.compare("ねゝ", "ねね") < 0);
	assertTrue("のゝ < のの", col.compare("のゝ", "のの") < 0);

	assertTrue("はゝ < はは", col.compare("はゝ", "はは") < 0);
	assertTrue("ばゝ < ばは", col.compare("ばゝ", "ばは") < 0);
	assertTrue("はゞ < はは", col.compare("はゞ", "はは") < 0);
	assertTrue("ばゞ < ばは", col.compare("ばゞ", "ばは") < 0);
	assertTrue("ぱゝ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ぱゞ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ひゝ < ひひ", col.compare("ひゝ", "ひひ") < 0);
	assertTrue("びゝ < びひ", col.compare("びゝ", "びひ") < 0);
	assertTrue("ひゞ < ひひ", col.compare("ひゞ", "ひひ") < 0);
	assertTrue("びゞ < びひ", col.compare("びゞ", "びひ") < 0);
	assertTrue("ぴゝ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ぴゞ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ふゝ < ふふ", col.compare("ふゝ", "ふふ") < 0);
	assertTrue("ぶゝ < ぶふ", col.compare("ぶゝ", "ぶふ") < 0);
	assertTrue("ふゞ < ふふ", col.compare("ふゞ", "ふふ") < 0);
	assertTrue("ぶゞ < ぶふ", col.compare("ぶゞ", "ぶふ") < 0);
	assertTrue("ぷゝ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("ぷゞ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("へゝ < へへ", col.compare("へゝ", "へへ") < 0);
	assertTrue("べゝ < べへ", col.compare("べゝ", "べへ") < 0);
	assertTrue("へゞ < へへ", col.compare("へゞ", "へへ") < 0);
	assertTrue("べゞ < べへ", col.compare("べゞ", "べへ") < 0);
	assertTrue("ぺゝ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ぺゞ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ほゝ < ほほ", col.compare("ほゝ", "ほほ") < 0);
	assertTrue("ぼゝ < ぼほ", col.compare("ぼゝ", "ぼほ") < 0);
	assertTrue("ほゞ < ほほ", col.compare("ほゞ", "ほほ") < 0);
	assertTrue("ぼゞ < ぼほ", col.compare("ぼゞ", "ぼほ") < 0);
	assertTrue("ぽゝ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);
	assertTrue("ぽゞ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);

	assertTrue("まゝ < まま", col.compare("まゝ", "まま") < 0);
	assertTrue("みゝ < みみ", col.compare("みゝ", "みみ") < 0);
	assertTrue("むゝ < むむ", col.compare("むゝ", "むむ") < 0);
	assertTrue("めゝ < めめ", col.compare("めゝ", "めめ") < 0);
	assertTrue("もゝ < もも", col.compare("もゝ", "もも") < 0);

	assertTrue("やゝ < やや", col.compare("やゝ", "やや") < 0);
	assertTrue("ゃゝ < ゃや", col.compare("ゃゝ", "ゃや") < 0);
	assertTrue("ゆゝ < ゆゆ", col.compare("ゆゝ", "ゆゆ") < 0);
	assertTrue("ゅゝ < ゅゆ", col.compare("ゅゝ", "ゅゆ") < 0);
	assertTrue("よゝ < よよ", col.compare("よゝ", "よよ") < 0);
	assertTrue("ょゝ < ょよ", col.compare("ょゝ", "ょよ") < 0);

	assertTrue("らゝ < らら", col.compare("らゝ", "らら") < 0);
	assertTrue("りゝ < りり", col.compare("りゝ", "りり") < 0);
	assertTrue("るゝ < るる", col.compare("るゝ", "るる") < 0);
	assertTrue("れゝ < れれ", col.compare("れゝ", "れれ") < 0);
	assertTrue("ろゝ < ろろ", col.compare("ろゝ", "ろろ") < 0);

	assertTrue("わゝ < わわ", col.compare("わゝ", "わわ") < 0);
	assertTrue("ゎゝ < ゎわ", col.compare("ゎゝ", "ゎわ") < 0);
	assertTrue("わゞ < わわ", col.compare("わゞ", "わわ") < 0);
	assertTrue("ゎゞ < ゎわ", col.compare("ゎゞ", "ゎわ") < 0);
	assertTrue("ゐゝ < ゐゐ", col.compare("ゐゝ", "ゐゐ") < 0);
	assertTrue("ゐゞ < ゐゐ", col.compare("ゐゞ", "ゐゐ") < 0);
	assertTrue("ゑゝ < ゑゑ", col.compare("ゑゝ", "ゑゑ") < 0);
	assertTrue("ゑゞ < ゑゑ", col.compare("ゑゞ", "ゑゑ") < 0);
	assertTrue("をゝ < をを", col.compare("をゝ", "をを") < 0);
	assertTrue("をゞ < をを", col.compare("をゞ", "をを") < 0);

	assertTrue("んゝ < んん", col.compare("んゝ", "んん") < 0);
}

function testJSCollatorHiraganaIterationMarksTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);
	assertTrue("ゔゞ < ゔう", col.compare("ゔゞ", "ゔう") < 0);
	assertTrue("えゝ < ええ", col.compare("えゝ", "ええ") < 0);
	assertTrue("ぇゝ < ぇえ", col.compare("ぇゝ", "ぇえ") < 0);
	assertTrue("おゝ < おお", col.compare("おゝ", "おお") < 0);
	assertTrue("ぉゝ < ぉお", col.compare("ぉゝ", "ぉお") < 0);

	assertTrue("かゝ < かか", col.compare("かゝ", "かか") < 0);
	assertTrue("ゕゝ < ゕか", col.compare("ゕゝ", "ゕか") < 0);
	assertTrue("がゝ < がが", col.compare("がゝ", "がが") < 0);
	assertTrue("きゝ < きき", col.compare("きゝ", "きき") < 0);
	assertTrue("ぎゝ < ぎき", col.compare("ぎゝ", "ぎき") < 0);
	assertTrue("きゞ < きき", col.compare("きゞ", "きき") < 0);
	assertTrue("ぎゞ < ぎき", col.compare("ぎゞ", "ぎき") < 0);
	assertTrue("くゝ < くく", col.compare("くゝ", "くく") < 0);
	assertTrue("ぐゝ < ぐく", col.compare("ぐゝ", "ぐく") < 0);
	assertTrue("くゞ < くく", col.compare("くゞ", "くく") < 0);
	assertTrue("ぐゞ < ぐく", col.compare("ぐゞ", "ぐく") < 0);
	assertTrue("けゝ < けけ", col.compare("けゝ", "けけ") < 0);
	assertTrue("ゖゝ < ゖけ", col.compare("ゖゝ", "ゖけ") < 0);
	assertTrue("げゝ < げげ", col.compare("げゝ", "げげ") < 0);
	assertTrue("こゝ < ここ", col.compare("こゝ", "ここ") < 0);
	assertTrue("ごゝ < ごこ", col.compare("ごゝ", "ごこ") < 0);
	assertTrue("こゞ < ここ", col.compare("こゞ", "ここ") < 0);
	assertTrue("ごゞ < ごこ", col.compare("ごゞ", "ごこ") < 0);

	assertTrue("さゝ < ささ", col.compare("さゝ", "ささ") < 0);
	assertTrue("ざゝ < ざさ", col.compare("ざゝ", "ざさ") < 0);
	assertTrue("さゞ < ささ", col.compare("さゞ", "ささ") < 0);
	assertTrue("ざゞ < ざさ", col.compare("ざゞ", "ざさ") < 0);
	assertTrue("しゝ < しし", col.compare("しゝ", "しし") < 0);
	assertTrue("じゝ < じし", col.compare("じゝ", "じし") < 0);
	assertTrue("しゞ < しし", col.compare("しゞ", "しし") < 0);
	assertTrue("じゞ < じし", col.compare("じゞ", "じし") < 0);
	assertTrue("すゝ < すす", col.compare("すゝ", "すす") < 0);
	assertTrue("ずゝ < ずす", col.compare("ずゝ", "ずす") < 0);
	assertTrue("すゞ < すす", col.compare("すゞ", "すす") < 0);
	assertTrue("ずゞ < ずす", col.compare("ずゞ", "ずす") < 0);
	assertTrue("せゝ < せせ", col.compare("せゝ", "せせ") < 0);
	assertTrue("ぜゝ < ぜせ", col.compare("ぜゝ", "ぜせ") < 0);
	assertTrue("せゞ < せせ", col.compare("せゞ", "せせ") < 0);
	assertTrue("ぜゞ < ぜせ", col.compare("ぜゞ", "ぜせ") < 0);
	assertTrue("そゝ < そそ", col.compare("そゝ", "そそ") < 0);
	assertTrue("ぞゝ < ぞそ", col.compare("ぞゝ", "ぞそ") < 0);
	assertTrue("そゞ < そそ", col.compare("そゞ", "そそ") < 0);
	assertTrue("ぞゞ < ぞそ", col.compare("ぞゞ", "ぞそ") < 0);

	assertTrue("たゝ < たた", col.compare("たゝ", "たた") < 0);
	assertTrue("だゝ < だた", col.compare("だゝ", "だた") < 0);
	assertTrue("たゞ < たた", col.compare("たゞ", "たた") < 0);
	assertTrue("だゞ < だた", col.compare("だゞ", "だた") < 0);
	assertTrue("ちゝ < ちち", col.compare("ちゝ", "ちち") < 0);
	assertTrue("ぢゝ < ぢち", col.compare("ぢゝ", "ぢち") < 0);
	assertTrue("ちゞ < ちち", col.compare("ちゞ", "ちち") < 0);
	assertTrue("ぢゞ < ぢち", col.compare("ぢゞ", "ぢち") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゝ < っつ", col.compare("っゝ", "っつ") < 0);
	assertTrue("づゝ < づつ", col.compare("づゝ", "づつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("づゞ < づつ", col.compare("づゞ", "づつ") < 0);
	assertTrue("つゝ < つつ", col.compare("つゝ", "つつ") < 0);
	assertTrue("っゞ < っつ", col.compare("っゞ", "っつ") < 0);
	assertTrue("つゞ < つつ", col.compare("つゞ", "つつ") < 0);
	assertTrue("てゝ < てて", col.compare("てゝ", "てて") < 0);
	assertTrue("でゝ < でて", col.compare("でゝ", "でて") < 0);
	assertTrue("てゞ < てて", col.compare("てゞ", "てて") < 0);
	assertTrue("でゞ < でて", col.compare("でゞ", "でて") < 0);
	assertTrue("とゝ < とと", col.compare("とゝ", "とと") < 0);
	assertTrue("どゝ < どと", col.compare("どゝ", "どと") < 0);
	assertTrue("とゞ < とと", col.compare("とゞ", "とと") < 0);
	assertTrue("どゞ < どと", col.compare("どゞ", "どと") < 0);

	assertTrue("なゝ < なな", col.compare("なゝ", "なな") < 0);
	assertTrue("にゝ < にに", col.compare("にゝ", "にに") < 0);
	assertTrue("ぬゝ < ぬぬ", col.compare("ぬゝ", "ぬぬ") < 0);
	assertTrue("ねゝ < ねね", col.compare("ねゝ", "ねね") < 0);
	assertTrue("のゝ < のの", col.compare("のゝ", "のの") < 0);

	assertTrue("はゝ < はは", col.compare("はゝ", "はは") < 0);
	assertTrue("ばゝ < ばは", col.compare("ばゝ", "ばは") < 0);
	assertTrue("はゞ < はは", col.compare("はゞ", "はは") < 0);
	assertTrue("ばゞ < ばは", col.compare("ばゞ", "ばは") < 0);
	assertTrue("ぱゝ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ぱゞ < ぱは", col.compare("ぱゝ", "ぱは") < 0);
	assertTrue("ひゝ < ひひ", col.compare("ひゝ", "ひひ") < 0);
	assertTrue("びゝ < びひ", col.compare("びゝ", "びひ") < 0);
	assertTrue("ひゞ < ひひ", col.compare("ひゞ", "ひひ") < 0);
	assertTrue("びゞ < びひ", col.compare("びゞ", "びひ") < 0);
	assertTrue("ぴゝ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ぴゞ < ぴひ", col.compare("ぴゝ", "ぴひ") < 0);
	assertTrue("ふゝ < ふふ", col.compare("ふゝ", "ふふ") < 0);
	assertTrue("ぶゝ < ぶふ", col.compare("ぶゝ", "ぶふ") < 0);
	assertTrue("ふゞ < ふふ", col.compare("ふゞ", "ふふ") < 0);
	assertTrue("ぶゞ < ぶふ", col.compare("ぶゞ", "ぶふ") < 0);
	assertTrue("ぷゝ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("ぷゞ < ぷふ", col.compare("ぷゝ", "ぷふ") < 0);
	assertTrue("へゝ < へへ", col.compare("へゝ", "へへ") < 0);
	assertTrue("べゝ < べへ", col.compare("べゝ", "べへ") < 0);
	assertTrue("へゞ < へへ", col.compare("へゞ", "へへ") < 0);
	assertTrue("べゞ < べへ", col.compare("べゞ", "べへ") < 0);
	assertTrue("ぺゝ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ぺゞ < ぺへ", col.compare("ぺゝ", "ぺへ") < 0);
	assertTrue("ほゝ < ほほ", col.compare("ほゝ", "ほほ") < 0);
	assertTrue("ぼゝ < ぼほ", col.compare("ぼゝ", "ぼほ") < 0);
	assertTrue("ほゞ < ほほ", col.compare("ほゞ", "ほほ") < 0);
	assertTrue("ぼゞ < ぼほ", col.compare("ぼゞ", "ぼほ") < 0);
	assertTrue("ぽゝ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);
	assertTrue("ぽゞ < ぽほ", col.compare("ぽゝ", "ぽほ") < 0);

	assertTrue("まゝ < まま", col.compare("まゝ", "まま") < 0);
	assertTrue("みゝ < みみ", col.compare("みゝ", "みみ") < 0);
	assertTrue("むゝ < むむ", col.compare("むゝ", "むむ") < 0);
	assertTrue("めゝ < めめ", col.compare("めゝ", "めめ") < 0);
	assertTrue("もゝ < もも", col.compare("もゝ", "もも") < 0);

	assertTrue("やゝ < やや", col.compare("やゝ", "やや") < 0);
	assertTrue("ゃゝ < ゃや", col.compare("ゃゝ", "ゃや") < 0);
	assertTrue("ゆゝ < ゆゆ", col.compare("ゆゝ", "ゆゆ") < 0);
	assertTrue("ゅゝ < ゅゆ", col.compare("ゅゝ", "ゅゆ") < 0);
	assertTrue("よゝ < よよ", col.compare("よゝ", "よよ") < 0);
	assertTrue("ょゝ < ょよ", col.compare("ょゝ", "ょよ") < 0);

	assertTrue("らゝ < らら", col.compare("らゝ", "らら") < 0);
	assertTrue("りゝ < りり", col.compare("りゝ", "りり") < 0);
	assertTrue("るゝ < るる", col.compare("るゝ", "るる") < 0);
	assertTrue("れゝ < れれ", col.compare("れゝ", "れれ") < 0);
	assertTrue("ろゝ < ろろ", col.compare("ろゝ", "ろろ") < 0);

	assertTrue("わゝ < わわ", col.compare("わゝ", "わわ") < 0);
	assertTrue("ゎゝ < ゎわ", col.compare("ゎゝ", "ゎわ") < 0);
	assertTrue("わゞ < わわ", col.compare("わゞ", "わわ") < 0);
	assertTrue("ゎゞ < ゎわ", col.compare("ゎゞ", "ゎわ") < 0);
	assertTrue("ゐゝ < ゐゐ", col.compare("ゐゝ", "ゐゐ") < 0);
	assertTrue("ゐゞ < ゐゐ", col.compare("ゐゞ", "ゐゐ") < 0);
	assertTrue("ゑゝ < ゑゑ", col.compare("ゑゝ", "ゑゑ") < 0);
	assertTrue("ゑゞ < ゑゑ", col.compare("ゑゞ", "ゑゑ") < 0);
	assertTrue("をゝ < をを", col.compare("をゝ", "をを") < 0);
	assertTrue("をゞ < をを", col.compare("をゞ", "をを") < 0);

	assertTrue("んゝ < んん", col.compare("んゝ", "んん") < 0);
}

function testJSCollatorHiraganaIterationMarksSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ = ああ", col.compare("あゝ", "ああ") === 0);
	assertTrue("ぁゝ = ぁあ", col.compare("ぁゝ", "ぁあ") === 0);
	assertTrue("いゝ = いい", col.compare("いゝ", "いい") === 0);
	assertTrue("ぃゝ = ぃい", col.compare("ぃゝ", "ぃい") === 0);
	assertTrue("うゝ = うう", col.compare("うゝ", "うう") === 0);
	assertTrue("ぅゝ = ぅう", col.compare("ぅゝ", "ぅう") === 0);
	assertTrue("ゔゝ = ゔう", col.compare("ゔゝ", "ゔう") === 0);
	assertTrue("うゞ = うう", col.compare("うゞ", "うう") === 0);
	assertTrue("ぅゞ = ぅう", col.compare("ぅゞ", "ぅう") === 0);
	assertTrue("ゔゞ = ゔう", col.compare("ゔゞ", "ゔう") === 0);
	assertTrue("えゝ = ええ", col.compare("えゝ", "ええ") === 0);
	assertTrue("ぇゝ = ぇえ", col.compare("ぇゝ", "ぇえ") === 0);
	assertTrue("おゝ = おお", col.compare("おゝ", "おお") === 0);
	assertTrue("ぉゝ = ぉお", col.compare("ぉゝ", "ぉお") === 0);

	assertTrue("かゝ = かか", col.compare("かゝ", "かか") === 0);
	assertTrue("ゕゝ = ゕか", col.compare("ゕゝ", "ゕか") === 0);
	assertTrue("がゝ = がか", col.compare("がゝ", "がか") === 0);
	assertTrue("きゝ = きき", col.compare("きゝ", "きき") === 0);
	assertTrue("ぎゝ = ぎき", col.compare("ぎゝ", "ぎき") === 0);
	assertTrue("きゞ = きき", col.compare("きゞ", "きき") === 0);
	assertTrue("ぎゞ = ぎき", col.compare("ぎゞ", "ぎき") === 0);
	assertTrue("くゝ = くく", col.compare("くゝ", "くく") === 0);
	assertTrue("ぐゝ = ぐく", col.compare("ぐゝ", "ぐく") === 0);
	assertTrue("くゞ = くく", col.compare("くゞ", "くく") === 0);
	assertTrue("ぐゞ = ぐく", col.compare("ぐゞ", "ぐく") === 0);
	assertTrue("けゝ = けけ", col.compare("けゝ", "けけ") === 0);
	assertTrue("ゖゝ = ゖけ", col.compare("ゖゝ", "ゖけ") === 0);
	assertTrue("げゝ = げけ", col.compare("げゝ", "げけ") === 0);
	assertTrue("こゝ = ここ", col.compare("こゝ", "ここ") === 0);
	assertTrue("ごゝ = ごこ", col.compare("ごゝ", "ごこ") === 0);
	assertTrue("こゞ = ここ", col.compare("こゞ", "ここ") === 0);
	assertTrue("ごゞ = ごこ", col.compare("ごゞ", "ごこ") === 0);

	assertTrue("さゝ = ささ", col.compare("さゝ", "ささ") === 0);
	assertTrue("ざゝ = ざさ", col.compare("ざゝ", "ざさ") === 0);
	assertTrue("さゞ = ささ", col.compare("さゞ", "ささ") === 0);
	assertTrue("ざゞ = ざさ", col.compare("ざゞ", "ざさ") === 0);
	assertTrue("しゝ = しし", col.compare("しゝ", "しし") === 0);
	assertTrue("じゝ = じし", col.compare("じゝ", "じし") === 0);
	assertTrue("しゞ = しし", col.compare("しゞ", "しし") === 0);
	assertTrue("じゞ = じし", col.compare("じゞ", "じし") === 0);
	assertTrue("すゝ = すす", col.compare("すゝ", "すす") === 0);
	assertTrue("ずゝ = ずす", col.compare("ずゝ", "ずす") === 0);
	assertTrue("すゞ = すす", col.compare("すゞ", "すす") === 0);
	assertTrue("ずゞ = ずす", col.compare("ずゞ", "ずす") === 0);
	assertTrue("せゝ = せせ", col.compare("せゝ", "せせ") === 0);
	assertTrue("ぜゝ = ぜせ", col.compare("ぜゝ", "ぜせ") === 0);
	assertTrue("せゞ = せせ", col.compare("せゞ", "せせ") === 0);
	assertTrue("ぜゞ = ぜせ", col.compare("ぜゞ", "ぜせ") === 0);
	assertTrue("そゝ = そそ", col.compare("そゝ", "そそ") === 0);
	assertTrue("ぞゝ = ぞそ", col.compare("ぞゝ", "ぞそ") === 0);
	assertTrue("そゞ = そそ", col.compare("そゞ", "そそ") === 0);
	assertTrue("ぞゞ = ぞそ", col.compare("ぞゞ", "ぞそ") === 0);

	assertTrue("たゝ = たた", col.compare("たゝ", "たた") === 0);
	assertTrue("だゝ = だた", col.compare("だゝ", "だた") === 0);
	assertTrue("たゞ = たた", col.compare("たゞ", "たた") === 0);
	assertTrue("だゞ = だた", col.compare("だゞ", "だた") === 0);
	assertTrue("ちゝ = ちち", col.compare("ちゝ", "ちち") === 0);
	assertTrue("ぢゝ = ぢち", col.compare("ぢゝ", "ぢち") === 0);
	assertTrue("ちゞ = ちち", col.compare("ちゞ", "ちち") === 0);
	assertTrue("ぢゞ = ぢち", col.compare("ぢゞ", "ぢち") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゝ = っつ", col.compare("っゝ", "っつ") === 0);
	assertTrue("づゝ = づつ", col.compare("づゝ", "づつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("づゞ = づつ", col.compare("づゞ", "づつ") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゞ = っつ", col.compare("っゞ", "っつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("てゝ = てて", col.compare("てゝ", "てて") === 0);
	assertTrue("でゝ = でて", col.compare("でゝ", "でて") === 0);
	assertTrue("てゞ = てて", col.compare("てゞ", "てて") === 0);
	assertTrue("でゞ = でて", col.compare("でゞ", "でて") === 0);
	assertTrue("とゝ = とと", col.compare("とゝ", "とと") === 0);
	assertTrue("どゝ = どと", col.compare("どゝ", "どと") === 0);
	assertTrue("とゞ = とと", col.compare("とゞ", "とと") === 0);
	assertTrue("どゞ = どと", col.compare("どゞ", "どと") === 0);

	assertTrue("なゝ = なな", col.compare("なゝ", "なな") === 0);
	assertTrue("にゝ = にに", col.compare("にゝ", "にに") === 0);
	assertTrue("ぬゝ = ぬぬ", col.compare("ぬゝ", "ぬぬ") === 0);
	assertTrue("ねゝ = ねね", col.compare("ねゝ", "ねね") === 0);
	assertTrue("のゝ = のの", col.compare("のゝ", "のの") === 0);

	assertTrue("はゝ = はは", col.compare("はゝ", "はは") === 0);
	assertTrue("ばゝ = ばは", col.compare("ばゝ", "ばは") === 0);
	assertTrue("はゞ = はは", col.compare("はゞ", "はは") === 0);
	assertTrue("ばゞ = ばは", col.compare("ばゞ", "ばは") === 0);
	assertTrue("ぱゝ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ぱゞ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ひゝ = ひひ", col.compare("ひゝ", "ひひ") === 0);
	assertTrue("びゝ = びひ", col.compare("びゝ", "びひ") === 0);
	assertTrue("ひゞ = ひひ", col.compare("ひゞ", "ひひ") === 0);
	assertTrue("びゞ = びひ", col.compare("びゞ", "びひ") === 0);
	assertTrue("ぴゝ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ぴゞ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ふゝ = ふふ", col.compare("ふゝ", "ふふ") === 0);
	assertTrue("ぶゝ = ぶふ", col.compare("ぶゝ", "ぶふ") === 0);
	assertTrue("ふゞ = ふふ", col.compare("ふゞ", "ふふ") === 0);
	assertTrue("ぶゞ = ぶふ", col.compare("ぶゞ", "ぶふ") === 0);
	assertTrue("ぷゝ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("ぷゞ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("へゝ = へへ", col.compare("へゝ", "へへ") === 0);
	assertTrue("べゝ = べへ", col.compare("べゝ", "べへ") === 0);
	assertTrue("へゞ = へへ", col.compare("へゞ", "へへ") === 0);
	assertTrue("べゞ = べへ", col.compare("べゞ", "べへ") === 0);
	assertTrue("ぺゝ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ぺゞ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ほゝ = ほほ", col.compare("ほゝ", "ほほ") === 0);
	assertTrue("ぼゝ = ぼほ", col.compare("ぼゝ", "ぼほ") === 0);
	assertTrue("ほゞ = ほほ", col.compare("ほゞ", "ほほ") === 0);
	assertTrue("ぼゞ = ぼほ", col.compare("ぼゞ", "ぼほ") === 0);
	assertTrue("ぽゝ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);
	assertTrue("ぽゞ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);

	assertTrue("まゝ = まま", col.compare("まゝ", "まま") === 0);
	assertTrue("みゝ = みみ", col.compare("みゝ", "みみ") === 0);
	assertTrue("むゝ = むむ", col.compare("むゝ", "むむ") === 0);
	assertTrue("めゝ = めめ", col.compare("めゝ", "めめ") === 0);
	assertTrue("もゝ = もも", col.compare("もゝ", "もも") === 0);

	assertTrue("やゝ = やや", col.compare("やゝ", "やや") === 0);
	assertTrue("ゃゝ = ゃや", col.compare("ゃゝ", "ゃや") === 0);
	assertTrue("ゆゝ = ゆゆ", col.compare("ゆゝ", "ゆゆ") === 0);
	assertTrue("ゅゝ = ゅゆ", col.compare("ゅゝ", "ゅゆ") === 0);
	assertTrue("よゝ = よよ", col.compare("よゝ", "よよ") === 0);
	assertTrue("ょゝ = ょよ", col.compare("ょゝ", "ょよ") === 0);

	assertTrue("らゝ = らら", col.compare("らゝ", "らら") === 0);
	assertTrue("りゝ = りり", col.compare("りゝ", "りり") === 0);
	assertTrue("るゝ = るる", col.compare("るゝ", "るる") === 0);
	assertTrue("れゝ = れれ", col.compare("れゝ", "れれ") === 0);
	assertTrue("ろゝ = ろろ", col.compare("ろゝ", "ろろ") === 0);

	assertTrue("わゝ = わわ", col.compare("わゝ", "わわ") === 0);
	assertTrue("ゎゝ = ゎわ", col.compare("ゎゝ", "ゎわ") === 0);
	assertTrue("わゞ = わわ", col.compare("わゞ", "わわ") === 0);
	assertTrue("ゎゞ = ゎわ", col.compare("ゎゞ", "ゎわ") === 0);
	assertTrue("ゐゝ = ゐゐ", col.compare("ゐゝ", "ゐゐ") === 0);
	assertTrue("ゐゞ = ゐゐ", col.compare("ゐゞ", "ゐゐ") === 0);
	assertTrue("ゑゝ = ゑゑ", col.compare("ゑゝ", "ゑゑ") === 0);
	assertTrue("ゑゞ = ゑゑ", col.compare("ゑゞ", "ゑゑ") === 0);
	assertTrue("をゝ = をを", col.compare("をゝ", "をを") === 0);
	assertTrue("をゞ = をを", col.compare("をゞ", "をを") === 0);

	assertTrue("んゝ = んん", col.compare("んゝ", "んん") === 0);
}

function testJSCollatorHiraganaIterationMarksPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う ゔ ゔ え お か が が き ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	
	assertTrue("あゝ = ああ", col.compare("あゝ", "ああ") === 0);
	assertTrue("ぁゝ = ぁあ", col.compare("ぁゝ", "ぁあ") === 0);
	assertTrue("いゝ = いい", col.compare("いゝ", "いい") === 0);
	assertTrue("ぃゝ = ぃい", col.compare("ぃゝ", "ぃい") === 0);
	assertTrue("うゝ = うう", col.compare("うゝ", "うう") === 0);
	assertTrue("ぅゝ = ぅう", col.compare("ぅゝ", "ぅう") === 0);
	assertTrue("ゔゝ = ゔう", col.compare("ゔゝ", "ゔう") === 0);
	assertTrue("うゞ = うう", col.compare("うゞ", "うう") === 0);
	assertTrue("ぅゞ = ぅう", col.compare("ぅゞ", "ぅう") === 0);
	assertTrue("ゔゞ = ゔう", col.compare("ゔゞ", "ゔう") === 0);
	assertTrue("えゝ = ええ", col.compare("えゝ", "ええ") === 0);
	assertTrue("ぇゝ = ぇえ", col.compare("ぇゝ", "ぇえ") === 0);
	assertTrue("おゝ = おお", col.compare("おゝ", "おお") === 0);
	assertTrue("ぉゝ = ぉお", col.compare("ぉゝ", "ぉお") === 0);

	assertTrue("かゝ = かか", col.compare("かゝ", "かか") === 0);
	assertTrue("ゕゝ = ゕか", col.compare("ゕゝ", "ゕか") === 0);
	assertTrue("がゝ = がか", col.compare("がゝ", "がか") === 0);
	assertTrue("きゝ = きき", col.compare("きゝ", "きき") === 0);
	assertTrue("ぎゝ = ぎき", col.compare("ぎゝ", "ぎき") === 0);
	assertTrue("きゞ = きき", col.compare("きゞ", "きき") === 0);
	assertTrue("ぎゞ = ぎき", col.compare("ぎゞ", "ぎき") === 0);
	assertTrue("くゝ = くく", col.compare("くゝ", "くく") === 0);
	assertTrue("ぐゝ = ぐく", col.compare("ぐゝ", "ぐく") === 0);
	assertTrue("くゞ = くく", col.compare("くゞ", "くく") === 0);
	assertTrue("ぐゞ = ぐく", col.compare("ぐゞ", "ぐく") === 0);
	assertTrue("けゝ = けけ", col.compare("けゝ", "けけ") === 0);
	assertTrue("ゖゝ = ゖけ", col.compare("ゖゝ", "ゖけ") === 0);
	assertTrue("げゝ = げけ", col.compare("げゝ", "げけ") === 0);
	assertTrue("こゝ = ここ", col.compare("こゝ", "ここ") === 0);
	assertTrue("ごゝ = ごこ", col.compare("ごゝ", "ごこ") === 0);
	assertTrue("こゞ = ここ", col.compare("こゞ", "ここ") === 0);
	assertTrue("ごゞ = ごこ", col.compare("ごゞ", "ごこ") === 0);

	assertTrue("さゝ = ささ", col.compare("さゝ", "ささ") === 0);
	assertTrue("ざゝ = ざさ", col.compare("ざゝ", "ざさ") === 0);
	assertTrue("さゞ = ささ", col.compare("さゞ", "ささ") === 0);
	assertTrue("ざゞ = ざさ", col.compare("ざゞ", "ざさ") === 0);
	assertTrue("しゝ = しし", col.compare("しゝ", "しし") === 0);
	assertTrue("じゝ = じし", col.compare("じゝ", "じし") === 0);
	assertTrue("しゞ = しし", col.compare("しゞ", "しし") === 0);
	assertTrue("じゞ = じし", col.compare("じゞ", "じし") === 0);
	assertTrue("すゝ = すす", col.compare("すゝ", "すす") === 0);
	assertTrue("ずゝ = ずす", col.compare("ずゝ", "ずす") === 0);
	assertTrue("すゞ = すす", col.compare("すゞ", "すす") === 0);
	assertTrue("ずゞ = ずす", col.compare("ずゞ", "ずす") === 0);
	assertTrue("せゝ = せせ", col.compare("せゝ", "せせ") === 0);
	assertTrue("ぜゝ = ぜせ", col.compare("ぜゝ", "ぜせ") === 0);
	assertTrue("せゞ = せせ", col.compare("せゞ", "せせ") === 0);
	assertTrue("ぜゞ = ぜせ", col.compare("ぜゞ", "ぜせ") === 0);
	assertTrue("そゝ = そそ", col.compare("そゝ", "そそ") === 0);
	assertTrue("ぞゝ = ぞそ", col.compare("ぞゝ", "ぞそ") === 0);
	assertTrue("そゞ = そそ", col.compare("そゞ", "そそ") === 0);
	assertTrue("ぞゞ = ぞそ", col.compare("ぞゞ", "ぞそ") === 0);

	assertTrue("たゝ = たた", col.compare("たゝ", "たた") === 0);
	assertTrue("だゝ = だた", col.compare("だゝ", "だた") === 0);
	assertTrue("たゞ = たた", col.compare("たゞ", "たた") === 0);
	assertTrue("だゞ = だた", col.compare("だゞ", "だた") === 0);
	assertTrue("ちゝ = ちち", col.compare("ちゝ", "ちち") === 0);
	assertTrue("ぢゝ = ぢち", col.compare("ぢゝ", "ぢち") === 0);
	assertTrue("ちゞ = ちち", col.compare("ちゞ", "ちち") === 0);
	assertTrue("ぢゞ = ぢち", col.compare("ぢゞ", "ぢち") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゝ = っつ", col.compare("っゝ", "っつ") === 0);
	assertTrue("づゝ = づつ", col.compare("づゝ", "づつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("づゞ = づつ", col.compare("づゞ", "づつ") === 0);
	assertTrue("つゝ = つつ", col.compare("つゝ", "つつ") === 0);
	assertTrue("っゞ = っつ", col.compare("っゞ", "っつ") === 0);
	assertTrue("つゞ = つつ", col.compare("つゞ", "つつ") === 0);
	assertTrue("てゝ = てて", col.compare("てゝ", "てて") === 0);
	assertTrue("でゝ = でて", col.compare("でゝ", "でて") === 0);
	assertTrue("てゞ = てて", col.compare("てゞ", "てて") === 0);
	assertTrue("でゞ = でて", col.compare("でゞ", "でて") === 0);
	assertTrue("とゝ = とと", col.compare("とゝ", "とと") === 0);
	assertTrue("どゝ = どと", col.compare("どゝ", "どと") === 0);
	assertTrue("とゞ = とと", col.compare("とゞ", "とと") === 0);
	assertTrue("どゞ = どと", col.compare("どゞ", "どと") === 0);

	assertTrue("なゝ = なな", col.compare("なゝ", "なな") === 0);
	assertTrue("にゝ = にに", col.compare("にゝ", "にに") === 0);
	assertTrue("ぬゝ = ぬぬ", col.compare("ぬゝ", "ぬぬ") === 0);
	assertTrue("ねゝ = ねね", col.compare("ねゝ", "ねね") === 0);
	assertTrue("のゝ = のの", col.compare("のゝ", "のの") === 0);

	assertTrue("はゝ = はは", col.compare("はゝ", "はは") === 0);
	assertTrue("ばゝ = ばは", col.compare("ばゝ", "ばは") === 0);
	assertTrue("はゞ = はは", col.compare("はゞ", "はは") === 0);
	assertTrue("ばゞ = ばは", col.compare("ばゞ", "ばは") === 0);
	assertTrue("ぱゝ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ぱゞ = ぱは", col.compare("ぱゝ", "ぱは") === 0);
	assertTrue("ひゝ = ひひ", col.compare("ひゝ", "ひひ") === 0);
	assertTrue("びゝ = びひ", col.compare("びゝ", "びひ") === 0);
	assertTrue("ひゞ = ひひ", col.compare("ひゞ", "ひひ") === 0);
	assertTrue("びゞ = びひ", col.compare("びゞ", "びひ") === 0);
	assertTrue("ぴゝ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ぴゞ = ぴひ", col.compare("ぴゝ", "ぴひ") === 0);
	assertTrue("ふゝ = ふふ", col.compare("ふゝ", "ふふ") === 0);
	assertTrue("ぶゝ = ぶふ", col.compare("ぶゝ", "ぶふ") === 0);
	assertTrue("ふゞ = ふふ", col.compare("ふゞ", "ふふ") === 0);
	assertTrue("ぶゞ = ぶふ", col.compare("ぶゞ", "ぶふ") === 0);
	assertTrue("ぷゝ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("ぷゞ = ぷふ", col.compare("ぷゝ", "ぷふ") === 0);
	assertTrue("へゝ = へへ", col.compare("へゝ", "へへ") === 0);
	assertTrue("べゝ = べへ", col.compare("べゝ", "べへ") === 0);
	assertTrue("へゞ = へへ", col.compare("へゞ", "へへ") === 0);
	assertTrue("べゞ = べへ", col.compare("べゞ", "べへ") === 0);
	assertTrue("ぺゝ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ぺゞ = ぺへ", col.compare("ぺゝ", "ぺへ") === 0);
	assertTrue("ほゝ = ほほ", col.compare("ほゝ", "ほほ") === 0);
	assertTrue("ぼゝ = ぼほ", col.compare("ぼゝ", "ぼほ") === 0);
	assertTrue("ほゞ = ほほ", col.compare("ほゞ", "ほほ") === 0);
	assertTrue("ぼゞ = ぼほ", col.compare("ぼゞ", "ぼほ") === 0);
	assertTrue("ぽゝ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);
	assertTrue("ぽゞ = ぽほ", col.compare("ぽゝ", "ぽほ") === 0);

	assertTrue("まゝ = まま", col.compare("まゝ", "まま") === 0);
	assertTrue("みゝ = みみ", col.compare("みゝ", "みみ") === 0);
	assertTrue("むゝ = むむ", col.compare("むゝ", "むむ") === 0);
	assertTrue("めゝ = めめ", col.compare("めゝ", "めめ") === 0);
	assertTrue("もゝ = もも", col.compare("もゝ", "もも") === 0);

	assertTrue("やゝ = やや", col.compare("やゝ", "やや") === 0);
	assertTrue("ゃゝ = ゃや", col.compare("ゃゝ", "ゃや") === 0);
	assertTrue("ゆゝ = ゆゆ", col.compare("ゆゝ", "ゆゆ") === 0);
	assertTrue("ゅゝ = ゅゆ", col.compare("ゅゝ", "ゅゆ") === 0);
	assertTrue("よゝ = よよ", col.compare("よゝ", "よよ") === 0);
	assertTrue("ょゝ = ょよ", col.compare("ょゝ", "ょよ") === 0);

	assertTrue("らゝ = らら", col.compare("らゝ", "らら") === 0);
	assertTrue("りゝ = りり", col.compare("りゝ", "りり") === 0);
	assertTrue("るゝ = るる", col.compare("るゝ", "るる") === 0);
	assertTrue("れゝ = れれ", col.compare("れゝ", "れれ") === 0);
	assertTrue("ろゝ = ろろ", col.compare("ろゝ", "ろろ") === 0);

	assertTrue("わゝ = わわ", col.compare("わゝ", "わわ") === 0);
	assertTrue("ゎゝ = ゎわ", col.compare("ゎゝ", "ゎわ") === 0);
	assertTrue("わゞ = わわ", col.compare("わゞ", "わわ") === 0);
	assertTrue("ゎゞ = ゎわ", col.compare("ゎゞ", "ゎわ") === 0);
	assertTrue("ゐゝ = ゐゐ", col.compare("ゐゝ", "ゐゐ") === 0);
	assertTrue("ゐゞ = ゐゐ", col.compare("ゐゞ", "ゐゐ") === 0);
	assertTrue("ゑゝ = ゑゑ", col.compare("ゑゝ", "ゑゑ") === 0);
	assertTrue("ゑゞ = ゑゑ", col.compare("ゑゞ", "ゑゑ") === 0);
	assertTrue("をゝ = をを", col.compare("をゝ", "をを") === 0);
	assertTrue("をゞ = をを", col.compare("をゞ", "をを") === 0);

	assertTrue("んゝ = んん", col.compare("んゝ", "んん") === 0);
}

function testJSCollatorKatakanaQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	assertTrue("ガ < ガ", col.compare("ガ", "ガ") < 0);
	assertTrue("ガ < キ", col.compare("ガ", "キ") < 0);
	assertTrue("キ < ギ", col.compare("キ", "ギ") < 0);
	assertTrue("ギ < ギ", col.compare("ギ", "ギ") < 0);
	assertTrue("ギ < ク", col.compare("ギ", "ク") < 0);
	assertTrue("ク < グ", col.compare("ク", "グ") < 0);
	assertTrue("グ < グ", col.compare("グ", "グ") < 0);
	assertTrue("グ < ケ", col.compare("グ", "ケ") < 0);
	assertTrue("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
	assertTrue("ゲ < ゲ", col.compare("ゲ", "ゲ") < 0);
	assertTrue("ゲ < コ", col.compare("ゲ", "コ") < 0);
	assertTrue("コ < ゴ", col.compare("コ", "ゴ") < 0);
	assertTrue("ゴ < ゴ", col.compare("ゴ", "ゴ") < 0);
	assertTrue("ゴ < サ", col.compare("ゴ", "サ") < 0);
	assertTrue("サ < ザ", col.compare("サ", "ザ") < 0);
	assertTrue("ザ < ザ", col.compare("ザ", "ザ") < 0);
	assertTrue("ザ < シ", col.compare("ザ", "シ") < 0);
	assertTrue("シ < ジ", col.compare("シ", "ジ") < 0);
	assertTrue("ジ < ジ", col.compare("ジ", "ジ") < 0);
	assertTrue("ジ < ス", col.compare("ジ", "ス") < 0);
	assertTrue("ス < ズ", col.compare("ス", "ズ") < 0);
	assertTrue("ズ < ズ", col.compare("ズ", "ズ") < 0);
	assertTrue("ズ < セ", col.compare("ズ", "セ") < 0);
	assertTrue("セ < ゼ", col.compare("セ", "ゼ") < 0);
	assertTrue("ゼ < ゼ", col.compare("ゼ", "ゼ") < 0);
	assertTrue("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
	assertTrue("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
	assertTrue("ゾ < ゾ", col.compare("ゾ", "ゾ") < 0);
	assertTrue("ゾ < タ", col.compare("ゾ", "タ") < 0);
	assertTrue("タ < ダ", col.compare("タ", "ダ") < 0);
	assertTrue("ダ < ダ", col.compare("ダ", "ダ") < 0);
	assertTrue("ダ < チ", col.compare("ダ", "チ") < 0);
	assertTrue("チ < ヂ", col.compare("チ", "ヂ") < 0);
	assertTrue("ヂ < ヂ", col.compare("ヂ", "ヂ") < 0);
	assertTrue("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
	assertTrue("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
	assertTrue("ヅ < ヅ", col.compare("ヅ", "ヅ") < 0);
	assertTrue("ヅ < テ", col.compare("ヅ", "テ") < 0);
	assertTrue("テ < デ", col.compare("テ", "デ") < 0);
	assertTrue("デ < デ", col.compare("デ", "デ") < 0);
	assertTrue("デ < ト", col.compare("デ", "ト") < 0);
	assertTrue("ト < ド", col.compare("ト", "ド") < 0);
	assertTrue("ド < ド", col.compare("ド", "ド") < 0);
	assertTrue("ド < ナ", col.compare("ド", "ナ") < 0);
	assertTrue("ナ < ニ", col.compare("ナ", "ニ") < 0);
	assertTrue("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
	assertTrue("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
	assertTrue("ネ < ノ", col.compare("ネ", "ノ") < 0);
	assertTrue("ノ < ハ", col.compare("ノ", "ハ") < 0);
	assertTrue("ハ < バ", col.compare("ハ", "バ") < 0);
	assertTrue("バ < バ", col.compare("バ", "バ") < 0);
	assertTrue("バ < パ", col.compare("バ", "パ") < 0);
	assertTrue("パ < パ", col.compare("パ", "パ") < 0);
	assertTrue("パ < ヒ", col.compare("パ", "ヒ") < 0);
	assertTrue("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
	assertTrue("ビ < ビ", col.compare("ビ", "ビ") < 0);
	assertTrue("ビ < ピ", col.compare("ビ", "ピ") < 0);
	assertTrue("ピ < ピ", col.compare("ピ", "ピ") < 0);
	assertTrue("ピ < フ", col.compare("ピ", "フ") < 0);
	assertTrue("フ < ブ", col.compare("フ", "ブ") < 0);
	assertTrue("ブ < ブ", col.compare("ブ", "ブ") < 0);
	assertTrue("ブ < プ", col.compare("ブ", "プ") < 0);
	assertTrue("プ < プ", col.compare("プ", "プ") < 0);
	assertTrue("プ < ヘ", col.compare("プ", "ヘ") < 0);
	assertTrue("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
	assertTrue("ベ < ベ", col.compare("ベ", "ベ") < 0);
	assertTrue("ベ < ペ", col.compare("ベ", "ペ") < 0);
	assertTrue("ペ < ペ", col.compare("ペ", "ペ") < 0);
	assertTrue("ペ < ホ", col.compare("ペ", "ホ") < 0);
	assertTrue("ホ < ボ", col.compare("ホ", "ボ") < 0);
	assertTrue("ボ < ボ", col.compare("ボ", "ボ") < 0);
	assertTrue("ボ < ポ", col.compare("ボ", "ポ") < 0);
	assertTrue("ポ < ポ", col.compare("ポ", "ポ") < 0);
	assertTrue("ポ < マ", col.compare("ポ", "マ") < 0);
	assertTrue("マ < ミ", col.compare("マ", "ミ") < 0);
	assertTrue("ミ < ム", col.compare("ミ", "ム") < 0);
	assertTrue("ム < メ", col.compare("ム", "メ") < 0);
	assertTrue("メ < モ", col.compare("メ", "モ") < 0);
	assertTrue("モ < ヤ", col.compare("モ", "ヤ") < 0);
	assertTrue("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
	assertTrue("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
	assertTrue("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
	assertTrue("ラ < リ", col.compare("ラ", "リ") < 0);
	assertTrue("リ < ル", col.compare("リ", "ル") < 0);
	assertTrue("ル < レ", col.compare("ル", "レ") < 0);
	assertTrue("レ < ロ", col.compare("レ", "ロ") < 0);
	assertTrue("ロ < ワ", col.compare("ロ", "ワ") < 0);
	assertTrue("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
	assertTrue("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
	assertTrue("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
	assertTrue("ヲ < ン", col.compare("ヲ", "ン") < 0);
}

function testJSCollatorKatakanaTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	assertTrue("ガ = ガ", col.compare("ガ", "ガ") === 0);
	assertTrue("ガ < キ", col.compare("ガ", "キ") < 0);
	assertTrue("キ < ギ", col.compare("キ", "ギ") < 0);
	assertTrue("ギ = ギ", col.compare("ギ", "ギ") === 0);
	assertTrue("ギ < ク", col.compare("ギ", "ク") < 0);
	assertTrue("ク < グ", col.compare("ク", "グ") < 0);
	assertTrue("グ = グ", col.compare("グ", "グ") === 0);
	assertTrue("グ < ケ", col.compare("グ", "ケ") < 0);
	assertTrue("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
	assertTrue("ゲ = ゲ", col.compare("ゲ", "ゲ") === 0);
	assertTrue("ゲ < コ", col.compare("ゲ", "コ") < 0);
	assertTrue("コ < ゴ", col.compare("コ", "ゴ") < 0);
	assertTrue("ゴ = ゴ", col.compare("ゴ", "ゴ") === 0);
	assertTrue("ゴ < サ", col.compare("ゴ", "サ") < 0);
	assertTrue("サ < ザ", col.compare("サ", "ザ") < 0);
	assertTrue("ザ = ザ", col.compare("ザ", "ザ") === 0);
	assertTrue("ザ < シ", col.compare("ザ", "シ") < 0);
	assertTrue("シ < ジ", col.compare("シ", "ジ") < 0);
	assertTrue("ジ = ジ", col.compare("ジ", "ジ") === 0);
	assertTrue("ジ < ス", col.compare("ジ", "ス") < 0);
	assertTrue("ス < ズ", col.compare("ス", "ズ") < 0);
	assertTrue("ズ = ズ", col.compare("ズ", "ズ") === 0);
	assertTrue("ズ < セ", col.compare("ズ", "セ") < 0);
	assertTrue("セ < ゼ", col.compare("セ", "ゼ") < 0);
	assertTrue("ゼ = ゼ", col.compare("ゼ", "ゼ") === 0);
	assertTrue("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
	assertTrue("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
	assertTrue("ゾ = ゾ", col.compare("ゾ", "ゾ") === 0);
	assertTrue("ゾ < タ", col.compare("ゾ", "タ") < 0);
	assertTrue("タ < ダ", col.compare("タ", "ダ") < 0);
	assertTrue("ダ = ダ", col.compare("ダ", "ダ") === 0);
	assertTrue("ダ < チ", col.compare("ダ", "チ") < 0);
	assertTrue("チ < ヂ", col.compare("チ", "ヂ") < 0);
	assertTrue("ヂ = ヂ", col.compare("ヂ", "ヂ") === 0);
	assertTrue("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
	assertTrue("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
	assertTrue("ヅ = ヅ", col.compare("ヅ", "ヅ") === 0);
	assertTrue("ヅ < テ", col.compare("ヅ", "テ") < 0);
	assertTrue("テ < デ", col.compare("テ", "デ") < 0);
	assertTrue("デ = デ", col.compare("デ", "デ") === 0);
	assertTrue("デ < ト", col.compare("デ", "ト") < 0);
	assertTrue("ト < ド", col.compare("ト", "ド") < 0);
	assertTrue("ド = ド", col.compare("ド", "ド") === 0);
	assertTrue("ド < ナ", col.compare("ド", "ナ") < 0);
	assertTrue("ナ < ニ", col.compare("ナ", "ニ") < 0);
	assertTrue("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
	assertTrue("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
	assertTrue("ネ < ノ", col.compare("ネ", "ノ") < 0);
	assertTrue("ノ < ハ", col.compare("ノ", "ハ") < 0);
	assertTrue("ハ < バ", col.compare("ハ", "バ") < 0);
	assertTrue("バ = バ", col.compare("バ", "バ") === 0);
	assertTrue("バ < パ", col.compare("バ", "パ") < 0);
	assertTrue("パ = パ", col.compare("パ", "パ") === 0);
	assertTrue("パ < ヒ", col.compare("パ", "ヒ") < 0);
	assertTrue("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
	assertTrue("ビ = ビ", col.compare("ビ", "ビ") === 0);
	assertTrue("ビ < ピ", col.compare("ビ", "ピ") < 0);
	assertTrue("ピ = ピ", col.compare("ピ", "ピ") === 0);
	assertTrue("ピ < フ", col.compare("ピ", "フ") < 0);
	assertTrue("フ < ブ", col.compare("フ", "ブ") < 0);
	assertTrue("ブ = ブ", col.compare("ブ", "ブ") === 0);
	assertTrue("ブ < プ", col.compare("ブ", "プ") < 0);
	assertTrue("プ = プ", col.compare("プ", "プ") === 0);
	assertTrue("プ < ヘ", col.compare("プ", "ヘ") < 0);
	assertTrue("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
	assertTrue("ベ = ベ", col.compare("ベ", "ベ") === 0);
	assertTrue("ベ < ペ", col.compare("ベ", "ペ") < 0);
	assertTrue("ペ = ペ", col.compare("ペ", "ペ") === 0);
	assertTrue("ペ < ホ", col.compare("ペ", "ホ") < 0);
	assertTrue("ホ < ボ", col.compare("ホ", "ボ") < 0);
	assertTrue("ボ = ボ", col.compare("ボ", "ボ") === 0);
	assertTrue("ボ < ポ", col.compare("ボ", "ポ") < 0);
	assertTrue("ポ = ポ", col.compare("ポ", "ポ") === 0);
	assertTrue("ポ < マ", col.compare("ポ", "マ") < 0);
	assertTrue("マ < ミ", col.compare("マ", "ミ") < 0);
	assertTrue("ミ < ム", col.compare("ミ", "ム") < 0);
	assertTrue("ム < メ", col.compare("ム", "メ") < 0);
	assertTrue("メ < モ", col.compare("メ", "モ") < 0);
	assertTrue("モ < ヤ", col.compare("モ", "ヤ") < 0);
	assertTrue("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
	assertTrue("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
	assertTrue("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
	assertTrue("ラ < リ", col.compare("ラ", "リ") < 0);
	assertTrue("リ < ル", col.compare("リ", "ル") < 0);
	assertTrue("ル < レ", col.compare("ル", "レ") < 0);
	assertTrue("レ < ロ", col.compare("レ", "ロ") < 0);
	assertTrue("ロ < ワ", col.compare("ロ", "ワ") < 0);
	assertTrue("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
	assertTrue("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
	assertTrue("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
	assertTrue("ヲ < ン", col.compare("ヲ", "ン") < 0);
}

function testJSCollatorKatakanaSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	assertTrue("ガ = ガ", col.compare("ガ", "ガ") === 0);
	assertTrue("ガ < キ", col.compare("ガ", "キ") < 0);
	assertTrue("キ < ギ", col.compare("キ", "ギ") < 0);
	assertTrue("ギ = ギ", col.compare("ギ", "ギ") === 0);
	assertTrue("ギ < ク", col.compare("ギ", "ク") < 0);
	assertTrue("ク < グ", col.compare("ク", "グ") < 0);
	assertTrue("グ = グ", col.compare("グ", "グ") === 0);
	assertTrue("グ < ケ", col.compare("グ", "ケ") < 0);
	assertTrue("ケ < ゲ", col.compare("ケ", "ゲ") < 0);
	assertTrue("ゲ = ゲ", col.compare("ゲ", "ゲ") === 0);
	assertTrue("ゲ < コ", col.compare("ゲ", "コ") < 0);
	assertTrue("コ < ゴ", col.compare("コ", "ゴ") < 0);
	assertTrue("ゴ = ゴ", col.compare("ゴ", "ゴ") === 0);
	assertTrue("ゴ < サ", col.compare("ゴ", "サ") < 0);
	assertTrue("サ < ザ", col.compare("サ", "ザ") < 0);
	assertTrue("ザ = ザ", col.compare("ザ", "ザ") === 0);
	assertTrue("ザ < シ", col.compare("ザ", "シ") < 0);
	assertTrue("シ < ジ", col.compare("シ", "ジ") < 0);
	assertTrue("ジ = ジ", col.compare("ジ", "ジ") === 0);
	assertTrue("ジ < ス", col.compare("ジ", "ス") < 0);
	assertTrue("ス < ズ", col.compare("ス", "ズ") < 0);
	assertTrue("ズ = ズ", col.compare("ズ", "ズ") === 0);
	assertTrue("ズ < セ", col.compare("ズ", "セ") < 0);
	assertTrue("セ < ゼ", col.compare("セ", "ゼ") < 0);
	assertTrue("ゼ = ゼ", col.compare("ゼ", "ゼ") === 0);
	assertTrue("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
	assertTrue("ソ < ゾ", col.compare("ソ", "ゾ") < 0);
	assertTrue("ゾ = ゾ", col.compare("ゾ", "ゾ") === 0);
	assertTrue("ゾ < タ", col.compare("ゾ", "タ") < 0);
	assertTrue("タ < ダ", col.compare("タ", "ダ") < 0);
	assertTrue("ダ = ダ", col.compare("ダ", "ダ") === 0);
	assertTrue("ダ < チ", col.compare("ダ", "チ") < 0);
	assertTrue("チ < ヂ", col.compare("チ", "ヂ") < 0);
	assertTrue("ヂ = ヂ", col.compare("ヂ", "ヂ") === 0);
	assertTrue("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
	assertTrue("ツ < ヅ", col.compare("ツ", "ヅ") < 0);
	assertTrue("ヅ = ヅ", col.compare("ヅ", "ヅ") === 0);
	assertTrue("ヅ < テ", col.compare("ヅ", "テ") < 0);
	assertTrue("テ < デ", col.compare("テ", "デ") < 0);
	assertTrue("デ = デ", col.compare("デ", "デ") === 0);
	assertTrue("デ < ト", col.compare("デ", "ト") < 0);
	assertTrue("ト < ド", col.compare("ト", "ド") < 0);
	assertTrue("ド = ド", col.compare("ド", "ド") === 0);
	assertTrue("ド < ナ", col.compare("ド", "ナ") < 0);
	assertTrue("ナ < ニ", col.compare("ナ", "ニ") < 0);
	assertTrue("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
	assertTrue("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
	assertTrue("ネ < ノ", col.compare("ネ", "ノ") < 0);
	assertTrue("ノ < ハ", col.compare("ノ", "ハ") < 0);
	assertTrue("ハ < バ", col.compare("ハ", "バ") < 0);
	assertTrue("バ = バ", col.compare("バ", "バ") === 0);
	assertTrue("バ < パ", col.compare("バ", "パ") < 0);
	assertTrue("パ = パ", col.compare("パ", "パ") === 0);
	assertTrue("パ < ヒ", col.compare("パ", "ヒ") < 0);
	assertTrue("ヒ < ビ", col.compare("ヒ", "ビ") < 0);
	assertTrue("ビ = ビ", col.compare("ビ", "ビ") === 0);
	assertTrue("ビ < ピ", col.compare("ビ", "ピ") < 0);
	assertTrue("ピ = ピ", col.compare("ピ", "ピ") === 0);
	assertTrue("ピ < フ", col.compare("ピ", "フ") < 0);
	assertTrue("フ < ブ", col.compare("フ", "ブ") < 0);
	assertTrue("ブ = ブ", col.compare("ブ", "ブ") === 0);
	assertTrue("ブ < プ", col.compare("ブ", "プ") < 0);
	assertTrue("プ = プ", col.compare("プ", "プ") === 0);
	assertTrue("プ < ヘ", col.compare("プ", "ヘ") < 0);
	assertTrue("ヘ < ベ", col.compare("ヘ", "ベ") < 0);
	assertTrue("ベ = ベ", col.compare("ベ", "ベ") === 0);
	assertTrue("ベ < ペ", col.compare("ベ", "ペ") < 0);
	assertTrue("ペ = ペ", col.compare("ペ", "ペ") === 0);
	assertTrue("ペ < ホ", col.compare("ペ", "ホ") < 0);
	assertTrue("ホ < ボ", col.compare("ホ", "ボ") < 0);
	assertTrue("ボ = ボ", col.compare("ボ", "ボ") === 0);
	assertTrue("ボ < ポ", col.compare("ボ", "ポ") < 0);
	assertTrue("ポ = ポ", col.compare("ポ", "ポ") === 0);
	assertTrue("ポ < マ", col.compare("ポ", "マ") < 0);
	assertTrue("マ < ミ", col.compare("マ", "ミ") < 0);
	assertTrue("ミ < ム", col.compare("ミ", "ム") < 0);
	assertTrue("ム < メ", col.compare("ム", "メ") < 0);
	assertTrue("メ < モ", col.compare("メ", "モ") < 0);
	assertTrue("モ < ヤ", col.compare("モ", "ヤ") < 0);
	assertTrue("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
	assertTrue("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
	assertTrue("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
	assertTrue("ラ < リ", col.compare("ラ", "リ") < 0);
	assertTrue("リ < ル", col.compare("リ", "ル") < 0);
	assertTrue("ル < レ", col.compare("ル", "レ") < 0);
	assertTrue("レ < ロ", col.compare("レ", "ロ") < 0);
	assertTrue("ロ < ワ", col.compare("ロ", "ワ") < 0);
	assertTrue("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
	assertTrue("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
	assertTrue("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
	assertTrue("ヲ < ン", col.compare("ヲ", "ン") < 0);
}

function testJSCollatorKatakanaPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ = ガ", col.compare("カ", "ガ") === 0);
	assertTrue("ガ = ガ", col.compare("ガ", "ガ") === 0);
	assertTrue("ガ < キ", col.compare("ガ", "キ") < 0);
	assertTrue("キ = ギ", col.compare("キ", "ギ") === 0);
	assertTrue("ギ = ギ", col.compare("ギ", "ギ") === 0);
	assertTrue("ギ < ク", col.compare("ギ", "ク") < 0);
	assertTrue("ク = グ", col.compare("ク", "グ") === 0);
	assertTrue("グ = グ", col.compare("グ", "グ") === 0);
	assertTrue("グ < ケ", col.compare("グ", "ケ") < 0);
	assertTrue("ケ = ゲ", col.compare("ケ", "ゲ") === 0);
	assertTrue("ゲ = ゲ", col.compare("ゲ", "ゲ") === 0);
	assertTrue("ゲ < コ", col.compare("ゲ", "コ") < 0);
	assertTrue("コ = ゴ", col.compare("コ", "ゴ") === 0);
	assertTrue("ゴ = ゴ", col.compare("ゴ", "ゴ") === 0);
	assertTrue("ゴ < サ", col.compare("ゴ", "サ") < 0);
	assertTrue("サ = ザ", col.compare("サ", "ザ") === 0);
	assertTrue("ザ = ザ", col.compare("ザ", "ザ") === 0);
	assertTrue("ザ < シ", col.compare("ザ", "シ") < 0);
	assertTrue("シ = ジ", col.compare("シ", "ジ") === 0);
	assertTrue("ジ = ジ", col.compare("ジ", "ジ") === 0);
	assertTrue("ジ < ス", col.compare("ジ", "ス") < 0);
	assertTrue("ス = ズ", col.compare("ス", "ズ") === 0);
	assertTrue("ズ = ズ", col.compare("ズ", "ズ") === 0);
	assertTrue("ズ < セ", col.compare("ズ", "セ") < 0);
	assertTrue("セ = ゼ", col.compare("セ", "ゼ") === 0);
	assertTrue("ゼ = ゼ", col.compare("ゼ", "ゼ") === 0);
	assertTrue("ゼ < ソ", col.compare("ゼ", "ソ") < 0);
	assertTrue("ソ = ゾ", col.compare("ソ", "ゾ") === 0);
	assertTrue("ゾ = ゾ", col.compare("ゾ", "ゾ") === 0);
	assertTrue("ゾ < タ", col.compare("ゾ", "タ") < 0);
	assertTrue("タ = ダ", col.compare("タ", "ダ") === 0);
	assertTrue("ダ = ダ", col.compare("ダ", "ダ") === 0);
	assertTrue("ダ < チ", col.compare("ダ", "チ") < 0);
	assertTrue("チ = ヂ", col.compare("チ", "ヂ") === 0);
	assertTrue("ヂ = ヂ", col.compare("ヂ", "ヂ") === 0);
	assertTrue("ヂ < ツ", col.compare("ヂ", "ツ") < 0);
	assertTrue("ツ = ヅ", col.compare("ツ", "ヅ") === 0);
	assertTrue("ヅ = ヅ", col.compare("ヅ", "ヅ") === 0);
	assertTrue("ヅ < テ", col.compare("ヅ", "テ") < 0);
	assertTrue("テ = デ", col.compare("テ", "デ") === 0);
	assertTrue("デ = デ", col.compare("デ", "デ") === 0);
	assertTrue("デ < ト", col.compare("デ", "ト") < 0);
	assertTrue("ト = ド", col.compare("ト", "ド") === 0);
	assertTrue("ド = ド", col.compare("ド", "ド") === 0);
	assertTrue("ド < ナ", col.compare("ド", "ナ") < 0);
	assertTrue("ナ < ニ", col.compare("ナ", "ニ") < 0);
	assertTrue("ニ < ヌ", col.compare("ニ", "ヌ") < 0);
	assertTrue("ヌ < ネ", col.compare("ヌ", "ネ") < 0);
	assertTrue("ネ < ノ", col.compare("ネ", "ノ") < 0);
	assertTrue("ノ < ハ", col.compare("ノ", "ハ") < 0);
	assertTrue("ハ = バ", col.compare("ハ", "バ") === 0);
	assertTrue("バ = バ", col.compare("バ", "バ") === 0);
	assertTrue("バ = パ", col.compare("バ", "パ") === 0);
	assertTrue("パ = パ", col.compare("パ", "パ") === 0);
	assertTrue("パ < ヒ", col.compare("パ", "ヒ") < 0);
	assertTrue("ヒ = ビ", col.compare("ヒ", "ビ") === 0);
	assertTrue("ビ = ビ", col.compare("ビ", "ビ") === 0);
	assertTrue("ビ = ピ", col.compare("ビ", "ピ") === 0);
	assertTrue("ピ = ピ", col.compare("ピ", "ピ") === 0);
	assertTrue("ピ < フ", col.compare("ピ", "フ") < 0);
	assertTrue("フ = ブ", col.compare("フ", "ブ") === 0);
	assertTrue("ブ = ブ", col.compare("ブ", "ブ") === 0);
	assertTrue("ブ = プ", col.compare("ブ", "プ") === 0);
	assertTrue("プ = プ", col.compare("プ", "プ") === 0);
	assertTrue("プ < ヘ", col.compare("プ", "ヘ") < 0);
	assertTrue("ヘ = ベ", col.compare("ヘ", "ベ") === 0);
	assertTrue("ベ = ベ", col.compare("ベ", "ベ") === 0);
	assertTrue("ベ = ペ", col.compare("ベ", "ペ") === 0);
	assertTrue("ペ = ペ", col.compare("ペ", "ペ") === 0);
	assertTrue("ペ < ホ", col.compare("ペ", "ホ") < 0);
	assertTrue("ホ = ボ", col.compare("ホ", "ボ") === 0);
	assertTrue("ボ = ボ", col.compare("ボ", "ボ") === 0);
	assertTrue("ボ = ポ", col.compare("ボ", "ポ") === 0);
	assertTrue("ポ = ポ", col.compare("ポ", "ポ") === 0);
	assertTrue("ポ < マ", col.compare("ポ", "マ") < 0);
	assertTrue("マ < ミ", col.compare("マ", "ミ") < 0);
	assertTrue("ミ < ム", col.compare("ミ", "ム") < 0);
	assertTrue("ム < メ", col.compare("ム", "メ") < 0);
	assertTrue("メ < モ", col.compare("メ", "モ") < 0);
	assertTrue("モ < ヤ", col.compare("モ", "ヤ") < 0);
	assertTrue("ヤ < ユ", col.compare("ヤ", "ユ") < 0);
	assertTrue("ユ < ヨ", col.compare("ユ", "ヨ") < 0);
	assertTrue("ヨ < ラ", col.compare("ヨ", "ラ") < 0);
	assertTrue("ラ < リ", col.compare("ラ", "リ") < 0);
	assertTrue("リ < ル", col.compare("リ", "ル") < 0);
	assertTrue("ル < レ", col.compare("ル", "レ") < 0);
	assertTrue("レ < ロ", col.compare("レ", "ロ") < 0);
	assertTrue("ロ < ワ", col.compare("ロ", "ワ") < 0);
	assertTrue("ワ < ヰ", col.compare("ワ", "ヰ") < 0);
	assertTrue("ヰ < ヱ", col.compare("ヰ", "ヱ") < 0);
	assertTrue("ヱ < ヲ", col.compare("ヱ", "ヲ") < 0);
	assertTrue("ヲ < ン", col.compare("ヲ", "ン") < 0);
}

function testJSCollatorKatakanaLengthMarksQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ァー < ァア", col.compare("ァー", "ァア") < 0);
	assertTrue("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
	assertTrue("アー < アア", col.compare("アー", "アア") < 0);
	assertTrue("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
	assertTrue("カー < カア", col.compare("カー", "カア") < 0);
	assertTrue("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("サー < サア", col.compare("サー", "サア") < 0);
	assertTrue("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
	assertTrue("ザー < ザア", col.compare("ザー", "ザア") < 0);
	assertTrue("ター < タア", col.compare("ター", "タア") < 0);
	assertTrue("ﾀー < ﾀア", col.compare("ﾀー", "ﾀア") < 0);
	assertTrue("ダー < ダア", col.compare("ダー", "ダア") < 0);
	assertTrue("ダー < ダア", col.compare("ダー", "ダア") < 0);
	assertTrue("ナー < ナア", col.compare("ナー", "ナア") < 0);
	assertTrue("ﾅー < ﾅア", col.compare("ﾅー", "ﾅア") < 0);
	assertTrue("ハー < ハア", col.compare("ハー", "ハア") < 0);
	assertTrue("ﾊー < ﾊア", col.compare("ﾊー", "ﾊア") < 0);
	assertTrue("ㇵー < ㇵア", col.compare("ㇵー", "ㇵア") < 0);
	assertTrue("バー < バア", col.compare("バー", "バア") < 0);
	assertTrue("バー < バア", col.compare("パー", "パア") < 0);
	assertTrue("パー < パア", col.compare("バー", "バア") < 0);
	assertTrue("パー < パア", col.compare("パー", "パア") < 0);
	assertTrue("マー < マア", col.compare("マー", "マア") < 0);
	assertTrue("ﾏー < ﾏア", col.compare("ﾏー", "ﾏア") < 0);
	assertTrue("ャー < ャア", col.compare("ャー", "ャア") < 0);
	assertTrue("ｬー < ｬア", col.compare("ｬー", "ｬア") < 0);
	assertTrue("ヤー < ヤア", col.compare("ヤー", "ヤア") < 0);
	assertTrue("ﾔー < ﾔア", col.compare("ﾔー", "ﾔア") < 0);
	assertTrue("ラー < ラア", col.compare("ラー", "ラア") < 0);
	assertTrue("ﾗー < ﾗア", col.compare("ﾗー", "ﾗア") < 0);
	assertTrue("ㇻー < ㇻア", col.compare("ㇻー", "ㇻア") < 0);
	assertTrue("ヮー < ヮア", col.compare("ヮー", "ヮア") < 0);
	assertTrue("ワー < ワア", col.compare("ワー", "ワア") < 0);
	assertTrue("ﾜー < ﾜア", col.compare("ﾜー", "ﾜア") < 0);
	assertTrue("ヵー < ヵア", col.compare("ヵー", "ヵア") < 0);
	assertTrue("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);
	assertTrue("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);

	assertTrue("ィー < ィイ", col.compare("ィー", "ィイ") < 0);
	assertTrue("ｨー < ｨイ", col.compare("ｨー", "ｨイ") < 0);
	assertTrue("イー < イイ", col.compare("イー", "イイ") < 0);
	assertTrue("ｲー < ｲイ", col.compare("ｲー", "ｲイ") < 0);
	assertTrue("キー < キイ", col.compare("キー", "キイ") < 0);
	assertTrue("ｷー < ｷイ", col.compare("ｷー", "ｷイ") < 0);
	assertTrue("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
	assertTrue("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
	assertTrue("シー < シイ", col.compare("シー", "シイ") < 0);
	assertTrue("ｼー < ｼイ", col.compare("ｼー", "ｼイ") < 0);
	assertTrue("ㇱー < ㇱイ", col.compare("ㇱー", "ㇱイ") < 0);
	assertTrue("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
	assertTrue("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
	assertTrue("チー < チイ", col.compare("チー", "チイ") < 0);
	assertTrue("ﾁー < ﾁイ", col.compare("ﾁー", "ﾁイ") < 0);
	assertTrue("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
	assertTrue("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
	assertTrue("ニー < ニイ", col.compare("ニー", "ニイ") < 0);
	assertTrue("ﾆー < ﾆイ", col.compare("ﾆー", "ﾆイ") < 0);
	assertTrue("ヒー < ヒイ", col.compare("ヒー", "ヒイ") < 0);
	assertTrue("ﾋー < ﾋイ", col.compare("ﾋー", "ﾋイ") < 0);
	assertTrue("ㇶー < ㇶイ", col.compare("ㇶー", "ㇶイ") < 0);
	assertTrue("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
	assertTrue("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
	assertTrue("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
	assertTrue("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
	assertTrue("ミー < ミイ", col.compare("ミー", "ミイ") < 0);
	assertTrue("ﾐー < ﾐイ", col.compare("ﾐー", "ﾐイ") < 0);
	assertTrue("リー < リイ", col.compare("リー", "リイ") < 0);
	assertTrue("ﾘー < ﾘイ", col.compare("ﾘー", "ﾘイ") < 0);
	assertTrue("ㇼー < ㇼイ", col.compare("ㇼー", "ㇼイ") < 0);
	assertTrue("ヰー < ヰイ", col.compare("ヰー", "ヰイ") < 0);
	assertTrue("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);
	assertTrue("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);

	assertTrue("ゥー < ゥウ", col.compare("ゥー", "ゥウ") < 0);
	assertTrue("ｩー < ｩウ", col.compare("ｩー", "ｩウ") < 0);
	assertTrue("ウー < ウウ", col.compare("ウー", "ウウ") < 0);
	assertTrue("ｳー < ｳウ", col.compare("ｳー", "ｳウ") < 0);
	assertTrue("クー < クウ", col.compare("クー", "クウ") < 0);
	assertTrue("ｸー < ｸウ", col.compare("ｸー", "ｸウ") < 0);
	assertTrue("ㇰー < ㇰウ", col.compare("ㇰー", "ㇰウ") < 0);
	assertTrue("グー < グウ", col.compare("グー", "グウ") < 0);
	assertTrue("グー < グウ", col.compare("グー", "グウ") < 0);
	assertTrue("スー < スウ", col.compare("スー", "スウ") < 0);
	assertTrue("ｽー < ｽウ", col.compare("ｽー", "ｽウ") < 0);
	assertTrue("ㇲー < ㇲウ", col.compare("ㇲー", "ㇲウ") < 0);
	assertTrue("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
	assertTrue("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
	assertTrue("ッー < ッウ", col.compare("ッー", "ッウ") < 0);
	assertTrue("ｯー < ｯウ", col.compare("ｯー", "ｯウ") < 0);
	assertTrue("ツー < ツウ", col.compare("ツー", "ツウ") < 0);
	assertTrue("ﾂー < ﾂウ", col.compare("ﾂー", "ﾂウ") < 0);
	assertTrue("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
	assertTrue("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
	assertTrue("ヌー < ヌウ", col.compare("ヌー", "ヌウ") < 0);
	assertTrue("ﾇー < ﾇウ", col.compare("ﾇー", "ﾇウ") < 0);
	assertTrue("ㇴー < ㇴウ", col.compare("ㇴー", "ㇴウ") < 0);
	assertTrue("フー < フウ", col.compare("フー", "フウ") < 0);
	assertTrue("ﾌー < ﾌウ", col.compare("ﾌー", "ﾌウ") < 0);
	assertTrue("ㇷー < ㇷウ", col.compare("ㇷー", "ㇷウ") < 0);
	assertTrue("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
	assertTrue("プー < プウ", col.compare("プー", "プウ") < 0);
	assertTrue("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
	assertTrue("プー < プウ", col.compare("プー", "プウ") < 0);
	assertTrue("ムー < ムウ", col.compare("ムー", "ムウ") < 0);
	assertTrue("ﾑー < ﾑウ", col.compare("ﾑー", "ﾑウ") < 0);
	assertTrue("ㇺー < ㇺウ", col.compare("ㇺー", "ㇺウ") < 0);
	assertTrue("ュー < ュウ", col.compare("ュー", "ュウ") < 0);
	assertTrue("ｭー < ｭウ", col.compare("ｭー", "ｭウ") < 0);
	assertTrue("ユー < ユウ", col.compare("ユー", "ユウ") < 0);
	assertTrue("ﾕー < ﾕウ", col.compare("ﾕー", "ﾕウ") < 0);
	assertTrue("ルー < ルウ", col.compare("ルー", "ルウ") < 0);
	assertTrue("ﾙー < ﾙウ", col.compare("ﾙー", "ﾙウ") < 0);
	assertTrue("ㇽー < ㇽウ", col.compare("ㇽー", "ㇽウ") < 0);
	assertTrue("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);
	assertTrue("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);

	assertTrue("ェー < ェエ", col.compare("ェー", "ェエ") < 0);
	assertTrue("ｪー < ｪエ", col.compare("ｪー", "ｪエ") < 0);
	assertTrue("エー < エエ", col.compare("エー", "エエ") < 0);
	assertTrue("ｴー < ｴエ", col.compare("ｴー", "ｴエ") < 0);
	assertTrue("ケー < ケエ", col.compare("ケー", "ケエ") < 0);
	assertTrue("ｹー < ｹエ", col.compare("ｹー", "ｹエ") < 0);
	assertTrue("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
	assertTrue("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
	assertTrue("セー < セエ", col.compare("セー", "セエ") < 0);
	assertTrue("ｾー < ｾエ", col.compare("ｾー", "ｾエ") < 0);
	assertTrue("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
	assertTrue("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
	assertTrue("テー < テエ", col.compare("テー", "テエ") < 0);
	assertTrue("ﾃー < ﾃエ", col.compare("ﾃー", "ﾃエ") < 0);
	assertTrue("デー < デエ", col.compare("デー", "デエ") < 0);
	assertTrue("デー < デエ", col.compare("デー", "デエ") < 0);
	assertTrue("ネー < ネエ", col.compare("ネー", "ネエ") < 0);
	assertTrue("ﾈー < ﾈエ", col.compare("ﾈー", "ﾈエ") < 0);
	assertTrue("ヘー < ヘエ", col.compare("ヘー", "ヘエ") < 0);
	assertTrue("ﾍー < ﾍエ", col.compare("ﾍー", "ﾍエ") < 0);
	assertTrue("ㇸー < ㇸエ", col.compare("ㇸー", "ㇸエ") < 0);
	assertTrue("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
	assertTrue("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
	assertTrue("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
	assertTrue("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
	assertTrue("メー < メエ", col.compare("メー", "メエ") < 0);
	assertTrue("ﾒー < ﾒエ", col.compare("ﾒー", "ﾒエ") < 0);
	assertTrue("レー < レエ", col.compare("レー", "レエ") < 0);
	assertTrue("ﾚー < ﾚエ", col.compare("ﾚー", "ﾚエ") < 0);
	assertTrue("ㇾー < ㇾエ", col.compare("ㇾー", "ㇾエ") < 0);
	assertTrue("ヱー < ヱエ", col.compare("ヱー", "ヱエ") < 0);
	assertTrue("ヶー < ヶエ", col.compare("ヶー", "ヶエ") < 0);
	assertTrue("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);
	assertTrue("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);

	assertTrue("ォー < ォオ", col.compare("ォー", "ォオ") < 0);
	assertTrue("ｫー < ｫオ", col.compare("ｫー", "ｫオ") < 0);
	assertTrue("オー < オオ", col.compare("オー", "オオ") < 0);
	assertTrue("ｵー < ｵオ", col.compare("ｵー", "ｵオ") < 0);
	assertTrue("コー < コオ", col.compare("コー", "コオ") < 0);
	assertTrue("ｺー < ｺオ", col.compare("ｺー", "ｺオ") < 0);
	assertTrue("ゴー < ゴオ", col.compare("ゴー", "ゴオ") < 0);
	assertTrue("コー < コオ", col.compare("ゴー", "ゴオ") < 0);
	assertTrue("ソー < ソオ", col.compare("ソー", "ソオ") < 0);
	assertTrue("ｿー < ｿオ", col.compare("ｿー", "ｿオ") < 0);
	assertTrue("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
	assertTrue("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
	assertTrue("トー < トオ", col.compare("トー", "トオ") < 0);
	assertTrue("ﾄー < ﾄオ", col.compare("ﾄー", "ﾄオ") < 0);
	assertTrue("ㇳー < ㇳオ", col.compare("ㇳー", "ㇳオ") < 0);
	assertTrue("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
	assertTrue("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
	assertTrue("ノー < ノオ", col.compare("ノー", "ノオ") < 0);
	assertTrue("ﾉー < ﾉオ", col.compare("ﾉー", "ﾉオ") < 0);
	assertTrue("ホー < ホオ", col.compare("ホー", "ホオ") < 0);
	assertTrue("ﾎー < ﾎオ", col.compare("ﾎー", "ﾎオ") < 0);
	assertTrue("ㇹー < ㇹオ", col.compare("ㇹー", "ㇹオ") < 0);
	assertTrue("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
	assertTrue("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
	assertTrue("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
	assertTrue("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
	assertTrue("モー < モオ", col.compare("モー", "モオ") < 0);
	assertTrue("ﾓー < ﾓオ", col.compare("ﾓー", "ﾓオ") < 0);
	assertTrue("ョー < ョオ", col.compare("ョー", "ョオ") < 0);
	assertTrue("ｮー < ｮオ", col.compare("ｮー", "ｮオ") < 0);
	assertTrue("ヨー < ヨオ", col.compare("ヨー", "ヨオ") < 0);
	assertTrue("ﾖー < ﾖオ", col.compare("ﾖー", "ﾖオ") < 0);
	assertTrue("ロー < ロオ", col.compare("ロー", "ロオ") < 0);
	assertTrue("ﾛー < ﾛオ", col.compare("ﾛー", "ﾛオ") < 0);
	assertTrue("ㇿー < ㇿオ", col.compare("ㇿー", "ㇿオ") < 0);
	assertTrue("ヲー < ヲオ", col.compare("ヲー", "ヲオ") < 0);
	assertTrue("ｦー < ｦオ", col.compare("ｦー", "ｦオ") < 0);
	assertTrue("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
	assertTrue("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
}

function testJSCollatorKatakanaLengthMarksTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ァー < ァア", col.compare("ァー", "ァア") < 0);
	assertTrue("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
	assertTrue("アー < アア", col.compare("アー", "アア") < 0);
	assertTrue("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
	assertTrue("カー < カア", col.compare("カー", "カア") < 0);
	assertTrue("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("サー < サア", col.compare("サー", "サア") < 0);
	assertTrue("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);
	assertTrue("ザー < ザア", col.compare("ザー", "ザア") < 0);
	assertTrue("ター < タア", col.compare("ター", "タア") < 0);
	assertTrue("ﾀー < ﾀア", col.compare("ﾀー", "ﾀア") < 0);
	assertTrue("ダー < ダア", col.compare("ダー", "ダア") < 0);
	assertTrue("ダー < ダア", col.compare("ダー", "ダア") < 0);
	assertTrue("ナー < ナア", col.compare("ナー", "ナア") < 0);
	assertTrue("ﾅー < ﾅア", col.compare("ﾅー", "ﾅア") < 0);
	assertTrue("ハー < ハア", col.compare("ハー", "ハア") < 0);
	assertTrue("ﾊー < ﾊア", col.compare("ﾊー", "ﾊア") < 0);
	assertTrue("ㇵー < ㇵア", col.compare("ㇵー", "ㇵア") < 0);
	assertTrue("バー < バア", col.compare("バー", "バア") < 0);
	assertTrue("バー < バア", col.compare("パー", "パア") < 0);
	assertTrue("パー < パア", col.compare("バー", "バア") < 0);
	assertTrue("パー < パア", col.compare("パー", "パア") < 0);
	assertTrue("マー < マア", col.compare("マー", "マア") < 0);
	assertTrue("ﾏー < ﾏア", col.compare("ﾏー", "ﾏア") < 0);
	assertTrue("ャー < ャア", col.compare("ャー", "ャア") < 0);
	assertTrue("ｬー < ｬア", col.compare("ｬー", "ｬア") < 0);
	assertTrue("ヤー < ヤア", col.compare("ヤー", "ヤア") < 0);
	assertTrue("ﾔー < ﾔア", col.compare("ﾔー", "ﾔア") < 0);
	assertTrue("ラー < ラア", col.compare("ラー", "ラア") < 0);
	assertTrue("ﾗー < ﾗア", col.compare("ﾗー", "ﾗア") < 0);
	assertTrue("ㇻー < ㇻア", col.compare("ㇻー", "ㇻア") < 0);
	assertTrue("ヮー < ヮア", col.compare("ヮー", "ヮア") < 0);
	assertTrue("ワー < ワア", col.compare("ワー", "ワア") < 0);
	assertTrue("ﾜー < ﾜア", col.compare("ﾜー", "ﾜア") < 0);
	assertTrue("ヵー < ヵア", col.compare("ヵー", "ヵア") < 0);
	assertTrue("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);
	assertTrue("ヷー < ヷア", col.compare("ヷー", "ヷア") < 0);

	assertTrue("ィー < ィイ", col.compare("ィー", "ィイ") < 0);
	assertTrue("ｨー < ｨイ", col.compare("ｨー", "ｨイ") < 0);
	assertTrue("イー < イイ", col.compare("イー", "イイ") < 0);
	assertTrue("ｲー < ｲイ", col.compare("ｲー", "ｲイ") < 0);
	assertTrue("キー < キイ", col.compare("キー", "キイ") < 0);
	assertTrue("ｷー < ｷイ", col.compare("ｷー", "ｷイ") < 0);
	assertTrue("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
	assertTrue("ギー < ギイ", col.compare("ギー", "ギイ") < 0);
	assertTrue("シー < シイ", col.compare("シー", "シイ") < 0);
	assertTrue("ｼー < ｼイ", col.compare("ｼー", "ｼイ") < 0);
	assertTrue("ㇱー < ㇱイ", col.compare("ㇱー", "ㇱイ") < 0);
	assertTrue("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
	assertTrue("ジー < ジイ", col.compare("ジー", "ジイ") < 0);
	assertTrue("チー < チイ", col.compare("チー", "チイ") < 0);
	assertTrue("ﾁー < ﾁイ", col.compare("ﾁー", "ﾁイ") < 0);
	assertTrue("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
	assertTrue("ヂー < ヂイ", col.compare("ヂー", "ヂイ") < 0);
	assertTrue("ニー < ニイ", col.compare("ニー", "ニイ") < 0);
	assertTrue("ﾆー < ﾆイ", col.compare("ﾆー", "ﾆイ") < 0);
	assertTrue("ヒー < ヒイ", col.compare("ヒー", "ヒイ") < 0);
	assertTrue("ﾋー < ﾋイ", col.compare("ﾋー", "ﾋイ") < 0);
	assertTrue("ㇶー < ㇶイ", col.compare("ㇶー", "ㇶイ") < 0);
	assertTrue("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
	assertTrue("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
	assertTrue("ビー < ビイ", col.compare("ビー", "ビイ") < 0);
	assertTrue("ピー < ピイ", col.compare("ピー", "ピイ") < 0);
	assertTrue("ミー < ミイ", col.compare("ミー", "ミイ") < 0);
	assertTrue("ﾐー < ﾐイ", col.compare("ﾐー", "ﾐイ") < 0);
	assertTrue("リー < リイ", col.compare("リー", "リイ") < 0);
	assertTrue("ﾘー < ﾘイ", col.compare("ﾘー", "ﾘイ") < 0);
	assertTrue("ㇼー < ㇼイ", col.compare("ㇼー", "ㇼイ") < 0);
	assertTrue("ヰー < ヰイ", col.compare("ヰー", "ヰイ") < 0);
	assertTrue("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);
	assertTrue("ヸー < ヸイ", col.compare("ヸー", "ヸイ") < 0);

	assertTrue("ゥー < ゥウ", col.compare("ゥー", "ゥウ") < 0);
	assertTrue("ｩー < ｩウ", col.compare("ｩー", "ｩウ") < 0);
	assertTrue("ウー < ウウ", col.compare("ウー", "ウウ") < 0);
	assertTrue("ｳー < ｳウ", col.compare("ｳー", "ｳウ") < 0);
	assertTrue("クー < クウ", col.compare("クー", "クウ") < 0);
	assertTrue("ｸー < ｸウ", col.compare("ｸー", "ｸウ") < 0);
	assertTrue("ㇰー < ㇰウ", col.compare("ㇰー", "ㇰウ") < 0);
	assertTrue("グー < グウ", col.compare("グー", "グウ") < 0);
	assertTrue("グー < グウ", col.compare("グー", "グウ") < 0);
	assertTrue("スー < スウ", col.compare("スー", "スウ") < 0);
	assertTrue("ｽー < ｽウ", col.compare("ｽー", "ｽウ") < 0);
	assertTrue("ㇲー < ㇲウ", col.compare("ㇲー", "ㇲウ") < 0);
	assertTrue("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
	assertTrue("ズー < ズウ", col.compare("ズー", "ズウ") < 0);
	assertTrue("ッー < ッウ", col.compare("ッー", "ッウ") < 0);
	assertTrue("ｯー < ｯウ", col.compare("ｯー", "ｯウ") < 0);
	assertTrue("ツー < ツウ", col.compare("ツー", "ツウ") < 0);
	assertTrue("ﾂー < ﾂウ", col.compare("ﾂー", "ﾂウ") < 0);
	assertTrue("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
	assertTrue("ヅー < ヅウ", col.compare("ヅー", "ヅウ") < 0);
	assertTrue("ヌー < ヌウ", col.compare("ヌー", "ヌウ") < 0);
	assertTrue("ﾇー < ﾇウ", col.compare("ﾇー", "ﾇウ") < 0);
	assertTrue("ㇴー < ㇴウ", col.compare("ㇴー", "ㇴウ") < 0);
	assertTrue("フー < フウ", col.compare("フー", "フウ") < 0);
	assertTrue("ﾌー < ﾌウ", col.compare("ﾌー", "ﾌウ") < 0);
	assertTrue("ㇷー < ㇷウ", col.compare("ㇷー", "ㇷウ") < 0);
	assertTrue("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
	assertTrue("プー < プウ", col.compare("プー", "プウ") < 0);
	assertTrue("ブー < ブウ", col.compare("ブー", "ブウ") < 0);
	assertTrue("プー < プウ", col.compare("プー", "プウ") < 0);
	assertTrue("ムー < ムウ", col.compare("ムー", "ムウ") < 0);
	assertTrue("ﾑー < ﾑウ", col.compare("ﾑー", "ﾑウ") < 0);
	assertTrue("ㇺー < ㇺウ", col.compare("ㇺー", "ㇺウ") < 0);
	assertTrue("ュー < ュウ", col.compare("ュー", "ュウ") < 0);
	assertTrue("ｭー < ｭウ", col.compare("ｭー", "ｭウ") < 0);
	assertTrue("ユー < ユウ", col.compare("ユー", "ユウ") < 0);
	assertTrue("ﾕー < ﾕウ", col.compare("ﾕー", "ﾕウ") < 0);
	assertTrue("ルー < ルウ", col.compare("ルー", "ルウ") < 0);
	assertTrue("ﾙー < ﾙウ", col.compare("ﾙー", "ﾙウ") < 0);
	assertTrue("ㇽー < ㇽウ", col.compare("ㇽー", "ㇽウ") < 0);
	assertTrue("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);
	assertTrue("ヴー < ヴウ", col.compare("ヴー", "ヴウ") < 0);

	assertTrue("ェー < ェエ", col.compare("ェー", "ェエ") < 0);
	assertTrue("ｪー < ｪエ", col.compare("ｪー", "ｪエ") < 0);
	assertTrue("エー < エエ", col.compare("エー", "エエ") < 0);
	assertTrue("ｴー < ｴエ", col.compare("ｴー", "ｴエ") < 0);
	assertTrue("ケー < ケエ", col.compare("ケー", "ケエ") < 0);
	assertTrue("ｹー < ｹエ", col.compare("ｹー", "ｹエ") < 0);
	assertTrue("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
	assertTrue("ゲー < ゲエ", col.compare("ゲー", "ゲエ") < 0);
	assertTrue("セー < セエ", col.compare("セー", "セエ") < 0);
	assertTrue("ｾー < ｾエ", col.compare("ｾー", "ｾエ") < 0);
	assertTrue("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
	assertTrue("ゼー < ゼエ", col.compare("ゼー", "ゼエ") < 0);
	assertTrue("テー < テエ", col.compare("テー", "テエ") < 0);
	assertTrue("ﾃー < ﾃエ", col.compare("ﾃー", "ﾃエ") < 0);
	assertTrue("デー < デエ", col.compare("デー", "デエ") < 0);
	assertTrue("デー < デエ", col.compare("デー", "デエ") < 0);
	assertTrue("ネー < ネエ", col.compare("ネー", "ネエ") < 0);
	assertTrue("ﾈー < ﾈエ", col.compare("ﾈー", "ﾈエ") < 0);
	assertTrue("ヘー < ヘエ", col.compare("ヘー", "ヘエ") < 0);
	assertTrue("ﾍー < ﾍエ", col.compare("ﾍー", "ﾍエ") < 0);
	assertTrue("ㇸー < ㇸエ", col.compare("ㇸー", "ㇸエ") < 0);
	assertTrue("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
	assertTrue("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
	assertTrue("ベー < ベエ", col.compare("ベー", "ベエ") < 0);
	assertTrue("ペー < ペエ", col.compare("ペー", "ペエ") < 0);
	assertTrue("メー < メエ", col.compare("メー", "メエ") < 0);
	assertTrue("ﾒー < ﾒエ", col.compare("ﾒー", "ﾒエ") < 0);
	assertTrue("レー < レエ", col.compare("レー", "レエ") < 0);
	assertTrue("ﾚー < ﾚエ", col.compare("ﾚー", "ﾚエ") < 0);
	assertTrue("ㇾー < ㇾエ", col.compare("ㇾー", "ㇾエ") < 0);
	assertTrue("ヱー < ヱエ", col.compare("ヱー", "ヱエ") < 0);
	assertTrue("ヶー < ヶエ", col.compare("ヶー", "ヶエ") < 0);
	assertTrue("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);
	assertTrue("ヹー < ヹエ", col.compare("ヹー", "ヹエ") < 0);

	assertTrue("ォー < ォオ", col.compare("ォー", "ォオ") < 0);
	assertTrue("ｫー < ｫオ", col.compare("ｫー", "ｫオ") < 0);
	assertTrue("オー < オオ", col.compare("オー", "オオ") < 0);
	assertTrue("ｵー < ｵオ", col.compare("ｵー", "ｵオ") < 0);
	assertTrue("コー < コオ", col.compare("コー", "コオ") < 0);
	assertTrue("ｺー < ｺオ", col.compare("ｺー", "ｺオ") < 0);
	assertTrue("ゴー < ゴオ", col.compare("ゴー", "ゴオ") < 0);
	assertTrue("コー < コオ", col.compare("ゴー", "ゴオ") < 0);
	assertTrue("ソー < ソオ", col.compare("ソー", "ソオ") < 0);
	assertTrue("ｿー < ｿオ", col.compare("ｿー", "ｿオ") < 0);
	assertTrue("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
	assertTrue("ゾー < ゾオ", col.compare("ゾー", "ゾオ") < 0);
	assertTrue("トー < トオ", col.compare("トー", "トオ") < 0);
	assertTrue("ﾄー < ﾄオ", col.compare("ﾄー", "ﾄオ") < 0);
	assertTrue("ㇳー < ㇳオ", col.compare("ㇳー", "ㇳオ") < 0);
	assertTrue("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
	assertTrue("ドー < ドオ", col.compare("ドー", "ドオ") < 0);
	assertTrue("ノー < ノオ", col.compare("ノー", "ノオ") < 0);
	assertTrue("ﾉー < ﾉオ", col.compare("ﾉー", "ﾉオ") < 0);
	assertTrue("ホー < ホオ", col.compare("ホー", "ホオ") < 0);
	assertTrue("ﾎー < ﾎオ", col.compare("ﾎー", "ﾎオ") < 0);
	assertTrue("ㇹー < ㇹオ", col.compare("ㇹー", "ㇹオ") < 0);
	assertTrue("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
	assertTrue("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
	assertTrue("ボー < ボオ", col.compare("ボー", "ボオ") < 0);
	assertTrue("ポー < ポオ", col.compare("ポー", "ポオ") < 0);
	assertTrue("モー < モオ", col.compare("モー", "モオ") < 0);
	assertTrue("ﾓー < ﾓオ", col.compare("ﾓー", "ﾓオ") < 0);
	assertTrue("ョー < ョオ", col.compare("ョー", "ョオ") < 0);
	assertTrue("ｮー < ｮオ", col.compare("ｮー", "ｮオ") < 0);
	assertTrue("ヨー < ヨオ", col.compare("ヨー", "ヨオ") < 0);
	assertTrue("ﾖー < ﾖオ", col.compare("ﾖー", "ﾖオ") < 0);
	assertTrue("ロー < ロオ", col.compare("ロー", "ロオ") < 0);
	assertTrue("ﾛー < ﾛオ", col.compare("ﾛー", "ﾛオ") < 0);
	assertTrue("ㇿー < ㇿオ", col.compare("ㇿー", "ㇿオ") < 0);
	assertTrue("ヲー < ヲオ", col.compare("ヲー", "ヲオ") < 0);
	assertTrue("ｦー < ｦオ", col.compare("ｦー", "ｦオ") < 0);
	assertTrue("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
	assertTrue("ヺー < ヺオ", col.compare("ヺー", "ヺオ") < 0);
}

function testJSCollatorKatakanaLengthMarksSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ァー = ァア", col.compare("ァー", "ァア") === 0);
	assertTrue("ｧー = ｧア", col.compare("ｧー", "ｧア") === 0);
	assertTrue("アー = アア", col.compare("アー", "アア") === 0);
	assertTrue("ｱー = ｱア", col.compare("ｱー", "ｱア") === 0);
	assertTrue("カー = カア", col.compare("カー", "カア") === 0);
	assertTrue("ｶー = ｶア", col.compare("ｶー", "ｶア") === 0);
	assertTrue("ガー = ガア", col.compare("ガー", "ガア") === 0);
	assertTrue("ガー = ガア", col.compare("ガー", "ガア") === 0);
	assertTrue("サー = サア", col.compare("サー", "サア") === 0);
	assertTrue("ｻー = ｻア", col.compare("ｻー", "ｻア") === 0);
	assertTrue("ザー = ザア", col.compare("ザー", "ザア") === 0);
	assertTrue("ター = タア", col.compare("ター", "タア") === 0);
	assertTrue("ﾀー = ﾀア", col.compare("ﾀー", "ﾀア") === 0);
	assertTrue("ダー = ダア", col.compare("ダー", "ダア") === 0);
	assertTrue("ダー = ダア", col.compare("ダー", "ダア") === 0);
	assertTrue("ナー = ナア", col.compare("ナー", "ナア") === 0);
	assertTrue("ﾅー = ﾅア", col.compare("ﾅー", "ﾅア") === 0);
	assertTrue("ハー = ハア", col.compare("ハー", "ハア") === 0);
	assertTrue("ﾊー = ﾊア", col.compare("ﾊー", "ﾊア") === 0);
	assertTrue("ㇵー = ㇵア", col.compare("ㇵー", "ㇵア") === 0);
	assertTrue("バー = バア", col.compare("バー", "バア") === 0);
	assertTrue("バー = バア", col.compare("パー", "パア") === 0);
	assertTrue("パー = パア", col.compare("バー", "バア") === 0);
	assertTrue("パー = パア", col.compare("パー", "パア") === 0);
	assertTrue("マー = マア", col.compare("マー", "マア") === 0);
	assertTrue("ﾏー = ﾏア", col.compare("ﾏー", "ﾏア") === 0);
	assertTrue("ャー = ャア", col.compare("ャー", "ャア") === 0);
	assertTrue("ｬー = ｬア", col.compare("ｬー", "ｬア") === 0);
	assertTrue("ヤー = ヤア", col.compare("ヤー", "ヤア") === 0);
	assertTrue("ﾔー = ﾔア", col.compare("ﾔー", "ﾔア") === 0);
	assertTrue("ラー = ラア", col.compare("ラー", "ラア") === 0);
	assertTrue("ﾗー = ﾗア", col.compare("ﾗー", "ﾗア") === 0);
	assertTrue("ㇻー = ㇻア", col.compare("ㇻー", "ㇻア") === 0);
	assertTrue("ヮー = ヮア", col.compare("ヮー", "ヮア") === 0);
	assertTrue("ワー = ワア", col.compare("ワー", "ワア") === 0);
	assertTrue("ﾜー = ﾜア", col.compare("ﾜー", "ﾜア") === 0);
	assertTrue("ヵー = ヵア", col.compare("ヵー", "ヵア") === 0);
	assertTrue("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);
	assertTrue("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);

	assertTrue("ィー = ィイ", col.compare("ィー", "ィイ") === 0);
	assertTrue("ｨー = ｨイ", col.compare("ｨー", "ｨイ") === 0);
	assertTrue("イー = イイ", col.compare("イー", "イイ") === 0);
	assertTrue("ｲー = ｲイ", col.compare("ｲー", "ｲイ") === 0);
	assertTrue("キー = キイ", col.compare("キー", "キイ") === 0);
	assertTrue("ｷー = ｷイ", col.compare("ｷー", "ｷイ") === 0);
	assertTrue("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
	assertTrue("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
	assertTrue("シー = シイ", col.compare("シー", "シイ") === 0);
	assertTrue("ｼー = ｼイ", col.compare("ｼー", "ｼイ") === 0);
	assertTrue("ㇱー = ㇱイ", col.compare("ㇱー", "ㇱイ") === 0);
	assertTrue("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
	assertTrue("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
	assertTrue("チー = チイ", col.compare("チー", "チイ") === 0);
	assertTrue("ﾁー = ﾁイ", col.compare("ﾁー", "ﾁイ") === 0);
	assertTrue("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
	assertTrue("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
	assertTrue("ニー = ニイ", col.compare("ニー", "ニイ") === 0);
	assertTrue("ﾆー = ﾆイ", col.compare("ﾆー", "ﾆイ") === 0);
	assertTrue("ヒー = ヒイ", col.compare("ヒー", "ヒイ") === 0);
	assertTrue("ﾋー = ﾋイ", col.compare("ﾋー", "ﾋイ") === 0);
	assertTrue("ㇶー = ㇶイ", col.compare("ㇶー", "ㇶイ") === 0);
	assertTrue("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
	assertTrue("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
	assertTrue("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
	assertTrue("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
	assertTrue("ミー = ミイ", col.compare("ミー", "ミイ") === 0);
	assertTrue("ﾐー = ﾐイ", col.compare("ﾐー", "ﾐイ") === 0);
	assertTrue("リー = リイ", col.compare("リー", "リイ") === 0);
	assertTrue("ﾘー = ﾘイ", col.compare("ﾘー", "ﾘイ") === 0);
	assertTrue("ㇼー = ㇼイ", col.compare("ㇼー", "ㇼイ") === 0);
	assertTrue("ヰー = ヰイ", col.compare("ヰー", "ヰイ") === 0);
	assertTrue("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);
	assertTrue("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);

	assertTrue("ゥー = ゥウ", col.compare("ゥー", "ゥウ") === 0);
	assertTrue("ｩー = ｩウ", col.compare("ｩー", "ｩウ") === 0);
	assertTrue("ウー = ウウ", col.compare("ウー", "ウウ") === 0);
	assertTrue("ｳー = ｳウ", col.compare("ｳー", "ｳウ") === 0);
	assertTrue("クー = クウ", col.compare("クー", "クウ") === 0);
	assertTrue("ｸー = ｸウ", col.compare("ｸー", "ｸウ") === 0);
	assertTrue("ㇰー = ㇰウ", col.compare("ㇰー", "ㇰウ") === 0);
	assertTrue("グー = グウ", col.compare("グー", "グウ") === 0);
	assertTrue("グー = グウ", col.compare("グー", "グウ") === 0);
	assertTrue("スー = スウ", col.compare("スー", "スウ") === 0);
	assertTrue("ｽー = ｽウ", col.compare("ｽー", "ｽウ") === 0);
	assertTrue("ㇲー = ㇲウ", col.compare("ㇲー", "ㇲウ") === 0);
	assertTrue("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
	assertTrue("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
	assertTrue("ッー = ッウ", col.compare("ッー", "ッウ") === 0);
	assertTrue("ｯー = ｯウ", col.compare("ｯー", "ｯウ") === 0);
	assertTrue("ツー = ツウ", col.compare("ツー", "ツウ") === 0);
	assertTrue("ﾂー = ﾂウ", col.compare("ﾂー", "ﾂウ") === 0);
	assertTrue("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
	assertTrue("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
	assertTrue("ヌー = ヌウ", col.compare("ヌー", "ヌウ") === 0);
	assertTrue("ﾇー = ﾇウ", col.compare("ﾇー", "ﾇウ") === 0);
	assertTrue("ㇴー = ㇴウ", col.compare("ㇴー", "ㇴウ") === 0);
	assertTrue("フー = フウ", col.compare("フー", "フウ") === 0);
	assertTrue("ﾌー = ﾌウ", col.compare("ﾌー", "ﾌウ") === 0);
	assertTrue("ㇷー = ㇷウ", col.compare("ㇷー", "ㇷウ") === 0);
	assertTrue("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
	assertTrue("プー = プウ", col.compare("プー", "プウ") === 0);
	assertTrue("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
	assertTrue("プー = プウ", col.compare("プー", "プウ") === 0);
	assertTrue("ムー = ムウ", col.compare("ムー", "ムウ") === 0);
	assertTrue("ﾑー = ﾑウ", col.compare("ﾑー", "ﾑウ") === 0);
	assertTrue("ㇺー = ㇺウ", col.compare("ㇺー", "ㇺウ") === 0);
	assertTrue("ュー = ュウ", col.compare("ュー", "ュウ") === 0);
	assertTrue("ｭー = ｭウ", col.compare("ｭー", "ｭウ") === 0);
	assertTrue("ユー = ユウ", col.compare("ユー", "ユウ") === 0);
	assertTrue("ﾕー = ﾕウ", col.compare("ﾕー", "ﾕウ") === 0);
	assertTrue("ルー = ルウ", col.compare("ルー", "ルウ") === 0);
	assertTrue("ﾙー = ﾙウ", col.compare("ﾙー", "ﾙウ") === 0);
	assertTrue("ㇽー = ㇽウ", col.compare("ㇽー", "ㇽウ") === 0);
	assertTrue("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);
	assertTrue("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);

	assertTrue("ェー = ェエ", col.compare("ェー", "ェエ") === 0);
	assertTrue("ｪー = ｪエ", col.compare("ｪー", "ｪエ") === 0);
	assertTrue("エー = エエ", col.compare("エー", "エエ") === 0);
	assertTrue("ｴー = ｴエ", col.compare("ｴー", "ｴエ") === 0);
	assertTrue("ケー = ケエ", col.compare("ケー", "ケエ") === 0);
	assertTrue("ｹー = ｹエ", col.compare("ｹー", "ｹエ") === 0);
	assertTrue("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
	assertTrue("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
	assertTrue("セー = セエ", col.compare("セー", "セエ") === 0);
	assertTrue("ｾー = ｾエ", col.compare("ｾー", "ｾエ") === 0);
	assertTrue("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
	assertTrue("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
	assertTrue("テー = テエ", col.compare("テー", "テエ") === 0);
	assertTrue("ﾃー = ﾃエ", col.compare("ﾃー", "ﾃエ") === 0);
	assertTrue("デー = デエ", col.compare("デー", "デエ") === 0);
	assertTrue("デー = デエ", col.compare("デー", "デエ") === 0);
	assertTrue("ネー = ネエ", col.compare("ネー", "ネエ") === 0);
	assertTrue("ﾈー = ﾈエ", col.compare("ﾈー", "ﾈエ") === 0);
	assertTrue("ヘー = ヘエ", col.compare("ヘー", "ヘエ") === 0);
	assertTrue("ﾍー = ﾍエ", col.compare("ﾍー", "ﾍエ") === 0);
	assertTrue("ㇸー = ㇸエ", col.compare("ㇸー", "ㇸエ") === 0);
	assertTrue("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
	assertTrue("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
	assertTrue("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
	assertTrue("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
	assertTrue("メー = メエ", col.compare("メー", "メエ") === 0);
	assertTrue("ﾒー = ﾒエ", col.compare("ﾒー", "ﾒエ") === 0);
	assertTrue("レー = レエ", col.compare("レー", "レエ") === 0);
	assertTrue("ﾚー = ﾚエ", col.compare("ﾚー", "ﾚエ") === 0);
	assertTrue("ㇾー = ㇾエ", col.compare("ㇾー", "ㇾエ") === 0);
	assertTrue("ヱー = ヱエ", col.compare("ヱー", "ヱエ") === 0);
	assertTrue("ヶー = ヶエ", col.compare("ヶー", "ヶエ") === 0);
	assertTrue("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);
	assertTrue("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);

	assertTrue("ォー = ォオ", col.compare("ォー", "ォオ") === 0);
	assertTrue("ｫー = ｫオ", col.compare("ｫー", "ｫオ") === 0);
	assertTrue("オー = オオ", col.compare("オー", "オオ") === 0);
	assertTrue("ｵー = ｵオ", col.compare("ｵー", "ｵオ") === 0);
	assertTrue("コー = コオ", col.compare("コー", "コオ") === 0);
	assertTrue("ｺー = ｺオ", col.compare("ｺー", "ｺオ") === 0);
	assertTrue("ゴー = ゴオ", col.compare("ゴー", "ゴオ") === 0);
	assertTrue("コー = コオ", col.compare("ゴー", "ゴオ") === 0);
	assertTrue("ソー = ソオ", col.compare("ソー", "ソオ") === 0);
	assertTrue("ｿー = ｿオ", col.compare("ｿー", "ｿオ") === 0);
	assertTrue("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
	assertTrue("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
	assertTrue("トー = トオ", col.compare("トー", "トオ") === 0);
	assertTrue("ﾄー = ﾄオ", col.compare("ﾄー", "ﾄオ") === 0);
	assertTrue("ㇳー = ㇳオ", col.compare("ㇳー", "ㇳオ") === 0);
	assertTrue("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
	assertTrue("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
	assertTrue("ノー = ノオ", col.compare("ノー", "ノオ") === 0);
	assertTrue("ﾉー = ﾉオ", col.compare("ﾉー", "ﾉオ") === 0);
	assertTrue("ホー = ホオ", col.compare("ホー", "ホオ") === 0);
	assertTrue("ﾎー = ﾎオ", col.compare("ﾎー", "ﾎオ") === 0);
	assertTrue("ㇹー = ㇹオ", col.compare("ㇹー", "ㇹオ") === 0);
	assertTrue("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
	assertTrue("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
	assertTrue("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
	assertTrue("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
	assertTrue("モー = モオ", col.compare("モー", "モオ") === 0);
	assertTrue("ﾓー = ﾓオ", col.compare("ﾓー", "ﾓオ") === 0);
	assertTrue("ョー = ョオ", col.compare("ョー", "ョオ") === 0);
	assertTrue("ｮー = ｮオ", col.compare("ｮー", "ｮオ") === 0);
	assertTrue("ヨー = ヨオ", col.compare("ヨー", "ヨオ") === 0);
	assertTrue("ﾖー = ﾖオ", col.compare("ﾖー", "ﾖオ") === 0);
	assertTrue("ロー = ロオ", col.compare("ロー", "ロオ") === 0);
	assertTrue("ﾛー = ﾛオ", col.compare("ﾛー", "ﾛオ") === 0);
	assertTrue("ㇿー = ㇿオ", col.compare("ㇿー", "ㇿオ") === 0);
	assertTrue("ヲー = ヲオ", col.compare("ヲー", "ヲオ") === 0);
	assertTrue("ｦー = ｦオ", col.compare("ｦー", "ｦオ") === 0);
	assertTrue("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
	assertTrue("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
}

function testJSCollatorKatakanaLengthMarksPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン 

	assertTrue("ァー = ァア", col.compare("ァー", "ァア") === 0);
	assertTrue("ｧー = ｧア", col.compare("ｧー", "ｧア") === 0);
	assertTrue("アー = アア", col.compare("アー", "アア") === 0);
	assertTrue("ｱー = ｱア", col.compare("ｱー", "ｱア") === 0);
	assertTrue("カー = カア", col.compare("カー", "カア") === 0);
	assertTrue("ｶー = ｶア", col.compare("ｶー", "ｶア") === 0);
	assertTrue("ガー = ガア", col.compare("ガー", "ガア") === 0);
	assertTrue("ガー = ガア", col.compare("ガー", "ガア") === 0);
	assertTrue("サー = サア", col.compare("サー", "サア") === 0);
	assertTrue("ｻー = ｻア", col.compare("ｻー", "ｻア") === 0);
	assertTrue("ザー = ザア", col.compare("ザー", "ザア") === 0);
	assertTrue("ター = タア", col.compare("ター", "タア") === 0);
	assertTrue("ﾀー = ﾀア", col.compare("ﾀー", "ﾀア") === 0);
	assertTrue("ダー = ダア", col.compare("ダー", "ダア") === 0);
	assertTrue("ダー = ダア", col.compare("ダー", "ダア") === 0);
	assertTrue("ナー = ナア", col.compare("ナー", "ナア") === 0);
	assertTrue("ﾅー = ﾅア", col.compare("ﾅー", "ﾅア") === 0);
	assertTrue("ハー = ハア", col.compare("ハー", "ハア") === 0);
	assertTrue("ﾊー = ﾊア", col.compare("ﾊー", "ﾊア") === 0);
	assertTrue("ㇵー = ㇵア", col.compare("ㇵー", "ㇵア") === 0);
	assertTrue("バー = バア", col.compare("バー", "バア") === 0);
	assertTrue("バー = バア", col.compare("パー", "パア") === 0);
	assertTrue("パー = パア", col.compare("バー", "バア") === 0);
	assertTrue("パー = パア", col.compare("パー", "パア") === 0);
	assertTrue("マー = マア", col.compare("マー", "マア") === 0);
	assertTrue("ﾏー = ﾏア", col.compare("ﾏー", "ﾏア") === 0);
	assertTrue("ャー = ャア", col.compare("ャー", "ャア") === 0);
	assertTrue("ｬー = ｬア", col.compare("ｬー", "ｬア") === 0);
	assertTrue("ヤー = ヤア", col.compare("ヤー", "ヤア") === 0);
	assertTrue("ﾔー = ﾔア", col.compare("ﾔー", "ﾔア") === 0);
	assertTrue("ラー = ラア", col.compare("ラー", "ラア") === 0);
	assertTrue("ﾗー = ﾗア", col.compare("ﾗー", "ﾗア") === 0);
	assertTrue("ㇻー = ㇻア", col.compare("ㇻー", "ㇻア") === 0);
	assertTrue("ヮー = ヮア", col.compare("ヮー", "ヮア") === 0);
	assertTrue("ワー = ワア", col.compare("ワー", "ワア") === 0);
	assertTrue("ﾜー = ﾜア", col.compare("ﾜー", "ﾜア") === 0);
	assertTrue("ヵー = ヵア", col.compare("ヵー", "ヵア") === 0);
	assertTrue("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);
	assertTrue("ヷー = ヷア", col.compare("ヷー", "ヷア") === 0);

	assertTrue("ィー = ィイ", col.compare("ィー", "ィイ") === 0);
	assertTrue("ｨー = ｨイ", col.compare("ｨー", "ｨイ") === 0);
	assertTrue("イー = イイ", col.compare("イー", "イイ") === 0);
	assertTrue("ｲー = ｲイ", col.compare("ｲー", "ｲイ") === 0);
	assertTrue("キー = キイ", col.compare("キー", "キイ") === 0);
	assertTrue("ｷー = ｷイ", col.compare("ｷー", "ｷイ") === 0);
	assertTrue("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
	assertTrue("ギー = ギイ", col.compare("ギー", "ギイ") === 0);
	assertTrue("シー = シイ", col.compare("シー", "シイ") === 0);
	assertTrue("ｼー = ｼイ", col.compare("ｼー", "ｼイ") === 0);
	assertTrue("ㇱー = ㇱイ", col.compare("ㇱー", "ㇱイ") === 0);
	assertTrue("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
	assertTrue("ジー = ジイ", col.compare("ジー", "ジイ") === 0);
	assertTrue("チー = チイ", col.compare("チー", "チイ") === 0);
	assertTrue("ﾁー = ﾁイ", col.compare("ﾁー", "ﾁイ") === 0);
	assertTrue("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
	assertTrue("ヂー = ヂイ", col.compare("ヂー", "ヂイ") === 0);
	assertTrue("ニー = ニイ", col.compare("ニー", "ニイ") === 0);
	assertTrue("ﾆー = ﾆイ", col.compare("ﾆー", "ﾆイ") === 0);
	assertTrue("ヒー = ヒイ", col.compare("ヒー", "ヒイ") === 0);
	assertTrue("ﾋー = ﾋイ", col.compare("ﾋー", "ﾋイ") === 0);
	assertTrue("ㇶー = ㇶイ", col.compare("ㇶー", "ㇶイ") === 0);
	assertTrue("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
	assertTrue("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
	assertTrue("ビー = ビイ", col.compare("ビー", "ビイ") === 0);
	assertTrue("ピー = ピイ", col.compare("ピー", "ピイ") === 0);
	assertTrue("ミー = ミイ", col.compare("ミー", "ミイ") === 0);
	assertTrue("ﾐー = ﾐイ", col.compare("ﾐー", "ﾐイ") === 0);
	assertTrue("リー = リイ", col.compare("リー", "リイ") === 0);
	assertTrue("ﾘー = ﾘイ", col.compare("ﾘー", "ﾘイ") === 0);
	assertTrue("ㇼー = ㇼイ", col.compare("ㇼー", "ㇼイ") === 0);
	assertTrue("ヰー = ヰイ", col.compare("ヰー", "ヰイ") === 0);
	assertTrue("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);
	assertTrue("ヸー = ヸイ", col.compare("ヸー", "ヸイ") === 0);

	assertTrue("ゥー = ゥウ", col.compare("ゥー", "ゥウ") === 0);
	assertTrue("ｩー = ｩウ", col.compare("ｩー", "ｩウ") === 0);
	assertTrue("ウー = ウウ", col.compare("ウー", "ウウ") === 0);
	assertTrue("ｳー = ｳウ", col.compare("ｳー", "ｳウ") === 0);
	assertTrue("クー = クウ", col.compare("クー", "クウ") === 0);
	assertTrue("ｸー = ｸウ", col.compare("ｸー", "ｸウ") === 0);
	assertTrue("ㇰー = ㇰウ", col.compare("ㇰー", "ㇰウ") === 0);
	assertTrue("グー = グウ", col.compare("グー", "グウ") === 0);
	assertTrue("グー = グウ", col.compare("グー", "グウ") === 0);
	assertTrue("スー = スウ", col.compare("スー", "スウ") === 0);
	assertTrue("ｽー = ｽウ", col.compare("ｽー", "ｽウ") === 0);
	assertTrue("ㇲー = ㇲウ", col.compare("ㇲー", "ㇲウ") === 0);
	assertTrue("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
	assertTrue("ズー = ズウ", col.compare("ズー", "ズウ") === 0);
	assertTrue("ッー = ッウ", col.compare("ッー", "ッウ") === 0);
	assertTrue("ｯー = ｯウ", col.compare("ｯー", "ｯウ") === 0);
	assertTrue("ツー = ツウ", col.compare("ツー", "ツウ") === 0);
	assertTrue("ﾂー = ﾂウ", col.compare("ﾂー", "ﾂウ") === 0);
	assertTrue("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
	assertTrue("ヅー = ヅウ", col.compare("ヅー", "ヅウ") === 0);
	assertTrue("ヌー = ヌウ", col.compare("ヌー", "ヌウ") === 0);
	assertTrue("ﾇー = ﾇウ", col.compare("ﾇー", "ﾇウ") === 0);
	assertTrue("ㇴー = ㇴウ", col.compare("ㇴー", "ㇴウ") === 0);
	assertTrue("フー = フウ", col.compare("フー", "フウ") === 0);
	assertTrue("ﾌー = ﾌウ", col.compare("ﾌー", "ﾌウ") === 0);
	assertTrue("ㇷー = ㇷウ", col.compare("ㇷー", "ㇷウ") === 0);
	assertTrue("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
	assertTrue("プー = プウ", col.compare("プー", "プウ") === 0);
	assertTrue("ブー = ブウ", col.compare("ブー", "ブウ") === 0);
	assertTrue("プー = プウ", col.compare("プー", "プウ") === 0);
	assertTrue("ムー = ムウ", col.compare("ムー", "ムウ") === 0);
	assertTrue("ﾑー = ﾑウ", col.compare("ﾑー", "ﾑウ") === 0);
	assertTrue("ㇺー = ㇺウ", col.compare("ㇺー", "ㇺウ") === 0);
	assertTrue("ュー = ュウ", col.compare("ュー", "ュウ") === 0);
	assertTrue("ｭー = ｭウ", col.compare("ｭー", "ｭウ") === 0);
	assertTrue("ユー = ユウ", col.compare("ユー", "ユウ") === 0);
	assertTrue("ﾕー = ﾕウ", col.compare("ﾕー", "ﾕウ") === 0);
	assertTrue("ルー = ルウ", col.compare("ルー", "ルウ") === 0);
	assertTrue("ﾙー = ﾙウ", col.compare("ﾙー", "ﾙウ") === 0);
	assertTrue("ㇽー = ㇽウ", col.compare("ㇽー", "ㇽウ") === 0);
	assertTrue("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);
	assertTrue("ヴー = ヴウ", col.compare("ヴー", "ヴウ") === 0);

	assertTrue("ェー = ェエ", col.compare("ェー", "ェエ") === 0);
	assertTrue("ｪー = ｪエ", col.compare("ｪー", "ｪエ") === 0);
	assertTrue("エー = エエ", col.compare("エー", "エエ") === 0);
	assertTrue("ｴー = ｴエ", col.compare("ｴー", "ｴエ") === 0);
	assertTrue("ケー = ケエ", col.compare("ケー", "ケエ") === 0);
	assertTrue("ｹー = ｹエ", col.compare("ｹー", "ｹエ") === 0);
	assertTrue("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
	assertTrue("ゲー = ゲエ", col.compare("ゲー", "ゲエ") === 0);
	assertTrue("セー = セエ", col.compare("セー", "セエ") === 0);
	assertTrue("ｾー = ｾエ", col.compare("ｾー", "ｾエ") === 0);
	assertTrue("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
	assertTrue("ゼー = ゼエ", col.compare("ゼー", "ゼエ") === 0);
	assertTrue("テー = テエ", col.compare("テー", "テエ") === 0);
	assertTrue("ﾃー = ﾃエ", col.compare("ﾃー", "ﾃエ") === 0);
	assertTrue("デー = デエ", col.compare("デー", "デエ") === 0);
	assertTrue("デー = デエ", col.compare("デー", "デエ") === 0);
	assertTrue("ネー = ネエ", col.compare("ネー", "ネエ") === 0);
	assertTrue("ﾈー = ﾈエ", col.compare("ﾈー", "ﾈエ") === 0);
	assertTrue("ヘー = ヘエ", col.compare("ヘー", "ヘエ") === 0);
	assertTrue("ﾍー = ﾍエ", col.compare("ﾍー", "ﾍエ") === 0);
	assertTrue("ㇸー = ㇸエ", col.compare("ㇸー", "ㇸエ") === 0);
	assertTrue("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
	assertTrue("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
	assertTrue("ベー = ベエ", col.compare("ベー", "ベエ") === 0);
	assertTrue("ペー = ペエ", col.compare("ペー", "ペエ") === 0);
	assertTrue("メー = メエ", col.compare("メー", "メエ") === 0);
	assertTrue("ﾒー = ﾒエ", col.compare("ﾒー", "ﾒエ") === 0);
	assertTrue("レー = レエ", col.compare("レー", "レエ") === 0);
	assertTrue("ﾚー = ﾚエ", col.compare("ﾚー", "ﾚエ") === 0);
	assertTrue("ㇾー = ㇾエ", col.compare("ㇾー", "ㇾエ") === 0);
	assertTrue("ヱー = ヱエ", col.compare("ヱー", "ヱエ") === 0);
	assertTrue("ヶー = ヶエ", col.compare("ヶー", "ヶエ") === 0);
	assertTrue("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);
	assertTrue("ヹー = ヹエ", col.compare("ヹー", "ヹエ") === 0);

	assertTrue("ォー = ォオ", col.compare("ォー", "ォオ") === 0);
	assertTrue("ｫー = ｫオ", col.compare("ｫー", "ｫオ") === 0);
	assertTrue("オー = オオ", col.compare("オー", "オオ") === 0);
	assertTrue("ｵー = ｵオ", col.compare("ｵー", "ｵオ") === 0);
	assertTrue("コー = コオ", col.compare("コー", "コオ") === 0);
	assertTrue("ｺー = ｺオ", col.compare("ｺー", "ｺオ") === 0);
	assertTrue("ゴー = ゴオ", col.compare("ゴー", "ゴオ") === 0);
	assertTrue("コー = コオ", col.compare("ゴー", "ゴオ") === 0);
	assertTrue("ソー = ソオ", col.compare("ソー", "ソオ") === 0);
	assertTrue("ｿー = ｿオ", col.compare("ｿー", "ｿオ") === 0);
	assertTrue("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
	assertTrue("ゾー = ゾオ", col.compare("ゾー", "ゾオ") === 0);
	assertTrue("トー = トオ", col.compare("トー", "トオ") === 0);
	assertTrue("ﾄー = ﾄオ", col.compare("ﾄー", "ﾄオ") === 0);
	assertTrue("ㇳー = ㇳオ", col.compare("ㇳー", "ㇳオ") === 0);
	assertTrue("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
	assertTrue("ドー = ドオ", col.compare("ドー", "ドオ") === 0);
	assertTrue("ノー = ノオ", col.compare("ノー", "ノオ") === 0);
	assertTrue("ﾉー = ﾉオ", col.compare("ﾉー", "ﾉオ") === 0);
	assertTrue("ホー = ホオ", col.compare("ホー", "ホオ") === 0);
	assertTrue("ﾎー = ﾎオ", col.compare("ﾎー", "ﾎオ") === 0);
	assertTrue("ㇹー = ㇹオ", col.compare("ㇹー", "ㇹオ") === 0);
	assertTrue("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
	assertTrue("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
	assertTrue("ボー = ボオ", col.compare("ボー", "ボオ") === 0);
	assertTrue("ポー = ポオ", col.compare("ポー", "ポオ") === 0);
	assertTrue("モー = モオ", col.compare("モー", "モオ") === 0);
	assertTrue("ﾓー = ﾓオ", col.compare("ﾓー", "ﾓオ") === 0);
	assertTrue("ョー = ョオ", col.compare("ョー", "ョオ") === 0);
	assertTrue("ｮー = ｮオ", col.compare("ｮー", "ｮオ") === 0);
	assertTrue("ヨー = ヨオ", col.compare("ヨー", "ヨオ") === 0);
	assertTrue("ﾖー = ﾖオ", col.compare("ﾖー", "ﾖオ") === 0);
	assertTrue("ロー = ロオ", col.compare("ロー", "ロオ") === 0);
	assertTrue("ﾛー = ﾛオ", col.compare("ﾛー", "ﾛオ") === 0);
	assertTrue("ㇿー = ㇿオ", col.compare("ㇿー", "ㇿオ") === 0);
	assertTrue("ヲー = ヲオ", col.compare("ヲー", "ヲオ") === 0);
	assertTrue("ｦー = ｦオ", col.compare("ｦー", "ｦオ") === 0);
	assertTrue("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
	assertTrue("ヺー = ヺオ", col.compare("ヺー", "ヺオ") === 0);
}

function testJSCollatorKatakanaIterationMarksQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("アヽ < アア", col.compare("アヽ", "アア") < 0);
	assertTrue("ｱヽ < ｱア", col.compare("ｱヽ", "ｱア") < 0);
	assertTrue("ァヽ < ァア", col.compare("ァヽ", "ァア") < 0);
	assertTrue("ｧヽ < ｧア", col.compare("ｧヽ", "ｧア") < 0);
	assertTrue("イヽ < イイ", col.compare("イヽ", "イイ") < 0);
	assertTrue("ｲヽ < ｲイ", col.compare("ｲヽ", "ｲイ") < 0);
	assertTrue("ィヽ < ィイ", col.compare("ィヽ", "ィイ") < 0);
	assertTrue("ｨヽ < ｨイ", col.compare("ｨヽ", "ｨイ") < 0);
	
	assertTrue("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
	assertTrue("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
	assertTrue("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
	assertTrue("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ウヾ < ウウ", col.compare("ウヾ", "ウウ") < 0);
	assertTrue("ｳヾ < ｳウ", col.compare("ｳヾ", "ｳウ") < 0);
	assertTrue("ゥヾ < ゥウ", col.compare("ゥヾ", "ゥウ") < 0);
	assertTrue("ｩヾ < ｩウ", col.compare("ｩヾ", "ｩウ") < 0);
	assertTrue("ヴヾ < ヴウ", col.compare("ヴヾ", "ヴウ") < 0);
	assertTrue("ヴヾ < ヴウ", col.compare("ヴヾ", "ヴウ") < 0);
	
	assertTrue("エヽ < エエ", col.compare("エヽ", "エエ") < 0);
	assertTrue("ｴヽ < ｴエ", col.compare("ｴヽ", "ｴエ") < 0);
	assertTrue("ェヽ < ェエ", col.compare("ェヽ", "ェエ") < 0);
	assertTrue("ｪヽ < ｪエ", col.compare("ｪヽ", "ｪエ") < 0);
	
	assertTrue("オヽ < オオ", col.compare("オヽ", "オオ") < 0);
	assertTrue("ｵヽ < ｵオ", col.compare("ｵヽ", "ｵオ") < 0);
	assertTrue("ォヽ < ォオ", col.compare("ォヽ", "ォオ") < 0);
	assertTrue("ｫヽ < ｫオ", col.compare("ｫヽ", "ｫオ") < 0);
	
	assertTrue("カヽ < カカ", col.compare("カヽ", "カカ") < 0);
	assertTrue("ｶヽ < ｶカ", col.compare("ｶヽ", "ｶカ") < 0);
	assertTrue("ヵヽ < ヵカ", col.compare("ヵヽ", "ヵカ") < 0);
	assertTrue("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
	assertTrue("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
	
	assertTrue("キヽ < キキ", col.compare("キヽ", "キキ") < 0);
	assertTrue("ｷヽ < ｷキ", col.compare("ｷヽ", "ｷキ") < 0);
	assertTrue("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
	assertTrue("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
	assertTrue("キヾ < キキ", col.compare("キヾ", "キキ") < 0);
	assertTrue("ｷヾ < ｷキ", col.compare("ｷヾ", "ｷキ") < 0);
	assertTrue("ギヾ < ギキ", col.compare("ギヾ", "ギキ") < 0);
	assertTrue("ギヾ < ギキ", col.compare("ギヾ", "ギキ") < 0);

	assertTrue("クヽ < クク", col.compare("クヽ", "クク") < 0);
	assertTrue("ｸヽ < ｸク", col.compare("ｸヽ", "ｸク") < 0);
	assertTrue("ㇰヽ < ㇰク", col.compare("ㇰヽ", "ㇰク") < 0);
	assertTrue("グヽ < グク", col.compare("グヽ", "グク") < 0);
	assertTrue("グヽ < グク", col.compare("グヽ", "グク") < 0);
	assertTrue("クヾ < クク", col.compare("クヾ", "クク") < 0);
	assertTrue("ｸヾ < ｸク", col.compare("ｸヾ", "ｸク") < 0);
	assertTrue("ㇰヾ < ㇰク", col.compare("ㇰヾ", "ㇰク") < 0);
	assertTrue("グヾ < グク", col.compare("グヾ", "グク") < 0);
	assertTrue("グヾ < グク", col.compare("グヾ", "グク") < 0);
	
	assertTrue("ケヽ < ケケ", col.compare("ケヽ", "ケケ") < 0);
	assertTrue("ｹヽ < ｹケ", col.compare("ｹヽ", "ｹケ") < 0);
	assertTrue("ヶヽ < ヶケ", col.compare("ヶヽ", "ヶケ") < 0);
	assertTrue("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
	assertTrue("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
	
	assertTrue("コヽ < ココ", col.compare("コヽ", "ココ") < 0);
	assertTrue("ｺヽ < ｺコ", col.compare("ｺヽ", "ｺコ") < 0);
	assertTrue("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
	assertTrue("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
	assertTrue("コヾ < ココ", col.compare("コヾ", "ココ") < 0);
	assertTrue("ｺヾ < ｺコ", col.compare("ｺヾ", "ｺコ") < 0);
	assertTrue("ゴヾ < ゴコ", col.compare("ゴヾ", "ゴコ") < 0);
	assertTrue("ゴヾ < ゴコ", col.compare("ゴヾ", "ゴコ") < 0);
	
	assertTrue("サヽ < ササ", col.compare("サヽ", "ササ") < 0);
	assertTrue("ｻヽ < ｻサ", col.compare("ｻヽ", "ｻサ") < 0);
	assertTrue("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
	assertTrue("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
	assertTrue("サヾ < ササ", col.compare("サヾ", "ササ") < 0);
	assertTrue("ｻヾ < ｻサ", col.compare("ｻヾ", "ｻサ") < 0);
	assertTrue("ザヾ < ザサ", col.compare("ザヾ", "ザサ") < 0);
	assertTrue("ザヾ < ザサ", col.compare("ザヾ", "ザサ") < 0);

	assertTrue("シヽ < シシ", col.compare("シヽ", "シシ") < 0);
	assertTrue("ｼヽ < ｼシ", col.compare("ｼヽ", "ｼシ") < 0);
	assertTrue("ㇱヽ < ㇱシ", col.compare("ㇱヽ", "ㇱシ") < 0);
	assertTrue("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
	assertTrue("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
	assertTrue("シヾ < シシ", col.compare("シヾ", "シシ") < 0);
	assertTrue("ｼヾ < ｼシ", col.compare("ｼヾ", "ｼシ") < 0);
	assertTrue("ㇱヾ < ㇱシ", col.compare("ㇱヾ", "ㇱシ") < 0);
	assertTrue("ジヾ < ジシ", col.compare("ジヾ", "ジシ") < 0);
	assertTrue("ジヾ < ジシ", col.compare("ジヾ", "ジシ") < 0);

	assertTrue("スヽ < スス", col.compare("スヽ", "スス") < 0);
	assertTrue("ｽヽ < ｽス", col.compare("ｽヽ", "ｽス") < 0);
	assertTrue("ㇲヽ < ㇲス", col.compare("ㇲヽ", "ㇲス") < 0);
	assertTrue("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
	assertTrue("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
	assertTrue("スヾ < スス", col.compare("スヾ", "スス") < 0);
	assertTrue("ｽヾ < ｽス", col.compare("ｽヾ", "ｽス") < 0);
	assertTrue("ㇲヾ < ㇲス", col.compare("ㇲヾ", "ㇲス") < 0);
	assertTrue("ズヾ < ズス", col.compare("ズヾ", "ズス") < 0);
	assertTrue("ズヾ < ズス", col.compare("ズヾ", "ズス") < 0);

	assertTrue("セヽ < セセ", col.compare("セヽ", "セセ") < 0);
	assertTrue("ｾヽ < ｾセ", col.compare("ｾヽ", "ｾセ") < 0);
	assertTrue("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
	assertTrue("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
	assertTrue("セヾ < セセ", col.compare("セヾ", "セセ") < 0);
	assertTrue("ｾヾ < ｾセ", col.compare("ｾヾ", "ｾセ") < 0);
	assertTrue("ゼヾ < ゼセ", col.compare("ゼヾ", "ゼセ") < 0);
	assertTrue("ゼヾ < ゼセ", col.compare("ゼヾ", "ゼセ") < 0);

	assertTrue("ソヽ < ソソ", col.compare("ソヽ", "ソソ") < 0);
	assertTrue("ｿヽ < ｿソ", col.compare("ｿヽ", "ｿソ") < 0);
	assertTrue("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
	assertTrue("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
	assertTrue("ソヾ < ソソ", col.compare("ソヾ", "ソソ") < 0);
	assertTrue("ｿヾ < ｿソ", col.compare("ｿヾ", "ｿソ") < 0);
	assertTrue("ゾヾ < ゾソ", col.compare("ゾヾ", "ゾソ") < 0);
	assertTrue("ゾヾ < ゾソ", col.compare("ゾヾ", "ゾソ") < 0);

	assertTrue("タヽ < タタ", col.compare("タヽ", "タタ") < 0);
	assertTrue("ﾀヽ < ﾀタ", col.compare("ﾀヽ", "ﾀタ") < 0);
	assertTrue("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
	assertTrue("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
	assertTrue("タヾ < タタ", col.compare("タヾ", "タタ") < 0);
	assertTrue("ﾀヾ < ﾀタ", col.compare("ﾀヾ", "ﾀタ") < 0);
	assertTrue("ダヾ < ダタ", col.compare("ダヾ", "ダタ") < 0);
	assertTrue("ダヾ < ダタ", col.compare("ダヾ", "ダタ") < 0);

	assertTrue("チヽ < チチ", col.compare("チヽ", "チチ") < 0);
	assertTrue("ﾁヽ < ﾁチ", col.compare("ﾁヽ", "ﾁチ") < 0);
	assertTrue("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
	assertTrue("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
	assertTrue("チヾ < チチ", col.compare("チヾ", "チチ") < 0);
	assertTrue("ﾁヾ < ﾁチ", col.compare("ﾁヾ", "ﾁチ") < 0);
	assertTrue("ヂヾ < ヂチ", col.compare("ヂヾ", "ヂチ") < 0);
	assertTrue("ヂヾ < ヂチ", col.compare("ヂヾ", "ヂチ") < 0);

	assertTrue("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
	assertTrue("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
	assertTrue("ッヽ < ッツ", col.compare("ッヽ", "ッツ") < 0);
	assertTrue("ｯヽ < ｯツ", col.compare("ｯヽ", "ｯツ") < 0);
	assertTrue("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
	assertTrue("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
	assertTrue("ツヾ < ツツ", col.compare("ツヾ", "ツツ") < 0);
	assertTrue("ﾂヾ < ﾂツ", col.compare("ﾂヾ", "ﾂツ") < 0);
	assertTrue("ヅヾ < ヅツ", col.compare("ヅヾ", "ヅツ") < 0);
	assertTrue("ヅヾ < ヅツ", col.compare("ヅヾ", "ヅツ") < 0);
	assertTrue("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
	assertTrue("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
	assertTrue("ッヾ < ッツ", col.compare("ッヾ", "ッツ") < 0);
	assertTrue("ｯヾ < ｯツ", col.compare("ｯヾ", "ｯツ") < 0);
	assertTrue("ツヾ < ツツ", col.compare("ツヾ", "ツツ") < 0);
	assertTrue("ﾂヾ < ﾂツ", col.compare("ﾂヾ", "ﾂツ") < 0);

	assertTrue("テヽ < テテ", col.compare("テヽ", "テテ") < 0);
	assertTrue("ﾃヽ < ﾃテ", col.compare("ﾃヽ", "ﾃテ") < 0);
	assertTrue("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
	assertTrue("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
	assertTrue("テヾ < テテ", col.compare("テヾ", "テテ") < 0);
	assertTrue("ﾃヾ < ﾃテ", col.compare("ﾃヾ", "ﾃテ") < 0);
	assertTrue("デヾ < デテ", col.compare("デヾ", "デテ") < 0);
	assertTrue("デヾ < デテ", col.compare("デヾ", "デテ") < 0);

	assertTrue("トヽ < トト", col.compare("トヽ", "トト") < 0);
	assertTrue("ﾄヽ < ﾄト", col.compare("ﾄヽ", "ﾄト") < 0);
	assertTrue("ㇳヽ < ㇳト", col.compare("ㇳヽ", "ㇳト") < 0);
	assertTrue("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
	assertTrue("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
	assertTrue("トヾ < トト", col.compare("トヾ", "トト") < 0);
	assertTrue("ﾄヾ < ﾄト", col.compare("ﾄヾ", "ﾄト") < 0);
	assertTrue("ㇳヾ < ㇳト", col.compare("ㇳヾ", "ㇳト") < 0);
	assertTrue("ドヾ < ドト", col.compare("ドヾ", "ドト") < 0);
	assertTrue("ドヾ < ドト", col.compare("ドヾ", "ドト") < 0);

	assertTrue("ナヽ < ナナ", col.compare("ナヽ", "ナナ") < 0);
	assertTrue("ﾅヽ < ﾅナ", col.compare("ﾅヽ", "ﾅナ") < 0);

	assertTrue("ニヽ < ニニ", col.compare("ニヽ", "ニニ") < 0);
	assertTrue("ﾆヽ < ﾆニ", col.compare("ﾆヽ", "ﾆニ") < 0);

	assertTrue("ヌヽ < ヌヌ", col.compare("ヌヽ", "ヌヌ") < 0);
	assertTrue("ﾇヽ < ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") < 0);
	assertTrue("ㇴヽ < ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") < 0);
	
	assertTrue("ネヽ < ネネ", col.compare("ネヽ", "ネネ") < 0);
	assertTrue("ﾈヽ < ﾈネ", col.compare("ﾈヽ", "ﾈネ") < 0);
	
	assertTrue("ノヽ < ノノ", col.compare("ノヽ", "ノノ") < 0);
	assertTrue("ﾉヽ < ﾉノ", col.compare("ﾉヽ", "ﾉノ") < 0);
	
	assertTrue("ハヽ < ハハ", col.compare("ハヽ", "ハハ") < 0);
	assertTrue("ﾊヽ < ﾊハ", col.compare("ﾊヽ", "ﾊハ") < 0);
	assertTrue("ㇵヽ < ㇵハ", col.compare("ㇵヽ", "ㇵハ") < 0);
	assertTrue("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
	assertTrue("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
	assertTrue("ハヾ < ハハ", col.compare("ハヾ", "ハハ") < 0);
	assertTrue("ﾊヾ < ﾊハ", col.compare("ﾊヾ", "ﾊハ") < 0);
	assertTrue("ㇵヾ < ㇵハ", col.compare("ㇵヾ", "ㇵハ") < 0);
	assertTrue("バヾ < バハ", col.compare("バヾ", "バハ") < 0);
	assertTrue("バヾ < バハ", col.compare("バヾ", "バハ") < 0);
	assertTrue("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
	assertTrue("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
	assertTrue("パヾ < パハ", col.compare("パヾ", "パハ") < 0);
	assertTrue("パヾ < パハ", col.compare("パヾ", "パハ") < 0);
	
	assertTrue("ヒヽ < ヒヒ", col.compare("ヒヽ", "ヒヒ") < 0);
	assertTrue("ﾋヽ < ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") < 0);
	assertTrue("ㇶヽ < ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") < 0);
	assertTrue("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
	assertTrue("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
	assertTrue("ヒヾ < ヒヒ", col.compare("ヒヾ", "ヒヒ") < 0);
	assertTrue("ﾋヾ < ﾋヒ", col.compare("ﾋヾ", "ﾋヒ") < 0);
	assertTrue("ㇶヾ < ㇶヒ", col.compare("ㇶヾ", "ㇶヒ") < 0);
	assertTrue("ビヾ < ビヒ", col.compare("ビヾ", "ビヒ") < 0);
	assertTrue("ビヾ < ビヒ", col.compare("ビヾ", "ビヒ") < 0);
	assertTrue("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
	assertTrue("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
	assertTrue("ピヾ < ピヒ", col.compare("ピヾ", "ピヒ") < 0);
	assertTrue("ピヾ < ピヒ", col.compare("ピヾ", "ピヒ") < 0);
	
	assertTrue("フヽ < フフ", col.compare("フヽ", "フフ") < 0);
	assertTrue("ﾌヽ < ﾌフ", col.compare("ﾌヽ", "ﾌフ") < 0);
	assertTrue("ㇷヽ < ㇷフ", col.compare("ㇷヽ", "ㇷフ") < 0);
	assertTrue("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
	assertTrue("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
	assertTrue("フヾ < フフ", col.compare("フヾ", "フフ") < 0);
	assertTrue("ﾌヾ < ﾌフ", col.compare("ﾌヾ", "ﾌフ") < 0);
	assertTrue("ㇷヾ < ㇷフ", col.compare("ㇷヾ", "ㇷフ") < 0);
	assertTrue("ブヾ < ブフ", col.compare("ブヾ", "ブフ") < 0);
	assertTrue("ブヾ < ブフ", col.compare("ブヾ", "ブフ") < 0);
	assertTrue("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
	assertTrue("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
	assertTrue("プヾ < プフ", col.compare("プヾ", "プフ") < 0);
	assertTrue("プヾ < プフ", col.compare("プヾ", "プフ") < 0);
	
	assertTrue("ヘヽ < ヘヘ", col.compare("ヘヽ", "ヘヘ") < 0);
	assertTrue("ﾍヽ < ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") < 0);
	assertTrue("ㇸヽ < ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") < 0);
	assertTrue("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
	assertTrue("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
	assertTrue("ヘヾ < ヘヘ", col.compare("ヘヾ", "ヘヘ") < 0);
	assertTrue("ﾍヾ < ﾍヘ", col.compare("ﾍヾ", "ﾍヘ") < 0);
	assertTrue("ㇸヾ < ㇸヘ", col.compare("ㇸヾ", "ㇸヘ") < 0);
	assertTrue("ベヾ < ベヘ", col.compare("ベヾ", "ベヘ") < 0);
	assertTrue("ベヾ < ベヘ", col.compare("ベヾ", "ベヘ") < 0);
	assertTrue("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
	assertTrue("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
	assertTrue("ペヾ < ペヘ", col.compare("ペヾ", "ペヘ") < 0);
	assertTrue("ペヾ < ペヘ", col.compare("ペヾ", "ペヘ") < 0);
	
	assertTrue("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
	assertTrue("ﾎヽ < ﾎホ", col.compare("ﾎヽ", "ﾎホ") < 0);
	assertTrue("ㇹヽ < ㇹホ", col.compare("ㇹヽ", "ㇹホ") < 0);
	assertTrue("ボヽ < ボホ", col.compare("ボヽ", "ボホ") < 0);
	assertTrue("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
	assertTrue("ホヾ < ホホ", col.compare("ホヾ", "ホホ") < 0);
	assertTrue("ﾎヾ < ﾎホ", col.compare("ﾎヾ", "ﾎホ") < 0);
	assertTrue("ㇹヾ < ㇹホ", col.compare("ㇹヾ", "ㇹホ") < 0);
	assertTrue("ボヾ < ボホ", col.compare("ボヾ", "ボホ") < 0);
	assertTrue("ボヾ < ボホ", col.compare("ボヾ", "ボホ") < 0);
	assertTrue("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
	assertTrue("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
	assertTrue("ポヾ < ポホ", col.compare("ポヾ", "ポホ") < 0);
	assertTrue("ポヾ < ポホ", col.compare("ポヾ", "ポホ") < 0);
	
	assertTrue("マヽ < ママ", col.compare("マヽ", "ママ") < 0);
	assertTrue("ﾏヽ < ﾏマ", col.compare("ﾏヽ", "ﾏマ") < 0);
	
	assertTrue("ミヽ < ミミ", col.compare("ミヽ", "ミミ") < 0);
	assertTrue("ﾐヽ < ﾐミ", col.compare("ﾐヽ", "ﾐミ") < 0);
	
	assertTrue("ムヽ < ムム", col.compare("ムヽ", "ムム") < 0);
	assertTrue("ﾑヽ < ﾑム", col.compare("ﾑヽ", "ﾑム") < 0);
	assertTrue("ㇺヽ < ㇺム", col.compare("ㇺヽ", "ㇺム") < 0);
	
	assertTrue("メヽ < メメ", col.compare("メヽ", "メメ") < 0);
	assertTrue("ﾒヽ < ﾒメ", col.compare("ﾒヽ", "ﾒメ") < 0);
	
	assertTrue("モヽ < モモ", col.compare("モヽ", "モモ") < 0);
	assertTrue("ﾓヽ < ﾓモ", col.compare("ﾓヽ", "ﾓモ") < 0);
	
	assertTrue("ヤヽ < ヤヤ", col.compare("ヤヽ", "ヤヤ") < 0);
	assertTrue("ﾔヽ < ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") < 0);
	assertTrue("ャヽ < ャヤ", col.compare("ャヽ", "ャヤ") < 0);
	assertTrue("ｬヽ < ｬヤ", col.compare("ｬヽ", "ｬヤ") < 0);
	
	assertTrue("ユヽ < ユユ", col.compare("ユヽ", "ユユ") < 0);
	assertTrue("ﾕヽ < ﾕユ", col.compare("ﾕヽ", "ﾕユ") < 0);
	assertTrue("ュヽ < ュユ", col.compare("ュヽ", "ュユ") < 0);
	assertTrue("ｭヽ < ｭユ", col.compare("ｭヽ", "ｭユ") < 0);
	
	assertTrue("ヨヽ < ヨヨ", col.compare("ヨヽ", "ヨヨ") < 0);
	assertTrue("ﾖヽ < ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") < 0);
	assertTrue("ョヽ < ョヨ", col.compare("ョヽ", "ョヨ") < 0);
	assertTrue("ｮヽ < ｮヨ", col.compare("ｮヽ", "ｮヨ") < 0);
	
	assertTrue("ラヽ < ララ", col.compare("ラヽ", "ララ") < 0);
	assertTrue("ﾗヽ < ﾗラ", col.compare("ﾗヽ", "ﾗラ") < 0);
	assertTrue("ㇻヽ < ㇻラ", col.compare("ㇻヽ", "ㇻラ") < 0);
	
	assertTrue("リヽ < リリ", col.compare("リヽ", "リリ") < 0);
	assertTrue("ﾘヽ < ﾘリ", col.compare("ﾘヽ", "ﾘリ") < 0);
	assertTrue("ㇼヽ < ㇼリ", col.compare("ㇼヽ", "ㇼリ") < 0);
	
	assertTrue("ルヽ < ルル", col.compare("ルヽ", "ルル") < 0);
	assertTrue("ﾙヽ < ﾙル", col.compare("ﾙヽ", "ﾙル") < 0);
	assertTrue("ㇽヽ < ㇽル", col.compare("ㇽヽ", "ㇽル") < 0);
	
	assertTrue("レヽ < レレ", col.compare("レヽ", "レレ") < 0);
	assertTrue("ﾚヽ < ﾚレ", col.compare("ﾚヽ", "ﾚレ") < 0);
	assertTrue("ㇾヽ < ㇾレ", col.compare("ㇾヽ", "ㇾレ") < 0);
	
	assertTrue("ロヽ < ロロ", col.compare("ロヽ", "ロロ") < 0);
	assertTrue("ﾛヽ < ﾛロ", col.compare("ﾛヽ", "ﾛロ") < 0);
	assertTrue("ㇿヽ < ㇿロ", col.compare("ㇿヽ", "ㇿロ") < 0);
	
	assertTrue("ワヽ < ワワ", col.compare("ワヽ", "ワワ") < 0);
	assertTrue("ﾜヽ < ﾜワ", col.compare("ﾜヽ", "ﾜワ") < 0);
	assertTrue("ヮヽ < ヮワ", col.compare("ヮヽ", "ヮワ") < 0);
	assertTrue("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
	assertTrue("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
	assertTrue("ワヾ < ワワ", col.compare("ワヾ", "ワワ") < 0);
	assertTrue("ﾜヾ < ﾜワ", col.compare("ﾜヾ", "ﾜワ") < 0);
	assertTrue("ヷヾ < ヷワ", col.compare("ヷヾ", "ヷワ") < 0);
	assertTrue("ヷヾ < ヷワ", col.compare("ヷヾ", "ヷワ") < 0);
	assertTrue("ヮヾ < ヮワ", col.compare("ヮヾ", "ヮワ") < 0);
	
	assertTrue("ヰヽ < ヰヰ", col.compare("ヰヽ", "ヰヰ") < 0);
	assertTrue("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
	assertTrue("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
	assertTrue("ヰヾ < ヰヰ", col.compare("ヰヾ", "ヰヰ") < 0);
	assertTrue("ヸヾ < ヸヰ", col.compare("ヸヾ", "ヸヰ") < 0);
	assertTrue("ヸヾ < ヸヰ", col.compare("ヸヾ", "ヸヰ") < 0);
	
	assertTrue("ヱヽ < ヱヱ", col.compare("ヱヽ", "ヱヱ") < 0);
	assertTrue("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
	assertTrue("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
	assertTrue("ヱヾ < ヱヱ", col.compare("ヱヾ", "ヱヱ") < 0);
	assertTrue("ヹヾ < ヹヱ", col.compare("ヹヾ", "ヹヱ") < 0);
	assertTrue("ヹヾ < ヹヱ", col.compare("ヹヾ", "ヹヱ") < 0);
	
	assertTrue("ヲヽ < ヲヲ", col.compare("ヲヽ", "ヲヲ") < 0);
	assertTrue("ｦヽ < ｦヲ", col.compare("ｦヽ", "ｦヲ") < 0);
	assertTrue("ヺヽ < ヺヲ", col.compare("ヺヽ", "ヺヲ") < 0);
	assertTrue("ヺヽ < ヺヲ", col.compare("ヺヽ", "ヺヲ") < 0);
	assertTrue("ヲヾ < ヲヲ", col.compare("ヲヾ", "ヲヲ") < 0);
	assertTrue("ｦヾ < ｦヲ", col.compare("ｦヾ", "ｦヲ") < 0);
	assertTrue("ヺヾ < ヺヲ", col.compare("ヺヾ", "ヺヲ") < 0);
	assertTrue("ヺヾ < ヺヲ", col.compare("ヺヾ", "ヺヲ") < 0);
	
	assertTrue("ンヽ < ンン", col.compare("ンヽ", "ンン") < 0);
	assertTrue("ﾝヽ < ﾝン", col.compare("ﾝヽ", "ﾝン") < 0);	
}

function testJSCollatorKatakanaIterationMarksTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("アヽ < アア", col.compare("アヽ", "アア") < 0);
	assertTrue("ｱヽ < ｱア", col.compare("ｱヽ", "ｱア") < 0);
	assertTrue("ァヽ < ァア", col.compare("ァヽ", "ァア") < 0);
	assertTrue("ｧヽ < ｧア", col.compare("ｧヽ", "ｧア") < 0);
	assertTrue("イヽ < イイ", col.compare("イヽ", "イイ") < 0);
	assertTrue("ｲヽ < ｲイ", col.compare("ｲヽ", "ｲイ") < 0);
	assertTrue("ィヽ < ィイ", col.compare("ィヽ", "ィイ") < 0);
	assertTrue("ｨヽ < ｨイ", col.compare("ｨヽ", "ｨイ") < 0);
	
	assertTrue("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
	assertTrue("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
	assertTrue("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
	assertTrue("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ウヾ < ウウ", col.compare("ウヾ", "ウウ") < 0);
	assertTrue("ｳヾ < ｳウ", col.compare("ｳヾ", "ｳウ") < 0);
	assertTrue("ゥヾ < ゥウ", col.compare("ゥヾ", "ゥウ") < 0);
	assertTrue("ｩヾ < ｩウ", col.compare("ｩヾ", "ｩウ") < 0);
	assertTrue("ヴヾ < ヴウ", col.compare("ヴヾ", "ヴウ") < 0);
	assertTrue("ヴヾ < ヴウ", col.compare("ヴヾ", "ヴウ") < 0);
	
	assertTrue("エヽ < エエ", col.compare("エヽ", "エエ") < 0);
	assertTrue("ｴヽ < ｴエ", col.compare("ｴヽ", "ｴエ") < 0);
	assertTrue("ェヽ < ェエ", col.compare("ェヽ", "ェエ") < 0);
	assertTrue("ｪヽ < ｪエ", col.compare("ｪヽ", "ｪエ") < 0);
	
	assertTrue("オヽ < オオ", col.compare("オヽ", "オオ") < 0);
	assertTrue("ｵヽ < ｵオ", col.compare("ｵヽ", "ｵオ") < 0);
	assertTrue("ォヽ < ォオ", col.compare("ォヽ", "ォオ") < 0);
	assertTrue("ｫヽ < ｫオ", col.compare("ｫヽ", "ｫオ") < 0);
	
	assertTrue("カヽ < カカ", col.compare("カヽ", "カカ") < 0);
	assertTrue("ｶヽ < ｶカ", col.compare("ｶヽ", "ｶカ") < 0);
	assertTrue("ヵヽ < ヵカ", col.compare("ヵヽ", "ヵカ") < 0);
	assertTrue("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
	assertTrue("ガヽ < ガカ", col.compare("ガヽ", "ガカ") < 0);
	
	assertTrue("キヽ < キキ", col.compare("キヽ", "キキ") < 0);
	assertTrue("ｷヽ < ｷキ", col.compare("ｷヽ", "ｷキ") < 0);
	assertTrue("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
	assertTrue("ギヽ < ギキ", col.compare("ギヽ", "ギキ") < 0);
	assertTrue("キヾ < キキ", col.compare("キヾ", "キキ") < 0);
	assertTrue("ｷヾ < ｷキ", col.compare("ｷヾ", "ｷキ") < 0);
	assertTrue("ギヾ < ギキ", col.compare("ギヾ", "ギキ") < 0);
	assertTrue("ギヾ < ギキ", col.compare("ギヾ", "ギキ") < 0);

	assertTrue("クヽ < クク", col.compare("クヽ", "クク") < 0);
	assertTrue("ｸヽ < ｸク", col.compare("ｸヽ", "ｸク") < 0);
	assertTrue("ㇰヽ < ㇰク", col.compare("ㇰヽ", "ㇰク") < 0);
	assertTrue("グヽ < グク", col.compare("グヽ", "グク") < 0);
	assertTrue("グヽ < グク", col.compare("グヽ", "グク") < 0);
	assertTrue("クヾ < クク", col.compare("クヾ", "クク") < 0);
	assertTrue("ｸヾ < ｸク", col.compare("ｸヾ", "ｸク") < 0);
	assertTrue("ㇰヾ < ㇰク", col.compare("ㇰヾ", "ㇰク") < 0);
	assertTrue("グヾ < グク", col.compare("グヾ", "グク") < 0);
	assertTrue("グヾ < グク", col.compare("グヾ", "グク") < 0);
	
	assertTrue("ケヽ < ケケ", col.compare("ケヽ", "ケケ") < 0);
	assertTrue("ｹヽ < ｹケ", col.compare("ｹヽ", "ｹケ") < 0);
	assertTrue("ヶヽ < ヶケ", col.compare("ヶヽ", "ヶケ") < 0);
	assertTrue("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
	assertTrue("ゲヽ < ゲケ", col.compare("ゲヽ", "ゲケ") < 0);
	
	assertTrue("コヽ < ココ", col.compare("コヽ", "ココ") < 0);
	assertTrue("ｺヽ < ｺコ", col.compare("ｺヽ", "ｺコ") < 0);
	assertTrue("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
	assertTrue("ゴヽ < ゴコ", col.compare("ゴヽ", "ゴコ") < 0);
	assertTrue("コヾ < ココ", col.compare("コヾ", "ココ") < 0);
	assertTrue("ｺヾ < ｺコ", col.compare("ｺヾ", "ｺコ") < 0);
	assertTrue("ゴヾ < ゴコ", col.compare("ゴヾ", "ゴコ") < 0);
	assertTrue("ゴヾ < ゴコ", col.compare("ゴヾ", "ゴコ") < 0);
	
	assertTrue("サヽ < ササ", col.compare("サヽ", "ササ") < 0);
	assertTrue("ｻヽ < ｻサ", col.compare("ｻヽ", "ｻサ") < 0);
	assertTrue("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
	assertTrue("ザヽ < ザサ", col.compare("ザヽ", "ザサ") < 0);
	assertTrue("サヾ < ササ", col.compare("サヾ", "ササ") < 0);
	assertTrue("ｻヾ < ｻサ", col.compare("ｻヾ", "ｻサ") < 0);
	assertTrue("ザヾ < ザサ", col.compare("ザヾ", "ザサ") < 0);
	assertTrue("ザヾ < ザサ", col.compare("ザヾ", "ザサ") < 0);

	assertTrue("シヽ < シシ", col.compare("シヽ", "シシ") < 0);
	assertTrue("ｼヽ < ｼシ", col.compare("ｼヽ", "ｼシ") < 0);
	assertTrue("ㇱヽ < ㇱシ", col.compare("ㇱヽ", "ㇱシ") < 0);
	assertTrue("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
	assertTrue("ジヽ < ジシ", col.compare("ジヽ", "ジシ") < 0);
	assertTrue("シヾ < シシ", col.compare("シヾ", "シシ") < 0);
	assertTrue("ｼヾ < ｼシ", col.compare("ｼヾ", "ｼシ") < 0);
	assertTrue("ㇱヾ < ㇱシ", col.compare("ㇱヾ", "ㇱシ") < 0);
	assertTrue("ジヾ < ジシ", col.compare("ジヾ", "ジシ") < 0);
	assertTrue("ジヾ < ジシ", col.compare("ジヾ", "ジシ") < 0);

	assertTrue("スヽ < スス", col.compare("スヽ", "スス") < 0);
	assertTrue("ｽヽ < ｽス", col.compare("ｽヽ", "ｽス") < 0);
	assertTrue("ㇲヽ < ㇲス", col.compare("ㇲヽ", "ㇲス") < 0);
	assertTrue("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
	assertTrue("ズヽ < ズス", col.compare("ズヽ", "ズス") < 0);
	assertTrue("スヾ < スス", col.compare("スヾ", "スス") < 0);
	assertTrue("ｽヾ < ｽス", col.compare("ｽヾ", "ｽス") < 0);
	assertTrue("ㇲヾ < ㇲス", col.compare("ㇲヾ", "ㇲス") < 0);
	assertTrue("ズヾ < ズス", col.compare("ズヾ", "ズス") < 0);
	assertTrue("ズヾ < ズス", col.compare("ズヾ", "ズス") < 0);

	assertTrue("セヽ < セセ", col.compare("セヽ", "セセ") < 0);
	assertTrue("ｾヽ < ｾセ", col.compare("ｾヽ", "ｾセ") < 0);
	assertTrue("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
	assertTrue("ゼヽ < ゼセ", col.compare("ゼヽ", "ゼセ") < 0);
	assertTrue("セヾ < セセ", col.compare("セヾ", "セセ") < 0);
	assertTrue("ｾヾ < ｾセ", col.compare("ｾヾ", "ｾセ") < 0);
	assertTrue("ゼヾ < ゼセ", col.compare("ゼヾ", "ゼセ") < 0);
	assertTrue("ゼヾ < ゼセ", col.compare("ゼヾ", "ゼセ") < 0);

	assertTrue("ソヽ < ソソ", col.compare("ソヽ", "ソソ") < 0);
	assertTrue("ｿヽ < ｿソ", col.compare("ｿヽ", "ｿソ") < 0);
	assertTrue("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
	assertTrue("ゾヽ < ゾソ", col.compare("ゾヽ", "ゾソ") < 0);
	assertTrue("ソヾ < ソソ", col.compare("ソヾ", "ソソ") < 0);
	assertTrue("ｿヾ < ｿソ", col.compare("ｿヾ", "ｿソ") < 0);
	assertTrue("ゾヾ < ゾソ", col.compare("ゾヾ", "ゾソ") < 0);
	assertTrue("ゾヾ < ゾソ", col.compare("ゾヾ", "ゾソ") < 0);

	assertTrue("タヽ < タタ", col.compare("タヽ", "タタ") < 0);
	assertTrue("ﾀヽ < ﾀタ", col.compare("ﾀヽ", "ﾀタ") < 0);
	assertTrue("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
	assertTrue("ダヽ < ダタ", col.compare("ダヽ", "ダタ") < 0);
	assertTrue("タヾ < タタ", col.compare("タヾ", "タタ") < 0);
	assertTrue("ﾀヾ < ﾀタ", col.compare("ﾀヾ", "ﾀタ") < 0);
	assertTrue("ダヾ < ダタ", col.compare("ダヾ", "ダタ") < 0);
	assertTrue("ダヾ < ダタ", col.compare("ダヾ", "ダタ") < 0);

	assertTrue("チヽ < チチ", col.compare("チヽ", "チチ") < 0);
	assertTrue("ﾁヽ < ﾁチ", col.compare("ﾁヽ", "ﾁチ") < 0);
	assertTrue("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
	assertTrue("ヂヽ < ヂチ", col.compare("ヂヽ", "ヂチ") < 0);
	assertTrue("チヾ < チチ", col.compare("チヾ", "チチ") < 0);
	assertTrue("ﾁヾ < ﾁチ", col.compare("ﾁヾ", "ﾁチ") < 0);
	assertTrue("ヂヾ < ヂチ", col.compare("ヂヾ", "ヂチ") < 0);
	assertTrue("ヂヾ < ヂチ", col.compare("ヂヾ", "ヂチ") < 0);

	assertTrue("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
	assertTrue("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
	assertTrue("ッヽ < ッツ", col.compare("ッヽ", "ッツ") < 0);
	assertTrue("ｯヽ < ｯツ", col.compare("ｯヽ", "ｯツ") < 0);
	assertTrue("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
	assertTrue("ヅヽ < ヅツ", col.compare("ヅヽ", "ヅツ") < 0);
	assertTrue("ツヾ < ツツ", col.compare("ツヾ", "ツツ") < 0);
	assertTrue("ﾂヾ < ﾂツ", col.compare("ﾂヾ", "ﾂツ") < 0);
	assertTrue("ヅヾ < ヅツ", col.compare("ヅヾ", "ヅツ") < 0);
	assertTrue("ヅヾ < ヅツ", col.compare("ヅヾ", "ヅツ") < 0);
	assertTrue("ツヽ < ツツ", col.compare("ツヽ", "ツツ") < 0);
	assertTrue("ﾂヽ < ﾂツ", col.compare("ﾂヽ", "ﾂツ") < 0);
	assertTrue("ッヾ < ッツ", col.compare("ッヾ", "ッツ") < 0);
	assertTrue("ｯヾ < ｯツ", col.compare("ｯヾ", "ｯツ") < 0);
	assertTrue("ツヾ < ツツ", col.compare("ツヾ", "ツツ") < 0);
	assertTrue("ﾂヾ < ﾂツ", col.compare("ﾂヾ", "ﾂツ") < 0);

	assertTrue("テヽ < テテ", col.compare("テヽ", "テテ") < 0);
	assertTrue("ﾃヽ < ﾃテ", col.compare("ﾃヽ", "ﾃテ") < 0);
	assertTrue("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
	assertTrue("デヽ < デテ", col.compare("デヽ", "デテ") < 0);
	assertTrue("テヾ < テテ", col.compare("テヾ", "テテ") < 0);
	assertTrue("ﾃヾ < ﾃテ", col.compare("ﾃヾ", "ﾃテ") < 0);
	assertTrue("デヾ < デテ", col.compare("デヾ", "デテ") < 0);
	assertTrue("デヾ < デテ", col.compare("デヾ", "デテ") < 0);

	assertTrue("トヽ < トト", col.compare("トヽ", "トト") < 0);
	assertTrue("ﾄヽ < ﾄト", col.compare("ﾄヽ", "ﾄト") < 0);
	assertTrue("ㇳヽ < ㇳト", col.compare("ㇳヽ", "ㇳト") < 0);
	assertTrue("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
	assertTrue("ドヽ < ドト", col.compare("ドヽ", "ドト") < 0);
	assertTrue("トヾ < トト", col.compare("トヾ", "トト") < 0);
	assertTrue("ﾄヾ < ﾄト", col.compare("ﾄヾ", "ﾄト") < 0);
	assertTrue("ㇳヾ < ㇳト", col.compare("ㇳヾ", "ㇳト") < 0);
	assertTrue("ドヾ < ドト", col.compare("ドヾ", "ドト") < 0);
	assertTrue("ドヾ < ドト", col.compare("ドヾ", "ドト") < 0);

	assertTrue("ナヽ < ナナ", col.compare("ナヽ", "ナナ") < 0);
	assertTrue("ﾅヽ < ﾅナ", col.compare("ﾅヽ", "ﾅナ") < 0);

	assertTrue("ニヽ < ニニ", col.compare("ニヽ", "ニニ") < 0);
	assertTrue("ﾆヽ < ﾆニ", col.compare("ﾆヽ", "ﾆニ") < 0);

	assertTrue("ヌヽ < ヌヌ", col.compare("ヌヽ", "ヌヌ") < 0);
	assertTrue("ﾇヽ < ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") < 0);
	assertTrue("ㇴヽ < ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") < 0);
	
	assertTrue("ネヽ < ネネ", col.compare("ネヽ", "ネネ") < 0);
	assertTrue("ﾈヽ < ﾈネ", col.compare("ﾈヽ", "ﾈネ") < 0);
	
	assertTrue("ノヽ < ノノ", col.compare("ノヽ", "ノノ") < 0);
	assertTrue("ﾉヽ < ﾉノ", col.compare("ﾉヽ", "ﾉノ") < 0);
	
	assertTrue("ハヽ < ハハ", col.compare("ハヽ", "ハハ") < 0);
	assertTrue("ﾊヽ < ﾊハ", col.compare("ﾊヽ", "ﾊハ") < 0);
	assertTrue("ㇵヽ < ㇵハ", col.compare("ㇵヽ", "ㇵハ") < 0);
	assertTrue("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
	assertTrue("バヽ < バハ", col.compare("バヽ", "バハ") < 0);
	assertTrue("ハヾ < ハハ", col.compare("ハヾ", "ハハ") < 0);
	assertTrue("ﾊヾ < ﾊハ", col.compare("ﾊヾ", "ﾊハ") < 0);
	assertTrue("ㇵヾ < ㇵハ", col.compare("ㇵヾ", "ㇵハ") < 0);
	assertTrue("バヾ < バハ", col.compare("バヾ", "バハ") < 0);
	assertTrue("バヾ < バハ", col.compare("バヾ", "バハ") < 0);
	assertTrue("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
	assertTrue("パヽ < パハ", col.compare("パヽ", "パハ") < 0);
	assertTrue("パヾ < パハ", col.compare("パヾ", "パハ") < 0);
	assertTrue("パヾ < パハ", col.compare("パヾ", "パハ") < 0);
	
	assertTrue("ヒヽ < ヒヒ", col.compare("ヒヽ", "ヒヒ") < 0);
	assertTrue("ﾋヽ < ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") < 0);
	assertTrue("ㇶヽ < ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") < 0);
	assertTrue("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
	assertTrue("ビヽ < ビヒ", col.compare("ビヽ", "ビヒ") < 0);
	assertTrue("ヒヾ < ヒヒ", col.compare("ヒヾ", "ヒヒ") < 0);
	assertTrue("ﾋヾ < ﾋヒ", col.compare("ﾋヾ", "ﾋヒ") < 0);
	assertTrue("ㇶヾ < ㇶヒ", col.compare("ㇶヾ", "ㇶヒ") < 0);
	assertTrue("ビヾ < ビヒ", col.compare("ビヾ", "ビヒ") < 0);
	assertTrue("ビヾ < ビヒ", col.compare("ビヾ", "ビヒ") < 0);
	assertTrue("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
	assertTrue("ピヽ < ピヒ", col.compare("ピヽ", "ピヒ") < 0);
	assertTrue("ピヾ < ピヒ", col.compare("ピヾ", "ピヒ") < 0);
	assertTrue("ピヾ < ピヒ", col.compare("ピヾ", "ピヒ") < 0);
	
	assertTrue("フヽ < フフ", col.compare("フヽ", "フフ") < 0);
	assertTrue("ﾌヽ < ﾌフ", col.compare("ﾌヽ", "ﾌフ") < 0);
	assertTrue("ㇷヽ < ㇷフ", col.compare("ㇷヽ", "ㇷフ") < 0);
	assertTrue("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
	assertTrue("ブヽ < ブフ", col.compare("ブヽ", "ブフ") < 0);
	assertTrue("フヾ < フフ", col.compare("フヾ", "フフ") < 0);
	assertTrue("ﾌヾ < ﾌフ", col.compare("ﾌヾ", "ﾌフ") < 0);
	assertTrue("ㇷヾ < ㇷフ", col.compare("ㇷヾ", "ㇷフ") < 0);
	assertTrue("ブヾ < ブフ", col.compare("ブヾ", "ブフ") < 0);
	assertTrue("ブヾ < ブフ", col.compare("ブヾ", "ブフ") < 0);
	assertTrue("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
	assertTrue("プヽ < プフ", col.compare("プヽ", "プフ") < 0);
	assertTrue("プヾ < プフ", col.compare("プヾ", "プフ") < 0);
	assertTrue("プヾ < プフ", col.compare("プヾ", "プフ") < 0);
	
	assertTrue("ヘヽ < ヘヘ", col.compare("ヘヽ", "ヘヘ") < 0);
	assertTrue("ﾍヽ < ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") < 0);
	assertTrue("ㇸヽ < ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") < 0);
	assertTrue("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
	assertTrue("ベヽ < ベヘ", col.compare("ベヽ", "ベヘ") < 0);
	assertTrue("ヘヾ < ヘヘ", col.compare("ヘヾ", "ヘヘ") < 0);
	assertTrue("ﾍヾ < ﾍヘ", col.compare("ﾍヾ", "ﾍヘ") < 0);
	assertTrue("ㇸヾ < ㇸヘ", col.compare("ㇸヾ", "ㇸヘ") < 0);
	assertTrue("ベヾ < ベヘ", col.compare("ベヾ", "ベヘ") < 0);
	assertTrue("ベヾ < ベヘ", col.compare("ベヾ", "ベヘ") < 0);
	assertTrue("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
	assertTrue("ペヽ < ペヘ", col.compare("ペヽ", "ペヘ") < 0);
	assertTrue("ペヾ < ペヘ", col.compare("ペヾ", "ペヘ") < 0);
	assertTrue("ペヾ < ペヘ", col.compare("ペヾ", "ペヘ") < 0);
	
	assertTrue("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
	assertTrue("ﾎヽ < ﾎホ", col.compare("ﾎヽ", "ﾎホ") < 0);
	assertTrue("ㇹヽ < ㇹホ", col.compare("ㇹヽ", "ㇹホ") < 0);
	assertTrue("ボヽ < ボホ", col.compare("ボヽ", "ボホ") < 0);
	assertTrue("ホヽ < ホホ", col.compare("ホヽ", "ホホ") < 0);
	assertTrue("ホヾ < ホホ", col.compare("ホヾ", "ホホ") < 0);
	assertTrue("ﾎヾ < ﾎホ", col.compare("ﾎヾ", "ﾎホ") < 0);
	assertTrue("ㇹヾ < ㇹホ", col.compare("ㇹヾ", "ㇹホ") < 0);
	assertTrue("ボヾ < ボホ", col.compare("ボヾ", "ボホ") < 0);
	assertTrue("ボヾ < ボホ", col.compare("ボヾ", "ボホ") < 0);
	assertTrue("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
	assertTrue("ポヽ < ポホ", col.compare("ポヽ", "ポホ") < 0);
	assertTrue("ポヾ < ポホ", col.compare("ポヾ", "ポホ") < 0);
	assertTrue("ポヾ < ポホ", col.compare("ポヾ", "ポホ") < 0);
	
	assertTrue("マヽ < ママ", col.compare("マヽ", "ママ") < 0);
	assertTrue("ﾏヽ < ﾏマ", col.compare("ﾏヽ", "ﾏマ") < 0);
	
	assertTrue("ミヽ < ミミ", col.compare("ミヽ", "ミミ") < 0);
	assertTrue("ﾐヽ < ﾐミ", col.compare("ﾐヽ", "ﾐミ") < 0);
	
	assertTrue("ムヽ < ムム", col.compare("ムヽ", "ムム") < 0);
	assertTrue("ﾑヽ < ﾑム", col.compare("ﾑヽ", "ﾑム") < 0);
	assertTrue("ㇺヽ < ㇺム", col.compare("ㇺヽ", "ㇺム") < 0);
	
	assertTrue("メヽ < メメ", col.compare("メヽ", "メメ") < 0);
	assertTrue("ﾒヽ < ﾒメ", col.compare("ﾒヽ", "ﾒメ") < 0);
	
	assertTrue("モヽ < モモ", col.compare("モヽ", "モモ") < 0);
	assertTrue("ﾓヽ < ﾓモ", col.compare("ﾓヽ", "ﾓモ") < 0);
	
	assertTrue("ヤヽ < ヤヤ", col.compare("ヤヽ", "ヤヤ") < 0);
	assertTrue("ﾔヽ < ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") < 0);
	assertTrue("ャヽ < ャヤ", col.compare("ャヽ", "ャヤ") < 0);
	assertTrue("ｬヽ < ｬヤ", col.compare("ｬヽ", "ｬヤ") < 0);
	
	assertTrue("ユヽ < ユユ", col.compare("ユヽ", "ユユ") < 0);
	assertTrue("ﾕヽ < ﾕユ", col.compare("ﾕヽ", "ﾕユ") < 0);
	assertTrue("ュヽ < ュユ", col.compare("ュヽ", "ュユ") < 0);
	assertTrue("ｭヽ < ｭユ", col.compare("ｭヽ", "ｭユ") < 0);
	
	assertTrue("ヨヽ < ヨヨ", col.compare("ヨヽ", "ヨヨ") < 0);
	assertTrue("ﾖヽ < ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") < 0);
	assertTrue("ョヽ < ョヨ", col.compare("ョヽ", "ョヨ") < 0);
	assertTrue("ｮヽ < ｮヨ", col.compare("ｮヽ", "ｮヨ") < 0);
	
	assertTrue("ラヽ < ララ", col.compare("ラヽ", "ララ") < 0);
	assertTrue("ﾗヽ < ﾗラ", col.compare("ﾗヽ", "ﾗラ") < 0);
	assertTrue("ㇻヽ < ㇻラ", col.compare("ㇻヽ", "ㇻラ") < 0);
	
	assertTrue("リヽ < リリ", col.compare("リヽ", "リリ") < 0);
	assertTrue("ﾘヽ < ﾘリ", col.compare("ﾘヽ", "ﾘリ") < 0);
	assertTrue("ㇼヽ < ㇼリ", col.compare("ㇼヽ", "ㇼリ") < 0);
	
	assertTrue("ルヽ < ルル", col.compare("ルヽ", "ルル") < 0);
	assertTrue("ﾙヽ < ﾙル", col.compare("ﾙヽ", "ﾙル") < 0);
	assertTrue("ㇽヽ < ㇽル", col.compare("ㇽヽ", "ㇽル") < 0);
	
	assertTrue("レヽ < レレ", col.compare("レヽ", "レレ") < 0);
	assertTrue("ﾚヽ < ﾚレ", col.compare("ﾚヽ", "ﾚレ") < 0);
	assertTrue("ㇾヽ < ㇾレ", col.compare("ㇾヽ", "ㇾレ") < 0);
	
	assertTrue("ロヽ < ロロ", col.compare("ロヽ", "ロロ") < 0);
	assertTrue("ﾛヽ < ﾛロ", col.compare("ﾛヽ", "ﾛロ") < 0);
	assertTrue("ㇿヽ < ㇿロ", col.compare("ㇿヽ", "ㇿロ") < 0);
	
	assertTrue("ワヽ < ワワ", col.compare("ワヽ", "ワワ") < 0);
	assertTrue("ﾜヽ < ﾜワ", col.compare("ﾜヽ", "ﾜワ") < 0);
	assertTrue("ヮヽ < ヮワ", col.compare("ヮヽ", "ヮワ") < 0);
	assertTrue("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
	assertTrue("ヷヽ < ヷワ", col.compare("ヷヽ", "ヷワ") < 0);
	assertTrue("ワヾ < ワワ", col.compare("ワヾ", "ワワ") < 0);
	assertTrue("ﾜヾ < ﾜワ", col.compare("ﾜヾ", "ﾜワ") < 0);
	assertTrue("ヷヾ < ヷワ", col.compare("ヷヾ", "ヷワ") < 0);
	assertTrue("ヷヾ < ヷワ", col.compare("ヷヾ", "ヷワ") < 0);
	assertTrue("ヮヾ < ヮワ", col.compare("ヮヾ", "ヮワ") < 0);
	
	assertTrue("ヰヽ < ヰヰ", col.compare("ヰヽ", "ヰヰ") < 0);
	assertTrue("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
	assertTrue("ヸヽ < ヸヰ", col.compare("ヸヽ", "ヸヰ") < 0);
	assertTrue("ヰヾ < ヰヰ", col.compare("ヰヾ", "ヰヰ") < 0);
	assertTrue("ヸヾ < ヸヰ", col.compare("ヸヾ", "ヸヰ") < 0);
	assertTrue("ヸヾ < ヸヰ", col.compare("ヸヾ", "ヸヰ") < 0);
	
	assertTrue("ヱヽ < ヱヱ", col.compare("ヱヽ", "ヱヱ") < 0);
	assertTrue("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
	assertTrue("ヹヽ < ヹヱ", col.compare("ヹヽ", "ヹヱ") < 0);
	assertTrue("ヱヾ < ヱヱ", col.compare("ヱヾ", "ヱヱ") < 0);
	assertTrue("ヹヾ < ヹヱ", col.compare("ヹヾ", "ヹヱ") < 0);
	assertTrue("ヹヾ < ヹヱ", col.compare("ヹヾ", "ヹヱ") < 0);
	
	assertTrue("ヲヽ < ヲヲ", col.compare("ヲヽ", "ヲヲ") < 0);
	assertTrue("ｦヽ < ｦヲ", col.compare("ｦヽ", "ｦヲ") < 0);
	assertTrue("ヺヽ < ヺヲ", col.compare("ヺヽ", "ヺヲ") < 0);
	assertTrue("ヺヽ < ヺヲ", col.compare("ヺヽ", "ヺヲ") < 0);
	assertTrue("ヲヾ < ヲヲ", col.compare("ヲヾ", "ヲヲ") < 0);
	assertTrue("ｦヾ < ｦヲ", col.compare("ｦヾ", "ｦヲ") < 0);
	assertTrue("ヺヾ < ヺヲ", col.compare("ヺヾ", "ヺヲ") < 0);
	assertTrue("ヺヾ < ヺヲ", col.compare("ヺヾ", "ヺヲ") < 0);
	
	assertTrue("ンヽ < ンン", col.compare("ンヽ", "ンン") < 0);
	assertTrue("ﾝヽ < ﾝン", col.compare("ﾝヽ", "ﾝン") < 0);
}

function testJSCollatorKatakanaIterationMarksSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("アヽ = アア", col.compare("アヽ", "アア") === 0);
	assertTrue("ｱヽ = ｱア", col.compare("ｱヽ", "ｱア") === 0);
	assertTrue("ァヽ = ァア", col.compare("ァヽ", "ァア") === 0);
	assertTrue("ｧヽ = ｧア", col.compare("ｧヽ", "ｧア") === 0);
	assertTrue("イヽ = イイ", col.compare("イヽ", "イイ") === 0);
	assertTrue("ｲヽ = ｲイ", col.compare("ｲヽ", "ｲイ") === 0);
	assertTrue("ィヽ = ィイ", col.compare("ィヽ", "ィイ") === 0);
	assertTrue("ｨヽ = ｨイ", col.compare("ｨヽ", "ｨイ") === 0);
	
	assertTrue("ウヽ = ウウ", col.compare("ウヽ", "ウウ") === 0);
	assertTrue("ｳヽ = ｳウ", col.compare("ｳヽ", "ｳウ") === 0);
	assertTrue("ゥヽ = ゥウ", col.compare("ゥヽ", "ゥウ") === 0);
	assertTrue("ｩヽ = ｩウ", col.compare("ｩヽ", "ｩウ") === 0);
	assertTrue("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
	assertTrue("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
	assertTrue("ウヾ = ウウ", col.compare("ウヾ", "ウウ") === 0);
	assertTrue("ｳヾ = ｳウ", col.compare("ｳヾ", "ｳウ") === 0);
	assertTrue("ゥヾ = ゥウ", col.compare("ゥヾ", "ゥウ") === 0);
	assertTrue("ｩヾ = ｩウ", col.compare("ｩヾ", "ｩウ") === 0);
	assertTrue("ヴヾ = ヴウ", col.compare("ヴヾ", "ヴウ") === 0);
	assertTrue("ヴヾ = ヴウ", col.compare("ヴヾ", "ヴウ") === 0);
	
	assertTrue("エヽ = エエ", col.compare("エヽ", "エエ") === 0);
	assertTrue("ｴヽ = ｴエ", col.compare("ｴヽ", "ｴエ") === 0);
	assertTrue("ェヽ = ェエ", col.compare("ェヽ", "ェエ") === 0);
	assertTrue("ｪヽ = ｪエ", col.compare("ｪヽ", "ｪエ") === 0);
	
	assertTrue("オヽ = オオ", col.compare("オヽ", "オオ") === 0);
	assertTrue("ｵヽ = ｵオ", col.compare("ｵヽ", "ｵオ") === 0);
	assertTrue("ォヽ = ォオ", col.compare("ォヽ", "ォオ") === 0);
	assertTrue("ｫヽ = ｫオ", col.compare("ｫヽ", "ｫオ") === 0);
	
	assertTrue("カヽ = カカ", col.compare("カヽ", "カカ") === 0);
	assertTrue("ｶヽ = ｶカ", col.compare("ｶヽ", "ｶカ") === 0);
	assertTrue("ヵヽ = ヵカ", col.compare("ヵヽ", "ヵカ") === 0);
	assertTrue("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
	assertTrue("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
	
	assertTrue("キヽ = キキ", col.compare("キヽ", "キキ") === 0);
	assertTrue("ｷヽ = ｷキ", col.compare("ｷヽ", "ｷキ") === 0);
	assertTrue("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
	assertTrue("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
	assertTrue("キヾ = キキ", col.compare("キヾ", "キキ") === 0);
	assertTrue("ｷヾ = ｷキ", col.compare("ｷヾ", "ｷキ") === 0);
	assertTrue("ギヾ = ギキ", col.compare("ギヾ", "ギキ") === 0);
	assertTrue("ギヾ = ギキ", col.compare("ギヾ", "ギキ") === 0);

	assertTrue("クヽ = クク", col.compare("クヽ", "クク") === 0);
	assertTrue("ｸヽ = ｸク", col.compare("ｸヽ", "ｸク") === 0);
	assertTrue("ㇰヽ = ㇰク", col.compare("ㇰヽ", "ㇰク") === 0);
	assertTrue("グヽ = グク", col.compare("グヽ", "グク") === 0);
	assertTrue("グヽ = グク", col.compare("グヽ", "グク") === 0);
	assertTrue("クヾ = クク", col.compare("クヾ", "クク") === 0);
	assertTrue("ｸヾ = ｸク", col.compare("ｸヾ", "ｸク") === 0);
	assertTrue("ㇰヾ = ㇰク", col.compare("ㇰヾ", "ㇰク") === 0);
	assertTrue("グヾ = グク", col.compare("グヾ", "グク") === 0);
	assertTrue("グヾ = グク", col.compare("グヾ", "グク") === 0);
	
	assertTrue("ケヽ = ケケ", col.compare("ケヽ", "ケケ") === 0);
	assertTrue("ｹヽ = ｹケ", col.compare("ｹヽ", "ｹケ") === 0);
	assertTrue("ヶヽ = ヶケ", col.compare("ヶヽ", "ヶケ") === 0);
	assertTrue("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
	assertTrue("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
	
	assertTrue("コヽ = ココ", col.compare("コヽ", "ココ") === 0);
	assertTrue("ｺヽ = ｺコ", col.compare("ｺヽ", "ｺコ") === 0);
	assertTrue("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
	assertTrue("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
	assertTrue("コヾ = ココ", col.compare("コヾ", "ココ") === 0);
	assertTrue("ｺヾ = ｺコ", col.compare("ｺヾ", "ｺコ") === 0);
	assertTrue("ゴヾ = ゴコ", col.compare("ゴヾ", "ゴコ") === 0);
	assertTrue("ゴヾ = ゴコ", col.compare("ゴヾ", "ゴコ") === 0);
	
	assertTrue("サヽ = ササ", col.compare("サヽ", "ササ") === 0);
	assertTrue("ｻヽ = ｻサ", col.compare("ｻヽ", "ｻサ") === 0);
	assertTrue("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
	assertTrue("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
	assertTrue("サヾ = ササ", col.compare("サヾ", "ササ") === 0);
	assertTrue("ｻヾ = ｻサ", col.compare("ｻヾ", "ｻサ") === 0);
	assertTrue("ザヾ = ザサ", col.compare("ザヾ", "ザサ") === 0);
	assertTrue("ザヾ = ザサ", col.compare("ザヾ", "ザサ") === 0);

	assertTrue("シヽ = シシ", col.compare("シヽ", "シシ") === 0);
	assertTrue("ｼヽ = ｼシ", col.compare("ｼヽ", "ｼシ") === 0);
	assertTrue("ㇱヽ = ㇱシ", col.compare("ㇱヽ", "ㇱシ") === 0);
	assertTrue("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
	assertTrue("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
	assertTrue("シヾ = シシ", col.compare("シヾ", "シシ") === 0);
	assertTrue("ｼヾ = ｼシ", col.compare("ｼヾ", "ｼシ") === 0);
	assertTrue("ㇱヾ = ㇱシ", col.compare("ㇱヾ", "ㇱシ") === 0);
	assertTrue("ジヾ = ジシ", col.compare("ジヾ", "ジシ") === 0);
	assertTrue("ジヾ = ジシ", col.compare("ジヾ", "ジシ") === 0);

	assertTrue("スヽ = スス", col.compare("スヽ", "スス") === 0);
	assertTrue("ｽヽ = ｽス", col.compare("ｽヽ", "ｽス") === 0);
	assertTrue("ㇲヽ = ㇲス", col.compare("ㇲヽ", "ㇲス") === 0);
	assertTrue("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
	assertTrue("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
	assertTrue("スヾ = スス", col.compare("スヾ", "スス") === 0);
	assertTrue("ｽヾ = ｽス", col.compare("ｽヾ", "ｽス") === 0);
	assertTrue("ㇲヾ = ㇲス", col.compare("ㇲヾ", "ㇲス") === 0);
	assertTrue("ズヾ = ズス", col.compare("ズヾ", "ズス") === 0);
	assertTrue("ズヾ = ズス", col.compare("ズヾ", "ズス") === 0);

	assertTrue("セヽ = セセ", col.compare("セヽ", "セセ") === 0);
	assertTrue("ｾヽ = ｾセ", col.compare("ｾヽ", "ｾセ") === 0);
	assertTrue("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
	assertTrue("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
	assertTrue("セヾ = セセ", col.compare("セヾ", "セセ") === 0);
	assertTrue("ｾヾ = ｾセ", col.compare("ｾヾ", "ｾセ") === 0);
	assertTrue("ゼヾ = ゼセ", col.compare("ゼヾ", "ゼセ") === 0);
	assertTrue("ゼヾ = ゼセ", col.compare("ゼヾ", "ゼセ") === 0);

	assertTrue("ソヽ = ソソ", col.compare("ソヽ", "ソソ") === 0);
	assertTrue("ｿヽ = ｿソ", col.compare("ｿヽ", "ｿソ") === 0);
	assertTrue("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
	assertTrue("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
	assertTrue("ソヾ = ソソ", col.compare("ソヾ", "ソソ") === 0);
	assertTrue("ｿヾ = ｿソ", col.compare("ｿヾ", "ｿソ") === 0);
	assertTrue("ゾヾ = ゾソ", col.compare("ゾヾ", "ゾソ") === 0);
	assertTrue("ゾヾ = ゾソ", col.compare("ゾヾ", "ゾソ") === 0);

	assertTrue("タヽ = タタ", col.compare("タヽ", "タタ") === 0);
	assertTrue("ﾀヽ = ﾀタ", col.compare("ﾀヽ", "ﾀタ") === 0);
	assertTrue("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
	assertTrue("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
	assertTrue("タヾ = タタ", col.compare("タヾ", "タタ") === 0);
	assertTrue("ﾀヾ = ﾀタ", col.compare("ﾀヾ", "ﾀタ") === 0);
	assertTrue("ダヾ = ダタ", col.compare("ダヾ", "ダタ") === 0);
	assertTrue("ダヾ = ダタ", col.compare("ダヾ", "ダタ") === 0);

	assertTrue("チヽ = チチ", col.compare("チヽ", "チチ") === 0);
	assertTrue("ﾁヽ = ﾁチ", col.compare("ﾁヽ", "ﾁチ") === 0);
	assertTrue("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
	assertTrue("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
	assertTrue("チヾ = チチ", col.compare("チヾ", "チチ") === 0);
	assertTrue("ﾁヾ = ﾁチ", col.compare("ﾁヾ", "ﾁチ") === 0);
	assertTrue("ヂヾ = ヂチ", col.compare("ヂヾ", "ヂチ") === 0);
	assertTrue("ヂヾ = ヂチ", col.compare("ヂヾ", "ヂチ") === 0);

	assertTrue("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
	assertTrue("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
	assertTrue("ッヽ = ッツ", col.compare("ッヽ", "ッツ") === 0);
	assertTrue("ｯヽ = ｯツ", col.compare("ｯヽ", "ｯツ") === 0);
	assertTrue("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
	assertTrue("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
	assertTrue("ツヾ = ツツ", col.compare("ツヾ", "ツツ") === 0);
	assertTrue("ﾂヾ = ﾂツ", col.compare("ﾂヾ", "ﾂツ") === 0);
	assertTrue("ヅヾ = ヅツ", col.compare("ヅヾ", "ヅツ") === 0);
	assertTrue("ヅヾ = ヅツ", col.compare("ヅヾ", "ヅツ") === 0);
	assertTrue("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
	assertTrue("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
	assertTrue("ッヾ = ッツ", col.compare("ッヾ", "ッツ") === 0);
	assertTrue("ｯヾ = ｯツ", col.compare("ｯヾ", "ｯツ") === 0);
	assertTrue("ツヾ = ツツ", col.compare("ツヾ", "ツツ") === 0);
	assertTrue("ﾂヾ = ﾂツ", col.compare("ﾂヾ", "ﾂツ") === 0);

	assertTrue("テヽ = テテ", col.compare("テヽ", "テテ") === 0);
	assertTrue("ﾃヽ = ﾃテ", col.compare("ﾃヽ", "ﾃテ") === 0);
	assertTrue("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
	assertTrue("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
	assertTrue("テヾ = テテ", col.compare("テヾ", "テテ") === 0);
	assertTrue("ﾃヾ = ﾃテ", col.compare("ﾃヾ", "ﾃテ") === 0);
	assertTrue("デヾ = デテ", col.compare("デヾ", "デテ") === 0);
	assertTrue("デヾ = デテ", col.compare("デヾ", "デテ") === 0);

	assertTrue("トヽ = トト", col.compare("トヽ", "トト") === 0);
	assertTrue("ﾄヽ = ﾄト", col.compare("ﾄヽ", "ﾄト") === 0);
	assertTrue("ㇳヽ = ㇳト", col.compare("ㇳヽ", "ㇳト") === 0);
	assertTrue("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
	assertTrue("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
	assertTrue("トヾ = トト", col.compare("トヾ", "トト") === 0);
	assertTrue("ﾄヾ = ﾄト", col.compare("ﾄヾ", "ﾄト") === 0);
	assertTrue("ㇳヾ = ㇳト", col.compare("ㇳヾ", "ㇳト") === 0);
	assertTrue("ドヾ = ドト", col.compare("ドヾ", "ドト") === 0);
	assertTrue("ドヾ = ドト", col.compare("ドヾ", "ドト") === 0);

	assertTrue("ナヽ = ナナ", col.compare("ナヽ", "ナナ") === 0);
	assertTrue("ﾅヽ = ﾅナ", col.compare("ﾅヽ", "ﾅナ") === 0);

	assertTrue("ニヽ = ニニ", col.compare("ニヽ", "ニニ") === 0);
	assertTrue("ﾆヽ = ﾆニ", col.compare("ﾆヽ", "ﾆニ") === 0);

	assertTrue("ヌヽ = ヌヌ", col.compare("ヌヽ", "ヌヌ") === 0);
	assertTrue("ﾇヽ = ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") === 0);
	assertTrue("ㇴヽ = ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") === 0);
	
	assertTrue("ネヽ = ネネ", col.compare("ネヽ", "ネネ") === 0);
	assertTrue("ﾈヽ = ﾈネ", col.compare("ﾈヽ", "ﾈネ") === 0);
	
	assertTrue("ノヽ = ノノ", col.compare("ノヽ", "ノノ") === 0);
	assertTrue("ﾉヽ = ﾉノ", col.compare("ﾉヽ", "ﾉノ") === 0);
	
	assertTrue("ハヽ = ハハ", col.compare("ハヽ", "ハハ") === 0);
	assertTrue("ﾊヽ = ﾊハ", col.compare("ﾊヽ", "ﾊハ") === 0);
	assertTrue("ㇵヽ = ㇵハ", col.compare("ㇵヽ", "ㇵハ") === 0);
	assertTrue("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
	assertTrue("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
	assertTrue("ハヾ = ハハ", col.compare("ハヾ", "ハハ") === 0);
	assertTrue("ﾊヾ = ﾊハ", col.compare("ﾊヾ", "ﾊハ") === 0);
	assertTrue("ㇵヾ = ㇵハ", col.compare("ㇵヾ", "ㇵハ") === 0);
	assertTrue("バヾ = バハ", col.compare("バヾ", "バハ") === 0);
	assertTrue("バヾ = バハ", col.compare("バヾ", "バハ") === 0);
	assertTrue("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
	assertTrue("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
	assertTrue("パヾ = パハ", col.compare("パヾ", "パハ") === 0);
	assertTrue("パヾ = パハ", col.compare("パヾ", "パハ") === 0);
	
	assertTrue("ヒヽ = ヒヒ", col.compare("ヒヽ", "ヒヒ") === 0);
	assertTrue("ﾋヽ = ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") === 0);
	assertTrue("ㇶヽ = ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") === 0);
	assertTrue("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
	assertTrue("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
	assertTrue("ヒヾ = ヒヒ", col.compare("ヒヾ", "ヒヒ") === 0);
	assertTrue("ﾋヾ = ﾋヒ", col.compare("ﾋヾ", "ﾋヒ") === 0);
	assertTrue("ㇶヾ = ㇶヒ", col.compare("ㇶヾ", "ㇶヒ") === 0);
	assertTrue("ビヾ = ビヒ", col.compare("ビヾ", "ビヒ") === 0);
	assertTrue("ビヾ = ビヒ", col.compare("ビヾ", "ビヒ") === 0);
	assertTrue("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
	assertTrue("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
	assertTrue("ピヾ = ピヒ", col.compare("ピヾ", "ピヒ") === 0);
	assertTrue("ピヾ = ピヒ", col.compare("ピヾ", "ピヒ") === 0);
	
	assertTrue("フヽ = フフ", col.compare("フヽ", "フフ") === 0);
	assertTrue("ﾌヽ = ﾌフ", col.compare("ﾌヽ", "ﾌフ") === 0);
	assertTrue("ㇷヽ = ㇷフ", col.compare("ㇷヽ", "ㇷフ") === 0);
	assertTrue("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
	assertTrue("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
	assertTrue("フヾ = フフ", col.compare("フヾ", "フフ") === 0);
	assertTrue("ﾌヾ = ﾌフ", col.compare("ﾌヾ", "ﾌフ") === 0);
	assertTrue("ㇷヾ = ㇷフ", col.compare("ㇷヾ", "ㇷフ") === 0);
	assertTrue("ブヾ = ブフ", col.compare("ブヾ", "ブフ") === 0);
	assertTrue("ブヾ = ブフ", col.compare("ブヾ", "ブフ") === 0);
	assertTrue("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
	assertTrue("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
	assertTrue("プヾ = プフ", col.compare("プヾ", "プフ") === 0);
	assertTrue("プヾ = プフ", col.compare("プヾ", "プフ") === 0);
	
	assertTrue("ヘヽ = ヘヘ", col.compare("ヘヽ", "ヘヘ") === 0);
	assertTrue("ﾍヽ = ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") === 0);
	assertTrue("ㇸヽ = ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") === 0);
	assertTrue("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
	assertTrue("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
	assertTrue("ヘヾ = ヘヘ", col.compare("ヘヾ", "ヘヘ") === 0);
	assertTrue("ﾍヾ = ﾍヘ", col.compare("ﾍヾ", "ﾍヘ") === 0);
	assertTrue("ㇸヾ = ㇸヘ", col.compare("ㇸヾ", "ㇸヘ") === 0);
	assertTrue("ベヾ = ベヘ", col.compare("ベヾ", "ベヘ") === 0);
	assertTrue("ベヾ = ベヘ", col.compare("ベヾ", "ベヘ") === 0);
	assertTrue("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
	assertTrue("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
	assertTrue("ペヾ = ペヘ", col.compare("ペヾ", "ペヘ") === 0);
	assertTrue("ペヾ = ペヘ", col.compare("ペヾ", "ペヘ") === 0);
	
	assertTrue("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
	assertTrue("ﾎヽ = ﾎホ", col.compare("ﾎヽ", "ﾎホ") === 0);
	assertTrue("ㇹヽ = ㇹホ", col.compare("ㇹヽ", "ㇹホ") === 0);
	assertTrue("ボヽ = ボホ", col.compare("ボヽ", "ボホ") === 0);
	assertTrue("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
	assertTrue("ホヾ = ホホ", col.compare("ホヾ", "ホホ") === 0);
	assertTrue("ﾎヾ = ﾎホ", col.compare("ﾎヾ", "ﾎホ") === 0);
	assertTrue("ㇹヾ = ㇹホ", col.compare("ㇹヾ", "ㇹホ") === 0);
	assertTrue("ボヾ = ボホ", col.compare("ボヾ", "ボホ") === 0);
	assertTrue("ボヾ = ボホ", col.compare("ボヾ", "ボホ") === 0);
	assertTrue("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
	assertTrue("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
	assertTrue("ポヾ = ポホ", col.compare("ポヾ", "ポホ") === 0);
	assertTrue("ポヾ = ポホ", col.compare("ポヾ", "ポホ") === 0);
	
	assertTrue("マヽ = ママ", col.compare("マヽ", "ママ") === 0);
	assertTrue("ﾏヽ = ﾏマ", col.compare("ﾏヽ", "ﾏマ") === 0);
	
	assertTrue("ミヽ = ミミ", col.compare("ミヽ", "ミミ") === 0);
	assertTrue("ﾐヽ = ﾐミ", col.compare("ﾐヽ", "ﾐミ") === 0);
	
	assertTrue("ムヽ = ムム", col.compare("ムヽ", "ムム") === 0);
	assertTrue("ﾑヽ = ﾑム", col.compare("ﾑヽ", "ﾑム") === 0);
	assertTrue("ㇺヽ = ㇺム", col.compare("ㇺヽ", "ㇺム") === 0);
	
	assertTrue("メヽ = メメ", col.compare("メヽ", "メメ") === 0);
	assertTrue("ﾒヽ = ﾒメ", col.compare("ﾒヽ", "ﾒメ") === 0);
	
	assertTrue("モヽ = モモ", col.compare("モヽ", "モモ") === 0);
	assertTrue("ﾓヽ = ﾓモ", col.compare("ﾓヽ", "ﾓモ") === 0);
	
	assertTrue("ヤヽ = ヤヤ", col.compare("ヤヽ", "ヤヤ") === 0);
	assertTrue("ﾔヽ = ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") === 0);
	assertTrue("ャヽ = ャヤ", col.compare("ャヽ", "ャヤ") === 0);
	assertTrue("ｬヽ = ｬヤ", col.compare("ｬヽ", "ｬヤ") === 0);
	
	assertTrue("ユヽ = ユユ", col.compare("ユヽ", "ユユ") === 0);
	assertTrue("ﾕヽ = ﾕユ", col.compare("ﾕヽ", "ﾕユ") === 0);
	assertTrue("ュヽ = ュユ", col.compare("ュヽ", "ュユ") === 0);
	assertTrue("ｭヽ = ｭユ", col.compare("ｭヽ", "ｭユ") === 0);
	
	assertTrue("ヨヽ = ヨヨ", col.compare("ヨヽ", "ヨヨ") === 0);
	assertTrue("ﾖヽ = ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") === 0);
	assertTrue("ョヽ = ョヨ", col.compare("ョヽ", "ョヨ") === 0);
	assertTrue("ｮヽ = ｮヨ", col.compare("ｮヽ", "ｮヨ") === 0);
	
	assertTrue("ラヽ = ララ", col.compare("ラヽ", "ララ") === 0);
	assertTrue("ﾗヽ = ﾗラ", col.compare("ﾗヽ", "ﾗラ") === 0);
	assertTrue("ㇻヽ = ㇻラ", col.compare("ㇻヽ", "ㇻラ") === 0);
	
	assertTrue("リヽ = リリ", col.compare("リヽ", "リリ") === 0);
	assertTrue("ﾘヽ = ﾘリ", col.compare("ﾘヽ", "ﾘリ") === 0);
	assertTrue("ㇼヽ = ㇼリ", col.compare("ㇼヽ", "ㇼリ") === 0);
	
	assertTrue("ルヽ = ルル", col.compare("ルヽ", "ルル") === 0);
	assertTrue("ﾙヽ = ﾙル", col.compare("ﾙヽ", "ﾙル") === 0);
	assertTrue("ㇽヽ = ㇽル", col.compare("ㇽヽ", "ㇽル") === 0);
	
	assertTrue("レヽ = レレ", col.compare("レヽ", "レレ") === 0);
	assertTrue("ﾚヽ = ﾚレ", col.compare("ﾚヽ", "ﾚレ") === 0);
	assertTrue("ㇾヽ = ㇾレ", col.compare("ㇾヽ", "ㇾレ") === 0);
	
	assertTrue("ロヽ = ロロ", col.compare("ロヽ", "ロロ") === 0);
	assertTrue("ﾛヽ = ﾛロ", col.compare("ﾛヽ", "ﾛロ") === 0);
	assertTrue("ㇿヽ = ㇿロ", col.compare("ㇿヽ", "ㇿロ") === 0);
	
	assertTrue("ワヽ = ワワ", col.compare("ワヽ", "ワワ") === 0);
	assertTrue("ﾜヽ = ﾜワ", col.compare("ﾜヽ", "ﾜワ") === 0);
	assertTrue("ヮヽ = ヮワ", col.compare("ヮヽ", "ヮワ") === 0);
	assertTrue("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
	assertTrue("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
	assertTrue("ワヾ = ワワ", col.compare("ワヾ", "ワワ") === 0);
	assertTrue("ﾜヾ = ﾜワ", col.compare("ﾜヾ", "ﾜワ") === 0);
	assertTrue("ヷヾ = ヷワ", col.compare("ヷヾ", "ヷワ") === 0);
	assertTrue("ヷヾ = ヷワ", col.compare("ヷヾ", "ヷワ") === 0);
	assertTrue("ヮヾ = ヮワ", col.compare("ヮヾ", "ヮワ") === 0);
	
	assertTrue("ヰヽ = ヰヰ", col.compare("ヰヽ", "ヰヰ") === 0);
	assertTrue("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
	assertTrue("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
	assertTrue("ヰヾ = ヰヰ", col.compare("ヰヾ", "ヰヰ") === 0);
	assertTrue("ヸヾ = ヸヰ", col.compare("ヸヾ", "ヸヰ") === 0);
	assertTrue("ヸヾ = ヸヰ", col.compare("ヸヾ", "ヸヰ") === 0);
	
	assertTrue("ヱヽ = ヱヱ", col.compare("ヱヽ", "ヱヱ") === 0);
	assertTrue("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
	assertTrue("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
	assertTrue("ヱヾ = ヱヱ", col.compare("ヱヾ", "ヱヱ") === 0);
	assertTrue("ヹヾ = ヹヱ", col.compare("ヹヾ", "ヹヱ") === 0);
	assertTrue("ヹヾ = ヹヱ", col.compare("ヹヾ", "ヹヱ") === 0);
	
	assertTrue("ヲヽ = ヲヲ", col.compare("ヲヽ", "ヲヲ") === 0);
	assertTrue("ｦヽ = ｦヲ", col.compare("ｦヽ", "ｦヲ") === 0);
	assertTrue("ヺヽ = ヺヲ", col.compare("ヺヽ", "ヺヲ") === 0);
	assertTrue("ヺヽ = ヺヲ", col.compare("ヺヽ", "ヺヲ") === 0);
	assertTrue("ヲヾ = ヲヲ", col.compare("ヲヾ", "ヲヲ") === 0);
	assertTrue("ｦヾ = ｦヲ", col.compare("ｦヾ", "ｦヲ") === 0);
	assertTrue("ヺヾ = ヺヲ", col.compare("ヺヾ", "ヺヲ") === 0);
	assertTrue("ヺヾ = ヺヲ", col.compare("ヺヾ", "ヺヲ") === 0);
	
	assertTrue("ンヽ = ンン", col.compare("ンヽ", "ンン") === 0);
	assertTrue("ﾝヽ = ﾝン", col.compare("ﾝヽ", "ﾝン") === 0);
}

function testJSCollatorKatakanaIterationMarksPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("アヽ = アア", col.compare("アヽ", "アア") === 0);
	assertTrue("ｱヽ = ｱア", col.compare("ｱヽ", "ｱア") === 0);
	assertTrue("ァヽ = ァア", col.compare("ァヽ", "ァア") === 0);
	assertTrue("ｧヽ = ｧア", col.compare("ｧヽ", "ｧア") === 0);
	assertTrue("イヽ = イイ", col.compare("イヽ", "イイ") === 0);
	assertTrue("ｲヽ = ｲイ", col.compare("ｲヽ", "ｲイ") === 0);
	assertTrue("ィヽ = ィイ", col.compare("ィヽ", "ィイ") === 0);
	assertTrue("ｨヽ = ｨイ", col.compare("ｨヽ", "ｨイ") === 0);
	
	assertTrue("ウヽ = ウウ", col.compare("ウヽ", "ウウ") === 0);
	assertTrue("ｳヽ = ｳウ", col.compare("ｳヽ", "ｳウ") === 0);
	assertTrue("ゥヽ = ゥウ", col.compare("ゥヽ", "ゥウ") === 0);
	assertTrue("ｩヽ = ｩウ", col.compare("ｩヽ", "ｩウ") === 0);
	assertTrue("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
	assertTrue("ヴヽ = ヴウ", col.compare("ヴヽ", "ヴウ") === 0);
	assertTrue("ウヾ = ウウ", col.compare("ウヾ", "ウウ") === 0);
	assertTrue("ｳヾ = ｳウ", col.compare("ｳヾ", "ｳウ") === 0);
	assertTrue("ゥヾ = ゥウ", col.compare("ゥヾ", "ゥウ") === 0);
	assertTrue("ｩヾ = ｩウ", col.compare("ｩヾ", "ｩウ") === 0);
	assertTrue("ヴヾ = ヴウ", col.compare("ヴヾ", "ヴウ") === 0);
	assertTrue("ヴヾ = ヴウ", col.compare("ヴヾ", "ヴウ") === 0);
	
	assertTrue("エヽ = エエ", col.compare("エヽ", "エエ") === 0);
	assertTrue("ｴヽ = ｴエ", col.compare("ｴヽ", "ｴエ") === 0);
	assertTrue("ェヽ = ェエ", col.compare("ェヽ", "ェエ") === 0);
	assertTrue("ｪヽ = ｪエ", col.compare("ｪヽ", "ｪエ") === 0);
	
	assertTrue("オヽ = オオ", col.compare("オヽ", "オオ") === 0);
	assertTrue("ｵヽ = ｵオ", col.compare("ｵヽ", "ｵオ") === 0);
	assertTrue("ォヽ = ォオ", col.compare("ォヽ", "ォオ") === 0);
	assertTrue("ｫヽ = ｫオ", col.compare("ｫヽ", "ｫオ") === 0);
	
	assertTrue("カヽ = カカ", col.compare("カヽ", "カカ") === 0);
	assertTrue("ｶヽ = ｶカ", col.compare("ｶヽ", "ｶカ") === 0);
	assertTrue("ヵヽ = ヵカ", col.compare("ヵヽ", "ヵカ") === 0);
	assertTrue("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
	assertTrue("ガヽ = ガカ", col.compare("ガヽ", "ガカ") === 0);
	
	assertTrue("キヽ = キキ", col.compare("キヽ", "キキ") === 0);
	assertTrue("ｷヽ = ｷキ", col.compare("ｷヽ", "ｷキ") === 0);
	assertTrue("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
	assertTrue("ギヽ = ギキ", col.compare("ギヽ", "ギキ") === 0);
	assertTrue("キヾ = キキ", col.compare("キヾ", "キキ") === 0);
	assertTrue("ｷヾ = ｷキ", col.compare("ｷヾ", "ｷキ") === 0);
	assertTrue("ギヾ = ギキ", col.compare("ギヾ", "ギキ") === 0);
	assertTrue("ギヾ = ギキ", col.compare("ギヾ", "ギキ") === 0);

	assertTrue("クヽ = クク", col.compare("クヽ", "クク") === 0);
	assertTrue("ｸヽ = ｸク", col.compare("ｸヽ", "ｸク") === 0);
	assertTrue("ㇰヽ = ㇰク", col.compare("ㇰヽ", "ㇰク") === 0);
	assertTrue("グヽ = グク", col.compare("グヽ", "グク") === 0);
	assertTrue("グヽ = グク", col.compare("グヽ", "グク") === 0);
	assertTrue("クヾ = クク", col.compare("クヾ", "クク") === 0);
	assertTrue("ｸヾ = ｸク", col.compare("ｸヾ", "ｸク") === 0);
	assertTrue("ㇰヾ = ㇰク", col.compare("ㇰヾ", "ㇰク") === 0);
	assertTrue("グヾ = グク", col.compare("グヾ", "グク") === 0);
	assertTrue("グヾ = グク", col.compare("グヾ", "グク") === 0);
	
	assertTrue("ケヽ = ケケ", col.compare("ケヽ", "ケケ") === 0);
	assertTrue("ｹヽ = ｹケ", col.compare("ｹヽ", "ｹケ") === 0);
	assertTrue("ヶヽ = ヶケ", col.compare("ヶヽ", "ヶケ") === 0);
	assertTrue("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
	assertTrue("ゲヽ = ゲケ", col.compare("ゲヽ", "ゲケ") === 0);
	
	assertTrue("コヽ = ココ", col.compare("コヽ", "ココ") === 0);
	assertTrue("ｺヽ = ｺコ", col.compare("ｺヽ", "ｺコ") === 0);
	assertTrue("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
	assertTrue("ゴヽ = ゴコ", col.compare("ゴヽ", "ゴコ") === 0);
	assertTrue("コヾ = ココ", col.compare("コヾ", "ココ") === 0);
	assertTrue("ｺヾ = ｺコ", col.compare("ｺヾ", "ｺコ") === 0);
	assertTrue("ゴヾ = ゴコ", col.compare("ゴヾ", "ゴコ") === 0);
	assertTrue("ゴヾ = ゴコ", col.compare("ゴヾ", "ゴコ") === 0);
	
	assertTrue("サヽ = ササ", col.compare("サヽ", "ササ") === 0);
	assertTrue("ｻヽ = ｻサ", col.compare("ｻヽ", "ｻサ") === 0);
	assertTrue("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
	assertTrue("ザヽ = ザサ", col.compare("ザヽ", "ザサ") === 0);
	assertTrue("サヾ = ササ", col.compare("サヾ", "ササ") === 0);
	assertTrue("ｻヾ = ｻサ", col.compare("ｻヾ", "ｻサ") === 0);
	assertTrue("ザヾ = ザサ", col.compare("ザヾ", "ザサ") === 0);
	assertTrue("ザヾ = ザサ", col.compare("ザヾ", "ザサ") === 0);

	assertTrue("シヽ = シシ", col.compare("シヽ", "シシ") === 0);
	assertTrue("ｼヽ = ｼシ", col.compare("ｼヽ", "ｼシ") === 0);
	assertTrue("ㇱヽ = ㇱシ", col.compare("ㇱヽ", "ㇱシ") === 0);
	assertTrue("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
	assertTrue("ジヽ = ジシ", col.compare("ジヽ", "ジシ") === 0);
	assertTrue("シヾ = シシ", col.compare("シヾ", "シシ") === 0);
	assertTrue("ｼヾ = ｼシ", col.compare("ｼヾ", "ｼシ") === 0);
	assertTrue("ㇱヾ = ㇱシ", col.compare("ㇱヾ", "ㇱシ") === 0);
	assertTrue("ジヾ = ジシ", col.compare("ジヾ", "ジシ") === 0);
	assertTrue("ジヾ = ジシ", col.compare("ジヾ", "ジシ") === 0);

	assertTrue("スヽ = スス", col.compare("スヽ", "スス") === 0);
	assertTrue("ｽヽ = ｽス", col.compare("ｽヽ", "ｽス") === 0);
	assertTrue("ㇲヽ = ㇲス", col.compare("ㇲヽ", "ㇲス") === 0);
	assertTrue("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
	assertTrue("ズヽ = ズス", col.compare("ズヽ", "ズス") === 0);
	assertTrue("スヾ = スス", col.compare("スヾ", "スス") === 0);
	assertTrue("ｽヾ = ｽス", col.compare("ｽヾ", "ｽス") === 0);
	assertTrue("ㇲヾ = ㇲス", col.compare("ㇲヾ", "ㇲス") === 0);
	assertTrue("ズヾ = ズス", col.compare("ズヾ", "ズス") === 0);
	assertTrue("ズヾ = ズス", col.compare("ズヾ", "ズス") === 0);

	assertTrue("セヽ = セセ", col.compare("セヽ", "セセ") === 0);
	assertTrue("ｾヽ = ｾセ", col.compare("ｾヽ", "ｾセ") === 0);
	assertTrue("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
	assertTrue("ゼヽ = ゼセ", col.compare("ゼヽ", "ゼセ") === 0);
	assertTrue("セヾ = セセ", col.compare("セヾ", "セセ") === 0);
	assertTrue("ｾヾ = ｾセ", col.compare("ｾヾ", "ｾセ") === 0);
	assertTrue("ゼヾ = ゼセ", col.compare("ゼヾ", "ゼセ") === 0);
	assertTrue("ゼヾ = ゼセ", col.compare("ゼヾ", "ゼセ") === 0);

	assertTrue("ソヽ = ソソ", col.compare("ソヽ", "ソソ") === 0);
	assertTrue("ｿヽ = ｿソ", col.compare("ｿヽ", "ｿソ") === 0);
	assertTrue("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
	assertTrue("ゾヽ = ゾソ", col.compare("ゾヽ", "ゾソ") === 0);
	assertTrue("ソヾ = ソソ", col.compare("ソヾ", "ソソ") === 0);
	assertTrue("ｿヾ = ｿソ", col.compare("ｿヾ", "ｿソ") === 0);
	assertTrue("ゾヾ = ゾソ", col.compare("ゾヾ", "ゾソ") === 0);
	assertTrue("ゾヾ = ゾソ", col.compare("ゾヾ", "ゾソ") === 0);

	assertTrue("タヽ = タタ", col.compare("タヽ", "タタ") === 0);
	assertTrue("ﾀヽ = ﾀタ", col.compare("ﾀヽ", "ﾀタ") === 0);
	assertTrue("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
	assertTrue("ダヽ = ダタ", col.compare("ダヽ", "ダタ") === 0);
	assertTrue("タヾ = タタ", col.compare("タヾ", "タタ") === 0);
	assertTrue("ﾀヾ = ﾀタ", col.compare("ﾀヾ", "ﾀタ") === 0);
	assertTrue("ダヾ = ダタ", col.compare("ダヾ", "ダタ") === 0);
	assertTrue("ダヾ = ダタ", col.compare("ダヾ", "ダタ") === 0);

	assertTrue("チヽ = チチ", col.compare("チヽ", "チチ") === 0);
	assertTrue("ﾁヽ = ﾁチ", col.compare("ﾁヽ", "ﾁチ") === 0);
	assertTrue("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
	assertTrue("ヂヽ = ヂチ", col.compare("ヂヽ", "ヂチ") === 0);
	assertTrue("チヾ = チチ", col.compare("チヾ", "チチ") === 0);
	assertTrue("ﾁヾ = ﾁチ", col.compare("ﾁヾ", "ﾁチ") === 0);
	assertTrue("ヂヾ = ヂチ", col.compare("ヂヾ", "ヂチ") === 0);
	assertTrue("ヂヾ = ヂチ", col.compare("ヂヾ", "ヂチ") === 0);

	assertTrue("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
	assertTrue("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
	assertTrue("ッヽ = ッツ", col.compare("ッヽ", "ッツ") === 0);
	assertTrue("ｯヽ = ｯツ", col.compare("ｯヽ", "ｯツ") === 0);
	assertTrue("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
	assertTrue("ヅヽ = ヅツ", col.compare("ヅヽ", "ヅツ") === 0);
	assertTrue("ツヾ = ツツ", col.compare("ツヾ", "ツツ") === 0);
	assertTrue("ﾂヾ = ﾂツ", col.compare("ﾂヾ", "ﾂツ") === 0);
	assertTrue("ヅヾ = ヅツ", col.compare("ヅヾ", "ヅツ") === 0);
	assertTrue("ヅヾ = ヅツ", col.compare("ヅヾ", "ヅツ") === 0);
	assertTrue("ツヽ = ツツ", col.compare("ツヽ", "ツツ") === 0);
	assertTrue("ﾂヽ = ﾂツ", col.compare("ﾂヽ", "ﾂツ") === 0);
	assertTrue("ッヾ = ッツ", col.compare("ッヾ", "ッツ") === 0);
	assertTrue("ｯヾ = ｯツ", col.compare("ｯヾ", "ｯツ") === 0);
	assertTrue("ツヾ = ツツ", col.compare("ツヾ", "ツツ") === 0);
	assertTrue("ﾂヾ = ﾂツ", col.compare("ﾂヾ", "ﾂツ") === 0);

	assertTrue("テヽ = テテ", col.compare("テヽ", "テテ") === 0);
	assertTrue("ﾃヽ = ﾃテ", col.compare("ﾃヽ", "ﾃテ") === 0);
	assertTrue("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
	assertTrue("デヽ = デテ", col.compare("デヽ", "デテ") === 0);
	assertTrue("テヾ = テテ", col.compare("テヾ", "テテ") === 0);
	assertTrue("ﾃヾ = ﾃテ", col.compare("ﾃヾ", "ﾃテ") === 0);
	assertTrue("デヾ = デテ", col.compare("デヾ", "デテ") === 0);
	assertTrue("デヾ = デテ", col.compare("デヾ", "デテ") === 0);

	assertTrue("トヽ = トト", col.compare("トヽ", "トト") === 0);
	assertTrue("ﾄヽ = ﾄト", col.compare("ﾄヽ", "ﾄト") === 0);
	assertTrue("ㇳヽ = ㇳト", col.compare("ㇳヽ", "ㇳト") === 0);
	assertTrue("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
	assertTrue("ドヽ = ドト", col.compare("ドヽ", "ドト") === 0);
	assertTrue("トヾ = トト", col.compare("トヾ", "トト") === 0);
	assertTrue("ﾄヾ = ﾄト", col.compare("ﾄヾ", "ﾄト") === 0);
	assertTrue("ㇳヾ = ㇳト", col.compare("ㇳヾ", "ㇳト") === 0);
	assertTrue("ドヾ = ドト", col.compare("ドヾ", "ドト") === 0);
	assertTrue("ドヾ = ドト", col.compare("ドヾ", "ドト") === 0);

	assertTrue("ナヽ = ナナ", col.compare("ナヽ", "ナナ") === 0);
	assertTrue("ﾅヽ = ﾅナ", col.compare("ﾅヽ", "ﾅナ") === 0);

	assertTrue("ニヽ = ニニ", col.compare("ニヽ", "ニニ") === 0);
	assertTrue("ﾆヽ = ﾆニ", col.compare("ﾆヽ", "ﾆニ") === 0);

	assertTrue("ヌヽ = ヌヌ", col.compare("ヌヽ", "ヌヌ") === 0);
	assertTrue("ﾇヽ = ﾇヌ", col.compare("ﾇヽ", "ﾇヌ") === 0);
	assertTrue("ㇴヽ = ㇴヌ", col.compare("ㇴヽ", "ㇴヌ") === 0);
	
	assertTrue("ネヽ = ネネ", col.compare("ネヽ", "ネネ") === 0);
	assertTrue("ﾈヽ = ﾈネ", col.compare("ﾈヽ", "ﾈネ") === 0);
	
	assertTrue("ノヽ = ノノ", col.compare("ノヽ", "ノノ") === 0);
	assertTrue("ﾉヽ = ﾉノ", col.compare("ﾉヽ", "ﾉノ") === 0);
	
	assertTrue("ハヽ = ハハ", col.compare("ハヽ", "ハハ") === 0);
	assertTrue("ﾊヽ = ﾊハ", col.compare("ﾊヽ", "ﾊハ") === 0);
	assertTrue("ㇵヽ = ㇵハ", col.compare("ㇵヽ", "ㇵハ") === 0);
	assertTrue("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
	assertTrue("バヽ = バハ", col.compare("バヽ", "バハ") === 0);
	assertTrue("ハヾ = ハハ", col.compare("ハヾ", "ハハ") === 0);
	assertTrue("ﾊヾ = ﾊハ", col.compare("ﾊヾ", "ﾊハ") === 0);
	assertTrue("ㇵヾ = ㇵハ", col.compare("ㇵヾ", "ㇵハ") === 0);
	assertTrue("バヾ = バハ", col.compare("バヾ", "バハ") === 0);
	assertTrue("バヾ = バハ", col.compare("バヾ", "バハ") === 0);
	assertTrue("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
	assertTrue("パヽ = パハ", col.compare("パヽ", "パハ") === 0);
	assertTrue("パヾ = パハ", col.compare("パヾ", "パハ") === 0);
	assertTrue("パヾ = パハ", col.compare("パヾ", "パハ") === 0);
	
	assertTrue("ヒヽ = ヒヒ", col.compare("ヒヽ", "ヒヒ") === 0);
	assertTrue("ﾋヽ = ﾋヒ", col.compare("ﾋヽ", "ﾋヒ") === 0);
	assertTrue("ㇶヽ = ㇶヒ", col.compare("ㇶヽ", "ㇶヒ") === 0);
	assertTrue("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
	assertTrue("ビヽ = ビヒ", col.compare("ビヽ", "ビヒ") === 0);
	assertTrue("ヒヾ = ヒヒ", col.compare("ヒヾ", "ヒヒ") === 0);
	assertTrue("ﾋヾ = ﾋヒ", col.compare("ﾋヾ", "ﾋヒ") === 0);
	assertTrue("ㇶヾ = ㇶヒ", col.compare("ㇶヾ", "ㇶヒ") === 0);
	assertTrue("ビヾ = ビヒ", col.compare("ビヾ", "ビヒ") === 0);
	assertTrue("ビヾ = ビヒ", col.compare("ビヾ", "ビヒ") === 0);
	assertTrue("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
	assertTrue("ピヽ = ピヒ", col.compare("ピヽ", "ピヒ") === 0);
	assertTrue("ピヾ = ピヒ", col.compare("ピヾ", "ピヒ") === 0);
	assertTrue("ピヾ = ピヒ", col.compare("ピヾ", "ピヒ") === 0);
	
	assertTrue("フヽ = フフ", col.compare("フヽ", "フフ") === 0);
	assertTrue("ﾌヽ = ﾌフ", col.compare("ﾌヽ", "ﾌフ") === 0);
	assertTrue("ㇷヽ = ㇷフ", col.compare("ㇷヽ", "ㇷフ") === 0);
	assertTrue("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
	assertTrue("ブヽ = ブフ", col.compare("ブヽ", "ブフ") === 0);
	assertTrue("フヾ = フフ", col.compare("フヾ", "フフ") === 0);
	assertTrue("ﾌヾ = ﾌフ", col.compare("ﾌヾ", "ﾌフ") === 0);
	assertTrue("ㇷヾ = ㇷフ", col.compare("ㇷヾ", "ㇷフ") === 0);
	assertTrue("ブヾ = ブフ", col.compare("ブヾ", "ブフ") === 0);
	assertTrue("ブヾ = ブフ", col.compare("ブヾ", "ブフ") === 0);
	assertTrue("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
	assertTrue("プヽ = プフ", col.compare("プヽ", "プフ") === 0);
	assertTrue("プヾ = プフ", col.compare("プヾ", "プフ") === 0);
	assertTrue("プヾ = プフ", col.compare("プヾ", "プフ") === 0);
	
	assertTrue("ヘヽ = ヘヘ", col.compare("ヘヽ", "ヘヘ") === 0);
	assertTrue("ﾍヽ = ﾍヘ", col.compare("ﾍヽ", "ﾍヘ") === 0);
	assertTrue("ㇸヽ = ㇸヘ", col.compare("ㇸヽ", "ㇸヘ") === 0);
	assertTrue("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
	assertTrue("ベヽ = ベヘ", col.compare("ベヽ", "ベヘ") === 0);
	assertTrue("ヘヾ = ヘヘ", col.compare("ヘヾ", "ヘヘ") === 0);
	assertTrue("ﾍヾ = ﾍヘ", col.compare("ﾍヾ", "ﾍヘ") === 0);
	assertTrue("ㇸヾ = ㇸヘ", col.compare("ㇸヾ", "ㇸヘ") === 0);
	assertTrue("ベヾ = ベヘ", col.compare("ベヾ", "ベヘ") === 0);
	assertTrue("ベヾ = ベヘ", col.compare("ベヾ", "ベヘ") === 0);
	assertTrue("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
	assertTrue("ペヽ = ペヘ", col.compare("ペヽ", "ペヘ") === 0);
	assertTrue("ペヾ = ペヘ", col.compare("ペヾ", "ペヘ") === 0);
	assertTrue("ペヾ = ペヘ", col.compare("ペヾ", "ペヘ") === 0);
	
	assertTrue("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
	assertTrue("ﾎヽ = ﾎホ", col.compare("ﾎヽ", "ﾎホ") === 0);
	assertTrue("ㇹヽ = ㇹホ", col.compare("ㇹヽ", "ㇹホ") === 0);
	assertTrue("ボヽ = ボホ", col.compare("ボヽ", "ボホ") === 0);
	assertTrue("ホヽ = ホホ", col.compare("ホヽ", "ホホ") === 0);
	assertTrue("ホヾ = ホホ", col.compare("ホヾ", "ホホ") === 0);
	assertTrue("ﾎヾ = ﾎホ", col.compare("ﾎヾ", "ﾎホ") === 0);
	assertTrue("ㇹヾ = ㇹホ", col.compare("ㇹヾ", "ㇹホ") === 0);
	assertTrue("ボヾ = ボホ", col.compare("ボヾ", "ボホ") === 0);
	assertTrue("ボヾ = ボホ", col.compare("ボヾ", "ボホ") === 0);
	assertTrue("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
	assertTrue("ポヽ = ポホ", col.compare("ポヽ", "ポホ") === 0);
	assertTrue("ポヾ = ポホ", col.compare("ポヾ", "ポホ") === 0);
	assertTrue("ポヾ = ポホ", col.compare("ポヾ", "ポホ") === 0);
	
	assertTrue("マヽ = ママ", col.compare("マヽ", "ママ") === 0);
	assertTrue("ﾏヽ = ﾏマ", col.compare("ﾏヽ", "ﾏマ") === 0);
	
	assertTrue("ミヽ = ミミ", col.compare("ミヽ", "ミミ") === 0);
	assertTrue("ﾐヽ = ﾐミ", col.compare("ﾐヽ", "ﾐミ") === 0);
	
	assertTrue("ムヽ = ムム", col.compare("ムヽ", "ムム") === 0);
	assertTrue("ﾑヽ = ﾑム", col.compare("ﾑヽ", "ﾑム") === 0);
	assertTrue("ㇺヽ = ㇺム", col.compare("ㇺヽ", "ㇺム") === 0);
	
	assertTrue("メヽ = メメ", col.compare("メヽ", "メメ") === 0);
	assertTrue("ﾒヽ = ﾒメ", col.compare("ﾒヽ", "ﾒメ") === 0);
	
	assertTrue("モヽ = モモ", col.compare("モヽ", "モモ") === 0);
	assertTrue("ﾓヽ = ﾓモ", col.compare("ﾓヽ", "ﾓモ") === 0);
	
	assertTrue("ヤヽ = ヤヤ", col.compare("ヤヽ", "ヤヤ") === 0);
	assertTrue("ﾔヽ = ﾔヤ", col.compare("ﾔヽ", "ﾔヤ") === 0);
	assertTrue("ャヽ = ャヤ", col.compare("ャヽ", "ャヤ") === 0);
	assertTrue("ｬヽ = ｬヤ", col.compare("ｬヽ", "ｬヤ") === 0);
	
	assertTrue("ユヽ = ユユ", col.compare("ユヽ", "ユユ") === 0);
	assertTrue("ﾕヽ = ﾕユ", col.compare("ﾕヽ", "ﾕユ") === 0);
	assertTrue("ュヽ = ュユ", col.compare("ュヽ", "ュユ") === 0);
	assertTrue("ｭヽ = ｭユ", col.compare("ｭヽ", "ｭユ") === 0);
	
	assertTrue("ヨヽ = ヨヨ", col.compare("ヨヽ", "ヨヨ") === 0);
	assertTrue("ﾖヽ = ﾖヨ", col.compare("ﾖヽ", "ﾖヨ") === 0);
	assertTrue("ョヽ = ョヨ", col.compare("ョヽ", "ョヨ") === 0);
	assertTrue("ｮヽ = ｮヨ", col.compare("ｮヽ", "ｮヨ") === 0);
	
	assertTrue("ラヽ = ララ", col.compare("ラヽ", "ララ") === 0);
	assertTrue("ﾗヽ = ﾗラ", col.compare("ﾗヽ", "ﾗラ") === 0);
	assertTrue("ㇻヽ = ㇻラ", col.compare("ㇻヽ", "ㇻラ") === 0);
	
	assertTrue("リヽ = リリ", col.compare("リヽ", "リリ") === 0);
	assertTrue("ﾘヽ = ﾘリ", col.compare("ﾘヽ", "ﾘリ") === 0);
	assertTrue("ㇼヽ = ㇼリ", col.compare("ㇼヽ", "ㇼリ") === 0);
	
	assertTrue("ルヽ = ルル", col.compare("ルヽ", "ルル") === 0);
	assertTrue("ﾙヽ = ﾙル", col.compare("ﾙヽ", "ﾙル") === 0);
	assertTrue("ㇽヽ = ㇽル", col.compare("ㇽヽ", "ㇽル") === 0);
	
	assertTrue("レヽ = レレ", col.compare("レヽ", "レレ") === 0);
	assertTrue("ﾚヽ = ﾚレ", col.compare("ﾚヽ", "ﾚレ") === 0);
	assertTrue("ㇾヽ = ㇾレ", col.compare("ㇾヽ", "ㇾレ") === 0);
	
	assertTrue("ロヽ = ロロ", col.compare("ロヽ", "ロロ") === 0);
	assertTrue("ﾛヽ = ﾛロ", col.compare("ﾛヽ", "ﾛロ") === 0);
	assertTrue("ㇿヽ = ㇿロ", col.compare("ㇿヽ", "ㇿロ") === 0);
	
	assertTrue("ワヽ = ワワ", col.compare("ワヽ", "ワワ") === 0);
	assertTrue("ﾜヽ = ﾜワ", col.compare("ﾜヽ", "ﾜワ") === 0);
	assertTrue("ヮヽ = ヮワ", col.compare("ヮヽ", "ヮワ") === 0);
	assertTrue("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
	assertTrue("ヷヽ = ヷワ", col.compare("ヷヽ", "ヷワ") === 0);
	assertTrue("ワヾ = ワワ", col.compare("ワヾ", "ワワ") === 0);
	assertTrue("ﾜヾ = ﾜワ", col.compare("ﾜヾ", "ﾜワ") === 0);
	assertTrue("ヷヾ = ヷワ", col.compare("ヷヾ", "ヷワ") === 0);
	assertTrue("ヷヾ = ヷワ", col.compare("ヷヾ", "ヷワ") === 0);
	assertTrue("ヮヾ = ヮワ", col.compare("ヮヾ", "ヮワ") === 0);
	
	assertTrue("ヰヽ = ヰヰ", col.compare("ヰヽ", "ヰヰ") === 0);
	assertTrue("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
	assertTrue("ヸヽ = ヸヰ", col.compare("ヸヽ", "ヸヰ") === 0);
	assertTrue("ヰヾ = ヰヰ", col.compare("ヰヾ", "ヰヰ") === 0);
	assertTrue("ヸヾ = ヸヰ", col.compare("ヸヾ", "ヸヰ") === 0);
	assertTrue("ヸヾ = ヸヰ", col.compare("ヸヾ", "ヸヰ") === 0);
	
	assertTrue("ヱヽ = ヱヱ", col.compare("ヱヽ", "ヱヱ") === 0);
	assertTrue("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
	assertTrue("ヹヽ = ヹヱ", col.compare("ヹヽ", "ヹヱ") === 0);
	assertTrue("ヱヾ = ヱヱ", col.compare("ヱヾ", "ヱヱ") === 0);
	assertTrue("ヹヾ = ヹヱ", col.compare("ヹヾ", "ヹヱ") === 0);
	assertTrue("ヹヾ = ヹヱ", col.compare("ヹヾ", "ヹヱ") === 0);
	
	assertTrue("ヲヽ = ヲヲ", col.compare("ヲヽ", "ヲヲ") === 0);
	assertTrue("ｦヽ = ｦヲ", col.compare("ｦヽ", "ｦヲ") === 0);
	assertTrue("ヺヽ = ヺヲ", col.compare("ヺヽ", "ヺヲ") === 0);
	assertTrue("ヺヽ = ヺヲ", col.compare("ヺヽ", "ヺヲ") === 0);
	assertTrue("ヲヾ = ヲヲ", col.compare("ヲヾ", "ヲヲ") === 0);
	assertTrue("ｦヾ = ｦヲ", col.compare("ｦヾ", "ｦヲ") === 0);
	assertTrue("ヺヾ = ヺヲ", col.compare("ヺヾ", "ヺヲ") === 0);
	assertTrue("ヺヾ = ヺヲ", col.compare("ヺヾ", "ヺヲ") === 0);
	
	assertTrue("ンヽ = ンン", col.compare("ンヽ", "ンン") === 0);
	assertTrue("ﾝヽ = ﾝン", col.compare("ﾝヽ", "ﾝン") === 0);
}

function testJSCollatorHiraBeforeKataQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("あ < ア", col.compare("あ", "ア") < 0);
	assertTrue("い < イ", col.compare("い", "イ") < 0);
	assertTrue("う < ウ", col.compare("う", "ウ") < 0);
	assertTrue("え < エ", col.compare("え", "エ") < 0);
	assertTrue("お < オ", col.compare("お", "オ") < 0);
	assertTrue("か < カ", col.compare("か", "カ") < 0);
	assertTrue("が < ガ", col.compare("が", "ガ") < 0);
	assertTrue("が < ガ", col.compare("が", "ガ") < 0);
	assertTrue("き < キ", col.compare("き", "キ") < 0);
	assertTrue("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
	assertTrue("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
	assertTrue("く < ク", col.compare("く", "ク") < 0);
	assertTrue("ぐ < グ", col.compare("ぐ", "グ") < 0);
	assertTrue("ぐ < グ", col.compare("ぐ", "グ") < 0);
	assertTrue("け < ケ", col.compare("け", "ケ") < 0);
	assertTrue("げ < ゲ", col.compare("げ", "ゲ") < 0);
	assertTrue("げ < ゲ", col.compare("げ", "ゲ") < 0);
	assertTrue("こ < コ", col.compare("こ", "コ") < 0);
	assertTrue("ご < ゴ", col.compare("ご", "ゴ") < 0);
	assertTrue("ご < ゴ", col.compare("ご", "ゴ") < 0);
	assertTrue("さ < サ", col.compare("さ", "サ") < 0);
	assertTrue("ざ < ザ", col.compare("ざ", "ザ") < 0);
	assertTrue("ざ < ザ", col.compare("ざ", "ザ") < 0);
	assertTrue("し < シ", col.compare("し", "シ") < 0);
	assertTrue("じ < ジ", col.compare("じ", "ジ") < 0);
	assertTrue("じ < ジ", col.compare("じ", "ジ") < 0);
	assertTrue("す < ス", col.compare("す", "ス") < 0);
	assertTrue("ず < ズ", col.compare("ず", "ズ") < 0);
	assertTrue("ず < ズ", col.compare("ず", "ズ") < 0);
	assertTrue("せ < セ", col.compare("せ", "セ") < 0);
	assertTrue("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
	assertTrue("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
	assertTrue("そ < ソ", col.compare("そ", "ソ") < 0);
	assertTrue("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
	assertTrue("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
	assertTrue("た < タ", col.compare("た", "タ") < 0);
	assertTrue("だ < ダ", col.compare("だ", "ダ") < 0);
	assertTrue("だ < ダ", col.compare("だ", "ダ") < 0);
	assertTrue("ち < チ", col.compare("ち", "チ") < 0);
	assertTrue("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
	assertTrue("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
	assertTrue("つ < ツ", col.compare("つ", "ツ") < 0);
	assertTrue("づ < ヅ", col.compare("づ", "ヅ") < 0);
	assertTrue("づ < ヅ", col.compare("づ", "ヅ") < 0);
	assertTrue("て < テ", col.compare("て", "テ") < 0);
	assertTrue("で < デ", col.compare("で", "デ") < 0);
	assertTrue("で < デ", col.compare("で", "デ") < 0);
	assertTrue("と < ト", col.compare("と", "ト") < 0);
	assertTrue("ど < ド", col.compare("ど", "ド") < 0);
	assertTrue("ど < ド", col.compare("ど", "ド") < 0);
	assertTrue("な < ナ", col.compare("な", "ナ") < 0);
	assertTrue("に < ニ", col.compare("に", "ニ") < 0);
	assertTrue("ぬ < ヌ", col.compare("ぬ", "ヌ") < 0);
	assertTrue("ね < ネ", col.compare("ね", "ネ") < 0);
	assertTrue("の < ノ", col.compare("の", "ノ") < 0);
	assertTrue("は < ハ", col.compare("は", "ハ") < 0);
	assertTrue("ば < バ", col.compare("ば", "バ") < 0);
	assertTrue("ば < バ", col.compare("ば", "バ") < 0);
	assertTrue("ぱ < パ", col.compare("ぱ", "パ") < 0);
	assertTrue("ぱ < パ", col.compare("ぱ", "パ") < 0);
	assertTrue("ひ < ヒ", col.compare("ひ", "ヒ") < 0);
	assertTrue("び < ビ", col.compare("び", "ビ") < 0);
	assertTrue("び < ビ", col.compare("び", "ビ") < 0);
	assertTrue("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
	assertTrue("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
	assertTrue("ふ < フ", col.compare("ふ", "フ") < 0);
	assertTrue("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
	assertTrue("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
	assertTrue("ぷ < プ", col.compare("ぷ", "プ") < 0);
	assertTrue("ぷ < プ", col.compare("ぷ", "プ") < 0);
	assertTrue("へ < ヘ", col.compare("へ", "ヘ") < 0);
	assertTrue("べ < ベ", col.compare("べ", "ベ") < 0);
	assertTrue("べ < ベ", col.compare("べ", "ベ") < 0);
	assertTrue("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
	assertTrue("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
	assertTrue("ほ < ホ", col.compare("ほ", "ホ") < 0);
	assertTrue("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
	assertTrue("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
	assertTrue("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
	assertTrue("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
	assertTrue("ま < マ", col.compare("ま", "マ") < 0);
	assertTrue("み < ミ", col.compare("み", "ミ") < 0);
	assertTrue("む < ム", col.compare("む", "ム") < 0);
	assertTrue("め < メ", col.compare("め", "メ") < 0);
	assertTrue("も < モ", col.compare("も", "モ") < 0);
	assertTrue("や < ヤ", col.compare("や", "ヤ") < 0);
	assertTrue("ゆ < ユ", col.compare("ゆ", "ユ") < 0);
	assertTrue("よ < ヨ", col.compare("よ", "ヨ") < 0);
	assertTrue("ら < ラ", col.compare("ら", "ラ") < 0);
	assertTrue("り < リ", col.compare("り", "リ") < 0);
	assertTrue("る < ル", col.compare("る", "ル") < 0);
	assertTrue("れ < レ", col.compare("れ", "レ") < 0);
	assertTrue("ろ < ロ", col.compare("ろ", "ロ") < 0);
	assertTrue("わ < ワ", col.compare("わ", "ワ") < 0);
	assertTrue("ゐ < ヰ", col.compare("ゐ", "ヰ") < 0);
	assertTrue("ゑ < ヱ", col.compare("ゑ", "ヱ") < 0);
	assertTrue("を < ヲ", col.compare("を", "ヲ") < 0);
	assertTrue("ん < ン", col.compare("ん", "ン") < 0);
}

function testJSCollatorHiraBeforeKataTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("あ < ア", col.compare("あ", "ア") < 0);
	assertTrue("い < イ", col.compare("い", "イ") < 0);
	assertTrue("う < ウ", col.compare("う", "ウ") < 0);
	assertTrue("え < エ", col.compare("え", "エ") < 0);
	assertTrue("お < オ", col.compare("お", "オ") < 0);
	assertTrue("か < カ", col.compare("か", "カ") < 0);
	assertTrue("が < ガ", col.compare("が", "ガ") < 0);
	assertTrue("が < ガ", col.compare("が", "ガ") < 0);
	assertTrue("き < キ", col.compare("き", "キ") < 0);
	assertTrue("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
	assertTrue("ぎ < ギ", col.compare("ぎ", "ギ") < 0);
	assertTrue("く < ク", col.compare("く", "ク") < 0);
	assertTrue("ぐ < グ", col.compare("ぐ", "グ") < 0);
	assertTrue("ぐ < グ", col.compare("ぐ", "グ") < 0);
	assertTrue("け < ケ", col.compare("け", "ケ") < 0);
	assertTrue("げ < ゲ", col.compare("げ", "ゲ") < 0);
	assertTrue("げ < ゲ", col.compare("げ", "ゲ") < 0);
	assertTrue("こ < コ", col.compare("こ", "コ") < 0);
	assertTrue("ご < ゴ", col.compare("ご", "ゴ") < 0);
	assertTrue("ご < ゴ", col.compare("ご", "ゴ") < 0);
	assertTrue("さ < サ", col.compare("さ", "サ") < 0);
	assertTrue("ざ < ザ", col.compare("ざ", "ザ") < 0);
	assertTrue("ざ < ザ", col.compare("ざ", "ザ") < 0);
	assertTrue("し < シ", col.compare("し", "シ") < 0);
	assertTrue("じ < ジ", col.compare("じ", "ジ") < 0);
	assertTrue("じ < ジ", col.compare("じ", "ジ") < 0);
	assertTrue("す < ス", col.compare("す", "ス") < 0);
	assertTrue("ず < ズ", col.compare("ず", "ズ") < 0);
	assertTrue("ず < ズ", col.compare("ず", "ズ") < 0);
	assertTrue("せ < セ", col.compare("せ", "セ") < 0);
	assertTrue("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
	assertTrue("ぜ < ゼ", col.compare("ぜ", "ゼ") < 0);
	assertTrue("そ < ソ", col.compare("そ", "ソ") < 0);
	assertTrue("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
	assertTrue("ぞ < ゾ", col.compare("ぞ", "ゾ") < 0);
	assertTrue("た < タ", col.compare("た", "タ") < 0);
	assertTrue("だ < ダ", col.compare("だ", "ダ") < 0);
	assertTrue("だ < ダ", col.compare("だ", "ダ") < 0);
	assertTrue("ち < チ", col.compare("ち", "チ") < 0);
	assertTrue("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
	assertTrue("ぢ < ヂ", col.compare("ぢ", "ヂ") < 0);
	assertTrue("つ < ツ", col.compare("つ", "ツ") < 0);
	assertTrue("づ < ヅ", col.compare("づ", "ヅ") < 0);
	assertTrue("づ < ヅ", col.compare("づ", "ヅ") < 0);
	assertTrue("て < テ", col.compare("て", "テ") < 0);
	assertTrue("で < デ", col.compare("で", "デ") < 0);
	assertTrue("で < デ", col.compare("で", "デ") < 0);
	assertTrue("と < ト", col.compare("と", "ト") < 0);
	assertTrue("ど < ド", col.compare("ど", "ド") < 0);
	assertTrue("ど < ド", col.compare("ど", "ド") < 0);
	assertTrue("な < ナ", col.compare("な", "ナ") < 0);
	assertTrue("に < ニ", col.compare("に", "ニ") < 0);
	assertTrue("ぬ < ヌ", col.compare("ぬ", "ヌ") < 0);
	assertTrue("ね < ネ", col.compare("ね", "ネ") < 0);
	assertTrue("の < ノ", col.compare("の", "ノ") < 0);
	assertTrue("は < ハ", col.compare("は", "ハ") < 0);
	assertTrue("ば < バ", col.compare("ば", "バ") < 0);
	assertTrue("ば < バ", col.compare("ば", "バ") < 0);
	assertTrue("ぱ < パ", col.compare("ぱ", "パ") < 0);
	assertTrue("ぱ < パ", col.compare("ぱ", "パ") < 0);
	assertTrue("ひ < ヒ", col.compare("ひ", "ヒ") < 0);
	assertTrue("び < ビ", col.compare("び", "ビ") < 0);
	assertTrue("び < ビ", col.compare("び", "ビ") < 0);
	assertTrue("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
	assertTrue("ぴ < ピ", col.compare("ぴ", "ピ") < 0);
	assertTrue("ふ < フ", col.compare("ふ", "フ") < 0);
	assertTrue("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
	assertTrue("ぶ < ブ", col.compare("ぶ", "ブ") < 0);
	assertTrue("ぷ < プ", col.compare("ぷ", "プ") < 0);
	assertTrue("ぷ < プ", col.compare("ぷ", "プ") < 0);
	assertTrue("へ < ヘ", col.compare("へ", "ヘ") < 0);
	assertTrue("べ < ベ", col.compare("べ", "ベ") < 0);
	assertTrue("べ < ベ", col.compare("べ", "ベ") < 0);
	assertTrue("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
	assertTrue("ぺ < ペ", col.compare("ぺ", "ペ") < 0);
	assertTrue("ほ < ホ", col.compare("ほ", "ホ") < 0);
	assertTrue("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
	assertTrue("ぼ < ボ", col.compare("ぼ", "ボ") < 0);
	assertTrue("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
	assertTrue("ぽ < ポ", col.compare("ぽ", "ポ") < 0);
	assertTrue("ま < マ", col.compare("ま", "マ") < 0);
	assertTrue("み < ミ", col.compare("み", "ミ") < 0);
	assertTrue("む < ム", col.compare("む", "ム") < 0);
	assertTrue("め < メ", col.compare("め", "メ") < 0);
	assertTrue("も < モ", col.compare("も", "モ") < 0);
	assertTrue("や < ヤ", col.compare("や", "ヤ") < 0);
	assertTrue("ゆ < ユ", col.compare("ゆ", "ユ") < 0);
	assertTrue("よ < ヨ", col.compare("よ", "ヨ") < 0);
	assertTrue("ら < ラ", col.compare("ら", "ラ") < 0);
	assertTrue("り < リ", col.compare("り", "リ") < 0);
	assertTrue("る < ル", col.compare("る", "ル") < 0);
	assertTrue("れ < レ", col.compare("れ", "レ") < 0);
	assertTrue("ろ < ロ", col.compare("ろ", "ロ") < 0);
	assertTrue("わ < ワ", col.compare("わ", "ワ") < 0);
	assertTrue("ゐ < ヰ", col.compare("ゐ", "ヰ") < 0);
	assertTrue("ゑ < ヱ", col.compare("ゑ", "ヱ") < 0);
	assertTrue("を < ヲ", col.compare("を", "ヲ") < 0);
	assertTrue("ん < ン", col.compare("ん", "ン") < 0);
}

function testJSCollatorHiraBeforeKataSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("あ = ア", col.compare("あ", "ア") === 0);
	assertTrue("い = イ", col.compare("い", "イ") === 0);
	assertTrue("う = ウ", col.compare("う", "ウ") === 0);
	assertTrue("え = エ", col.compare("え", "エ") === 0);
	assertTrue("お = オ", col.compare("お", "オ") === 0);
	assertTrue("か = カ", col.compare("か", "カ") === 0);
	assertTrue("が = ガ", col.compare("が", "ガ") === 0);
	assertTrue("が = ガ", col.compare("が", "ガ") === 0);
	assertTrue("き = キ", col.compare("き", "キ") === 0);
	assertTrue("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
	assertTrue("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
	assertTrue("く = ク", col.compare("く", "ク") === 0);
	assertTrue("ぐ = グ", col.compare("ぐ", "グ") === 0);
	assertTrue("ぐ = グ", col.compare("ぐ", "グ") === 0);
	assertTrue("け = ケ", col.compare("け", "ケ") === 0);
	assertTrue("げ = ゲ", col.compare("げ", "ゲ") === 0);
	assertTrue("げ = ゲ", col.compare("げ", "ゲ") === 0);
	assertTrue("こ = コ", col.compare("こ", "コ") === 0);
	assertTrue("ご = ゴ", col.compare("ご", "ゴ") === 0);
	assertTrue("ご = ゴ", col.compare("ご", "ゴ") === 0);
	assertTrue("さ = サ", col.compare("さ", "サ") === 0);
	assertTrue("ざ = ザ", col.compare("ざ", "ザ") === 0);
	assertTrue("ざ = ザ", col.compare("ざ", "ザ") === 0);
	assertTrue("し = シ", col.compare("し", "シ") === 0);
	assertTrue("じ = ジ", col.compare("じ", "ジ") === 0);
	assertTrue("じ = ジ", col.compare("じ", "ジ") === 0);
	assertTrue("す = ス", col.compare("す", "ス") === 0);
	assertTrue("ず = ズ", col.compare("ず", "ズ") === 0);
	assertTrue("ず = ズ", col.compare("ず", "ズ") === 0);
	assertTrue("せ = セ", col.compare("せ", "セ") === 0);
	assertTrue("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
	assertTrue("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
	assertTrue("そ = ソ", col.compare("そ", "ソ") === 0);
	assertTrue("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
	assertTrue("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
	assertTrue("た = タ", col.compare("た", "タ") === 0);
	assertTrue("だ = ダ", col.compare("だ", "ダ") === 0);
	assertTrue("だ = ダ", col.compare("だ", "ダ") === 0);
	assertTrue("ち = チ", col.compare("ち", "チ") === 0);
	assertTrue("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
	assertTrue("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
	assertTrue("つ = ツ", col.compare("つ", "ツ") === 0);
	assertTrue("づ = ヅ", col.compare("づ", "ヅ") === 0);
	assertTrue("づ = ヅ", col.compare("づ", "ヅ") === 0);
	assertTrue("て = テ", col.compare("て", "テ") === 0);
	assertTrue("で = デ", col.compare("で", "デ") === 0);
	assertTrue("で = デ", col.compare("で", "デ") === 0);
	assertTrue("と = ト", col.compare("と", "ト") === 0);
	assertTrue("ど = ド", col.compare("ど", "ド") === 0);
	assertTrue("ど = ド", col.compare("ど", "ド") === 0);
	assertTrue("な = ナ", col.compare("な", "ナ") === 0);
	assertTrue("に = ニ", col.compare("に", "ニ") === 0);
	assertTrue("ぬ = ヌ", col.compare("ぬ", "ヌ") === 0);
	assertTrue("ね = ネ", col.compare("ね", "ネ") === 0);
	assertTrue("の = ノ", col.compare("の", "ノ") === 0);
	assertTrue("は = ハ", col.compare("は", "ハ") === 0);
	assertTrue("ば = バ", col.compare("ば", "バ") === 0);
	assertTrue("ば = バ", col.compare("ば", "バ") === 0);
	assertTrue("ぱ = パ", col.compare("ぱ", "パ") === 0);
	assertTrue("ぱ = パ", col.compare("ぱ", "パ") === 0);
	assertTrue("ひ = ヒ", col.compare("ひ", "ヒ") === 0);
	assertTrue("び = ビ", col.compare("び", "ビ") === 0);
	assertTrue("び = ビ", col.compare("び", "ビ") === 0);
	assertTrue("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
	assertTrue("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
	assertTrue("ふ = フ", col.compare("ふ", "フ") === 0);
	assertTrue("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
	assertTrue("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
	assertTrue("ぷ = プ", col.compare("ぷ", "プ") === 0);
	assertTrue("ぷ = プ", col.compare("ぷ", "プ") === 0);
	assertTrue("へ = ヘ", col.compare("へ", "ヘ") === 0);
	assertTrue("べ = ベ", col.compare("べ", "ベ") === 0);
	assertTrue("べ = ベ", col.compare("べ", "ベ") === 0);
	assertTrue("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
	assertTrue("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
	assertTrue("ほ = ホ", col.compare("ほ", "ホ") === 0);
	assertTrue("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
	assertTrue("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
	assertTrue("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
	assertTrue("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
	assertTrue("ま = マ", col.compare("ま", "マ") === 0);
	assertTrue("み = ミ", col.compare("み", "ミ") === 0);
	assertTrue("む = ム", col.compare("む", "ム") === 0);
	assertTrue("め = メ", col.compare("め", "メ") === 0);
	assertTrue("も = モ", col.compare("も", "モ") === 0);
	assertTrue("や = ヤ", col.compare("や", "ヤ") === 0);
	assertTrue("ゆ = ユ", col.compare("ゆ", "ユ") === 0);
	assertTrue("よ = ヨ", col.compare("よ", "ヨ") === 0);
	assertTrue("ら = ラ", col.compare("ら", "ラ") === 0);
	assertTrue("り = リ", col.compare("り", "リ") === 0);
	assertTrue("る = ル", col.compare("る", "ル") === 0);
	assertTrue("れ = レ", col.compare("れ", "レ") === 0);
	assertTrue("ろ = ロ", col.compare("ろ", "ロ") === 0);
	assertTrue("わ = ワ", col.compare("わ", "ワ") === 0);
	assertTrue("ゐ = ヰ", col.compare("ゐ", "ヰ") === 0);
	assertTrue("ゑ = ヱ", col.compare("ゑ", "ヱ") === 0);
	assertTrue("を = ヲ", col.compare("を", "ヲ") === 0);
	assertTrue("ん = ン", col.compare("ん", "ン") === 0);
}

function testJSCollatorHiraBeforeKataPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("あ = ア", col.compare("あ", "ア") === 0);
	assertTrue("い = イ", col.compare("い", "イ") === 0);
	assertTrue("う = ウ", col.compare("う", "ウ") === 0);
	assertTrue("え = エ", col.compare("え", "エ") === 0);
	assertTrue("お = オ", col.compare("お", "オ") === 0);
	assertTrue("か = カ", col.compare("か", "カ") === 0);
	assertTrue("が = ガ", col.compare("が", "ガ") === 0);
	assertTrue("が = ガ", col.compare("が", "ガ") === 0);
	assertTrue("き = キ", col.compare("き", "キ") === 0);
	assertTrue("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
	assertTrue("ぎ = ギ", col.compare("ぎ", "ギ") === 0);
	assertTrue("く = ク", col.compare("く", "ク") === 0);
	assertTrue("ぐ = グ", col.compare("ぐ", "グ") === 0);
	assertTrue("ぐ = グ", col.compare("ぐ", "グ") === 0);
	assertTrue("け = ケ", col.compare("け", "ケ") === 0);
	assertTrue("げ = ゲ", col.compare("げ", "ゲ") === 0);
	assertTrue("げ = ゲ", col.compare("げ", "ゲ") === 0);
	assertTrue("こ = コ", col.compare("こ", "コ") === 0);
	assertTrue("ご = ゴ", col.compare("ご", "ゴ") === 0);
	assertTrue("ご = ゴ", col.compare("ご", "ゴ") === 0);
	assertTrue("さ = サ", col.compare("さ", "サ") === 0);
	assertTrue("ざ = ザ", col.compare("ざ", "ザ") === 0);
	assertTrue("ざ = ザ", col.compare("ざ", "ザ") === 0);
	assertTrue("し = シ", col.compare("し", "シ") === 0);
	assertTrue("じ = ジ", col.compare("じ", "ジ") === 0);
	assertTrue("じ = ジ", col.compare("じ", "ジ") === 0);
	assertTrue("す = ス", col.compare("す", "ス") === 0);
	assertTrue("ず = ズ", col.compare("ず", "ズ") === 0);
	assertTrue("ず = ズ", col.compare("ず", "ズ") === 0);
	assertTrue("せ = セ", col.compare("せ", "セ") === 0);
	assertTrue("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
	assertTrue("ぜ = ゼ", col.compare("ぜ", "ゼ") === 0);
	assertTrue("そ = ソ", col.compare("そ", "ソ") === 0);
	assertTrue("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
	assertTrue("ぞ = ゾ", col.compare("ぞ", "ゾ") === 0);
	assertTrue("た = タ", col.compare("た", "タ") === 0);
	assertTrue("だ = ダ", col.compare("だ", "ダ") === 0);
	assertTrue("だ = ダ", col.compare("だ", "ダ") === 0);
	assertTrue("ち = チ", col.compare("ち", "チ") === 0);
	assertTrue("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
	assertTrue("ぢ = ヂ", col.compare("ぢ", "ヂ") === 0);
	assertTrue("つ = ツ", col.compare("つ", "ツ") === 0);
	assertTrue("づ = ヅ", col.compare("づ", "ヅ") === 0);
	assertTrue("づ = ヅ", col.compare("づ", "ヅ") === 0);
	assertTrue("て = テ", col.compare("て", "テ") === 0);
	assertTrue("で = デ", col.compare("で", "デ") === 0);
	assertTrue("で = デ", col.compare("で", "デ") === 0);
	assertTrue("と = ト", col.compare("と", "ト") === 0);
	assertTrue("ど = ド", col.compare("ど", "ド") === 0);
	assertTrue("ど = ド", col.compare("ど", "ド") === 0);
	assertTrue("な = ナ", col.compare("な", "ナ") === 0);
	assertTrue("に = ニ", col.compare("に", "ニ") === 0);
	assertTrue("ぬ = ヌ", col.compare("ぬ", "ヌ") === 0);
	assertTrue("ね = ネ", col.compare("ね", "ネ") === 0);
	assertTrue("の = ノ", col.compare("の", "ノ") === 0);
	assertTrue("は = ハ", col.compare("は", "ハ") === 0);
	assertTrue("ば = バ", col.compare("ば", "バ") === 0);
	assertTrue("ば = バ", col.compare("ば", "バ") === 0);
	assertTrue("ぱ = パ", col.compare("ぱ", "パ") === 0);
	assertTrue("ぱ = パ", col.compare("ぱ", "パ") === 0);
	assertTrue("ひ = ヒ", col.compare("ひ", "ヒ") === 0);
	assertTrue("び = ビ", col.compare("び", "ビ") === 0);
	assertTrue("び = ビ", col.compare("び", "ビ") === 0);
	assertTrue("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
	assertTrue("ぴ = ピ", col.compare("ぴ", "ピ") === 0);
	assertTrue("ふ = フ", col.compare("ふ", "フ") === 0);
	assertTrue("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
	assertTrue("ぶ = ブ", col.compare("ぶ", "ブ") === 0);
	assertTrue("ぷ = プ", col.compare("ぷ", "プ") === 0);
	assertTrue("ぷ = プ", col.compare("ぷ", "プ") === 0);
	assertTrue("へ = ヘ", col.compare("へ", "ヘ") === 0);
	assertTrue("べ = ベ", col.compare("べ", "ベ") === 0);
	assertTrue("べ = ベ", col.compare("べ", "ベ") === 0);
	assertTrue("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
	assertTrue("ぺ = ペ", col.compare("ぺ", "ペ") === 0);
	assertTrue("ほ = ホ", col.compare("ほ", "ホ") === 0);
	assertTrue("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
	assertTrue("ぼ = ボ", col.compare("ぼ", "ボ") === 0);
	assertTrue("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
	assertTrue("ぽ = ポ", col.compare("ぽ", "ポ") === 0);
	assertTrue("ま = マ", col.compare("ま", "マ") === 0);
	assertTrue("み = ミ", col.compare("み", "ミ") === 0);
	assertTrue("む = ム", col.compare("む", "ム") === 0);
	assertTrue("め = メ", col.compare("め", "メ") === 0);
	assertTrue("も = モ", col.compare("も", "モ") === 0);
	assertTrue("や = ヤ", col.compare("や", "ヤ") === 0);
	assertTrue("ゆ = ユ", col.compare("ゆ", "ユ") === 0);
	assertTrue("よ = ヨ", col.compare("よ", "ヨ") === 0);
	assertTrue("ら = ラ", col.compare("ら", "ラ") === 0);
	assertTrue("り = リ", col.compare("り", "リ") === 0);
	assertTrue("る = ル", col.compare("る", "ル") === 0);
	assertTrue("れ = レ", col.compare("れ", "レ") === 0);
	assertTrue("ろ = ロ", col.compare("ろ", "ロ") === 0);
	assertTrue("わ = ワ", col.compare("わ", "ワ") === 0);
	assertTrue("ゐ = ヰ", col.compare("ゐ", "ヰ") === 0);
	assertTrue("ゑ = ヱ", col.compare("ゑ", "ヱ") === 0);
	assertTrue("を = ヲ", col.compare("を", "ヲ") === 0);
	assertTrue("ん = ン", col.compare("ん", "ン") === 0);
}

function testJSCollatorKanaBeforeHanzi_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "search"
	});

	assertNotUndefined(col);

	// あ い う え お か が が き ぎ ぎ く ぐ ぐ け げ げ こ ご ご さ ざ ざ し じ じ す ず ず せ ぜ ぜ そ ぞ ぞ た だ だ ち ぢ ぢ つ づ づ て で で と ど ど な に ぬ ね の は ば ば ぱ ぱ ひ び び ぴ ぴ ふ ぶ ぶ ぷ ぷ へ べ べ ぺ ぺ ほ ぼ ぼ ぽ ぽ ま み む め も や ゆ よ ら り る れ ろ わ ゐ ゑ を ん
	// ア イ ウ エ オ カ ガ ガ キ ギ ギ ク グ グ ケ ゲ ゲ コ ゴ ゴ サ ザ ザ シ ジ ジ ス ズ ズ セ ゼ ゼ ソ ゾ ゾ タ ダ ダ チ ヂ ヂ ツ ヅ ヅ テ デ デ ト ド ド ナ ニ ヌ ネ ノ ハ バ バ パ パ ヒ ビ ビ ピ ピ フ ブ ブ プ プ ヘ ベ ベ ペ ペ ホ ボ ボ ポ ポ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヰ ヱ ヲ ン
	
	assertTrue("ん <  鯵", col.compare("ん", "鯵") < 0);
	assertTrue("ン <  鯵", col.compare("ン", "鯵") < 0);
}

function testJSCollatorSortQuat_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "sort"
	});

	assertNotUndefined(col);

	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);

	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);

	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	
	assertTrue("ァー < ァア", col.compare("ァー", "ァア") < 0);
	assertTrue("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
	assertTrue("アー < アア", col.compare("アー", "アア") < 0);
	assertTrue("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
	assertTrue("カー < カア", col.compare("カー", "カア") < 0);
	assertTrue("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("サー < サア", col.compare("サー", "サア") < 0);
	assertTrue("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);

	assertTrue("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
	assertTrue("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
	assertTrue("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
	assertTrue("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ウヾ < ウウ", col.compare("ウヾ", "ウウ") < 0);
	assertTrue("ｳヾ < ｳウ", col.compare("ｳヾ", "ｳウ") < 0);
	assertTrue("ゥヾ < ゥウ", col.compare("ゥヾ", "ゥウ") < 0);
	assertTrue("ｩヾ < ｩウ", col.compare("ｩヾ", "ｩウ") < 0);
}

function testJSCollatorSortTer_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "tertiary",
		usage: "sort"
	});

	// with usage "sort" all of these should stay the same no matter the sensitivity
	
	assertNotUndefined(col);

	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);

	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);

	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	
	assertTrue("ァー < ァア", col.compare("ァー", "ァア") < 0);
	assertTrue("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
	assertTrue("アー < アア", col.compare("アー", "アア") < 0);
	assertTrue("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
	assertTrue("カー < カア", col.compare("カー", "カア") < 0);
	assertTrue("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("サー < サア", col.compare("サー", "サア") < 0);
	assertTrue("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);

	assertTrue("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
	assertTrue("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
	assertTrue("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
	assertTrue("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ウヾ < ウウ", col.compare("ウヾ", "ウウ") < 0);
	assertTrue("ｳヾ < ｳウ", col.compare("ｳヾ", "ｳウ") < 0);
	assertTrue("ゥヾ < ゥウ", col.compare("ゥヾ", "ゥウ") < 0);
	assertTrue("ｩヾ < ｩウ", col.compare("ｩヾ", "ｩウ") < 0);
}

function testJSCollatorSortSec_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "secondary",
		usage: "sort"
	});

	// with usage "sort" all of these should stay the same no matter the sensitivity
	
	assertNotUndefined(col);

	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);

	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);

	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	
	assertTrue("ァー < ァア", col.compare("ァー", "ァア") < 0);
	assertTrue("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
	assertTrue("アー < アア", col.compare("アー", "アア") < 0);
	assertTrue("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
	assertTrue("カー < カア", col.compare("カー", "カア") < 0);
	assertTrue("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("サー < サア", col.compare("サー", "サア") < 0);
	assertTrue("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);

	assertTrue("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
	assertTrue("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
	assertTrue("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
	assertTrue("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ウヾ < ウウ", col.compare("ウヾ", "ウウ") < 0);
	assertTrue("ｳヾ < ｳウ", col.compare("ｳヾ", "ｳウ") < 0);
	assertTrue("ゥヾ < ゥウ", col.compare("ゥヾ", "ゥウ") < 0);
	assertTrue("ｩヾ < ｩウ", col.compare("ｩヾ", "ｩウ") < 0);
}

function testJSCollatorSortPri_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});

	// with usage "sort" all of these should stay the same no matter the sensitivity
	
	assertNotUndefined(col);

	assertTrue("鯵 < 允", col.compare("鯵", "允") < 0);
	assertTrue("允 < 渦", col.compare("允", "渦") < 0);
	assertTrue("渦 < 頴", col.compare("渦", "頴") < 0);
	
	assertTrue("あ < い", col.compare("あ", "い") < 0);
	assertTrue("い < う", col.compare("い", "う") < 0);
	assertTrue("う < ゔ", col.compare("う", "ゔ") < 0);
	assertTrue("ゔ < ゔ", col.compare("ゔ", "ゔ") < 0);
	assertTrue("ゔ < え", col.compare("ゔ", "え") < 0);

	assertTrue("ぁー < ぁぁ", col.compare("ぁー", "ぁぁ") < 0);
	assertTrue("あー < あぁ", col.compare("あー", "あぁ") < 0);
	assertTrue("かー < かぁ", col.compare("かー", "かぁ") < 0);
	assertTrue("ゕー < ゕぁ", col.compare("ゕー", "ゕぁ") < 0);
	assertTrue("がー < がぁ", col.compare("がー", "がぁ") < 0);
	assertTrue("さー < さぁ", col.compare("さー", "さぁ") < 0);

	assertTrue("あゝ < ああ", col.compare("あゝ", "ああ") < 0);
	assertTrue("ぁゝ < ぁあ", col.compare("ぁゝ", "ぁあ") < 0);
	assertTrue("いゝ < いい", col.compare("いゝ", "いい") < 0);
	assertTrue("ぃゝ < ぃい", col.compare("ぃゝ", "ぃい") < 0);
	assertTrue("うゝ < うう", col.compare("うゝ", "うう") < 0);
	assertTrue("ぅゝ < ぅう", col.compare("ぅゝ", "ぅう") < 0);
	assertTrue("ゔゝ < ゔう", col.compare("ゔゝ", "ゔう") < 0);
	assertTrue("うゞ < うう", col.compare("うゞ", "うう") < 0);
	assertTrue("ぅゞ < ぅう", col.compare("ぅゞ", "ぅう") < 0);

	assertTrue("ア < イ", col.compare("ア", "イ") < 0);
	assertTrue("イ < ウ", col.compare("イ", "ウ") < 0);
	assertTrue("ウ < エ", col.compare("ウ", "エ") < 0);
	assertTrue("エ < オ", col.compare("エ", "オ") < 0);
	assertTrue("オ < カ", col.compare("オ", "カ") < 0);
	assertTrue("カ < ガ", col.compare("カ", "ガ") < 0);
	
	assertTrue("ァー < ァア", col.compare("ァー", "ァア") < 0);
	assertTrue("ｧー < ｧア", col.compare("ｧー", "ｧア") < 0);
	assertTrue("アー < アア", col.compare("アー", "アア") < 0);
	assertTrue("ｱー < ｱア", col.compare("ｱー", "ｱア") < 0);
	assertTrue("カー < カア", col.compare("カー", "カア") < 0);
	assertTrue("ｶー < ｶア", col.compare("ｶー", "ｶア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("ガー < ガア", col.compare("ガー", "ガア") < 0);
	assertTrue("サー < サア", col.compare("サー", "サア") < 0);
	assertTrue("ｻー < ｻア", col.compare("ｻー", "ｻア") < 0);

	assertTrue("ウヽ < ウウ", col.compare("ウヽ", "ウウ") < 0);
	assertTrue("ｳヽ < ｳウ", col.compare("ｳヽ", "ｳウ") < 0);
	assertTrue("ゥヽ < ゥウ", col.compare("ゥヽ", "ゥウ") < 0);
	assertTrue("ｩヽ < ｩウ", col.compare("ｩヽ", "ｩウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ヴヽ < ヴウ", col.compare("ヴヽ", "ヴウ") < 0);
	assertTrue("ウヾ < ウウ", col.compare("ウヾ", "ウウ") < 0);
	assertTrue("ｳヾ < ｳウ", col.compare("ｳヾ", "ｳウ") < 0);
	assertTrue("ゥヾ < ゥウ", col.compare("ゥヾ", "ゥウ") < 0);
	assertTrue("ｩヾ < ｩウ", col.compare("ｩヾ", "ｩウ") < 0);
}

function testCollatorCase_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "case",
		usage: "sort"
	});
    assertNotUndefined(col);
    
    var input = [
        		"ぁー",
        		"ｧー",
        		"い",
        		"ｳヾ",
   		"イ",
  		"ゕー",
        		"ｩヽ",
        		"オ",
        		"か",
        		"ゔゝ",
        "渦",
        		"うゞ",
           	"ぃゝ",      		
        		"う",
        		"ウ",
         		"サー",
     		"ぅゞ",
        		"ア",
        		"ガー",
        		"がー",
        		"あー",
        		"あゝ",
        		"ヴヽ",
        		"アー",
        		"ヴヽ",
        "允",
        		"ゥヾ",
         		"ｻー",
        "鯵",
        		"カー",
      		"ウヽ",
        		"ガー",
         		"あ",
        		"カ",
        		"ゥヽ",
      		"ｩヾ",
        		"え",
        		"エ",
        		"お",
        		"うゝ",
        		"ぅゝ",
        		"ぁゝ",
        		"ァー",
        		"ｳヽ",
        		"ｱー",
    		"ウヾ",
        		"かー",
        		"いゝ",
		"ｶー"
	];

    input.sort(col.getComparator());

    var expected = [
          		"ぁー",
        		"ぁゝ",
		"あ",
		"あー",
		"あゝ",
		"ァー",
		"ｧー",
		"ア",
		"アー",
		"ｱー",

		"ぃゝ",
		"い",
		"いゝ",
		"イ",
		
		"ぅゝ",
		"ぅゞ",
		"う",
		"うゝ",
		"うゞ",
		"ゥヽ",
		"ゥヾ",
		"ｩヽ",
		"ｩヾ",
		"ウ",
		"ウヾ",
		"ウヽ",
		"ｳヽ",
		"ｳヾ",
		"ゔゝ",
		"ヴヽ",
		"ヴヽ",
		
		"え",
		"エ",
		
		"お",
		"オ",
		
		"ゕー",
		"か",
		"かー",
		"カ",
		"カー",
		"ｶー",
		"がー",
		"ガー",
		"ガー",

		"サー",
		"ｻー",

		"鯵",
		"允",
		"渦"
	];

    assertArrayEquals(expected, input);
}

function testCollatorPrimary_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
		"ぁー",
		"ｧー",
		"い",
		"ｳヾ",
		"イ",
		"ゕー",
		"ｩヽ",
		"オ",
		"か",
		"ゔゝ",
		"渦",
		"うゞ",
		"ぃゝ",      		
		"う",
		"ウ",
		"サー",
		"ぅゞ",
		"ア",
		"ガー",
		"がー",
		"あー",
		"あゝ",
		"ヴヽ",
		"アー",
		"ヴヽ",
		"允",
		"ゥヾ",
		"ｻー",
		"鯵",
		"カー",
		"ウヽ",
		"ガー",
		"あ",
		"カ",
		"ゥヽ",
		"ｩヾ",
		"え",
		"エ",
		"お",
		"うゝ",
		"ぅゝ",
		"ぁゝ",
		"ァー",
		"ｳヽ",
		"ｱー",
		"ウヾ",
		"かー",
		"いゝ",
		"ｶー"
	];
	
	input.sort(col.getComparator());
	
	var expected = [
		"ぁー",
		"ぁゝ",
		"あ",
		"あー",
		"あゝ",
		"ァー",
		"ｧー",
		"ア",
		"アー",
		"ｱー",
		
		"ぃゝ",
		"い",
		"いゝ",
		"イ",
		
		"ぅゝ",
		"ぅゞ",
		"う",
		"うゝ",
		"うゞ",
		"ゥヽ",
		"ゥヾ",
		"ｩヽ",
		"ｩヾ",
		"ウ",
		"ウヾ",
		"ウヽ",
		"ｳヽ",
		"ｳヾ",
		"ゔゝ",
		"ヴヽ",
		"ヴヽ",
		
		"え",
		"エ",
		
		"お",
		"オ",
		
		"ゕー",
		"か",
		"かー",
		"カ",
		"カー",
		"ｶー",
		"がー",
		"ガー",
		"ガー",
		
		"サー",
		"ｻー",
		
		"鯵",
		"允",
		"渦"
    ];

    assertArrayEquals(expected, input);
}

function testJSCollatorQuatLatin_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "quaternary",
		usage: "search"
	});

	assertNotUndefined(col);

	// all latin letters
	assertTrue("A < a", col.compare("A", "a") < 0);
	assertTrue("a < B", col.compare("a", "B") < 0);
	assertTrue("B < b", col.compare("B", "b") < 0);
	assertTrue("b < C", col.compare("b", "C") < 0);
	assertTrue("C < c", col.compare("C", "c") < 0);
	assertTrue("c < D", col.compare("c", "D") < 0);
	assertTrue("D < d", col.compare("D", "d") < 0);
	assertTrue("d < E", col.compare("d", "E") < 0);
	assertTrue("E < e", col.compare("E", "e") < 0);
	assertTrue("e < F", col.compare("e", "F") < 0);
	assertTrue("F < f", col.compare("F", "f") < 0);
	assertTrue("f < G", col.compare("f", "G") < 0);
	assertTrue("G < g", col.compare("G", "g") < 0);
	assertTrue("g < H", col.compare("g", "H") < 0);
	assertTrue("H < h", col.compare("H", "h") < 0);
	assertTrue("h < I", col.compare("h", "I") < 0);
	assertTrue("I < i", col.compare("I", "i") < 0);
}

function testCollatorPrimaryMixed_zh_Hans() {
	var col = new ilib.Collator({
		locale: "zh-Hans-CN",
		useNative: false,
		sensitivity: "primary",
		usage: "sort"
	});
    assertNotUndefined(col);

    var input = [
         		"ぁー",
        		"ｧー",
	    "peach",
       		"い",
        		"ｳヾ",
   		"イ",
  		"ゕー",
        		"ｩヽ",
        		"オ",
        		"か",
        "banana",
        		"ゔゝ",
        "渦",
        		"うゞ",
           	"ぃゝ",      		
        		"う",
        		"ウ",
         		"サー",
     		"ぅゞ",
        		"ア",
        		"ガー",
        		"がー",
        		"あー",
        "raspberry",
       		"あゝ",
        		"ヴヽ",
        		"アー",
        		"ヴヽ",
        "允",
        		"ゥヾ",
         		"ｻー",
        "鯵",
        		"カー",
      		"ウヽ",
        		"ガー",
         		"あ",
        		"カ",
        		"ゥヽ",
      		"ｩヾ",
        		"え",
        		"エ",
		"apple",
		"お",
		"うゝ",
		"ぅゝ",
		"ぁゝ",
		"ァー",
		"ｳヽ",
		"orange",
        		"ｱー",
    		"ウヾ",
        		"かー",
        		"いゝ",
		"ｶー"
	];

    input.sort(col.getComparator());

    // Latin letters sort after the Cyrillic ones
    
    var expected = [
        "apple",
        "banana",
        "orange",
        "peach",
        "raspberry",

        		"ぁー",
        		"ぁゝ",
    		"あ",
    		"あー",
    		"あゝ",
    		"ァー",
    		"ｧー",
    		"ア",
    		"アー",
    		"ｱー",

    		"ぃゝ",
    		"い",
    		"いゝ",
    		"イ",
    		
       		"ぅゞ",
       	 	"ぅゝ",
    		"う",
    		"うゝ",
    		"うゞ",
    		"ゥヾ",
       		"ゥヽ",
    		"ｩヾ",
       	 	"ｩヽ",
    		"ウ",
    		"ウヽ",
    		"ウヾ",
    		"ｳヽ",
    		"ｳヾ",
    		"ゔゝ",
    		"ヴヽ",
    		"ヴヽ",
    		
    		"え",
    		"エ",
    		
    		"お",
    		"オ",
    		
    		"ゕー",
    		"か",
    		"かー",
    		"カ",
    		"カー",
    		"ｶー",
    		"がー",
    		"ガー",
    		"ガー",

    		"サー",
    		"ｻー",

		"鯵",
		"允",
		"渦"
	];

    assertArrayEquals(expected, input);
}
*/