/*
 * testaddress.js - test the address parsing and formatting routines
 * 
 * Copyright © 2013-2015, JEDLSoft
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
 * See the License for the Specific language governing permissions and
 * limitations under the License.
 */

function testParseAddressBJNormal() {
	var parsedAddress = new ilib.Address("03 BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03", parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testParseAddressBJNoZip() {
	var parsedAddress = new ilib.Address("BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressBJManyLines() {
	var parsedAddress = new ilib.Address("03 BP 1000\nCOTONOU\nBENIN", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03",parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testParseAddressBJOneLine() {
	var parsedAddress = new ilib.Address("03 BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03",parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testParseAddressBJSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("03 BP 1000  \n\t\n COTONOU\t\n\n BENIN  \n  \t\t\t", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03",parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testParseAddressBJNoDelimiters() {
	var parsedAddress = new ilib.Address("03 BP 1000 COTONOU BENIN", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03",parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testParseAddressBJSpecialChars() {
	var parsedAddress = new ilib.Address("03 BP 1000, COTONOU, BENIN", {locale: 'fr-BJ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03",parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testParseAddressBJFromUS() {
	var parsedAddress = new ilib.Address("03 BP 1000, COTONOU, BENIN", {locale: 'en-US'});
	
	// the country name is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("BP 1000", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("COTONOU",parsedAddress.locality);
	assertEquals("03",parsedAddress.postalCode);
	assertEquals("BENIN", parsedAddress.country);
	assertEquals("BJ", parsedAddress.countryCode);
};

function testFormatAddressBJ() {
	var parsedAddress = new ilib.Address({
		streetAddress: "BP 1000",
		locality: "COTONOU",
		postalCode: "03",
		country: "BENIN",
		countryCode: "BJ"
	}, {locale: 'fr-BJ'});
	
	var expected = "03 BP 1000\nCOTONOU\nBENIN";
	var formatter = new ilib.AddressFmt({locale: 'fr-BJ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressBJFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "BP 1000",
		postalCode: "03",
		country: "BENIN",
		locality: "COTONOU",
		countryCode: "BJ"
	}, {locale: 'en-US'});
	
	var expected = "03 BP 1000\nCOTONOU\nBENIN";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
