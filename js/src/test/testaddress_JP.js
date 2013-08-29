/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013, JEDLSoft
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

function testParseAddressLatinNormal() {
	var parsedAddress = new ilib.Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome, Chuo-ku, Tokyo 100-8994\nJapan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tokyo Central Post Office, 208 Yaesu 1-Chome", parsedAddress.streetAddress);
	assertEquals("Chuo-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("100-8994", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressLatinNoZip() {
	var parsedAddress = new ilib.Address("Tokyo Central Post Office\n208 5-3, Yaesu 1-Chome, Chuo-ku\nTokyo, Japan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Tokyo Central Post Office, 208 5-3, Yaesu 1-Chome", parsedAddress.streetAddress);
	assertEquals("Beijing", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressLatinNoCountry() {
	var parsedAddress = new ilib.Address("4-3-12, Toranomon, Minato-ku, Tokyo\n105-8012", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("4-3-12, Toranomon", parsedAddress.streetAddress);
	assertEquals("SMinato-ku", parsedAddress.locality);
	assertEquals("Tokyo", parsedAddress.region);
	assertEquals("105-8012", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressAsianNormal() {
	var parsedAddress = new ilib.Address("〒100-8994 東京都中央区八重洲一丁目5番3号 東京中央郵便局, {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("朝阳区建国路112号 中国惠普大厦", parsedAddress.streetAddress);
	assertEquals("北京市", parsedAddress.locality);
	assertEquals("東京都中央区八重洲",parsedAddress.region);
	assertEquals("〒100-8994", parsedAddress.postalCode);
	assertEquals("中国", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressAsianNoZip() {
	var parsedAddress = new ilib.Address("〒100-8994 東京都中央区八重洲一丁目5番3号 東京中央郵便局, {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("汉口建设大道568号新世界国贸大厦I座9楼910室", parsedAddress.streetAddress);
	assertEquals("武汉市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("中国", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressAsianNoCountry() {
	var parsedAddress = new ilib.Address("北京市朝阳区北四环中路 27号盘古大观 A 座 100-8994", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("朝阳区北四环中路 27号盘古大观 A 座 23层", parsedAddress.streetAddress);
	assertEquals("北京市", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("100-8994", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressAsianWithRegion() {
	var parsedAddress = new ilib.Address("中国湖北省武汉市汉口建设大道568号新世界国贸大厦I座9楼910室430000", {locale: 'ja-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("汉口建设大道568号新世界国贸大厦I座9楼910室", parsedAddress.streetAddress);
	assertEquals("武汉市", parsedAddress.locality);
	assertEquals("湖北省", parsedAddress.region);
	assertEquals("中国", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
	assertEquals("430000", parsedAddress.postalCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("1-10-5, Akasaka\nMinato-ku\nTokyo\n107\n\n", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("1-10-5, Akasaka", parsedAddress.streetAddress);
	assertEquals("Minato-ku", parsedAddress.locality);
	assertEquals("Tokyo",parsedAddress.region);
	assertEquals("107", parsedAddress.postalCode);
	assertEquals("PRC", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("6-11 SHIMOHONDA, KOYASU-CHO, HACHIOJI-SHI, TOKYO-TO 192-0993, JAPAN", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("6-11 SHIMOHONDA, KOYASU-CHO", parsedAddress.streetAddress);
	assertEquals("HACHIOJI-SHI", parsedAddress.locality);
	assertEquals("TOKYO-TO",parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("JAPAN", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("\t\t\t6-11 SHIMOHONDA \r\t   \tKOYASU-CHO\t\t\n\t, HACHIOJI-SHI \r\tTOKYO-TO 192-0993 192-0993\t\n\n\nJAPAN", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("6-11 SHIMOHONDA, KOYASU-CHO", parsedAddress.streetAddress);
	assertEquals("HACHIOJI-SHI", parsedAddress.locality);
	assertEquals("TOKYO-TO",parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("JAPAN", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("6-11 SHIMOHONDA KOYASU-CHO HACHIOJI-SHI TOKYO-TO 192-0993 JAPAN", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("6-11 SHIMOHONDA KOYASU-CHO", parsedAddress.streetAddress);
	assertEquals("HACHIOJI-SHI", parsedAddress.locality);
	assertEquals("TOKYO-TO",parsedAddress.region);
	assertEquals("192-0993", parsedAddress.postalCode);
	assertEquals("JAPAN", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressSpecialChars() {
	var parsedAddress = new ilib.Address("208 Tianhe Road, Tianhe District,\nGuǎngjaōu, Guǎngdōng 510620\nJapan", {locale: 'en-JP'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guǎngjaōu", parsedAddress.locality);
	assertEquals("Guǎngdōng", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("208 Tianhe Road, Tianhe District,\nGuǎngjaōu, Guǎngdōng 510620\nJapan", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("208 Tianhe Road, Tianhe District", parsedAddress.streetAddress);
	assertEquals("Guǎngjaōu", parsedAddress.locality);
	assertEquals("Guǎngdōng", parsedAddress.region);
	assertEquals("510620", parsedAddress.postalCode);
	assertEquals("Japan", parsedAddress.country);
	assertEquals("JP", parsedAddress.countryCode);
};

function testFormatAddressLatin() {
	var parsedAddress = new ilib.Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Guǎngjaōu",
		region: "Guǎngdōng",
		postalCode: "510620",
		country: "Japan",
		countryCode: "JP",
		format: "latin"
	}, {locale: 'en-JP'});
	
	var expected = "208 Tianhe Road, Tianhe District\nGuǎngjaōu, Guǎngdōng 510620\nJapan";
	var formatter = new ilib.AddressFmt({locale: 'en-JP'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "208 Tianhe Road, Tianhe District",
		locality: "Guǎngjaōu",
		region: "Guǎngdōng",
		postalCode: "510620",
		country: "Japan",
		countryCode: "JP",
		format: "latin"
	}, {locale: 'en-US'});
	
	var expected = "208 Tianhe Road, Tianhe District\nGuǎngjaōu, Guǎngdōng 510620\nJapan";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
