/*
 * testhan.js - test the Han Chinese lunar calendar
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

function testHanGetNumMonths4650() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(12, cal.getNumMonths(4650));
}

function testHanGetMonLength1() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(1, 4650));
}

function testHanGetMonLength2() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(2, 4650));
}

function testHanGetMonLength3() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(3, 4650));
}

function testHanGetMonLength4() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(4, 4650));
}

function testHanGetMonLength5() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(5, 4650));
}

function testHanGetMonLength6() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(6, 4650));
}

function testHanGetMonLength7() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(7, 4650));
}

function testHanGetMonLength8() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(8, 4650));
}

function testHanGetMonLength9() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(9, 4650));
}

function testHanGetMonLength10() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(10, 4650));
}

function testHanGetMonLength11() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(11, 4650));
}

function testHanGetMonLength12() {
    var cal = new ilib.Cal.Han();
    
    assertEquals(30, cal.getMonLength(12, 4650));
}

var hanLeapYears = {
	"4680": {newYears: 2445378.5, months: 12, leapMonth: -1}, // 1983
	"4681": {newYears: 2445732.5, months: 13, leapMonth: 10}, // 1984
	"4682": {newYears: 2446116.5, months: 12, leapMonth: -1}, // 1985
	"4686": {newYears: 2447563.5, months: 12, leapMonth: -1}, // 1989
	"4687": {newYears: 2447918.5, months: 13, leapMonth: 5},  // 1990
	"4688": {newYears: 2448302.5, months: 12, leapMonth: -1}, // 1991
	"4697": {newYears: 2451579.5, months: 12, leapMonth: -1}, // 2000
	"4698": {newYears: 2451933.5, months: 13, leapMonth: 4},  // 2001
	"4699": {newYears: 2452317.5, months: 12, leapMonth: -1}, // 2002
	"4700": {newYears: 2452671.5, months: 12, leapMonth: -1}, // 2003
	"4701": {newYears: 2453026.5, months: 13, leapMonth: 2},  // 2004
	"4702": {newYears: 2453410.5, months: 12, leapMonth: -1}, // 2005
	"4703": {newYears: 2453764.5, months: 13, leapMonth: 7},  // 2006
	"4704": {newYears: 2454149.5, months: 12, leapMonth: -1}, // 2007
	"4705": {newYears: 2454503.5, months: 12, leapMonth: -1}, // 2008
	"4706": {newYears: 2454857.5, months: 13, leapMonth: 5},  // 2009
	"4707": {newYears: 2455241.5, months: 12, leapMonth: -1}, // 2010
	"4708": {newYears: 2455595.5, months: 12, leapMonth: -1}, // 2011
	"4709": {newYears: 2455949.5, months: 13, leapMonth: 4},  // 2012
	"4710": {newYears: 2456333.5, months: 12, leapMonth: -1}, // 2013
	"4711": {newYears: 2456688.5, months: 13, leapMonth: 9},  // 2014
	"4712": {newYears: 2457072.5, months: 12, leapMonth: -1}, // 2015
	"4713": {newYears: 2457426.5, months: 12, leapMonth: -1}, // 2016
	"4714": {newYears: 2457781.5, months: 13, leapMonth: 6}   // 2017
};

function testHanIsLeapYear() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].months === 13, cal.isLeapYear(n));
    }
}

function testHanGetNumMonths() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].months, cal.getNumMonths(n));
    }
}

function testHanGetLeapMonth() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].leapMonth, cal.getLeapMonth(n));
    }
}

function testHanNewYears() {
    var cal = new ilib.Cal.Han();
    
    for (i in hanLeapYears) {
    	var n = parseInt(i);
    	assertEquals(hanLeapYears[i].newYears, cal.newYears(n));
    }
}

function testHanNewDateInstance() {
    var cal = new ilib.Cal.Han();
    var d = cal.newDateInstance({
    	year: 4681,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.HanDate);
}
