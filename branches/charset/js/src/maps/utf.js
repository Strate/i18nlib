/*
 * utf.js - Implement Unicode Transformation Format mappings
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

ilib.Charmap.UTF8 = {
	validate: function(bytes) {
		var i = 0;
		while (i < bytes.length) {
			if ((bytes[i] & 0x80) === 0) {
				i++;
			} else {
				var len;
				if ((bytes[i] & 0xC0) === 0xC0) {
					len = 2;
				} else if ((bytes[i] & 0xE0) === 0xE0) {
					len = 3;
				} else if ((bytes[i] & 0xF0) === 0xF0) {
					len = 4;
				} else {
					// invalid lead byte
					return false;
				}
				if (i + len > bytes.length) {
					// not enough trailing bytes
					return false;
				}
				for (var j = 1; j < len; j++) {
					// check each trailing byte to see if it has the correct form
					if ((bytes[i+j] & 0x80) !== 0x80) {
						return false;
					}
				}
				i += len;
			}
		}
		
		return true;
	},
	
	mapToUnicode: function (bytes) {
		if (typeof(Buffer) !== "undefined") {
			// nodejs can convert it quickly in native code
			var b = new Buffer(bytes);
			return b.toString("utf8");
		}
		// otherwise we have to implement it in pure JS
		var ret = "";
		var i = 0;
		while (i < bytes.length) {
			if (bytes[i] === 0) {
				// null-terminator
				i = bytes.length;
			} else if ((bytes[i] & 0x80) === 0) {
				// 1 byte char
				ret += String.fromCharCode(bytes[i++]);
			} else if ((bytes[i] & 0xE0) === 0xC0) {
				// 2 byte char
				if (i + 1 >= bytes.length || (bytes[i+1] & 0x80) !== 0x80) {
					throw "invalid utf-8 bytes";
				}
				// xxx xxyyyyyy
				ret += String.fromCharCode((bytes[i] & 0x1F) << 6 | (bytes[i+1] & 0x3F));
				i += 2;
			} else if ((bytes[i] & 0xF0) === 0xE0) {
				// 3 byte char
				if (i + 2 >= bytes.length || (bytes[i+1] & 0x80) !== 0x80 || (bytes[i+2] & 0x80) !== 0x80) {
					throw "invalid utf-8 bytes";
				}
				// xxxxyyyy yyzzzzzz
				ret += String.fromCharCode((bytes[i] & 0xF) << 12 | (bytes[i+1] & 0x3F) << 6 | (bytes[i+2] & 0x3F));
				i += 3;
			} else if ((bytes[i] & 0xF8) === 0xF0) {
				// 4 byte char
				if (i + 3 >= bytes.length || (bytes[i+1] & 0x80) !== 0x80 || (bytes[i+2] & 0x80) !== 0x80 || (bytes[i+3] & 0x80) !== 0x80) {
					throw "invalid utf-8 bytes";
				}
				// wwwxx xxxxyyyy yyzzzzzz
				ret += ilib.String.fromCodePoint((bytes[i] & 0x7) << 18 | (bytes[i+1] & 0x3F) << 12 | (bytes[i+2] & 0x3F) << 6 | (bytes[i+3] & 0x3F));
				i += 4;
			} else {
				throw "invalid utf-8 bytes";
			}
		}
		
		return ret;
	},
	
	mapToNative: function(str) {
		if (typeof(Buffer) !== "undefined") {
			// nodejs can convert it quickly in native code
			var b = new Buffer(str, "utf8");
			return new Uint8Array(b);
		}
		// otherwise we have to implement it in pure JS
		var istr = (str instanceof ilib.String) ? str : new ilib.String(str);
		
		// step through the surrogate pairs as single code points by using
		// ilib.String's iterator 
		var it = istr.iterator();
		
		// multiply by 4 because the max size of a UTF-8 char is 4 bytes, so
		// this will at least get us enough room to encode everything. Add 1
		// for the null terminator
		var ret = new Uint8Array(istr.length * 4 + 1);
		var i = 0;
		
		while (it.hasNext()) {
			var c = it.next();
			if (c > 0x7F) {
				if (c > 0x7FF) {
					if (c > 0xFFFF) {
						// astral planes char
						ret[i]   = 0xF0 | ((c >> 18) & 0x3);
						ret[i+1] = 0x80 | ((c >> 12) & 0x3F);
						ret[i+2] = 0x80 | ((c >> 6) & 0x3F);
						ret[i+3] = 0x80 | (c & 0x3F);
						
						i += 4;
					} else {
						ret[i]   = 0xE0 | ((c >> 12) & 0xF);
						ret[i+1] = 0x80 | ((c >> 6) & 0x3F);
						ret[i+2] = 0x80 | (c & 0x3F);
						
						i += 3;
					}
				} else {
					ret[i]   = 0xC0 | ((c >> 6) & 0x1F);
					ret[i+1] = 0x80 | (c & 0x3F);
					
					i += 2;
				}
			} else {
				ret[i++] = (c & 0x7F);
			}
		}
		ret[i] = 0; // null-terminate it
		
		return ret;
	}
};

ilib.Charmap._algorithms["UTF-8"] = ilib.Charmap.UTF8;

ilib.Charmap.UTF16LE = {
	mapToUnicode: function (bytes) {
		if (typeof(Buffer) !== "undefined") {
			// nodejs can convert it quickly in native code
			var b = new Buffer(bytes);
			return b.toString("utf16le");
		}
		// otherwise we have to implement it in pure JS
		var ret = "";
		for (var i = 0; i < bytes.length; i += 2) {
			ret += String.fromCharCode(bytes[i+1] << 8 | bytes[i]);
		}
		
		return ret;
	},
	
	mapToNative: function(str) {
		if (typeof(Buffer) !== "undefined") {
			// nodejs can convert it quickly in native code
			var b = new Buffer(str, "utf16le");
			return new Uint8Array(b);
		}
		// otherwise we have to implement it in pure JS
		var ret = new Uint8Array(str.length * 2 + 2);
		var c;
		for (var i = 0; i < str.length; i++) {
			c = str.charCodeAt(i);
			ret[i*2] = c & 0xFF;
			ret[i*2+1] = (c >> 8) & 0xFF;
		}
		// double null terminate it, just in case
		ret[i*2+1] = 0;
		ret[i*2+2] = 0;
		
		return ret;
	}
};

ilib.Charmap._algorithms["UTF-16"] = ilib.Charmap.UTF16LE;
ilib.Charmap._algorithms["UTF-16LE"] = ilib.Charmap.UTF16LE;

ilib.Charmap.UTF16BE = {
	mapToUnicode: function (bytes) {
		// nodejs can't convert big-endian in native code,
		// so we would have to flip each Uint16 ourselves.
		// At that point, it's just quicker to convert 
		// in JS code anyways
		var ret = "";
		for (var i = 0; i < bytes.length; i += 2) {
			ret += String.fromCharCode(bytes[i] << 8 | bytes[i+1]);
		}
		
		return ret;
	},
	
	mapToNative: function(str) {
		// nodejs can't convert big-endian in native code,
		// so we would have to flip each Uint16 ourselves.
		// At that point, it's just quicker to convert 
		// in JS code anyways
		var ret = new Uint8Array(str.length * 2 + 2);
		var c;
		for (var i = 0; i < str.length; i++) {
			c = str.charCodeAt(i);
			ret[i*2] = (c >> 8) & 0xFF;
			ret[i*2+1] = c & 0xFF;
		}
		// double null terminate it, just in case
		ret[i*2+1] = 0;
		ret[i*2+2] = 0;
		
		return ret;
	}
};

ilib.Charmap._algorithms["UTF-16BE"] = ilib.Charmap.UTF16BE;