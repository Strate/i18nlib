/*
 * testdatefmt_fr_FR.js - test the date formatter object in standard French
 * 
 * Copyright © 2012-2013, JEDLSoft
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

function testDateFmtConstructorEmpty() {
    var fmt = new ilib.DateFmt({locale: "fr-FR"});
    
    assertNotNull(fmt);
}


function testDateFmtSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "short"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "medium"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "long"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 sept 2011", fmt.format(date));
}

function testDateFmtSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre 2011", fmt.format(date));
}

function testDateFmtSimpleTimeShort() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "short", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtSimpleTimeMedium() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "medium", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtSimpleTimeLong() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", timelength: "long", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtSimpleTimeFull() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtDateTimeSimpleShort() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "short", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/11", fmt.format(date));
}

function testDateFmtDateTimeSimpleMedium() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "medium", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleLong() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "long", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 sept 2011", fmt.format(date));
}

function testDateFmtDateTimeSimpleFull() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29 septembre 2011", fmt.format(date));
}


function testDateFmtTemplateCalendar() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", calendar: "julian", template: "yyyy-MM-dd"});
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

function testDateFmtTemplateCalendarIncompatibleDateType() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", calendar: "julian", template: "yyyy-MM-dd"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock12SwitchHH() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", clock: "12", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock12Switchkk() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", clock: "12", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock24Switchhh() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", clock: "24", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateClock24SwitchKK() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", clock: "24", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", template: "hh:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", template: "KK:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", template: "HH:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", template: "kk:mm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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


function testDateFmtTypeDate() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "date"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtTypeTime() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtTypeDateTime() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "datetime"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("13:45 29/09/11", fmt.format(date));
}


function testDateFmtShortDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsN() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "n"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("09/11", fmt.format(date));
}

function testDateFmtShortDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29/09/11", fmt.format(date));
}

function testDateFmtShortDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("je 29/09", fmt.format(date));
}

function testDateFmtShortDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("je 29/09/11", fmt.format(date));
}


function testDateFmtFullDateComponentsY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "y"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtFullDateComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembre", fmt.format(date));
}

function testDateFmtFullDateComponentsD() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "d"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtFullDateComponentsDM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "dm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre", fmt.format(date));
}

function testDateFmtFullDateComponentsMY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "my"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("septembre 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "dmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("29 septembre 2011", fmt.format(date));
}

function testDateFmtFullDateComponentsWDM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "wdm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("jeudi 29 septembre", fmt.format(date));
}

function testDateFmtFullDateComponentsWDMY() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full", date: "wdmy"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    assertEquals("jeudi 29 septembre 2011", fmt.format(date));
}


function testDateFmtShortTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtShortTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtShortTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmsz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtShortTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        time: "hmsaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}


function testDateFmtFullTimeComponentsS() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "s"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "m"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsH() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "h"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13", fmt.format(date));
}

function testDateFmtFullTimeComponentsMS() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "ms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
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

function testDateFmtFullTimeComponentsHM() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hm"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMS() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hms"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMA() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hma"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSA() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", type: "time", length: "full", time: "hmsa"});
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtFullTimeComponentsHMSAZ() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmsaz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CEST", fmt.format(date));
}

function testDateFmtWithTimeZoneAndNoDST_fr_FR() {
    var fmt = new ilib.DateFmt({
        locale: "fr-FR", 
        type: "time", 
        length: "full", 
        time: "hmsz", 
        timezone: "Europe/Paris"
    });
    assertNotNull(fmt);
    
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 12,
		day: 29,
		hour: 13,
		minute: 45,
		second: 37,
		millisecond: 0
	});
    assertEquals("13:45:37 CET", fmt.format(date));
}

function testDateFmtFormatRelativeWithinMinuteAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 30,
		millisecond: 0
	});
    assertEquals("dans 30 secondes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinMinuteBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 44,
		second: 30,
		millisecond: 0
	});
    assertEquals("il y a 30 secondes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 10 minutes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinHourBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 10 minutes", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 17,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 4 heures", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinDayBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 4 heures", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinFortnightAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 4 jours", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinFortnightBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 16,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 4 jours", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinQuarterAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 11,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 9 semaines", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinQuarterBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 9 semaines", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeWithinTwoYearsAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2013,
		month: 1,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 16 mois", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeWithinTwoYearsBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2010,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 14 mois", fmt.formatRelative(reference, date));
}

function testDateFmtFormatRelativeYearsAfter_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2025,
		month: 10,
		day: 24,
		hour: 15,
		minute: 55,
		second: 0,
		millisecond: 0
	});
    assertEquals("dans 14 ans", fmt.formatRelative(reference, date));
}
function testDateFmtFormatRelativeYearsBefore_fr_FR() {
    var fmt = new ilib.DateFmt({locale: "fr-FR", length: "full"});
    assertNotNull(fmt);
    
    var reference = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 2011,
		month: 9,
		day: 20,
		hour: 13,
		minute: 45,
		second: 0,
		millisecond: 0
	});
    var date = new ilib.Date.GregDate({
		locale: "fr-FR",
		year: 1990,
		month: 7,
		day: 18,
		hour: 9,
		minute: 35,
		second: 0,
		millisecond: 0
	});
    assertEquals("il y a 21 ans", fmt.formatRelative(reference, date));
}

