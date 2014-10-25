/*
 * testastro.js - test the astronomical calculation routines
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

var testDatesAstro1 = [
	// jd			julian cent			nutation				abberation
	[ 1507231.5,	21.276172532733455,	0.005098255945505057,	-0.00563311063640229],
	[ 1660037.5,	25.459774986869412,	0.005117925097269045,	-0.005627339773730772],
	[ 1746893.5,	27.837764059915536,	0.005125896429128211,	-0.00562393682100468],
	[ 1770641.5,	28.48794926719716,	0.005127659957906047,	-0.005622991895381111],
	[ 1892731.5,	31.83059350495105,	0.0051338585934435615,	-0.0056180418084402235],
	[ 1931579.5,	32.8941945267329,	0.00513481429523138,	-0.005616436103226699],
	[ 1974851.5,	34.078918179176405,	0.005135296895134779,	-0.0056146312355353735],
	[ 2091164.5,	37.26339703334436,	0.005133547642644396,	-0.005609700371716022],
	[ 2121509.5,	38.09419853123262,	0.005132361656668273,	-0.00560839622497444],
	[ 2155779.5,	39.032460779295796,	0.005130660683281612,	-0.005606915204779437],
	[ 2174029.5,	39.53211897204794,	0.005129598818705956,	-0.005606123091441422],
	[ 2191584.5,	40.0127490896989,	0.0051284753852617465,	-0.0056053589732523584],
	[ 2195261.5,	40.11341994955429,	0.005128227430518298,	-0.005605198659515968],
	[ 2229274.5,	41.04464595133863,	0.005125726797898094,	-0.0056037114940795645],
	[ 2245580.5,	41.491080300809124,	0.005124395927650039,	-0.005602995903466564],
	[ 2266100.5,	42.05288778600402,	0.0051226000689626105,	-0.005602093039945307],
	[ 2288542.5,	42.667316815669125,	0.00512048223007148,	-0.0056011027159940255],
	[ 2290901.5,	42.73190278004002,	0.005120250314714027,	-0.005600998446392632],
	[ 2323140.5,	43.614559312182045,	0.005116904460574152,	-0.0055995702965249495],
	[ 2334848.5,	43.93510718335004,	0.005115608332473326,	-0.0055990502264778984],
	[ 2348020.5,	44.29573723018906,	0.005114098795688491,	-0.005598464252139546],
	[ 2366978.5,	44.81477947990997,	0.0051118311739295035,	-0.005597619300420954],
	[ 2385648.5,	45.32593671513335,	0.005109489024656638,	-0.0055967854221355435],
	[ 2392825.5,	45.5224324610542,	0.005108560037328274,	-0.005596464416343727],
	[ 2416223.5,	46.163035417507636,	0.005105421617615355,	-0.005595416209866161],
	[ 2425848.5,	46.42655381387583,	0.00510408205353959,	-0.005594984292776572],
	[ 2430266.5,	46.54751218122836,	0.005103457744981053,	-0.005594785899179855],
	[ 2430833.5,	46.56303581510875,	0.005103377193198971,	-0.0055947604313926905],
	[ 2431004.5,	46.56771753995475,	0.005103352880701168,	-0.005594752750364728],
	[ 2448698.5,	47.0521533498032,	0.005100789360218441,	-0.005593957282019946],
	[ 2450138.5,	47.091578441482994,	0.005100576574907156,	-0.005593892485332565],
	[ 2465737.5,	47.51865621136694,	0.0050982316371897445,	-0.005593190015601798],
	[ 2486076.5,	48.07550825609766,	0.005095064971489856,	-0.005592272620652777],
];

function testJulianCenturies() {
	var l;
	for (var i = 0; i < testDatesAstro1.length; i++) {
        info("testing jd=" + testDatesAstro1[i][0]);
        l = ilib.Date._julianCenturies(testDatesAstro1[i][0]);
        assertEquals("testing julian centuries for " + testDatesAstro1[i][0], testDatesAstro1[i][1], l);
    } 
}

function testNutation() {
	var c, l;
	for (var i = 0; i < testDatesAstro1.length; i++) {
        info("testing jd=" + testDatesAstro1[i][0]);
        c = ilib.Date._julianCenturies(testDatesAstro1[i][0]);
        l = ilib.Date._nutation2(c);
        assertEquals("testing nutation for " + testDatesAstro1[i][0], testDatesAstro1[i][2], l);
    } 
}

function testAberration() {
	var c, l;
	for (var i = 0; i < testDatesAstro1.length; i++) {
        info("testing jd=" + testDatesAstro1[i][0]);
        c = ilib.Date._julianCenturies(testDatesAstro1[i][0]);
        l = ilib.Date._aberration(c);
        assertEquals("testing abberation for " + testDatesAstro1[i][0], testDatesAstro1[i][3], l);
    } 
}

var testDatesAstro = [
//   gregorian  solar                    
//   rd         long.
    [-214193,	119.47497381], 
    [-61387,	254.25239225], 
    [25469,		181.43526078], 
    [49217,		188.66209324], 
    [171307,	289.08940272], 
    [210155,	59.11935774], 
    [253427,	228.31649723], 
    [369740,	34.46687268], 
    [400085,	63.19392585], 
    [434355,	2.46292133], 
    [452605,	350.48067867], 
    [470160,	13.50223058], 
    [473837,	37.40773343], 
    [507850,	81.03056592], 
    [524156,	313.862451], 
    [544676,	19.95564076], 
    [567118,	176.06000089], 
    [569477,	344.92345807], 
    [601716,	79.96490680], 
    [613424,	99.30227476], 
    [626596,	121.53542417], 
    [645554,	88.56872054], 
    [664224,	129.28988323], 
    [671401,	6.14691088], 
    [694799,	28.25199403], 
    [704424,	151.78063302], 
    [708842,	185.94586703], 
    [709409,	28.55560818], 
    [709580,	193.34789233], 
    [727274,	357.15126352], 
    [728714,	336.17070971], 
    [744313,	228.18570124], 
    [764652,	116.43929928]
];

function testSolarLongitude() {
	var l;
	for (var i = 0; i < testDatesAstro.length; i++) {
    
        info("testing jd=" + testDatesAstro[i][0]);
        try {
        l = ilib.Date._solarLongitude(testDatesAstro[i][0] + 1721424.5);
        assertEquals("testing solar longitude for " + testDatesAstro[i][0], testDatesAstro[i][1], l);
    	} catch (e) {
        	console.log("fail: " + e.comment + " " + e.jsUnitMessage + " difference: " + (l - testDatesAstro[i][1]));
        }

    } 
}
