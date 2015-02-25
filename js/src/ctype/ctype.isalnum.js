/*
 * ctype.isalnum.js - Character type alphanumeric
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

// !depends ctype/ctype.js ctype/ctype.isalpha.js ctype/ctype.isdigit.js

/**
 * Return whether or not the first character is alphabetic or numeric.<p>
 * 
 * Depends directive: !depends ctype/ctype.isalnum.js
 * 
 * @param {string|ilib.String|number} ch character or code point to examine
 * @return {boolean} true if the first character is alphabetic or numeric
 */
ilib.CType.isAlnum = function isAlnum(ch) {
	var num;
	switch (typeof(ch)) {
		case 'number':
			num = ch;
			break;
		case 'string':
			num = ilib.String.toCodePoint(ch, 0);
			break;
		case 'undefined':
			return false;
		default:
			num = ch._toCodePoint(0);
			break;
	}
	return ilib.CType.isAlpha(num) || ilib.CType.isDigit(num);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isAlnum._init = function (sync, loadParams, onLoad) {
	ilib.CType.isAlpha._init(sync, loadParams, function () {
		ilib.CType.isDigit._init(sync, loadParams, onLoad);
	});
};
