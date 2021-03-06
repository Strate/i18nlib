/*
 * testdurfmt.js - test the duration formatter object
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
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testDurFmtConstructorEmpty() {
	var fmt = new ilib.DurFmt();
    
    assertNotNull(fmt);
};

function testDurFmtConstructorDefaultLocale() {
    var fmt = new ilib.DurFmt();
    
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDurFmtGetLength() {
    var fmt = new ilib.DurFmt({length: "full"});
    assertNotNull(fmt);
    
    assertEquals("full", fmt.getLength());
};

function testDurFmtGetLengthDefault() {
    var fmt = new ilib.DurFmt();
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};

function testDurFmtGetLengthBogus() {
    var fmt = new ilib.DurFmt({length: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("short", fmt.getLength());
};

function testDurFmtGetLocale() {
    var fmt = new ilib.DurFmt({locale: "de-DE"});
    assertNotNull(fmt);
    
    assertEquals("de-DE", fmt.getLocale().toString());
};

function testDurFmtGetLocaleDefault() {
    var fmt = new ilib.DurFmt();
    assertNotNull(fmt);
    
    assertEquals("en-US", fmt.getLocale().toString());
};

function testDurFmtGetLocaleBogus() {
    var fmt = new ilib.DurFmt({locale: "zyy-XX"});
    assertNotNull(fmt);
    
    assertEquals("zyy-XX", fmt.getLocale().toString());
};

function testDurFmtGetStyleDefault() {
    var fmt = new ilib.DurFmt();
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
};

function testDurFmtGetStyleText() {
    var fmt = new ilib.DurFmt({style: "text"});
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
};

function testDurFmtGetStyleClock() {
    var fmt = new ilib.DurFmt({style: "clock"});
    assertNotNull(fmt);
    
    assertEquals("clock", fmt.getStyle());
};

function testDurFmtGetStyleBogus() {
    var fmt = new ilib.DurFmt({style: "asdf"});
    assertNotNull(fmt);
    
    assertEquals("text", fmt.getStyle());
};

function testDurFmtFormatShortText() {
    var fmt = new ilib.DurFmt({
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1y 1m 1w 1d 1h 1m 1s 1ms", duration.toString());
};

function testDurFmtFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1y 1m 1w 1d 1:01:01", duration.toString());
};

function testDurFmtFormatShortExceedClockLimitsNoWrap() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 36,
    	minute: 65,
    	second: 66
    });
    assertEquals("1y 1m 1w 1d 36:65:66", duration.toString());
};

function testDurFmtFormatShortClockNoMinutesSeconds() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1
    });
    assertEquals("1y 1m 1w 1d 1:00", duration.toString());
};

function testDurFmtFormatShortTextNoMinutesSeconds() {
    var fmt = new ilib.DurFmt({
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1
    });
    assertEquals("1y 1m 1w 1d 1h", duration.toString());
};

function testDurFmtFormatMedium() {
    var fmt = new ilib.DurFmt({
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1y, 1m, 1w, 1d, 1h, 1m, 1s, 1ms", duration.toString());
};

function testDurFmtFormatLongSingle() {
    var fmt = new ilib.DurFmt({
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 yr, 1 mth, 1 wk, 1 day, 1 hr, 1 min, 1 sec, 1 ms", duration.toString());
};

function testDurFmtFormatFullSingle() {
    var fmt = new ilib.DurFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second, 1 millisecond", duration.toString());
};

function testDurFmtFormatFullSingle_en_GB() {
    var fmt = new ilib.DurFmt({
    	length: "full",
    	locale: "en-GB"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });   
    assertEquals("1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second and 1 millisecond", duration.toString());
};

function testDurFmtFormatFullSingleNotAllFields() {
    var fmt = new ilib.DurFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	week: 1,
    	day: 1,
    	minute: 1
    });
    assertEquals("1 year, 1 week, 1 day and 1 minute", duration.toString());
};

function testDurFmtFormatFullSingleNotAllFields_en_GB() {
    var fmt = new ilib.DurFmt({
    	length: "full",
    	locale: "en-GB"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	week: 1,
    	day: 1,
    	minute: 1
    });
    assertEquals("1 year, 1 week, 1 day and 1 minute", duration.toString());
};

function testDurFmtFormatFullSingle() {
    var fmt = new ilib.DurFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute, 1 second and 1 millisecond", duration.toString());
};


function testDurFmtFormatLongPlural() {
    var fmt = new ilib.DurFmt({
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 yrs, 2 mths, 2 wks, 2 days, 2 hrs, 2 mins, 2 secs, 2 ms", duration.toString());
};

function testDurFmtFormatFullPlural() {
    var fmt = new ilib.DurFmt({
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds and 2 milliseconds", duration.toString());
};

function testDurFmtFormatFullPlural_en_GB() {
    var fmt = new ilib.DurFmt({
    	length: "full",
    	locale: "en-GB"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds and 2 milliseconds", duration.toString());
};

function testDurFmtFormatShortDEDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 J, 1 M, 1 W, 1 T, 1 Std., 1 Min., 1 s, 1 ms", duration.toString());
};

function testDurFmtFormatShortDEText() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 J, 1 M, 1 W, 1 T, 1 Std., 1 Min., 1 s, 1 ms", duration.toString());
};

function testDurFmtFormatShortDEClock() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 J, 1 M, 1 W, 1 T, 01:01:01", duration.toString());
};

function testDurFmtFormatMediumDE() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 Ja., 1 Mo., 1 Wo., 1 Ta., 1 St., 1 Mi., 1 Se., 1 ms", duration.toString());
};

function testDurFmtFormatLongDESingle() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 J, 1 Mon, 1 W, 1 T, 1 Std., 1 Min., 1 Sek., 1 ms", duration.toString());
};

function testDurFmtFormatFullDESingle() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 Jahr, 1 Monat, 1 Woche, 1 Tag, 1 Stunde, 1 Minute, 1 Sekunde und 1 Millisekunde", duration.toString());
};

function testDurFmtFormatLongDEPlural() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 J, 2 Mon, 2 W, 2 T, 2 Std., 2 Min., 2 Sek., 2 ms", duration.toString());
};

function testDurFmtFormatFullDEPlural() {
    var fmt = new ilib.DurFmt({
    	locale: "de-DE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 2,
    	month: 2,
    	week: 2,
    	day: 2,
    	hour: 2,
    	minute: 2,
    	second: 2,
    	millisecond: 2
    });
    assertEquals("2 Jahre, 2 Monate, 2 Wochen, 2 Tage, 2 Stunden, 2 Minuten, 2 Sekunden und 2 Millisekunden", duration.toString());
};

function testDurFmtFormatShortZHDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-CN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1个月1周1天1小时1分钟1秒1毫秒", duration.toString());
};

function testDurFmtFormatShortZHText() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-CN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1个月1周1天1小时1分钟1秒1毫秒", duration.toString());
};

function testDurFmtFormatShortZHClock() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-CN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1个月1周1天1:01:01", duration.toString());
};

function testDurFmtFormatMediumZH() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-CN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1個月1周1天1小時1分鐘1秒1毫秒", duration.toString());
};

function testDurFmtFormatLongZH() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-CN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1个月1周1天1小时1分钟1秒1毫秒", duration.toString());
};

function testDurFmtFormatFullZH() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-CN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1个月1周1天1小时1分钟1秒1毫秒", duration.toString());
};

function testDurFmtFormatShortFRDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1a 1m 1sem 1j 1h 1m 1s 1ms", duration.toString());
};

function testDurFmtFormatShortFRText() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1a 1m 1sem 1j 1h 1m 1s 1ms", duration.toString());
};

function testDurFmtFormatShortFRClock() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1a 1m 1sem 1j 01:01:01", duration.toString());
};

function testDurFmtFormatMediumFR() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 an, 1 mo, 1 sm, 1 jr, 1 hr, 1 mn, 1 se, 1 ms", duration.toString());
};

function testDurFmtFormatLongFR() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 an, 1 m, 1 sem., 1 j, 1 h, 1 min, 1 s, 1 ms", duration.toString());
};

function testDurFmtFormatFullFR() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 an, 1 mois, 1 semaine, 1 jour, 1 heure, 1 minute, 1 seconde et 1 milliseconde", duration.toString());
};


function testDurFmtAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	length: "full",
    	sync: false,
    	locale: "en-GB",
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2,
    	    	millisecond: 2
    	    });
    	    assertEquals("2 years, 2 months, 2 weeks, 2 days, 2 hours, 2 minutes, 2 seconds and 2 milliseconds", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2,
    	    	millisecond: 2
    	    });
    	    assertEquals("2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes, 2 secondes et 2 millisecondes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fr-FR",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1,
    	    	millisecond: 1
    	    });
    	    assertEquals("1a 1m 1sem 1j 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for bg-BG

function testDurFmtBGFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г, 1 м, 1 седм., 1 д, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtBGFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г, 1 м, 1 седм., 1 д, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtBGFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г, 1 м, 1 седм., 1 д, 1:01:01", duration.toString());
};

function testDurFmtBGFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 го, 1 ме, 1 се, 1 дн., 1 час, 1 мин, 1 сек", duration.toString());
};

function testDurFmtBGFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г, 1 мес., 1 седм., 1 д, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtBGFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 година, 1 месец, 1 седмица, 1 ден, 1 час, 1 минута и 1 секунда", duration.toString());
};


function testDurFmtBGAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 години, 2 месеца, 2 седмици, 2 дни, 2 часа, 2 минути и 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtBGAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "bg-BG",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 години, 2 месеца, 2 седмици, 2 дни, 2 часа, 2 минути и 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

//test cases for bs-Latn-BA

function testDurFmtBSLatnFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 god, 1 mj., 1 sedm, 1 dan, 1 sat, 1 min, 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 god, 1 mj., 1 sedm, 1 dan, 1 sat, 1 min, 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 god, 1 mj., 1 sedm, 1 dan, 01:01:01", duration.toString());
};

function testDurFmtBSLatnFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 god, 1 mj., 1 sedm, 1 dan, 1 sat, 1 min, 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 god, 1 mj, 1 sedm, 1 dan, 1 sat, 1 min, 1 sek", duration.toString());
};

function testDurFmtBSLatnFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 godina, 1 mjesec, 1 sedmica, 1 dan, 1 sat, 1 minut i 1 sekunda", duration.toString());
};


function testDurFmtBSLatnAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "bs-Latn-BA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 godine, 2 mjeseca, 2 sedmice, 2 dana, 2 sata, 2 minute i 2 sekunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

//test cases for cs-CZ

function testDurFmtCSFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r 1 m 1 t 1 d 1 h 1 m 1 s", duration.toString());
};

function testDurFmtCSFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r 1 m 1 t 1 d 1 h 1 m 1 s", duration.toString());
};

function testDurFmtCSFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r 1 m 1 t 1 d 1:01:01", duration.toString());
};

function testDurFmtCSFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 rok, 1 mě, 1 tý, 1 den, 1 ho, 1 mi, 1 se", duration.toString());
};

function testDurFmtCSFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 rok, 1 měs., 1 týd., 1 den, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtCSFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 rok, 1 měsíc, 1 týden, 1 den, 1 hodina, 1 minuta a 1 sekunda", duration.toString());
};


function testDurFmtCSAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "cs-CZ",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 roky, 2 měsíce, 2 týdny, 2 dny, 2 hodiny, 2 minuty a 2 sekundy", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

//test cases for da-DK


function testDurFmtDAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "da-DK",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 m, 1 u, 1 d, 1 t, 1 m, 1 s", duration.toString());
};

function testDurFmtDAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "da-DK",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 m, 1 u, 1 d, 1 t, 1 m, 1 s", duration.toString());
};

function testDurFmtDAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "da-DK",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 m, 1 u, 1 d, 01.01.01", duration.toString());
};

function testDurFmtDAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "da-DK",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 år, 1 md, 1 ug, 1 da, 1 ti, 1 mi, 1 se", duration.toString());
};

function testDurFmtDAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "da-DK",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 md., 1 uge, 1 dag, 1 t, 1 min, 1 sek", duration.toString());
};

function testDurFmtDAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "da-DK",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 måned, 1 uge, 1 dag, 1 time, 1 minut og 1 sekund", duration.toString());
};


function testDurFmtDAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "da-DK",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 år, 2 måneder, 2 uger, 2 dage, 2 timer, 2 minutter og 2 sekunder", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};


//test cases for el-GR


function testDurFmtGRFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "el-GR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 έ, 1 μ, 1 ε, 1 η, 1 ώ, 1 λ, 1 δ", duration.toString());
};

function testDurFmtGRFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "el-GR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 έ, 1 μ, 1 ε, 1 η, 1 ώ, 1 λ, 1 δ", duration.toString());
};

function testDurFmtGRFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "el-GR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 έ, 1 μ, 1 ε, 1 η, 1:01:01", duration.toString());
};

function testDurFmtGRFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "el-GR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 έτ, 1 μή, 1 εβ, 1 ημ, 1 ώρα, 1 λε, 1 δε", duration.toString());
};

function testDurFmtGRFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "el-GR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 έτ., 1 μήν., 1 εβδ., 1 ημέρα, 1 ώρα, 1 λεπ., 1 δευτ.", duration.toString());
};

function testDurFmtGRFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "el-GR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 έτος, 1 μήνας, 1 εβδομάδα, 1 ημέρα, 1 ώρα, 1 λεπτό και 1 δευτερόλεπτο", duration.toString());
};


function testDurFmtGRAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "el-GR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 έτη, 2 μήνες, 2 εβδομάδες, 2 ημέρες, 2 ώρες, 2 λεπτά και 2 δευτερόλεπτα", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

//test cases for es-CO


function testDurFmtESFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "es-CO",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a., 1 m., 1 sem., 1 d., 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtESFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "es-CO",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a., 1 m., 1 sem., 1 d., 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtESFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "es-CO",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a., 1 m., 1 sem., 1 d., 1:01:01", duration.toString());
};

function testDurFmtESFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "es-CO",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 añ, 1 me, 1 sm, 1 dí, 1 hr, 1 mn, 1 sg", duration.toString());
};

function testDurFmtESFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "es-CO",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a., 1 m., 1 sem., 1 d., 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtESFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "es-CO",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 año, 1 mes, 1 semana, 1 día, 1 hora, 1 minuto y 1 segundo", duration.toString());
};


function testDurFmtESAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "es-CO",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 años, 2 meses, 2 semanas, 2 días, 2 horas, 2 minutos y 2 segundos", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

//test cases for estonian

function testDurFmtETFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "et-EE",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a 1 k 1 n 1 p 1 h 1 min 1 s", duration.toString());
};

function testDurFmtETFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "et-EE",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a 1 k 1 n 1 p 1 h 1 min 1 s", duration.toString());
};

function testDurFmtETFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "et-EE",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a 1 k 1 n 1 p 1:01.01", duration.toString());
};

function testDurFmtETFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "et-EE",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 aa, 1 ku, 1 nä, 1 öö, 1 tu, 1 min, 1 se", duration.toString());
};

function testDurFmtETFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "et-EE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a, 1 kuu, 1 nädal, 1 päev, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtETFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "et-EE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 aasta, 1 kuu, 1 nädal, 1 ööpäev, 1 tund, 1 minut, 1 sekund", duration.toString());
};


function testDurFmtETAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "et-EE",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 aastat, 2 kuud, 2 nädalat, 2 ööpäeva, 2 tundi, 2 minutit, 2 sekundit", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};


//test cases for fa-IR


function testDurFmtFAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ثانیه", duration.toString());
};

function testDurFmtFAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال ۱ ماه ۱ هفته ۱ روز ۱ ساعت ۱ دقیقه ۱ثانیه", duration.toString());
};

function testDurFmtFAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال ۱ ماه ۱ هفته ۱ روز ‏۱:۰۱:۰۱", duration.toString());
};

function testDurFmtFAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال،‏ ۱ ماه،‏ ۱ هفته،‏ ۱ روز،‏ ۱ ساعت،‏ ۱ دقیقه،‏ ۱ ثانیه", duration.toString());
};

function testDurFmtFAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال،‏ ۱ ماه،‏ ۱ هفته،‏ ۱ روز،‏ ۱ ساعت،‏ ۱ دقیقه،‏ ۱ ثانیه", duration.toString());
};

function testDurFmtFAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال،‏ ۱ ماه،‏ ۱ هفته،‏ ۱ روز،‏ ۱ ساعت،‏ ۱ دقیقه، و ۱ ثانیه", duration.toString());
};


function testDurFmtFAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fa-IR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("‏۲ سال،‏ ۲ ماه،‏ ۲ هفته،‏ ۲ روز،‏ ۲ ساعت،‏ ۲ دقیقه، و ۲ ثانیه", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};



//test cases for fi-FI


function testDurFmtFIFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1v 1kk 1vk 1pv 1t 1min 1s", duration.toString());
};

function testDurFmtFIFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1v 1kk 1vk 1pv 1t 1min 1s", duration.toString());
};

function testDurFmtFIFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1v 1kk 1vk 1pv 1.01.01", duration.toString());
};

function testDurFmtFIFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 vs, 1 kk, 1 vk, 1 pv, 1 tt, 1 mn, 1 sk", duration.toString());
};

function testDurFmtFIFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 v, 1 kk, 1 vk, 1 pv, 1 t, 1 min, 1 s", duration.toString());
};

function testDurFmtFIFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vuosi, 1 kuukausi, 1 viikko, 1 päivä, 1 tunti, 1 minuutti ja 1 sekunti", duration.toString());
};


function testDurFmtFIAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fi-FI",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 vuotta, 2 kuukautta, 2 viikkoa, 2 päivää, 2 tuntia, 2 minuuttia ja 2 sekuntia", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};


//test cases for fr-CA

function testDurFmtFRCAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1a 1m 1sem 1j 1h 1m 1s", duration.toString());
};

function testDurFmtFRCAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1a 1m 1sem 1j 1h 1m 1s", duration.toString());
};

function testDurFmtFRCAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1a 1m 1sem 1j 01:01:01", duration.toString());
};

function testDurFmtFRCAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 an, 1 m., 1 sm, 1 jr, 1 hr, 1 mn, 1 se", duration.toString());
};

function testDurFmtFRCAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 an, 1 m., 1 sem., 1 j, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtFRCAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 an, 1 mois, 1 semaine, 1 jour, 1 heure, 1 minute et 1 seconde", duration.toString());
};


function testDurFmtFRCAAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes et 2 secondes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFRCAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ans, 2 mois, 2 semaines, 2 jours, 2 heures, 2 minutes et 2 secondes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtFRCAFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "fr-CA",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1a 1m 1sem 1j 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for ga-IE

function testDurFmtGAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1b 1m 1s 1l 1u 1n 1s", duration.toString());
};

function testDurFmtGAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1b 1m 1s 1l 1u 1n 1s", duration.toString());
};

function testDurFmtGAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1b 1m 1s 1l 01:01:01", duration.toString());
};

function testDurFmtGAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1b, 1m, 1s, 1l, 1u, 1n, 1s", duration.toString());
};

function testDurFmtGAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 bhl, 1 mhí, 1 scht, 1 lá, 1 u, 1 nóim, 1 soic", duration.toString());
};

function testDurFmtGAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 bhliain, 1 mhí, 1 seachtain, 1 lá, 1 uair, 1 nóiméad, agus 1 soicind", duration.toString());
};




function testDurFmtGAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 bhliain, 2 mhí, 2 sheachtain, 2 lá, 2 uair, 2 nóiméad, agus 2 shoicind", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtGAFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ga-IE",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1b 1m 1s 1l 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for hebrew

function testDurFmtHEFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "he-IL",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    }); 
    assertEquals("‏שנה 1, חודש 1, שבוע 1, י׳, שעה, דקה, שניה", duration.toString());
};

function testDurFmtHEFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "he-IL",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏שנה 1, חודש 1, שבוע 1, י׳, שעה, דקה, שניה", duration.toString());
};

function testDurFmtHEFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "he-IL",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏שנה 1, חודש 1, שבוע 1, י׳, ‏01:01:01", duration.toString());
};

function testDurFmtHEFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "he-IL",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1 שנה, 1 חו, 1 שב, 1 יום, 1 שעה, 1 דק׳, 1 שנ׳", duration.toString());
};

function testDurFmtHEFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "he-IL",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏שנה, חודש, שבוע 1, יום, שעה, דקה, שנ׳", duration.toString());
};

function testDurFmtHEFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "he-IL",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏שנה, חודש, שבוע, יום, שעה, דקה ושניה", duration.toString());
};




function testDurFmtHEAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "he-IL",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("‏שנתיים, חודשיים, שבועיים, יומיים, שעתיים, שתי דקות ושתי שניות", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHEFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "he-IL",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("‏שנה 1, חודש 1, שבוע 1, י׳, ‏01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for hi-IN

function testDurFmtHIFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1वर्ष, 1माह, 1 सप्ताह, 1दिन, 1घं., 1मि., 1से.", duration.toString());
};

function testDurFmtHIFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1वर्ष, 1माह, 1 सप्ताह, 1दिन, 1घं., 1मि., 1से.", duration.toString());
};

function testDurFmtHIFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1वर्ष, 1माह, 1 सप्ताह, 1दिन, 1:01:01", duration.toString());
};

function testDurFmtHIFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 साल, 1 मह, 1 सप, 1 दि., 1 घं., 1 मि, 1 से", duration.toString());
};

function testDurFmtHIFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 वर्ष, 1 माह, 1 सप्ताह, 1 दिन, 1 घं., 1 मि., 1 सेक.", duration.toString());
};

function testDurFmtHIFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 वर्ष, 1 माह, 1 सप्ताह, 1 दिन, 1 घंटा, 1 मिनट, और 1 सेकंड", duration.toString());
};


function testDurFmtHIAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 वर्ष, 2 माह, 2 सप्ताह, 2 दिन, 2 घंटे, 2 मिनट, और 2 सेकंड", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHIFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "hi-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1वर्ष, 1माह, 1 सप्ताह, 1दिन, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for marathi mr-IN

function testDurFmtMRFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("१व १म १आ १दि १ता १मि १से", duration.toString());
};

function testDurFmtMRFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("१व १म १आ १दि १ता १मि १से", duration.toString());
};

function testDurFmtMRFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("१व १म १आ १दि १:०१:०१", duration.toString());
};

function testDurFmtMRFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("१ वर, १ मह, १ आठ, १ दि, १ तास, १ मि, १ से", duration.toString());
};

function testDurFmtMRFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("१ वर्ष, १ महिना, १ आ, १ दिवस, १ ता, १ मिनि, १ से", duration.toString());
};

function testDurFmtMRFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("१ वर्ष, १ महिना, १ आठवडा, १ दिवस, १ तास, १ मिनिट आणि १ सेकंद", duration.toString());
};


function testDurFmtMRAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("२ वर्षे, २ महिने, २ आठवडे, २ दिवस, २ तास, २ मिनिटे आणि २ सेकंद", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};


function testDurFmtMRFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "mr-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("१व १म १आ १दि १:०१:०१", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//testa cases for Telugu (te-IN)

function testDurFmtTEFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "te-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1సం, 1నె, 1వా, 1రో, 1గం, 1ని, 1సె", duration.toString());
};

function testDurFmtTEFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "te-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1సం, 1నె, 1వా, 1రో, 1గం, 1ని, 1సె", duration.toString());
};

function testDurFmtTEFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "te-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1సం, 1నె, 1వా, 1రో, 1:01:01", duration.toString());
};


function testDurFmtTEFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "te-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 సం, 1 నెల, 1 వా, 1 రో, 1 గంట, 1 ని, 1 సె", duration.toString());
};

function testDurFmtTEFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "te-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 సం., 1 నె., 1 వా., 1 రోజు, 1 గం., 1 నిమి., 1 సె.", duration.toString());
};

function testDurFmtTEFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "te-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 సంవత్సరం, 1 నెల, 1 వారం, 1 రోజు, 1 గంట, 1 నిమిషం, 1 సెకను", duration.toString());
};


function testDurFmtTEAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "te-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 సంవత్సరాలు, 2 నెలలు, 2 వారాలు, 2 రోజులు, 2 గంటలు, 2 నిమిషాలు, 2 సెకన్లు", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTEFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "te-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1సం, 1నె, 1వా, 1రో, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for kannada(kn-IN)

function testDurFmtKNFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ವ, 1ತಿಂ., 1ವಾರ, 1ದಿನ, 1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ", duration.toString());
};

function testDurFmtKNFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ವ, 1ತಿಂ., 1ವಾರ, 1ದಿನ, 1ಗಂ., 1ನಿಮಿ, 1ಸೆಕೆಂ", duration.toString());
};

function testDurFmtKNFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ವ, 1ತಿಂ., 1ವಾರ, 1ದಿನ, 1:01:01", duration.toString());
};

function testDurFmtKNFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ವರ, 1 ತಿ, 1 ವಾ, 1 ದಿನ, 1 ಗಂ., 1 ನಿ, 1 ಸೆ", duration.toString());
};

function testDurFmtKNFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ವರ್ಷ, 1 ತಿಂ., 1 ವಾರ, 1 ದಿನ, 1 ಗಂ., 1 ನಿಮಿ, 1 ಸೆಕೆಂ", duration.toString());
};


function testDurFmtKNFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ವರ್ಷ, 1 ತಿಂಗಳು, 1 ವಾರಗಳು, 1 ದಿನ, 1 ಗಂಟೆ, 1 ನಿಮಿಷ, ಮತ್ತು 1 ಸೆಕೆಂಡ್", duration.toString());
};


function testDurFmtKNAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ವರ್ಷಗಳು, 2 ತಿಂಗಳು, 2 ವಾರಗಳು, 2 ದಿನಗಳು, 2 ಗಂಟೆಗಳು, 2 ನಿಮಿಷಗಳು, ಮತ್ತು 2 ಸೆಕೆಂಡುಗಳು", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKNFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "kn-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1ವ, 1ತಿಂ., 1ವಾರ, 1ದಿನ, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for tamil(ta-IN)

function testDurFmtTAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ஆ 1 மா 1 வா 1 நா 1 ம.நே. 1 நிமி. 1 வி.", duration.toString());
};

function testDurFmtTAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ஆ 1 மா 1 வா 1 நா 1 ம.நே. 1 நிமி. 1 வி.", duration.toString());
};

function testDurFmtTAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ஆ 1 மா 1 வா 1 நா 1:01:01", duration.toString());
};

function testDurFmtTAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 வர, 1 மா, 1 வா, 1 நா, 1 மண, 1 நி, 1 வி", duration.toString());
};

function testDurFmtTAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ஆண்டு, 1 மாதம், 1 வாரம், 1 நாள், 1 மணிநேரம், 1 நிமிடம், 1 விநாடி", duration.toString());
};

function testDurFmtTAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ஆண்டு, 1 மாதம், 1 வாரம், 1 நாள், 1 மணிநேரம், 1 நிமிடம், 1 விநாடி", duration.toString());
};


function testDurFmtTAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ஆண்டுகள், 2 மாதங்கள், 2 வாரங்கள், 2 நாட்கள், 2 மணிநேரங்கள், 2 நிமிடங்கள், 2 விநாடிகள்", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTAFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ta-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 ஆ 1 மா 1 வா 1 நா 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Malaylam(ml-IN)

function testDurFmtMLFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 വ 1 മാ 1 ആ 1 ദി 1 മ 1 മി. 1 സെ.", duration.toString());
};

function testDurFmtMLFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 വ 1 മാ 1 ആ 1 ദി 1 മ 1 മി. 1 സെ.", duration.toString());
};

function testDurFmtMLFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 വ 1 മാ 1 ആ 1 ദി 1:01:01", duration.toString());
};

function testDurFmtMLFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 വർ, 1 മാ, 1 ആഴ, 1 ദി, 1 മണ, 1 മി, 1 സെ", duration.toString());
};

function testDurFmtMLFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 വ, 1 മാസം, 1 ആ, 1 ദിവസം‌, 1 മ, 1 മിനിറ്റ്, 1 സെ.", duration.toString());
};

function testDurFmtMLFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 വർഷം, 1 മാസം, 1 ആഴ്ച, 1 ദിവസം, 1 മണിക്കൂർ, 1 മിനിറ്റ്, 1 സെക്കൻഡ്", duration.toString());
};


function testDurFmtMLAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 വർഷം, 2 മാസം, 2 ആഴ്ച, 2 ദിവസം, 2 മണിക്കൂർ, 2 മിനിറ്റ്, 2 സെക്കൻഡ്", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMLFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ml-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 വ 1 മാ 1 ആ 1 ദി 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Gujrati(gu-IN)

function testDurFmtGUFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 વ, 1 મ, 1 અઠ., 1 દિ, 1 ક, 1 મિ, 1 સે", duration.toString());
};

function testDurFmtGUFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 વ, 1 મ, 1 અઠ., 1 દિ, 1 ક, 1 મિ, 1 સે", duration.toString());
};

function testDurFmtGUFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 વ, 1 મ, 1 અઠ., 1 દિ, 1:01:01", duration.toString());
};

function testDurFmtGUFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 વર, 1 મહ, 1 અઠ., 1 દિ, 1 કલ, 1 મિ, 1 સે", duration.toString());
};


function testDurFmtGUFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 વર્ષ, 1 મહિનો, 1 અઠ., 1 દિવસ, 1 કલાક, 1 મિનિટ, 1 સેકંડ", duration.toString());
};

function testDurFmtGUFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 વર્ષ, 1 મહિનો, 1 અઠવાડિયું, 1 દિવસ, 1 કલાક, 1 મિનિટ, 1 સેકંડ", duration.toString());
};


function testDurFmtGUAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 વર્ષ, 2 મહિના, 2 અઠવાડિયા, 2 દિવસ, 2 કલાક, 2 મિનિટ, 2 સેકંડ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtGUFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "gu-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 વ, 1 મ, 1 અઠ., 1 દિ, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for Bengali(bn-IN)

function testDurFmtBNFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড", duration.toString());
};

function testDurFmtBNFormatShortDefaultStyleNative() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	useNative: true
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড", duration.toString());
};

function testDurFmtBNFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড", duration.toString());
};

function testDurFmtBNFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১:০১:০১", duration.toString());
};

function testDurFmtBNFormatShortClockNative() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	useNative: true
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১:০১:০১", duration.toString());
};

function testDurFmtBNFormatShortClockWestern() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	useNative: false
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন, 1:01:01", duration.toString());
};

function testDurFmtBNFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("১ বছর, ১ মাস, ১ সপ, ১ দিন, ১ ঘন, ১ মি, ১ সে", duration.toString());
};

function testDurFmtBNFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড", duration.toString());
};

function testDurFmtBNFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১ ঘন্টা, ১ মিনিট, ১ সেকেন্ড", duration.toString());
};


function testDurFmtBNAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("২ বছর, ২ মাস, ২ সপ্তাহ, ২ দিন, ২ ঘন্টা, ২ মিনিট, ২ সেকেন্ড", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtBNFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("১ বছর, ১ মাস, ১ সপ্তাহ, ১ দিন, ১:০১:০১", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtBNFormatShortClockAsyncWestern() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "bn-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	useNative: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 বছর, 1 মাস, 1 সপ্তাহ, 1 দিন, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Assamese(as-IN)
/*
function testDurFmtASFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "as-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "as-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "as-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1வ 1ம 1வ 1ந 1:01:01", duration.toString());
};

function testDurFmtASFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "as-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "as-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("y", duration.toString());
};

function testDurFmtASFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "as-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("y", duration.toString());
};


function testDurFmtASAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "as-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("y", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtASFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "as-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("y", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
*/

//test cases for Punjabi(pa-IN)

function testDurFmtPAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ", duration.toString());
};

function testDurFmtPAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ", duration.toString());
};

function testDurFmtPAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1:01:01", duration.toString());
};

function testDurFmtPAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ਸਾ, 1 ਮ, 1 ਹਫ਼, 1 ਦਿ, 1 ਘੰਟੇ, 1 ਮਿੰ, 1 ਸਕ", duration.toString());
};

function testDurFmtPAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ", duration.toString());
};

function testDurFmtPAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1 ਘੰਟਾ, 1 ਮਿੰਟ, 1 ਸਕਿੰਟ", duration.toString());
};


function testDurFmtPAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ਸਾਲ, 2 ਮਹੀਨੇ, 2 ਹਫ਼ਤੇ, 2 ਦਿਨ, 2 ਘੰਟੇ, 2 ਮਿੰਟ, 2 ਸਕਿੰਟ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtPAFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pa-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 ਸਾਲ, 1 ਮਹੀਨਾ, 1 ਹਫ਼ਤਾ, 1 ਦਿਨ, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Urdu(ur-IN)

function testDurFmtURFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال ۱ مہینہ ۱ ہفتہ ۱ دن ۱ گھنٹہ ۱ منٹ ۱s", duration.toString());
};

function testDurFmtURFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال ۱ مہینہ ۱ ہفتہ ۱ دن ۱ گھنٹہ ۱ منٹ ۱s", duration.toString());
};

function testDurFmtURFormatShortTextWestern() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "short",
    	style: "text",
    	useNative: false
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1 سال 1 مہینہ 1 ہفتہ 1 دن 1 گھنٹہ 1 منٹ 1s", duration.toString());
};

function testDurFmtURFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال ۱ مہینہ ۱ ہفتہ ۱ دن ‏۱:۰۱:۰۱", duration.toString());
};

function testDurFmtURFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال، ۱ مہ، ۱ ہف، ۱ دن، ۱ گھ، ۱ منٹ، ۱ سی", duration.toString());
};

function testDurFmtURFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال، ۱ مہینہ، ۱ ہفتہ، ۱ دن، ۱ گھنٹہ، ۱ منٹ، ۱ سیکنڈ", duration.toString());
};

function testDurFmtURFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏۱ سال, ۱ مہینہ, ۱ ہفتہ, ۱ دن, ۱ گھنٹہ, ۱ منٹ، ۱ سیکنڈ", duration.toString());
};

function testDurFmtURAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("‏۲ سال, ۲ مہینے, ۲ ہفتے, ۲ دن, ۲ گھنٹے, ۲ منٹ، ۲ سیکنڈ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtURAsyncWithLocaleWestern() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "full",
    	sync: false,
    	useNative: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("‏2 سال, 2 مہینے, 2 ہفتے, 2 دن, 2 گھنٹے, 2 منٹ، 2 سیکنڈ", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtURFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ur-IN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("‏۱ سال ۱ مہینہ ۱ ہفتہ ۱ دن ‏۱:۰۱:۰۱", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for croation

function testDurFmtHRFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g. 1 mj. 1 tj. 1 d. 1 h 1 m 1 s", duration.toString());
};

function testDurFmtHRFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g. 1 mj. 1 tj. 1 d. 1 h 1 m 1 s", duration.toString());
};

function testDurFmtHRFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g. 1 mj. 1 tj. 1 d. 01:01:01", duration.toString());
};

function testDurFmtHRFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 g., 1 mj., 1 tj., 1 dan, 1 sat, 1 min, 1 se", duration.toString());
};

function testDurFmtHRFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g., 1 mj., 1 tj., 1 dan, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtHRFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 godina, 1 mjesec, 1 tjedan, 1 dan, 1 sat, 1 minuta i 1 sekunda", duration.toString());
};


function testDurFmtHRAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 godine, 2 mjeseca, 2 tjedna, 2 dana, 2 sata, 2 minute i 2 sekunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHRFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "hr-HR",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 g. 1 mj. 1 tj. 1 d. 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for hungarian
function testDurFmtHUFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 év, 1 h., 1 hét, 1 nap, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtHUFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 év, 1 h., 1 hét, 1 nap, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtHUFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 év, 1 h., 1 hét, 1 nap, 1:01:01", duration.toString());
};

function testDurFmtHUFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 év, 1 hó, 1 hét, 1 nap, 1 óra, 1 pe, 1 mp", duration.toString());
};

function testDurFmtHUFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 év, 1 hónap, 1 hét, 1 nap, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtHUFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 év, 1 hónap, 1 hét, 1 nap, 1 óra, 1 perc és 1 másodperc", duration.toString());
};


function testDurFmtHUAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 év, 2 hónap, 2 hét, 2 nap, 2 óra, 2 perc és 2 másodperc", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtHUFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "hu-HU",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 év, 1 h., 1 hét, 1 nap, 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for indonesia


function testDurFmtIDFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "id-ID",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk", duration.toString());
};

function testDurFmtIDFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "id-ID",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk", duration.toString());
};

function testDurFmtIDFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "id-ID",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn, 1 bln, 1 mgg, 1 hr, 01.01.01", duration.toString());
};

function testDurFmtIDFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "id-ID",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 th, 1 bl, 1 mg, 1 hr, 1 ja, 1 mn, 1 dt", duration.toString());
};

function testDurFmtIDFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "id-ID",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn, 1 bln, 1 mgg, 1 hr, 1 j, 1 mnt, 1 dtk", duration.toString());
};

function testDurFmtIDFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "id-ID",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 tahun, 1 bulan, 1 minggu, 1 hari, 1 jam, 1 menit, 1 detik", duration.toString());
};


function testDurFmtIDAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "id-ID",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 tahun, 2 bulan, 2 minggu, 2 hari, 2 jam, 2 menit, 2 detik", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtIDFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "id-ID",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 thn, 1 bln, 1 mgg, 1 hr, 01.01.01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for Italy

function testDurFmtITFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "it-IT",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 anno, 1 mesi, 1 sett., 1 gg, 1 h, 1 m, 1 s", duration.toString());
};

function testDurFmtITFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "it-IT",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 anno, 1 mesi, 1 sett., 1 gg, 1 h, 1 m, 1 s", duration.toString());
};

function testDurFmtITFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "it-IT",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 anno, 1 mesi, 1 sett., 1 gg, 01:01:01", duration.toString());
};

function testDurFmtITFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "it-IT",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 an, 1 me, 1 set, 1 g, 1 h, 1 mn, 1 se", duration.toString());
};

function testDurFmtITFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "it-IT",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 anno, 1 mese, 1 settimana, 1 giorno, 1 h, 1 min, 1 sec", duration.toString());
};

function testDurFmtITFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "it-IT",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 anno, 1 mese, 1 settimana, 1 giorno, 1 ora, 1 minuto e 1 secondo", duration.toString());
};


function testDurFmtITAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "it-IT",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 anni, 2 mesi, 2 settimane, 2 giorni, 2 ore, 2 minuti e 2 secondi", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtITFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "it-IT",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 anno, 1 mesi, 1 sett., 1 gg, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for japanese

function testDurFmtJAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1か月1週間1日1時間1分1秒1ミリ秒", duration.toString());
};

function testDurFmtJAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1か月1週間1日1時間1分1秒1ミリ秒", duration.toString());
};

function testDurFmtJAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年1か月1週間1日1:01:01", duration.toString());
};

function testDurFmtJAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1年 1ヶ月 1週間 1日 1時間 1分 1秒 1ミリ秒", duration.toString());
};

function testDurFmtJAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 年 1 か月 1 週間 1 日 1 時間 1 分 1 秒 1 ミリ秒", duration.toString());
};

function testDurFmtJAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1 年、1 か月、1 週間、1 日、1 時間、1 分、1 秒、1 ミリ秒", duration.toString());
};


function testDurFmtJAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2,
    			millisecond: 2
    	    });
    	    assertEquals("2 年、2 か月、2 週間、2 日、2 時間、2 分、2 秒、2 ミリ秒", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtJAFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ja-JP",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1,
    			millisecond: 1
    	    });
    	    assertEquals("1年1か月1週間1日1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for kk-Cyrl-KZ

function testDurFmtKKFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж., 1 ай, 1 апта, 1 т, 1 сағат, 1 мин, 1 сек.", duration.toString());
};

function testDurFmtKKFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж., 1 ай, 1 апта, 1 т, 1 сағат, 1 мин, 1 сек.", duration.toString());
};

function testDurFmtKKFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж., 1 ай, 1 апта, 1 т, 01:01:01", duration.toString());
};


function testDurFmtKKFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж., 1 ай, 1 апта, 1 тәулік, 1 сағат, 1 мин, 1 секунд", duration.toString());
};

function testDurFmtKKFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 жыл, 1 ай, 1 апта, 1 тәулік, 1 сағат, 1 минут, 1 секунд", duration.toString());
};


function testDurFmtKKAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 жыл, 2 ай, 2 апта, 2 тәулік, 2 сағат, 2 минут, 2 секунд", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKKFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "kk-Cyrl-KZ",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 ж., 1 ай, 1 апта, 1 т, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for ko-KR

function testDurFmtKOFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1년 1개월 1주 1일 1시간 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1년 1개월 1주 1일 1시간 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1년 1개월 1주 1일 1:01:01", duration.toString());
};

function testDurFmtKOFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1년 1개월 1주 1일 1시간 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1년 1개월 1주 1일 1시간 1분 1초 1밀리초", duration.toString());
};

function testDurFmtKOFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1,
    	millisecond: 1
    });
    assertEquals("1년 1개월 1주 1일 1시간 1분 1초 1밀리초", duration.toString());
};


function testDurFmtKOAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2,
    	millisecond: 1
    	    });
    	    assertEquals("2년 2개월 2주 2일 2시간 2분 2초 1밀리초", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtKOFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ko-KR",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1년 1개월 1주 1일 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

function testDurFmtKUFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ku-Arab-IQ",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1س 1م 1ه 1ر 1ک 1خ 1چ", duration.toString());
};

function testDurFmtKUFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ku-Arab-IQ",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1س 1م 1ه 1ر 1ک 1خ 1چ", duration.toString());
};

function testDurFmtKUFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ku-Arab-IQ",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1س 1م 1ه 1ر 01:01:01", duration.toString());
};

function testDurFmtKUFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ku-Arab-IQ",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1 سا 1 ما 1 هە 1 رۆ 1 کات 1 خو 1 چر", duration.toString());
};

function testDurFmtKUFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ku-Arab-IQ",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1 ساڵ 1 مانگ 1 هەفتە 1 رۆژ 1 کاتژ 1 خول 1 چرک", duration.toString());
};

function testDurFmtKUFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ku-Arab-IQ",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("‏1 ساڵ, 1 مانگ, 1 هەفتە, 1 رۆژ, 1 کاتژمێر, 1 خولەک,  1 چرکە", duration.toString());
};

//test cases for lt-LT

function testDurFmtLTFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 m. 1 mėn. 1 sav. 1 d. 1 h 1 min. 1 s", duration.toString());
};

function testDurFmtLTFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 m. 1 mėn. 1 sav. 1 d. 1 h 1 min. 1 s", duration.toString());
};

function testDurFmtLTFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 m. 1 mėn. 1 sav. 1 d. 01:01:01", duration.toString());
};

function testDurFmtLTFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 m. 1 mė 1 sa 1 d. 1 va 1 mi 1 se", duration.toString());
};

function testDurFmtLTFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 m. 1 mėn. 1 sav. 1 d. 1 val. 1 min. 1 sek.", duration.toString());
};

function testDurFmtLTFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 metai 1 mėnuo 1 savaitė 1 diena 1 valanda 1 minutė ir 1 sekundė", duration.toString());
};


function testDurFmtLTAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 metai 2 mėnesiai 2 savaitės 2 dienos 2 valandos 2 minutės ir 2 sekundės", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtLTFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "lt-LT",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 m. 1 mėn. 1 sav. 1 d. 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for lv-LV

function testDurFmtLVFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1g. 1 mēn. 1 ned. 1d 1h 1 min 1s", duration.toString());
};

function testDurFmtLVFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1g. 1 mēn. 1 ned. 1d 1h 1 min 1s", duration.toString());
};

function testDurFmtLVFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1g. 1 mēn. 1 ned. 1d 01:01:01", duration.toString());
};

function testDurFmtLVFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 g., 1 mē, 1 ne, 1 di, 1 st, 1 min, 1 se", duration.toString());
};

function testDurFmtLVFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g., 1 mēn., 1 ned., 1 d., 1 st., 1 min., 1 sek.", duration.toString());
};

function testDurFmtLVFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 gads, 1 mēnesis, 1 nedēļa, 1 diena, 1 stunda, 1 minūte un 1 sekunde", duration.toString());
};


function testDurFmtLVAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 gadi, 2 mēneši, 2 nedēļas, 2 dienas, 2 stundas, 2 minūtes un 2 sekundes", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtLVFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "lv-LV",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1g. 1 mēn. 1 ned. 1d 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for mk-MK

function testDurFmtMKFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 год., 1 мес., 1 сед., 1 ден, 1 час, 1 мин., 1 сек.", duration.toString());
};

function testDurFmtMKFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 год., 1 мес., 1 сед., 1 ден, 1 час, 1 мин., 1 сек.", duration.toString());
};

function testDurFmtMKFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 год., 1 мес., 1 сед., 1 ден, 01:01:01", duration.toString());
};

function testDurFmtMKFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 год, 1 мсц, 1 нед, 1 ден, 1 час, 1 мин, 1 сек", duration.toString());
};

function testDurFmtMKFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 год., 1 мес., 1 сед., 1 ден, 1 час, 1 мин., 1 сек.", duration.toString());
};

function testDurFmtMKFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 година, 1 месец, 1 седмица, 1 ден, 1 час, 1 минута и 1 секунда", duration.toString());
};


function testDurFmtMKAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 години, 2 месеци, 2 седмици, 2 дена, 2 часа, 2 минути и 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMKFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "mk-MK",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 год., 1 мес., 1 сед., 1 ден, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for mn-Cyrl-MN

function testDurFmtMNFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "mn-Cyrl-MN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж, 1 ср, 1 д/х, 1 ө, 1 ц, 1 м, 1 с", duration.toString());
};

function testDurFmtMNFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "mn-Cyrl-MN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж, 1 ср, 1 д/х, 1 ө, 1 ц, 1 м, 1 с", duration.toString());
};

function testDurFmtMNFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "mn-Cyrl-MN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ж, 1 ср, 1 д/х, 1 ө, 01:01:01", duration.toString());
};

function testDurFmtMNFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "mn-Cyrl-MN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 жи, 1 са, 1 до, 1 хо, 1 ца, 1 ми, 1 се", duration.toString());
};

function testDurFmtMNFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "mn-Cyrl-MN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 жил, 1 сар, 1 дол/хон, 1 өдөр, 1 цаг, 1 мин, 1 сек", duration.toString());
};

function testDurFmtMNFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "mn-Cyrl-MN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 жил, 1 сар, 1 долоо хоног, 1 өдөр, 1 цаг, 1 минут, 1 секунд", duration.toString());
};

//test cases for ms-MY

function testDurFmtMSFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn 1 bln 1 mgu 1 h 1 j 1 min 1 s", duration.toString());
};

function testDurFmtMSFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn 1 bln 1 mgu 1 h 1 j 1 min 1 s", duration.toString());
};

function testDurFmtMSFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn 1 bln 1 mgu 1 h 1:01:01", duration.toString());
};

function testDurFmtMSFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn, 1 bu, 1 mi, 1 ha, 1 jam, 1 min, 1 sa", duration.toString());
};

function testDurFmtMSFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 thn, 1 bln, 1 mgu, 1 hari, 1 j, 1 min, 1 saat", duration.toString());
};

function testDurFmtMSFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 tahun, 1 bulan, 1 minggu, 1 hari, 1 jam, 1 minit, 1 saat", duration.toString());
};


function testDurFmtMSAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 tahun, 2 bulan, 2 minggu, 2 hari, 2 jam, 2 minit, 2 saat", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtMSFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ms-MY",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 thn 1 bln 1 mgu 1 h 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for nb-NO


function testDurFmtNBFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1å, 1 m, 1u, 1d, 1t, 1m, 1s", duration.toString());
};

function testDurFmtNBFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1å, 1 m, 1u, 1d, 1t, 1m, 1s", duration.toString());
};

function testDurFmtNBFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1å, 1 m, 1u, 1d, 01.01.01", duration.toString());
};

function testDurFmtNBFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 år, 1 md., 1 uke, 1 dag, 1 ti, 1 min, 1 sek", duration.toString());
};

function testDurFmtNBFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 mnd, 1 u, 1 d, 1 t, 1 min, 1 sek", duration.toString());
};

function testDurFmtNBFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 måned, 1 uke, 1 døgn, 1 time, 1 minutt og 1 sekund", duration.toString());
};


function testDurFmtNBAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 år, 2 måneder, 2 uker, 2 døgn, 2 timer, 2 minutter og 2 sekunder", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtNBFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "nb-NO",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1å, 1 m, 1u, 1d, 01.01.01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for nl-NL

function testDurFmtNLFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 jr, 1 m, 1 w, 1 d, 1 u, 1 m, 1 s", duration.toString());
};

function testDurFmtNLFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 jr, 1 m, 1 w, 1 d, 1 u, 1 m, 1 s", duration.toString());
};

function testDurFmtNLFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 jr, 1 m, 1 w, 1 d, 01:01:01", duration.toString());
};

function testDurFmtNLFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 jr, 1 mn, 1 wk, 1 da, 1 u, 1 mi, 1 se", duration.toString());
};

function testDurFmtNLFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 jr, 1 mnd, 1 wk, 1 dag, 1 uur, 1 min, 1 sec", duration.toString());
};

function testDurFmtNLFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 jaar, 1 maand, 1 week, 1 dag, 1 uur, 1 minuut, 1 seconde", duration.toString());
};


function testDurFmtNLAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 jaar, 2 maanden, 2 weken, 2 dagen, 2 uur, 2 minuten, 2 seconden", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtNLFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "nl-NL",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 jr, 1 m, 1 w, 1 d, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for pl-PL

function testDurFmtPLFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 m-c, 1 tydz., 1 d., 1 godz., 1 min, 1 s", duration.toString());
};

function testDurFmtPLFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 m-c, 1 tydz., 1 d., 1 godz., 1 min, 1 s", duration.toString());
};

function testDurFmtPLFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 m-c, 1 tydz., 1 d., 01:01:01", duration.toString());
};

function testDurFmtPLFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 rok, 1 mi, 1 ty, 1 dz, 1 go, 1 mi, 1 se", duration.toString());
};

function testDurFmtPLFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 rok, 1 mies., 1 tydz., 1 dzień, 1 godz., 1 min, 1 sek.", duration.toString());
};

function testDurFmtPLFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 rok, 1 miesiąc, 1 tydzień, 1 dzień, 1 godzina, 1 minuta i 1 sekunda", duration.toString());
};




function testDurFmtPLFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pl-PL",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 r., 1 m-c, 1 tydz., 1 d., 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for pt-BR

function testDurFmtPTFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtPTFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtPTFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 01:01:01", duration.toString());
};

function testDurFmtPTFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 an, 1 mê, 1 sm, 1 di, 1 hr, 1 mn, 1 seg", duration.toString());
};

function testDurFmtPTFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 seg", duration.toString());
};

function testDurFmtPTFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 semana, 1 dia, 1 hora, 1 minuto e 1 segundo", duration.toString());
};


function testDurFmtPTAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 anos, 2 meses, 2 semanas, 2 dias, 2 horas, 2 minutos e 2 segundos", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtPTFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pt-BR",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for ro-RO

function testDurFmtROFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a, 1 l, 1 săpt., 1 z, 1 h, 1 m, 1 s", duration.toString());
};

function testDurFmtROFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a, 1 l, 1 săpt., 1 z, 1 h, 1 m, 1 s", duration.toString());
};

function testDurFmtROFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 a, 1 l, 1 săpt., 1 z, 01:01:01", duration.toString());
};

function testDurFmtROFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 an, 1 lu, 1 să, 1 zi, 1 oră, 1 mi, 1 se", duration.toString());
};

function testDurFmtROFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 an, 1 lună, 1 săpt., 1 zi, 1 oră, 1 min., 1 sec.", duration.toString());
};

function testDurFmtROFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 an, 1 lună, 1 săptămână, 1 zi, 1 oră, 1 minut, 1 secundă", duration.toString());
};


function testDurFmtROAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ani, 2 luni, 2 săptămâni, 2 zile, 2 ore, 2 minute, 2 secunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtROFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ro-RO",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 a, 1 l, 1 săpt., 1 z, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for ru-RU

function testDurFmtRUFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г. 1 м. 1 н. 1 д. 1 ч 1 мин 1 с", duration.toString());
};

function testDurFmtRUFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г. 1 м. 1 н. 1 д. 1 ч 1 мин 1 с", duration.toString());
};

function testDurFmtRUFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г. 1 м. 1 н. 1 д. 1:01:01", duration.toString());
};

function testDurFmtRUFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г, 1 ме, 1 не, 1 дн, 1 ч, 1 ми, 1 се", duration.toString());
};

function testDurFmtRUFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 г., 1 мес, 1 нед, 1 дн, 1 ч, 1 мин, 1 сек", duration.toString());
};

function testDurFmtRUFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 год, 1 месяц, 1 неделя, 1 день, 1 час, 1 минута и 1 секунда", duration.toString());
};


function testDurFmtRUAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 года, 2 месяца, 2 недели, 2 дня, 2 часа, 2 минуты и 2 секунды", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtRUFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "ru-RU",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 г. 1 м. 1 н. 1 д. 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for sk-SK

function testDurFmtSKFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 m., 1 t., 1 d., 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtSKFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 m., 1 t., 1 d., 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtSKFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 m., 1 t., 1 d., 1:01:01", duration.toString());
};

function testDurFmtSKFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 me, 1 tý, 1 d., 1 ho, 1 min, 1 se", duration.toString());
};

function testDurFmtSKFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 r., 1 mes., 1 týž., 1 deň, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtSKFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 rok, 1 mesiac, 1 týždeň, 1 deň, 1 hodina, 1 minúta, 1 sekunda", duration.toString());
};


function testDurFmtSKAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 roky, 2 mesiace, 2 týždne, 2 dni, 2 hodiny, 2 minúty, 2 sekundy", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSKFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sk-SK",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 r., 1 m., 1 t., 1 d., 1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for sq-AL

function testDurFmtSQFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.", duration.toString());
};

function testDurFmtSQFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.", duration.toString());
};

function testDurFmtSQFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 01:01:01", duration.toString());
};

function testDurFmtSQFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.", duration.toString());
};

function testDurFmtSQFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 min., 1 sek.", duration.toString());
};

function testDurFmtSQFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 1 orë, 1 minutë e 1 sekondë", duration.toString());
};


function testDurFmtSQAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 vjet, 2 muaj, 2 javë, 2 ditë, 2 orë, 2 minuta e 2 sekonda", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSQFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sq-AL",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 vit, 1 muaj, 1 javë, 1 ditë, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for sr-Latn-RS

function testDurFmtSRFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g, 1 m, 1 n, 1 d, 1 sat, 1 m, 1 sek", duration.toString());
};

function testDurFmtSRFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g, 1 m, 1 n, 1 d, 1 sat, 1 m, 1 sek", duration.toString());
};

function testDurFmtSRFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 g, 1 m, 1 n, 1 d, 01.01.01", duration.toString());
};


function testDurFmtSRFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 god, 1 mes., 1 ned., 1 dan, 1 sat, 1 min, 1 sek", duration.toString());
};

function testDurFmtSRFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 godina, 1 mesec, 1 nedelja, 1 dan, 1 sat, 1 minut i 1 sekunda", duration.toString());
};


function testDurFmtSRAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 godine, 2 meseca, 2 nedelje, 2 dana, 2 sata, 2 minuta i 2 sekunde", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSRFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sr-Latn-RS",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 g, 1 m, 1 n, 1 d, 01.01.01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for th-TH

function testDurFmtTHFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "th-TH",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ปี 1เดือน 1สัปดาห์ 1วัน 1ชม. 1นาที 1วิ", duration.toString());
};

function testDurFmtTHFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "th-TH",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ปี 1เดือน 1สัปดาห์ 1วัน 1ชม. 1นาที 1วิ", duration.toString());
};

function testDurFmtTHFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "th-TH",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1ปี 1เดือน 1สัปดาห์ 1วัน 01:01:01", duration.toString());
};

function testDurFmtTHFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "th-TH",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ปี 1 เด 1 สั 1 วัน 1 ชั 1 นา 1 วิ", duration.toString());
};

function testDurFmtTHFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "th-TH",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ปี 1 เดือน 1 สัปดาห์ 1 วัน 1 ชม. 1 นาที 1 วิ", duration.toString());
};

function testDurFmtTHFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "th-TH",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ปี 1 เดือน 1 สัปดาห์ 1 วัน 1 ชั่วโมง 1 นาที และ 1 วินาที", duration.toString());
};


function testDurFmtTHAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "th-TH",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 ปี 2 เดือน 2 สัปดาห์ 2 วัน 2 ชั่วโมง 2 นาที และ 2 วินาที", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTHFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "th-TH",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1ปี 1เดือน 1สัปดาห์ 1วัน 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};



//test cases for uk-UA

function testDurFmtUKUAFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 р., 1 міс., 1 тиж., 1 д., 1 год, 1 хв, 1 с", duration.toString());
};

function testDurFmtUKUAFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 р., 1 міс., 1 тиж., 1 д., 1 год, 1 хв, 1 с", duration.toString());
};

function testDurFmtUKUAFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 р., 1 міс., 1 тиж., 1 д., 01:01:01", duration.toString());
};

function testDurFmtUKUAFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 р., 1 мі, 1 ти, 1 де, 1 го, 1 хв., 1 се", duration.toString());
};

function testDurFmtUKUAFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 р., 1 міс., 1 тиж., 1 д., 1 год, 1 хв, 1 с", duration.toString());
};

function testDurFmtUKUAFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 рік, 1 місяць, 1 тиждень, 1 день, 1 година, 1 хвилина і 1 секунда", duration.toString());
};

//test cases for uz-Cyrl-UZ

function testDurFmtUKUAAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 роки, 2 місяці, 2 тижні, 2 дні, 2 години, 2 хвилини і 2 секунди", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtUKUAFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "uk-UA",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 р., 1 міс., 1 тиж., 1 д., 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for uz-Cyrl-UZ

function testDurFmtUZFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 й, 1 ой, 1 ҳафт, 1 к, 1 с, 1 дақ, 1 сон", duration.toString());
};

function testDurFmtUZFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 й, 1 ой, 1 ҳафт, 1 к, 1 с, 1 дақ, 1 сон", duration.toString());
};

function testDurFmtUZFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 й, 1 ой, 1 ҳафт, 1 к, 01:01:01", duration.toString());
};

function testDurFmtUZFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 уи, 1 оы, 1 ха, 1 ку, 1 со, 1 да, 1 се", duration.toString());
};

function testDurFmtUZFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 й, 1 ой, 1 ҳафт, 1 кун, 1 соат, 1 дақ, 1 сония", duration.toString());
};

function testDurFmtUZFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 йил, 1 ой, 1 ҳафта, 1 кун, 1 соат, 1 дақиқа, 1 сония", duration.toString());
};

function testDurFmtUZAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 йил, 2 ой, 2 ҳафта, 2 кун, 2 соат, 2 дақиқа, 2 сония", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtUZFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "uz-Cyrl-UZ",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 й, 1 ой, 1 ҳафт, 1 к, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for uz-Latn-UZ

function testDurFmtUZLATNFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 y, 1 oy, 1 haft, 1 k, 1 soat, 1 daq, 1 son", duration.toString());
};

function testDurFmtUZLATNFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 y, 1 oy, 1 haft, 1 k, 1 soat, 1 daq, 1 son", duration.toString());
};

function testDurFmtUZLATNFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 y, 1 oy, 1 haft, 1 k, 01:01:01", duration.toString());
};

function testDurFmtUZLATNFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yi, 1 oy, 1 ha, 1 ku, 1 so, 1 da, 1 se", duration.toString());
};

function testDurFmtUZLATNFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yil, 1 oy, 1 haft, 1 kun, 1 soat, 1 daq, 1 soniya", duration.toString());
};

function testDurFmtUZLATNFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yil, 1 oy, 1 hafta, 1 kun, 1 soat, 1 daqiqa, 1 soniya", duration.toString());
};


function testDurFmtUZLATNAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 yil, 2 oy, 2 hafta, 2 kun, 2 soat, 2 daqiqa, 2 soniya", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtUZLATNFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "uz-Latn-UZ",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 y, 1 oy, 1 haft, 1 k, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for vietnemese

function testDurFmtVIFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây", duration.toString());
};

function testDurFmtVIFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây", duration.toString());
};

function testDurFmtVIFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 01:01:01", duration.toString());
};

function testDurFmtVIFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 năm, 1 th, 1 tu, 1 ng, 1 giờ, 1 ph, 1 gi", duration.toString());
};

function testDurFmtVIFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây", duration.toString());
};

function testDurFmtVIFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 1 giờ, 1 phút, 1 giây", duration.toString());
};


function testDurFmtVIAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 năm, 2 tháng, 2 tuần, 2 ngày, 2 giờ, 2 phút, 2 giây", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtVIFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "vi-VN",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 năm, 1 tháng, 1 tuần, 1 ngày, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for zh-Hant-TW

function testDurFmtZHFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年1 個月1 週1 天1 小時1 分鐘1 秒", duration.toString());

};

function testDurFmtZHFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年1 個月1 週1 天1 小時1 分鐘1 秒", duration.toString());
};

function testDurFmtZHFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年1 個月1 週1 天1:01:01", duration.toString());
};

function testDurFmtZHFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });          
    assertEquals("1 年 1 個月 1 週 1 天 1 小時 1 分鐘 1 秒", duration.toString());
};

function testDurFmtZHFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年 1 個月 1 週 1 天 1 小時 1 分鐘 1 秒", duration.toString());
};

function testDurFmtZHFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年 1 個月 1 週 1 天 1 小時 1 分鐘 1 秒", duration.toString());
};


function testDurFmtZHAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 年 2 個月 2 週 2 天 2 小時 2 分鐘 2 秒", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtZHFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "zh-Hant-TW",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 年1 個月1 週1 天1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for zh-Hank-HK

function testDurFmtZHHKFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1年1個月1週1日1小時1分1秒", duration.toString());
};


function testDurFmtZHHKFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1年1個月1週1日1小時1分1秒", duration.toString());
};

function testDurFmtZHHKFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1年1個月1週1日1:01:01", duration.toString());
};

function testDurFmtZHHKFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 年 1 個月 1 週 1 天 1 小時 1 分鐘 1 秒", duration.toString());
};

function testDurFmtZHHKFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年 1 個月 1 週 1 日 1 小時 1 分鐘 1 秒", duration.toString());
};

function testDurFmtZHHKFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 年 1 個月 1星期 1 日 1 小時 1 分鐘 1 秒", duration.toString());
};


function testDurFmtZHHKAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 年 2 個月 2星期 2 日 2 小時 2 分鐘 2 秒", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtZHHKFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "zh-Hant-HK",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1年1個月1週1日1:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for tr-TR

function testDurFmtTRFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1y 1a 1h 1g 1s 1d 1sn", duration.toString());
};

function testDurFmtTRFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1y 1a 1h 1g 1s 1d 1sn", duration.toString());
};

function testDurFmtTRFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1y 1a 1h 1g 01:01:01", duration.toString());
};

function testDurFmtTRFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yıl 1 ay 1 hf 1 gün 1 sa 1 dk 1 sn", duration.toString());
};

function testDurFmtTRFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yıl 1 ay 1 hf. 1 gün 1 sa. 1 dk. 1 sn.", duration.toString());
};

function testDurFmtTRFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 yıl 1 ay 1 hafta 1 gün 1 saat 1 dakika 1 saniye", duration.toString());
};


function testDurFmtTRAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 yıl 2 ay 2 hafta 2 gün 2 saat 2 dakika 2 saniye", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtTRFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "tr-TR",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1y 1a 1h 1g 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for swedish

function testDurFmtSVFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1å 1m 1v 1d 1h 1m 1s", duration.toString());
};

function testDurFmtSVFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1å 1m 1v 1d 1h 1m 1s", duration.toString());
};

function testDurFmtSVFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1å 1m 1v 1d 01:01:01", duration.toString());
};

function testDurFmtSVFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 må, 1 ve, 1 dy, 1 ti, 1 mi, 1 se", duration.toString());
};

function testDurFmtSVFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 mån, 1 v, 1 d, 1 tim, 1 min, 1 s", duration.toString());
};

function testDurFmtSVFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 år, 1 månad, 1 vecka, 1 dygn, 1 timme, 1 minut, 1 sekund", duration.toString());
};


function testDurFmtSVAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 år, 2 månader, 2 veckor, 2 dygn, 2 timmar, 2 minuter, 2 sekunder", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSVFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sv-SE",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1å 1m 1v 1d 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};


//test cases for sl-SI


function testDurFmtSLFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtSLFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtSLFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 l, 1 m, 1 t, 1 d, 01.01.01", duration.toString());
};

function testDurFmtSLFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 le, 1 me, 1 te, 1 dan, 1 ura, 1 min, 1 se", duration.toString());
};

function testDurFmtSLFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 l, 1 m, 1 t, 1 d, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtSLFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 leto, 1 mesec, 1 teden, 1 dan, 1 ura, 1 minuta in 1 sekunda", duration.toString());
};


function testDurFmtSLAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 leti, 2 meseca, 2 tedna, 2 dni, 2 uri, 2 minuti in 2 sekundi", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtSLFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "sl-SI",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 l, 1 m, 1 t, 1 d, 01.01.01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};

//test cases for portuguese pt-PU


function testDurFmtPTPTFormatShortDefaultStyle() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "short"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtPTPTFormatShortText() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "short",
    	style: "text"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtPTPTFormatShortClock() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "short",
    	style: "clock"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 01:01:01", duration.toString());
};

function testDurFmtPTPTFormatMedium() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "medium"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });           
    assertEquals("1 an, 1 mê, 1 sm, 1 di, 1 hr, 1 mn, 1 sg", duration.toString());
};

function testDurFmtPTPTFormatLong() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "long"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 1 h, 1 min, 1 s", duration.toString());
};

function testDurFmtPTPTFormatFull() {
    var fmt = new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "full"
    });
    assertNotNull(fmt);
    
    var duration = fmt.format({
    	year: 1,
    	month: 1,
    	week: 1,
    	day: 1,
    	hour: 1,
    	minute: 1,
    	second: 1
    });
    assertEquals("1 ano, 1 mês, 1 semana, 1 dia, 1 hora, 1 minuto e 1 segundo", duration.toString());
};


function testDurFmtPTPTAsyncWithLocale() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "full",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 2,
    	    	month: 2,
    	    	week: 2,
    	    	day: 2,
    	    	hour: 2,
    	    	minute: 2,
    	    	second: 2
    	    });
    	    assertEquals("2 anos, 2 meses, 2 semanas, 2 dias, 2 horas, 2 minutos e 2 segundos", duration.toString());
    	    callbackCalled = true;
    	}
    });
    
    assertTrue(callbackCalled);
};

function testDurFmtPTPTFormatShortClockAsync() {
	var callbackCalled = false;
    new ilib.DurFmt({
    	locale: "pt-PT",
    	length: "short",
    	style: "clock",
    	sync: false,
    	onLoad: function (fmt) {
    		assertNotNull(fmt);
    	    
    	    var duration = fmt.format({
    	    	year: 1,
    	    	month: 1,
    	    	week: 1,
    	    	day: 1,
    	    	hour: 1,
    	    	minute: 1,
    	    	second: 1
    	    });
    	    assertEquals("1 ano, 1 mês, 1 sem., 1 dia, 01:01:01", duration.toString());
    	    callbackCalled = true;
    	}
    });
    assertTrue(callbackCalled);
};
