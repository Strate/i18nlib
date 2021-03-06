/*
 * phonefmt_TW.js - Test the phonefmt_TW Style.
 * 
 * Copyright © 2014-2015, JEDLSoft
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
 
function testFormatTWStyle0() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale:"zh-TW"});
	var expected = "(039) 606-537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale: "zh-TW"});
	var expected = "039 606 537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale: "zh-TW"});
	var expected = "039-606-537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039606537", {locale: "zh-TW"});
	var expected = "(039) 606537";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+886233663366", {locale: "zh-TW"});
	
	var expected = "+886 2 3366 3366";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWInternationalAccessCode() {
	var formatted;

	var parsed = new ilib.PhoneNumber("00214084567890", {locale: "zh-TW"});
	
	var expected = "002 1 408 456 7890";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWLongAreaCode() {
	var formatted;
	var parsed = new ilib.PhoneNumber("04582410670", {locale:"zh-TW"});
	var expected = "(0458) 241-0670";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWMobile() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0912-345-678", {locale: "zh-TW"});
	var expected = "0912-345-678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWMobileInternational() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+886912345678");
	var expected = "+886 912 345 678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWService() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0800011765", {locale: "zh-TW"});
	var expected = "0800-011-765";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWEmergency1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("166", {locale: "zh-TW"});
	var expected = "166 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWEmergency2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("110", {locale: "zh-TW"});
	var expected = "110 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWIEIDD() {
	var formatted;
	var parsed = new ilib.PhoneNumber("+35311234567", {locale: "zh-TW"});
	var expected = "+353 1 123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed);
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0", {locale:"zh-TW"});
	
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale:"zh-TW"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale:"zh-TW"});
	var expected = "(039) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale:"zh-TW"});
	var expected = "(039) 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "(039) 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "(039) 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "(039) 612-3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "(039) 612-34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "(039) 612-345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "(039) 612-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "(039) 6123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "(039) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "(039) 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
		
	var expected = "(039) 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "(039) 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "(039) 612-3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "(039) 612-34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "(039) 612-345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "(039) 612-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "(039) 6123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0Whole11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: false});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "03 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "039 ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "039 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "039 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "039 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "039 612 3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "039 612 34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "039 612 345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "039 612 3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "039 6123 4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle1Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "括號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "03-";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "039-";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "039-6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "039-61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "039-612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "039-612-3";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "039-612-34";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "039-612-345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "039-612-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "039-6123-4567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle2Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "破折號"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial0() {
	var formatted;
	var parsed = new ilib.PhoneNumber({
		trunkAccess: "0"
	});
	var expected = "0";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03", {locale: "zh-TW"});
	var expected = "(03) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039", {locale: "zh-TW"});
	var expected = "(039) ";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396", {locale: "zh-TW"});
	var expected = "(039) 6";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961", {locale: "zh-TW"});
	var expected = "(039) 61";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612", {locale: "zh-TW"});
	var expected = "(039) 612";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123", {locale: "zh-TW"});
	var expected = "(039) 6123";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234", {locale: "zh-TW"});
	var expected = "(039) 61234";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345", {locale: "zh-TW"});
	var expected = "(039) 612345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("0396123456", {locale: "zh-TW"});
	var expected = "(039) 6123456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial10() {
	var formatted;
	var parsed = new ilib.PhoneNumber("03961234567", {locale: "zh-TW"});
	var expected = "(039) 61234567";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle3Partial11() {
	var formatted;
	var parsed = new ilib.PhoneNumber("039612345678", {locale: "zh-TW"});
	var expected = "039612345678";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "沒有空格"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal1() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2", {locale: "zh-TW"});
	var expected = "2";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal2() {
	var formatted;
	var parsed = new ilib.PhoneNumber("27", {locale: "zh-TW"});
	var expected = "27";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal3() {
	var formatted;
	var parsed = new ilib.PhoneNumber("271", {locale: "zh-TW"});
	var expected = "271";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal4() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2712", {locale: "zh-TW"});
	var expected = "271-2";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal5() {
	var formatted;
	var parsed = new ilib.PhoneNumber("27123", {locale: "zh-TW"});
	var expected = "271-23";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal6() {
	var formatted;
	var parsed = new ilib.PhoneNumber("271234", {locale: "zh-TW"});
	var expected = "271-234";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal7() {
	var formatted;
	var parsed = new ilib.PhoneNumber("2712345", {locale: "zh-TW"});
	var expected = "271-2345";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal8() {
	var formatted;
	var parsed = new ilib.PhoneNumber("27123456", {locale: "zh-TW"});
	var expected = "2712-3456";
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};

function testFormatTWStyle0PartialLocal9() {
	var formatted;
	var parsed = new ilib.PhoneNumber("271234567", {locale: "zh-TW"});
	var expected = "271234567";	// use last resort rule
	
	var fmt = new ilib.PhoneFmt({locale: "zh-TW", style: "default"});
	formatted = fmt.format(parsed, {partial: true});
	
	assertEquals(expected, formatted);
};