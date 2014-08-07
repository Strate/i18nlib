/*
 * charmap.js - A character set mapping class
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

// !depends ilibglobal.js charset.js util/jsutils.js

// !data charmaps/ISO-8859-1 charset/ISO-8859-1 charmaps/US-ASCII charset/US-ASCII

/**
 * Create a new character set mapping instance. Charmap instances map strings to 
 * other character sets. The charsets can be of any type, single-byte, multi-byte,
 * shifting, etc. <p>
 * 
 * All mappings are done to or from Unicode in the UTF-16 encoding, which is the base
 * character set and encoding used by Javascript itself. In order to convert 
 * between two non-Unicode character sets, you must chain two charmap instances together 
 * to first map to Unicode and then back to the second charset. <p>
 * 
 * The options object contols which mapping is constructed and its behaviours. The 
 * current list of supported options are:
 * 
 * <ul>
 * <li><i>charset</i> - the name of the native charset to map to or from. This can be 
 * given as an {@link ilib.Charset} instance or as a string that contains any commonly used name 
 * for the character set, which is normalized to a standard IANA name. 
 * If a name is not given, this class will default to the Western European character 
 * set called ISO-8859-15.
 * 
 * <li><i>missing</i> - specify what to do if a mapping is missing for a particular
 * character. For example, if you are mapping Unicode characters to a particular native
 * character set that does not support particular Unicode characters, the mapper will
 * follow the behaviour specified in this property. Valid values are:
 * <ul>
 * <li><i>skip</i> - skip any characters that do not exist in the target charset
 * <li><i>placeholder</i> - put a static placeholder character in the output string 
 * wherever there is an unknown character in the input string. Use the <i>placeholder</i> 
 * parameter to specify which character to use in this case
 * <li><i>escape</i> - use an escape sequence to represent the unknown character 
 * </ul>
 * The default value for the missing property if not otherwise specified is "escape"
 * so that information is not lost.
 * 
 * <li><i>placeholder</i> - specify the placeholder character to use when the 
 * mapper cannot map a particular input character to the output string. If this
 * option is not specified, then the '?' (question mark) character is used where 
 * possible.
 * 
 * <li><i>escapeStyle</i> - what style of escape sequences should be used to
 * escape unknown characters in the input when mapping to native, and what
 * style of espcae sequences should be parsed when mapping to Unicode. Valid 
 * values are:
 * <ul>
 * <li><i>html</i> - Escape the characters as HTML entities. This would use
 * the standard HTML 5.0 (or later) entity names where possible, and numeric
 * entities in all other cases. Eg. an "e" with an acute accent would be 
 * "&#x00E9;"
 * <li><i>js</i> - Use the Javascript escape style. Eg. an "e" with an acute
 * accent would be "\u00E9". This can also be specified as "c#" as
 * it uses a similar escape syntax.
 * <li><i>c</i> - Use the C/C++ escape style, which is similar to the the
 * Javascript style, but uses an "x" in place of the "u". Eg. an "e" with an 
 * acute accent would be "\x00E9". This can also be specified as "c++".
 * <li><i>java</i> - Use the Java escape style. This is very similar to the
 * the Javascript style, but the backslash has to be escaped twice. Eg. an
 * "e" with an acute accent would be "\\u00E9". This can also be specified
 * as "ruby", as Ruby uses a similar escape syntax with double backslashes.
 * <li><i>perl</i> - Use the Perl escape style. Eg. an "e" with an acute
 * accent would be "\N{U+00E9}"
 * </ul>
 * The default if this style is not specified is "js" for Javascript.
 * 
 * <li><i>onLoad</i> - a callback function to call when this object is fully 
 * loaded. When the onLoad option is given, this class will attempt to
 * load any missing data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 * 
 * <li><i>sync</i> - tell whether to load any missing data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, because the instance returned from this constructor will
 * not be usable for a while.
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 * 
 * If this copy of ilib is pre-assembled and all the data is already available, 
 * or if the data was already previously loaded, then this constructor will call
 * the onLoad callback immediately when the initialization is done. 
 * If the onLoad option is not given, this class will only attempt to load any
 * missing data synchronously.
 * 
 * Depends directive: !depends maps/charmap.js
 * 
 * @class
 * @constructor
 * @see {ilib.setLoaderCallback} for information about registering a loader callback instance
 * @param {Object=} options options which govern the construction of this instance
 */
ilib.Charmap = function(options) {
	var sync = true,
	    loadParams = undefined;
	
	this.charset = new ilib.Charset({name: "ISO-8859-15"});
	this.missing = "placeholder";
	this.placeholder = "?";
	this.escapeStyle = "js";
	this.expansionFactor = 1;
	
	if (options) {
		if (typeof(options.name) !== 'undefined') {
			this.charset = new ilib.Charset({name: options.name});
			this.expansionFactor = this.charset.getMaxCharWidth();
		}
		
		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
		
		if (typeof(options.placeholder) !== 'undefined') {
			this.placeholder = options.placeholder;
			this.expansionFactor = this.expansionFactor < this.placeholder.length ? this.placeholder.length : this.expansionFactor;  
		}

		var escapes = {
			"html": "html",
			"js": "js",
			"c#": "js",
			"c": "c",
			"c++": "c",
			"java": "java",
			"ruby": "java",
			"perl": "perl"
		};
		
		if (typeof(options.escapeStyle) !== 'undefined') {
			if (typeof(escapes[options.escapeStyle]) !== 'undefined') {
				this.escapeStyle = escapes[options.escapeStyle];
			}
		}

		if (typeof(options.missing) !== 'undefined') {
			if (options.missing === "skip" || options.missing === "placeholder" || options.missing === "escape") {
				this.missing = options.missing;
			}
			
			if (options.missing === "escape") {
				// Convervative estimate of the expansion factor. There are 6 overhead
				// characters in the perl escape encoding, plus 2 * the max number of 
				// bytes worth of hex digits.
				this.expansionFactor = this.charset.getMaxCharWidth() * 2 + 6;
			}
		}
		
		if (typeof(options.loadParams) !== 'undefined') {
			loadParams = options.loadParams;
		}
	}

	if (!ilib.Charmap.cache) {
		ilib.Charmap.cache = {};
	}

	if (typeof(ilib.Charmap._algorithms[this.charset.getName()]) !== 'undefined') {
		// this type of conversion is done algorithmically instead of via a mapping table
		this.algorithm = new ilib.Charmap._algorithms[this.charset.getName()](this.charset);
		if (options && typeof(options.onLoad) === 'function') {
			options.onLoad(this);
		}
	} else {
		ilib.loadData({
			object: ilib.Charmap, 
			locale: "-",
			nonlocale: true,
			name: "charmaps/" + this.charset.getName() + ".json", 
			sync: sync, 
			loadParams: loadParams, 
			callback: ilib.bind(this, function (mapping) {
				//if (!mapping) {
					// throw exception?
				//}
				
				/** @type {{from:Object,to:Object}} */
				this.map = mapping;
				if (options && typeof(options.onLoad) === 'function') {
					options.onLoad(this);
				}
			})
		});
	}
};

/**
 * A place for the algorithmic conversions to register themselves as 
 * they are defined.
 * 
 * @static
 * @private
 */
ilib.Charmap._algorithms = {};

ilib.Charmap.prototype = {
    /**
     * Return the standard name of this charset.
     * @returns {string} the name of the locale's language in English
     */
    getName: function () {
    	return this.charset.getName();	
    },

    writeNative: function (array, start, value) {
    	if (typeof(value) === 'object' && value instanceof Array) { 
	    	for (var i = 0; i < value.length; i++) {
	    		array[start+i] = value[i];
	    	}
	    	
	    	return value.length;
    	} else {
    		array[start] = value;
    		return 1;
    	}
    },
    
    writeNativeString: function (array, start, string) {
    	for (var i = 0; i < string.length; i++) {
    		array[start+i] = string.charCodeAt(i);
    	}
    	return string.length;
    },
    
    dealWithMissingChar: function(c) {
    	var seq = "";
    	
		switch (this.missing) {
			case "skip":
				// do nothing
				break;
				
			case "escape":
				var num = (typeof(c) === 'string') ? c.charCodeAt(0) : c;
				var bigc = ilib.pad(num.toString(16), 4).toUpperCase();
				switch (this.escapeStyle) {
					case "html":
						seq = "&#x" + bigc + ";";
						break;
					case "c":
						seq = "\\x" + bigc;
						break;
					case "java":
						seq = "\\\\u" + bigc;
						break;
					case "perl":
						seq = "\\N{U+" + bigc + "}";
						break;
						
					default:
					case "js":
						seq = "\\u" + bigc;
						break;
				}
				break;
				
			default:
			case "placeholder":
				seq = this.placeholder;
				break;
		}
		
		return seq;
    },
    
    /**
     * Walk a trie to find the value for the current position in the given array.
     * @private
     */
    _trieWalk: function(trie, array, start) {
    	function isValue(node) {
    		return (typeof(node) === 'string' || typeof(node) === 'number' ||
    			(typeof(node) === 'object' && node instanceof Array));
    	}
    	
    	var lastLeaf = undefined,
    		i = start,
    		trienode = trie;
    	
    	while (i < array.length) {
    		if (typeof(trienode.__leaf) !== 'undefined') {
    			lastLeaf = {
    				consumed: i - start + 1,
    				value: trienode.__leaf
    			};
    		}
    		if (array[i] === 0) {
    			// null-terminator, so end the mapping.
    			return {
    				consumed: 1,
    				value: 0
    			};
    		} else if (typeof(trienode[array[i]]) !== 'undefined') {
    			// we have a mapping
    			if (isValue(trienode[array[i]])) {
    				// it is a leaf node
    				return {
    					consumed: i - start + 1,
    					value: trienode[array[i]]
    				};
    			} else {
    				// it is an intermediate node
	    			trienode = trienode[array[i++]];
	    		}
    		} else {
    			// no mapping for this array element, so return the last known
    			// leaf. If none, this will return undefined.
    			return lastLeaf;
    		}
    	}

    	return undefined;
    },
    
    /**
     * Map a string to the native character set. This string may be 
     * given as an intrinsic Javascript string object or an ilib.String 
     * object.
     * 
     * @param {string|ilib.String} string string to map to a different 
     * character set. 
     * @return {Uint8Array} An array of bytes representing the string 
     * in the native character set
     */
    mapToNative: function(string) {
    	if (!string) {
    		return new Uint8Array(0);
    	}
    	
    	if (this.algorithm) {
    		return this.algorithm.mapToNative(string);
    	}
    	
    	var str = (string instanceof ilib.String) ? string : new ilib.String(string);
    	
    	// use ilib.String's iterator so that we take care of walking through
    	// the code points correctly, including the surrogate pairs
    	// var c, i = 0, it = str.charIterator();
    	var ret = new Uint8Array(str.length * this.expansionFactor);
    	
    	/*
    	while (it.hasNext()) {
    		c = it.next();
			var n = this.map.from[c];
			if (typeof(n) !== 'undefined') {
    			i += this.writeNative(ret, i, n);
			} else {
				// if there is more than one UTF-16 char, write each separately. We 
				// can't escape a fully composed astral plane char, so we have to 
				// write it as two UTF-16 surrogate chars instead.
				for (var j = 0; j < c.length; j++) {
					i += this.writeNativeString(ret, i, this.dealWithMissingChar(c.charCodeAt(j)));
				}
    		}
    	}
    	*/
    	
    	var i = 0, j = 0;
    	
    	while (i < string.length) {
    		var result = this._trieWalk(this.map.from, string, i);
    		if (result) {
    			if (result.value) {
	    			i += result.consumed;
	    			j += this.writeNative(ret, j, result.value);
    			} else {
    				// null-termination
    				i = string.length;
    				this.writeNative(ret, j, [result.value]);
    			}
    		} else {
    			// The unicode char at "i" didn't have any mapping, so
    			// deal with the missing char
				j += this.writeNativeString(ret, j, this.dealWithMissingChar(string[i++]));
    		}
    	}

    	return ret;
    },
    
    makeChar: function(array, start, length) {
    	var n = 0;
    	for (var i = 0; i < length; i++) {
    		n |= array[start+i] << (length - i);
    	}
    	return n;
    },
    
    /**
     * Map a native string to the standard Javascript charset of UTF-16. 
     * This string may be given as an array of numbers where each number 
     * represents a code point in the "from" charset, or as a Uint8Array 
     * array of bytes representing the bytes of the string in order.
     * 
     * @param {Array.<number>|Uint8Array} bytes bytes to map to 
     * a Unicode string
     * @return {string} A string in the standard Javascript charset UTF-16
     */
    mapToUnicode: function(bytes) {
    	if (this.algorithm) {
    		return this.algorithm.mapToUnicode(bytes);
    	}
    	var ret = "";
    	var i = 0;
    	// var trienode = this.map.to;
    	// var start = 0;

    	/*
    	function nodeValue(node) {
    		if (typeof(node) === 'string') {
    			return node;
    		} else if (node instanceof Array) {
    			var ret = "", arr = node;
    			for (var j = 0; j < arr.length; j++) {
    				ret += arr[j];
    			}
    			return ret;
    		}
    		return undefined;
    	}
    	*/
    	
    	while (i < bytes.length) {
    		var result = this._trieWalk(this.map.to, bytes, i);
    		if (result) {
    			if (result.value) {
	    			i += result.consumed;
	    			if (typeof(result.value) === 'string') {
	        			ret += result.value;
	        		} else if (result.value instanceof Array) {
	        			for (var j = 0; j < result.value.length; j++) {
	        				ret += result.value[j];
	        			}
	        		} // else error in charmap file??
    			} else {
    				// null-termination
    				i = bytes.length;
	    			// ret += '\u0000';
    			}
    		} else {
    			// The byte at "i" wasn't a lead byte, so start again at the 
    			// next byte instead. This may synchronize the rest 
    			// of the string.
				ret += this.dealWithMissingChar(bytes[i++]);
    		}
    	}

/*    		
    		if (bytes[i] === 0) {
    			// null-terminator, so end the mapping.
    			i = bytes.length;
    		} else if (typeof(trienode[bytes[i]]) !== 'undefined') {
    			// we have a mapping
    			var s = nodeValue(trienode[bytes[i]]);
    			if (s) {
    				// it is a leaf node
    				ret += s;
	    			trienode = this.map.to;
	    			start = ++i;
    			} else {
    				// it is an intermediate node
	    			trienode = trienode[bytes[i++]];
	    		}
    		} else {
    			// no mapping for this byte, so check if any of the previous
    			// mappings have a leaf node. If there are no leafs, go all
    			// the way back to the start and deal with it as an unknown char.
    			for (var j = i; j > start; j--) {
    				if (typeof(trienode[bytes[j]].__leaf) !== 'undefined') {
    					ret += nodeValue(trienode[bytes[j]].__leaf);
		    			trienode = this.map.to;
		    			start = j;
		    			i = j;
	    				break;
    				}
    			}
    			if (j <= start) {
    				ret += this.dealWithMissingChar(bytes[start]);
	    			// 'start' wasn't a lead byte, so start again at the 
	    			// next byte instead. This may synchronize the rest 
	    			// of the string.
	    			i = ++start;
    			}
    		}
    	}
*/
    	
    	return ret;
    }
};
