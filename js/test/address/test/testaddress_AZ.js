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
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var Address = require("../lib/Address.js");
var AddressFmt = require("../lib/AddressFmt.js");


function testParseAZAddressNormal() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ", parsedAddress.locality);
	assertEquals("2012", parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAZAddressNoZip() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str.,GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
	assertUndefined(parsedAddress.postalCode);
};

function testParseAZAddressManyLines() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR\n45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAZAddressOneLine() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAZAddressSuperfluousWhitespace() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str.  \n\t\n 2012 GÄNCÄ\t\n\n AZERBAIJAN  \n  \t\t\t", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAZAddressNoDelimiters() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR 45 Hatai Str. 2012 GÄNCÄ AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAZAddressSpecialChars() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-AZ'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testParseAZAddressFromUS() {
	var parsedAddress = new Address("ILHAZ SHAHRIAR, 45 Hatai Str., 2012 GÄNCÄ, AZERBAIJAN", {locale: 'en-US'});
	
	// the country nAZe is in English because this address is for a contact in a US database
	
	assertNotUndefined(parsedAddress);
	assertEquals("ILHAZ SHAHRIAR, 45 Hatai Str.", parsedAddress.streetAddress);
	assertUndefined(parsedAddress.region);
	assertEquals("GÄNCÄ",parsedAddress.locality);
	assertEquals("2012",parsedAddress.postalCode);
	assertEquals("AZERBAIJAN", parsedAddress.country);
	assertEquals("AZ", parsedAddress.countryCode);
};

function testFormatAddressAZ() {
	var parsedAddress = new Address({
		streetAddress: "ILHAZ SHAHRIAR, 45 Hatai Str.",
		locality: "GÄNCÄ",
		postalCode: "2012",
		country: "AZERBAIJAN",
		countryCode: "AZ"
	}, {locale: 'en-AZ'});
	
	var expected = "ILHAZ SHAHRIAR, 45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN";
	var formatter = new AddressFmt({locale: 'en-AZ'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressAZFromUS() {
	var parsedAddress = new Address({
		streetAddress: "ILHAZ SHAHRIAR, 45 Hatai Str.",
		postalCode: "2012",
		country: "AZERBAIJAN",
		locality: "GÄNCÄ",
		countryCode: "AZ"
	}, {locale: 'en-US'});
	
	var expected = "ILHAZ SHAHRIAR, 45 Hatai Str.\n2012 GÄNCÄ\nAZERBAIJAN";
	var formatter = new AddressFmt({locale: 'en-US'});
	assertEquals(expected, formatter.format(parsedAddress));
};
