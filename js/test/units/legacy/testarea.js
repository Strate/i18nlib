/*
 * testarea.js - test the area object
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

function testAreaAreaConstructor() {

	var m = new ilib.Measurement.Area({
		unit: "square km",
		amount: 2
	});

	assertNotNull(m);
}

function testAreaAreaConvertKm2toMi2() {
	var m1 = new ilib.Measurement.Area({
		unit: "square km",
		amount:5000
	});
	var m2 = new ilib.Measurement.Area({
		unit: "square mile",
		amount: m1
	});

	assertNotNull(m1);
	assertNotNull(m2);

	assertRoughlyEquals(1930.511, m2.getAmount(),0.1);
}

function testAreaStaticConvert1() {
	var m = ilib.Measurement.Area.convert("square mile","square km", 2.0);

	assertEquals(0.772204, m);
}

function testAreaStaticConvertWithString() {
	var m = ilib.Measurement.Area.convert( "hectare","square km", 2.0);

	assertEquals(200, m);
}

function testAreaStaticConvert2() {
	var m = ilib.Measurement.Area.convert( "square meter","square km", 2.0);

	assertEquals(2e+6, m);
}

function testAreaStaticConvert3() {
	var m = ilib.Measurement.Area.convert( "square mile","square km", 2.0);

	assertEquals(0.772204, m);
}

function testAreaStaticConvert4() {
	var m = ilib.Measurement.Area.convert( "hectare", "square km",2.0);

	assertEquals(200, m);
}

function testAreaStaticConvert5() {
	var m = ilib.Measurement.Area.convert( "square yard","square km", 2.0);

	assertEquals(2.392e+6, m);
}
function testAreaStaticConvert6() {
	var m = ilib.Measurement.Area.convert( "acre", "square km",2.0);

	assertEquals(494.21, m);
}
function testAreaStaticConvert7() {
	var m = ilib.Measurement.Area.convert( "square foot","square km", 2.0);

	assertRoughlyEquals(2.153e+7, m,1e+7);
}
function testAreaStaticConvert8() {
	var m = ilib.Measurement.Area.convert( "square inch","square km", 2.0);

	assertEquals(3.1e+9, m);
}

function testAreaStaticConvert9() {
	var m = ilib.Measurement.Area.convert("square mile","hectare", 2.0);

	assertRoughlyEquals(0.00772204, m,0.001);
}


function testAreaStaticConvert10() {
	var m = ilib.Measurement.Area.convert( "square meter","hectare",2.0);

	assertEquals(20000, m);
}

function testAreaStaticConvert11() {
	var m = ilib.Measurement.Area.convert( "square mile","square meter", 2.0);

	assertEquals(7.722e-7, m);
}

function testAreaStaticConvert12() {
	var m = ilib.Measurement.Area.convert( "hectare", "square meter",2.0);

	assertEquals(0.0002, m);
}

function testAreaStaticConvert13() {
	var m = ilib.Measurement.Area.convert( "square yard","square inch", 2.0);

	assertRoughlyEquals(0.00154321, m, 00000001);
}
function testAreaStaticConvert14() {
	var m = ilib.Measurement.Area.convert( "acre", "square foot",2.0);

	assertEquals(4.5914e-5, m);
}
function testAreaStaticConvert15() {
	var m = ilib.Measurement.Area.convert( "square foot","square mile", 2.0);

	assertRoughlyEquals(5.576e+7, m,1e+7);
}
function testAreaStaticConvert16() {
	var m = ilib.Measurement.Area.convert( "square inch","acre", 2.0);

	assertRoughlyEquals(1.255e+7, m, 1e+7);
}

function testAreaStaticConvert17() {
	var m = ilib.Measurement.Area.convert( "square inch","square yard", 2.0);

	assertEquals(2592, m);
}

function testAreaScale1() {
	var m1 = new ilib.Measurement.Area({
		unit: "square meter",
		amount: 100
	});
	var m2 = m1.scale("metric");

	assertEquals(100, m2.amount);
	assertEquals("square meter", m2.unit);
}

function testAreaScale2() {
	var m1 = new ilib.Measurement.Area({
		unit: "square inch",
		amount: 100
	});
	var m2 = m1.scale("uscustomary");

	assertEquals(100, m2.amount);
	assertEquals("square inch", m2.unit);
}

function testAreaScale3() {
	var m1 = new ilib.Measurement.Area({
		unit: "square km",
		amount: 100
	});
	var m2 = m1.scale("metric");

	assertEquals(100, m2.amount);
	assertEquals("square km", m2.unit);
}

function testAreaScale4() {
	var m1 = new ilib.Measurement.Area({
		unit: "acre",
		amount: 100
	});
	var m2 = m1.scale("uscustomary");

	assertEquals(100, m2.amount);
	assertEquals("acre", m2.unit);
}

function testAreaScale5() {
	var m1 = new ilib.Measurement.Area({
		unit: "hectare",
		amount: 100
	});
	var m2 = m1.scale("metric");

	assertEquals(1, m2.amount);
	assertEquals("square km", m2.unit);
}

function testAreaScale6() {
	var m1 = new ilib.Measurement.Area({
		unit: "square foot",
		amount: 30000000
	});
	var m2 = m1.scale("uscustomary");
	assertRoughlyEquals(1.0761, m2.amount,0.0001);
	assertEquals("square mile", m2.unit);
}

function testAreaScale7() {
	var m1 = new ilib.Measurement.Area({
		unit: "square km",
		amount: 0.0001
	});
	var m2 = m1.scale("metric");

	assertEquals(100, m2.amount);
	assertEquals("square meter", m2.unit);
}

function testAreaScale8() {
	var m1 = new ilib.Measurement.Area({
		unit: "square mile",
		amount: 0.01
	});
	var m2 = m1.scale("uscustomary");
	assertRoughlyEquals(6.4, m2.amount,0.01);
	assertEquals("acre", m2.unit);
}

function testAreaLocalize1() {
    var m = new ilib.Measurement.Area({
        unit: "square miles",
        amount: 1000
    });

    m = m.localize("en-IN");

    assertRoughlyEquals(2589.99, m.amount, 0.01);
    assertEquals("square km", m.unit);
}

function testAreaLocalize2() {
    var m = new ilib.Measurement.Area({
        unit: "square km",
        amount: 1000
    });

    m = m.localize("en-US");

    assertRoughlyEquals(386.102, m.amount, 0.001);
    assertEquals("square mile", m.unit);
}

function testAreaLocalize3() {
    var m = new ilib.Measurement.Area({
        unit: "square mile",
        amount: 1000
    });

    m = m.localize("en-GB");

    assertEquals(1000, m.amount);
    assertEquals("square mile", m.unit);
}
function testAreaGetMeasures() {
	var m = new ilib.Measurement.Area({unit: "hectare", amount: 1}); // preload for dynamic tests
	var measures = ilib.Measurement.Area.getMeasures();
	var expected = [
        "square centimeter",
        "square km",
        "square inch",
        "square foot",
        "acre",
        "square yard",
        "square mile",
        "square meter",
        "hectare",
    ];

	assertArrayEqualsIgnoringOrder(expected, measures);
}
