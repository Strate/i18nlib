/*
 * testcharset.js - test the charset info object
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

function testCharsetConstructor() {
	var cs = new ilib.Charset();

	assertNotNull(cs);
}

function testCharsetConstructorCurrentLocale() {
	var cs = new ilib.Charset();

	assertNotNull(cs);
	
	// should be the charset of the current locale
	assertEquals("UTF-8", cs.getName());
}

function testCharsetGetStandardNameIdentity() {
	assertEquals("UTF-8", new ilib.Charset({name: "UTF-8"}).getName());
	assertEquals("KOI8-R", new ilib.Charset({name: "KOI8-R"}).getName());
}

function testCharsetGetStandardNameUndefined() {
	assertNotUndefined(new ilib.Charset({}));
}

function testCharsetGetStandardNameIdentityUnknown() {
	assertEquals("foobarfoo", new ilib.Charset({name: "foobarfoo"}).getName());
}

function testCharsetGetStandardNameUTF8() {
	assertEquals("UTF-8", new ilib.Charset({name: "UTF8"}).getName());
	assertEquals("UTF-8", new ilib.Charset({name: "UTF"}).getName());
}

function testCharsetGetStandardNameUTF8IgnoreCase() {
	assertEquals("UTF-8", new ilib.Charset({name: "utf-8"}).getName());
	assertEquals("UTF-8", new ilib.Charset({name: "utf8"}).getName());
	assertEquals("UTF-8", new ilib.Charset({name: "utf"}).getName());
}

function testCharsetGetStandardNameISOLatin1() {
	assertEquals("ISO-8859-1", new ilib.Charset({name: "Latin1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "Latin-1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO-8859-1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO_8859_1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO-Latin-1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISOLatin1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "iso-8859"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "iso-8859-1"}).getName());
}

function testCharsetGetStandardNameISOLatin1Defaults() {
	assertEquals("ISO-8859-1", new ilib.Charset({name: "8859"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO-8859"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO_8859"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO8859"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "ISO88591"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "Latin"}).getName());
}

function testCharsetGetStandardNameISOLatin1IgnoreCase() {
	assertEquals("ISO-8859-1", new ilib.Charset({name: "latin1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "iso-latin-1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "isolatin1"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "iso-8859"}).getName());
	assertEquals("ISO-8859-1", new ilib.Charset({name: "iso-8859-1"}).getName());
}

function testCharsetGetStandardNameISOLatin15() {
	assertEquals("ISO-8859-15", new ilib.Charset({name: "latin9"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "Latin9"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "ISO-8859-15"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "iso-8859-15"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "ISO885915"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "ISO-Latin-9"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "iso-latin-9"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "ISOLatin9"}).getName());
	assertEquals("ISO-8859-15", new ilib.Charset({name: "isolatin9"}).getName());
}

function testCharsetGetStandardNameShiftJIS() {
	assertEquals("Shift_JIS", new ilib.Charset({name: "csShiftJIS"}).getName());
	assertEquals("Shift_JIS", new ilib.Charset({name: "mskanji"}).getName());
}

function testCharsetGetStandardNameEUCKR() {
	assertEquals("EUC-KR", new ilib.Charset({name: "cseuckr"}).getName());
	assertEquals("EUC-KR", new ilib.Charset({name: "euckr"}).getName());
}
