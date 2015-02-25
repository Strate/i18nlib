/*
 * ctype.isscript.js - Character type is script
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

// !depends ctype/ctype.js

// !data scriptToRange

/**
 * Return whether or not the first character in the given string is 
 * in the given script. The script is given as the 4-letter ISO
 * 15924 script code.<p>
 * 
 * Depends directive: !depends ctype/ctype.isscript.js
 * 
 * @param {string|ilib.String|number} ch character or code point to examine
 * @param {string} script the 4-letter ISO 15924 to query against
 * @return {boolean} true if the first character is in the given script, and
 * false otherwise
 */
ilib.CType.isScript = function (ch, script) {
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

	return ilib.CType._inRange(num, script, ilib.data.scriptToRange);
};

/**
 * @protected
 * @param {boolean} sync
 * @param {Object} loadParams
 * @param {function(*)|undefined} onLoad
 */
ilib.CType.isScript._init = function (sync, loadParams, onLoad) {
	ilib.CType._load("scriptToRange", sync, loadParams, onLoad);
};

