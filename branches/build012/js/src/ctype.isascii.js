/*
 * ctype.isascii.js - Character type is ASCII
 * 
 * Copyright © 2012, JEDLSoft
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

// !depends ctype.js

// !data ctype

/**
 * Return whether or not the first character is in the ASCII range.<p>
 * 
 * Depends directive: !depends ctype.isascii.js
 * 
 * @param {string} ch character to examine
 * @return {boolean} true if the first character is in the ASCII range.
 */
ilib.CType.isAscii = function (ch) {
	return ilib.CType._inRange(ch, 'ascii', ilib.data.ctype);
};
