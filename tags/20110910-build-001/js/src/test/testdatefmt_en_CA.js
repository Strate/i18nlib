/*
 * testdatefmt_en_CA.js - test the date formatter object in Canadian English
 * 
 * Copyright © 2012, JEDL Software, Inc.
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

function testDateFmtCAConstructorEmpty() {
    var fmt = new ilib.DateFmt();
    
    assertNotNull(fmt);
}


function testDateFmtCASimpleShort() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtCASimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011", fmt.format(date));
}

function testDateFmtCASimpleLong() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep, 2011", fmt.format(date));
}

function testDateFmtCASimpleFull() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September, 2011", fmt.format(date));
}

function testDateFmtCASimpleTimeShort() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCASimpleTimeMedium() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCASimpleTimeLong() {
    var fmt = new ilib.DateFmt({locale: "en-CA", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCASimpleTimeFull() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCADateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 1:45PM", fmt.format(date));
}

function testDateFmtCADateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/2011 1:45PM", fmt.format(date));
}

function testDateFmtCADateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 Sep, 2011 1:45PM", fmt.format(date));
}

function testDateFmtCADateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September, 2011 1:45PM", fmt.format(date));
}


function testDateFmtCATemplateCalendar() {
    var fmt = new ilib.DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.JulDate({
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

function testDateFmtCATemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({locale: "en-CA", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    try {
    	fmt.format(date);
    	fail();
    } catch (str) {
    	// success
    	assertEquals("Wrong date type passed to ilib.DateFmt.format()", str);
    }
}

function testDateFmtCATemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({locale: "en-CA", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({locale: "en-CA", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({locale: "en-CA", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "en-CA", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "en-CA", locale: "en-CA", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "en-CA", locale: "en-CA", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "en-CA", locale: "en-CA", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCATemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "en-CA", locale: "en-CA", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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


function testDateFmtCATypeDate() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtCATypeTime() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCATypeDateTime() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11 1:45PM", fmt.format(date));
}


function testDateFmtCAShortDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9", fmt.format(date));
}

function testDateFmtCAShortDateComponentsN() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("S", fmt.format(date));
}

function testDateFmtCAShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9", fmt.format(date));
}

function testDateFmtCAShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("9/11", fmt.format(date));
}

function testDateFmtCAShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/9/11", fmt.format(date));
}

function testDateFmtCAShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 29/9", fmt.format(date));
}

function testDateFmtCAShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Th 29/9/11", fmt.format(date));
}


function testDateFmtCAFullDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September", fmt.format(date));
}

function testDateFmtCAFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September", fmt.format(date));
}

function testDateFmtCAFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("September 2011", fmt.format(date));
}

function testDateFmtCAFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 September, 2011", fmt.format(date));
}

function testDateFmtCAFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday 29 September", fmt.format(date));
}

function testDateFmtCAFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "en-CA", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("Thursday 29 September, 2011", fmt.format(date));
}


function testDateFmtCAShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtCAShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCAShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PDT", fmt.format(date));
}

function testDateFmtCAShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmaz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45PM PDT", fmt.format(date));
}

function testDateFmtCAShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37PM", fmt.format(date));
}

function testDateFmtCAShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmsz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PDT", fmt.format(date));
}

function testDateFmtCAShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        time: "hmsaz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37PM PDT", fmt.format(date));
}


function testDateFmtCAFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("45:37", fmt.format(date));
}

function testDateFmtCAFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
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

function testDateFmtCAFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45PM", fmt.format(date));
}

function testDateFmtCAFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45 PDT", fmt.format(date));
}

function testDateFmtCAFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45PM PDT", fmt.format(date));
}

function testDateFmtCAFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "en-CA", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37PM", fmt.format(date));
}

function testDateFmtCAFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PDT", fmt.format(date));
}

function testDateFmtCAFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37PM PDT", fmt.format(date));
}

function testDateFmtCAWithTimeZoneAndNoDST() {
    var fmt = new ilib.DateFmt({
		locale: "en-CA", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "America/Vancouver"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("1:45:37 PST", fmt.format(date));
}

