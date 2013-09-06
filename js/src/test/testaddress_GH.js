/*
 * testaddress_GH.js - test the address parsing and formatting routines
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

function testParseAddressNormal() {
	var parsedAddress = new ilib.Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressNoZip() {
	var parsedAddress = new ilib.Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAddressNoCountry() {
	var parsedAddress = new ilib.Address("Mr. John Mensah P.O. Box 1234\nACCRA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressManyLines() {
	var parsedAddress = new ilib.Address("Mr. John Mensah\nP.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. John Mensah, P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressOneLine() {
	var parsedAddress = new ilib.Address("Mr. John Mensah , P.O. Box 1234 , ACCRA , GHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. John Mensah, P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressSuperfluousWhitespace() {
	var parsedAddress = new ilib.Address("Mr. John Mensah\n\n\t\r\t\t\rP.O. Box 1234\r\r\n\nACCRA\t\r\n\t\rGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
      assertEquals("Mr. John Mensah, P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressNoDelimiters() {
	var parsedAddress = new ilib.Address("Mr. John Mensah P.O. Box 1234 ACCRA GHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testParseAddressFromUS() {
	var parsedAddress = new ilib.Address("Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA", {locale: 'en-GH'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Mr. John Mensah P.O. Box 1234", parsedAddress.streetAddress);
	assertEquals("ACCRA", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("GHANA", parsedAddress.country);
	assertEquals("GH", parsedAddress.countryCode);
};

function testFormatAddress() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. John Mensah P.O. Box 1234",
		locality: "ACCRA",
		postalCode: "1010",
		country: "GHANA",
		countryCode: "GH"
	}, {locale: 'en-GH'});
	
	var expected = "Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA";
	var formatter = new ilib.AddressFmt({locale: 'en-GH'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressFromUS() {
	var parsedAddress = new ilib.Address({
		streetAddress: "Mr. John Mensah P.O. Box 1234",
		locality: "ACCRA",
		postalCode: "1010",
		country: "GHANA",
		countryCode: "GH"
	}, {locale: 'en-US'});
	
	var expected = "Mr. John Mensah P.O. Box 1234\nACCRA\nGHANA";
	var formatter = new ilib.AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
