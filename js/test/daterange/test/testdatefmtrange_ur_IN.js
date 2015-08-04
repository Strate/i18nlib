/*
 * testdatefmtrange_ur_in.js - test the date range formatter object in Urdu/India
 * 
 * 
 * Copyright © 2012-2015, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KinD, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var GregorianDate = require("./../lib/GregorianDate.js");
var DateRngFmt = require("./../lib/DateRngFmt.js");
function testDateRngFmtinRangeinDayShort() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeinDayMedium() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر، ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeinDayLong() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر، ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeinDayFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر، ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtinRangeNextDayShort() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰/۱۲/۱۱ – ‏۲:۳۰ بعد دوپہر ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeNextDayMedium() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰/دسمبر/۲۰۱۱ – ‏۲:۳۰ بعد دوپہر ۳۱/دسمبر/۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeNextDayLong() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰ – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeNextDayFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 30,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱:۴۵ بعد دوپہر ۳۰ – ‏۲:۳۰ بعد دوپہر ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtinRangeMultiDayShort() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰/۱۲/۱۱ – ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiDayMedium() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰/دسمبر/۲۰۱۱ – ۳۱/دسمبر/۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiDayLong() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiDayFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 12,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtinRangeNextMonthShort() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰/۱۱/۱۱ – ۳۱/۱۲/۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeNextMonthMedium() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰/نومبر/۲۰۱۱ – ۳۱/دسمبر/۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeNextMonthLong() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نومبر – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}
function testDateRngFmtinRangeNextMonthFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2011,
		month: 12,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نومبر – ۳۱ دسمبر ۲۰۱۱", fmt.format(start, end));
}

function testDateRngFmtinRangeNextYearShort() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰/۱۱/۱۱ – ۳۱/۱/۱۲", fmt.format(start, end));
}
function testDateRngFmtinRangeNextYearMedium() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰/نومبر/۲۰۱۱ – ۳۱/جنوری/۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtinRangeNextYearLong() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نومبر ۲۰۱۱ – ۳۱ جنوری ۲۰۱۲", fmt.format(start, end));
}
function testDateRngFmtinRangeNextYearFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2012,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰ نومبر ۲۰۱۱ – ۳۱ جنوری ۲۰۱۲", fmt.format(start, end));
}

function testDateRngFmtinRangeMultiYearShort() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "short"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۱۱/۱۱ – ۱/۱۴", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiYearMedium() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "medium"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏نومبر/۲۰۱۱ – جنوری/۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiYearLong() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "long"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نومبر ۲۰۱۱ – جنوری ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtinRangeMultiYearFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2014,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("نومبر ۲۰۱۱ – جنوری ۲۰۱۴", fmt.format(start, end));
}
function testDateRngFmtinManyYearsFull() {
    var fmt = new DateRngFmt({locale: "ur-IN", length: "full"});
    assertNotNull(fmt);
    
    var start = new GregorianDate({
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var end = new GregorianDate({
		year: 2064,
		month: 1,
		day: 31,
		hour: 14,
		minute: 30,
		second: 0,
		millisecond: 0
	});
    assertEquals("‏۲۰۱۱ – ۲۰۶۴", fmt.format(start, end));
}
