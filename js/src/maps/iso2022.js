/*
 * iso2022.js - Implement the various ISO-2022 style mappings
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

// !depends ilibglobal.js maps/charmap.js strings.js

/**
 * @class
 * Create a new ISO-2022 mapping instance
 * 
 * @constructor
 */
ilib.Charmap.ISO2022 = function (charset) {
	// first, load in all the tables we need for this version of 2022
	
};

ilib.Charmap.ISO2022.prototype = new ilib.Charmap();
ilib.Charmap.ISO2022.prototype.parent = ilib.Charmap;
ilib.Charmap.ISO2022.prototype.constructor = ilib.Charmap.ISO2022;

ilib.Charmap.ISO2022.prototype.mapToUnicode = function (bytes) {
};
	
ilib.Charmap.ISO2022.prototype.mapToNative = function(str) {
};

/*
Still in development

ilib.Charmap._algorithms["ISO-2022-JP"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-JP-1"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-JP-2"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-JP-3"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-JP-2004"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-CN"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-CN-EXT"] = ilib.Charmap.ISO2022;
ilib.Charmap._algorithms["ISO-2022-KR"] = ilib.Charmap.ISO2022;
*/