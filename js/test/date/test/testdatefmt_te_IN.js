/*
 * testdatefmt_te_IN.js - test the date formatter object in telugu for India
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
var JulianDate = require("./../lib/JulianDate.js");
var GregorianDate = require("./../lib/GregorianDate.js");
var DateFmt = require("./../lib/DateFmt.js");
function testDateFmtINConstructorEmpty_te_IN() {
    var fmt = new DateFmt({locale: "te-IN"});
    
    assertNotUndefined(fmt);
}


function testDateFmtINSimpleShort_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "short"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		millisecond: 0
	});
    assertEquals("29-09-11", fmt.format(date));
}

function testDateFmtINSimpleMedium_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "medium"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 సెప్టెం, 2011", fmt.format(date));
}

function testDateFmtINSimpleLong_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "long"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 సెప్టెంబర్, 2011", fmt.format(date));
}

function testDateFmtINSimpleFull_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, సెప్టెంబర్ 2011", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINSimpleTimeShort_te_IN1() {
    var fmt = new DateFmt({locale: "te-IN", length: "short", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINSimpleTimeMedium_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "medium", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINSimpleTimeLong_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", timelength: "long", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINSimpleTimeFull_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINDateTimeSimpleShort_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "short", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-11 1:45 [PM]", fmt.format(date));
}

function testDateFmtINDateTimeSimpleMedium_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "medium", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 సెప్టెం, 2011 1:45 [PM]", fmt.format(date));
}

function testDateFmtINDateTimeSimpleLong_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "long", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 సెప్టెంబర్, 2011 1:45 [PM]", fmt.format(date));
}

function testDateFmtINDateTimeSimpleFull_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, సెప్టెంబర్ 2011 1:45 [PM]", fmt.format(date));
}


function testDateFmtINTemplateCalendar_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotUndefined(fmt);
    
    var date = new JulianDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011-09-29", fmt.format(date));
}



function testDateFmtINTemplateClock12SwitchHH_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", clock: "12", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateClock12Switchkk_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", clock: "12", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateClock24Switchhh_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", clock: "24", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtINTemplateClock24SwitchKK_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", clock: "24", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12hh_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", template: "hh:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault12KK_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", template: "KK:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("01:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24HH_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", template: "HH:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtINTemplateNoClockDoNotFollowLocaleDefault24kk_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", template: "kk:mm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}


function testDateFmtINTypeDate_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "date"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-11", fmt.format(date));
}

function testDateFmtINTypeTime_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINTypeDateTime_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "datetime"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-11 1:45 [PM]", fmt.format(date));
}


function testDateFmtINShortDateComponentsY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("11", fmt.format(date));
}

function testDateFmtINShortDateComponentsM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09", fmt.format(date));
}

function testDateFmtINShortDateComponentsN_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "n"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("సె", fmt.format(date));
}

function testDateFmtINShortDateComponentsD_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtINShortDateComponentsDM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09", fmt.format(date));
}

function testDateFmtINShortDateComponentsMY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09-11", fmt.format(date));
}

function testDateFmtINShortDateComponentsDMY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-11", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09, గు", fmt.format(date));
}

function testDateFmtINShortDateComponentsWDMY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29-09-11, గు", fmt.format(date));
}


function testDateFmtINFullDateComponentsY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "y"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("సెప్టెంబర్", fmt.format(date));
}

function testDateFmtINFullDateComponentsD_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "d"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29", fmt.format(date));
}

function testDateFmtINFullDateComponentsDM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "dm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, సెప్టెంబర్", fmt.format(date));
}

function testDateFmtINFullDateComponentsMY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "my"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("సెప్టెంబర్ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsDMY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "dmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, సెప్టెంబర్ 2011", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "wdm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, సెప్టెంబర్, గురువారం", fmt.format(date));
}

function testDateFmtINFullDateComponentsWDMY_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full", date: "wdmy"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29, సెప్టెంబర్ 2011, గురువారం", fmt.format(date));
}


function testDateFmtINShortTimeComponentsS_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtINShortTimeComponentsM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtINShortTimeComponentsH_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}


function testDateFmtINShortTimeComponentsHM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hm"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMS_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hms"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMA_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        time: "ahmsz"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMAZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSA_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM]", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtINShortTimeComponentsHMSAZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}


function testDateFmtINFullTimeComponentsS_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "s"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("37", fmt.format(date));
}

function testDateFmtINFullTimeComponentsM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "m"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45", fmt.format(date));
}

function testDateFmtINFullTimeComponentsH_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "h"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHM_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMS_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM]", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMA_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hma"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 [PM]", fmt.format(date));
}



function testDateFmtINFullTimeComponentsHMAZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        length: "full", 
        time: "ahmsz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSA_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", type: "time", length: "full", time: "hmsa"});
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM]", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtINFullTimeComponentsHMSAZ_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtINWithTimeZoneAndNoDST_te_IN() {
    var fmt = new DateFmt({
		locale: "te-IN", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Asia/Kolkata"
    });
    assertNotUndefined(fmt);
    
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 [PM] IST", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 సెకన్లు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("30 సెకన్లు క్రితం", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 నిమిషాలు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("10 నిమిషాలు క్రితం", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 గంటలు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 గంటలు క్రితం", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 రోజులు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("4 రోజులు క్రితం", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 వారాలు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("9 వారాలు క్రితం", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("16 నెలలు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 నెలలు క్రితం", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("14 సంవత్సరాలు తర్వాత", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_te_IN() {
    var fmt = new DateFmt({locale: "te-IN", length: "full"});
    assertNotNull(fmt);
    
    var reference = new GregorianDate({
		locale: "te-IN",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new GregorianDate({
		locale: "te-IN",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("21 సంవత్సరాలు క్రితం", fmt.formatRelative(reference, date));
}


