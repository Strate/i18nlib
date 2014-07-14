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

function testCharsetGetStandardNameUTF8() {
	assertEquals("UTF-8", ilib.Charset.getStandardName("UTF-8"));
	assertEquals("UTF-8", ilib.Charset.getStandardName("UTF8"));
	assertEquals("UTF-8", ilib.Charset.getStandardName("UTF"));
}

function testCharsetGetStandardNameUTF8IgnoreCase() {
	assertEquals("UTF-8", ilib.Charset.getStandardName("utf-8"));
	assertEquals("UTF-8", ilib.Charset.getStandardName("utf8"));
	assertEquals("UTF-8", ilib.Charset.getStandardName("utf"));
}

function testCharsetGetStandardNameISOLatin1() {
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("Latin1"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("ISO-8859"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("ISO-8859-1"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("iso-8859"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("iso-8859-1"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("ISO8859"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("ISO88591"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("ISO-Latin-1"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("ISOLatin1"));
	assertEquals("ISO-8859-1", ilib.Charset.getStandardName("latin"));
}

function testCharsetGetStandardNameISOLatin15() {
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("latin15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("Latin15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("ISO-8859-15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("iso-8859-15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("ISO885915"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("ISO-Latin-15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("iso-latin-15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("ISOLatin15"));
	assertEquals("ISO-8859-15", ilib.Charset.getStandardName("isolatin15"));
}
