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
function testParseAddressCASimpleCA() {
	var parsedAddress = new Address("5150 Spectrum Way\nMississauga, ON\nL4W 5G1\nCanada", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("5150 Spectrum Way", parsedAddress.streetAddress);
	assertEquals("Mississauga", parsedAddress.locality);
	assertEquals("ON", parsedAddress.region);
	assertEquals("L4W 5G1", parsedAddress.postalCode);
	assertEquals("Canada", parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

// to verify NOV-111026
function testParseAddressCAWithAccents() {
	var parsedAddress = new Address("1253 McGill College\nSuite 250\nMontréal, QC, H2B 2Y5", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("1253 McGill College, Suite 250", parsedAddress.streetAddress);
	assertEquals("Montréal", parsedAddress.locality);
	assertEquals("QC", parsedAddress.region);
	assertEquals("H2B 2Y5", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCASpelledOutProvince() {
	var parsedAddress = new Address("340 Hagey Blvd\n2nd Floor\nWaterloo, Ontario, N2L 6R6", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("340 Hagey Blvd, 2nd Floor", parsedAddress.streetAddress);
	assertEquals("Waterloo", parsedAddress.locality);
	assertEquals("Ontario", parsedAddress.region);
	assertEquals("N2L 6R6", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCASpelledOutProvinceWithSpaces() {
	var parsedAddress = new Address("20 Main St.\nMyTown, Prince Edward Island A1B 2C3\nCanada", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("Prince Edward Island", parsedAddress.region);
	assertEquals("A1B 2C3", parsedAddress.postalCode);
	assertEquals("Canada", parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCANoZip() {
	var parsedAddress = new Address("20 Main St.\nMyTown, AB\nCanada", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Main St.", parsedAddress.streetAddress);
	assertEquals("MyTown", parsedAddress.locality);
	assertEquals("AB", parsedAddress.region);
	assertUndefined(parsedAddress.postalCode);
	assertEquals("Canada", parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCAManyLines() {
	var parsedAddress = new Address("950 W 21st Ave\nApt 45\nCambridge\nON\nA4C 5N4", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("950 W 21st Ave, Apt 45", parsedAddress.streetAddress);
	assertEquals("Cambridge", parsedAddress.locality);
	assertEquals("ON", parsedAddress.region);
	assertEquals("A4C 5N4", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCAOneLine() {
	var parsedAddress = new Address("5150 Spectrum Way, Mississauga, ON, L4W 5G1, Canada", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("5150 Spectrum Way", parsedAddress.streetAddress);
	assertEquals("Mississauga", parsedAddress.locality);
	assertEquals("ON", parsedAddress.region);
	assertEquals("L4W 5G1", parsedAddress.postalCode);
	assertEquals("Canada", parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCASuperfluousWhitespace() {
	var parsedAddress = new Address("5150 Spectrum Way\n  \t \t Mississauga, \n   \t ON, \n, \n\n L4W 5G1   \n  Canada\n\n   \n\n", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("5150 Spectrum Way", parsedAddress.streetAddress);
	assertEquals("Mississauga", parsedAddress.locality);
	assertEquals("ON", parsedAddress.region);
	assertEquals("L4W 5G1", parsedAddress.postalCode);
	assertEquals("Canada", parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCANoDelimiters() {
	var parsedAddress = new Address("5150 Spectrum Way Mississauga ON L4W 5G1 Canada", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("5150 Spectrum Way", parsedAddress.streetAddress);
	assertEquals("Mississauga", parsedAddress.locality);
	assertEquals("ON", parsedAddress.region);
	assertEquals("L4W 5G1", parsedAddress.postalCode);
	assertEquals("Canada", parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCAPOBox() {
	var parsedAddress = new Address("P.O. Box 350\nToronto ON Y5T 5T5", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("P.O. Box 350", parsedAddress.streetAddress);
	assertEquals("Toronto", parsedAddress.locality);
	assertEquals("ON", parsedAddress.region);
	assertEquals("Y5T 5T5", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCAFrench() {
	var parsedAddress = new Address("20 Montée Lavalle\nÉparnay, Nouveau-Brunswick Y7Y 7Y7", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("20 Montée Lavalle", parsedAddress.streetAddress);
	assertEquals("Éparnay", parsedAddress.locality);
	assertEquals("Nouveau-Brunswick", parsedAddress.region);
	assertEquals("Y7Y 7Y7", parsedAddress.postalCode);
	assertUndefined(parsedAddress.country);
	assertEquals("CA", parsedAddress.countryCode);
};

function testParseAddressCAForeign() {
	var parsedAddress = new Address("Achterberglaan 23, 2345 GD Uithoorn, Netherlands", {locale: 'en-CA'});
	
	assertNotUndefined(parsedAddress);
	assertEquals("Achterberglaan 23", parsedAddress.streetAddress);
	assertEquals("Uithoorn", parsedAddress.locality);
	assertUndefined(parsedAddress.region);
	assertEquals("2345 GD", parsedAddress.postalCode);
	assertEquals("Netherlands", parsedAddress.country);
	assertEquals("NL", parsedAddress.countryCode);
};
	
function testFormatAddressCA() {
	var parsedAddress = new Address({
		streetAddress: "5150 Spectrum Way",
		locality: "Mississauga",
		region: "Ontario",
		postalCode: "L4W 5G1",
		country: "Canada",
		countryCode: "CA"
	}, {locale: 'en-CA'});
	
	var expected = "5150 Spectrum Way\nMississauga, Ontario L4W 5G1\nCanada";
	var formatter = new AddressFmt({locale: 'en-CA'});
	assertEquals(expected, formatter.format(parsedAddress));
};

function testFormatAddressCADomestic() {
	var parsedAddress = new Address({
		streetAddress: "5150 Spectrum Way",
		locality: "Mississauga",
		region: "Ontario",
		postalCode: "L4W 5G1",
		country: "Canada",
		countryCode: "CA"
	}, {locale: 'en-CA'});
	
	var expected = "5150 Spectrum Way\nMississauga, Ontario L4W 5G1";
	var formatter = new AddressFmt({locale: 'en-CA', style: 'nocountry'});
	assertEquals(expected, formatter.format(parsedAddress));
};

/*
canada:

5150 Spectrum Way
Mississauga, Ontario
L4W 5G1
Canada

1253 McGill College, Suite 250
Montreal, Quebec, H2B 2Y5

340 Hagey Blvd
2nd Floor
Waterloo, Ontario, N2L 6R6

10 Dundas Street East
Suite 600
Toronto, Ontario M5B 2G9


*/