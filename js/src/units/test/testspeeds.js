/*
 * testSpeeds.js - test the Speed object
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

function testSpeedSpeedConstructor() {
	var m = new ilib.Measurement.Speed({
		unit: "meters/sec",
		amount: 2
	});
	
	assertNotNull(m);
}

function testSpeedSpeedConvertMetersPerSecToMilesPerHour() {
	var m1 = new ilib.Measurement.Speed({
		unit: "meters/sec",
		amount: 5000
	});
	var m2 = new ilib.Measurement.Speed({
		unit: "miles/hour",
		amount: m1
	});
	
	assertNotNull(m1);
	assertNotNull(m2);
	
	assertEquals(11184.68, m2.getAmount());
}

function testSpeedStaticConvert1() {
	var m = ilib.Measurement.Speed.convert("feet/sec", "meters/sec", 2.0);
	
	assertEquals(6.56168, m);
}

function testSpeedStaticConvertWithString() {
	var m = ilib.Measurement.Speed.convert("feet/sec", "meters/sec", "2");
	
	assertEquals(6.56168, m);
}

function testSpeedStaticConvert2() {
	var m = ilib.Measurement.Speed.convert("meters/sec", "km/hour", 720);
	
	assertRoughlyEquals(200.00016, m, 0.00001);
}

function testSpeedStaticConvert3() {
	var m = ilib.Measurement.Speed.convert("mile/hour", "knot", 200);
	
	assertRoughlyEquals(230.156, m, 0.001);
}

function testSpeedStaticConvert4() {
	var m = ilib.Measurement.Speed.convert("kn", "feet/sec", 200.0);
	
	assertRoughlyEquals(118.4968, m, 0.0001);
}

function testSpeedScale1() {
	var m = new ilib.Measurement.Speed({
		unit: "m/sec",
		amount: 0.277778
	});

	m = m.scale("metric");

        assertRoughlyEquals(1, m.amount, 0.1);
	assertEquals("kilometer/hour", m.unit);
}

function testSpeedScale2() {
	var m = new ilib.Measurement.Speed({
		unit: "feet/sec",
		amount: 60
	});

	m = m.scale("imperial");

        assertRoughlyEquals(35.54904, m.amount, 0.0001);
	assertEquals("knot", m.unit);
}

function testSpeedScale3() {
	var m = new ilib.Measurement.Speed({
		unit: "feet/sec",
		amount: 1000
	});

	m = m.scale("imperial");

        assertRoughlyEquals(592.484, m.amount, 0.001);
	assertEquals("knot", m.unit);
}

function testSpeedScale4() {
	var m = new ilib.Measurement.Speed({
		unit: "feet/sec",
		amount: 1000
	});

	m = m.scale("imperial");

        assertRoughlyEquals(592.484, m.amount, 0.001);
	assertEquals("knot", m.unit);
}

function testSpeedGetMeasures() {
	var measures = ilib.Measurement.Speed.getMeasures();
	var expected = [
        "kilometer/hour",
    	"feet/second",
        "miles/hour",
        "knot",
    	"meters/second",
    	"kilometer/second",
    	"miles/second",
    	  	
	];	
	assertArrayEqualsIgnoringOrder(expected, measures);
}
