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

// !depends ilibglobal.js charset.js

// !data charmap

/**
 * Create a new character set mapping instance. Charmap instances map strings to 
 * other character sets. The charsets can be of any type, single-byte, multi-byte,
 * shifting, etc. <p>
 * 
 * All mappings are done to or from Unicode in the UTF-16 encoding. In order to convert 
 * between two non-Unicode character sets, you must chain two charmap instances together 
 * to first map to Unicode and then back to the second charset. <p>
 * 
 * The options object holds parameters. The current list of supported options are:
 * 
 * <ul>
 * <li><i>charset</i> - the name of the native charset to map to or from. This can be 
 * given as an ilib.Charset instance or as a string that contains any commonly used name 
 * for the character set, which is normalized to a standard IANA name. 
 * If a name is not given, this class will return information about the base character 
 * set of Javascript, which is currently Unicode encoded as UTF-16.
 * 
 * <li><i>missing</i> - specify what to do if a mapping is missing for a particular
 * character. For example, if you are mapping Unicode characters to a particular native
 * character set that does not support those Unicode characters, the mapper will
 * follow the behaviour specified in this property. Valid values are:
 * <ul>
 * <li><i>skip</i> - skip any unknown characters
 * <li><i>placeholder</i> - put a static placeholder character in the output string 
 * wherever there is an unknown character in the input string. Use the <i>placeholder</i> 
 * parameter to specify which character.
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
 * "&eacute;"
 * <li><i>js</i> - Use the Javascript escape style. Eg. an "e" with an acute
 * accent would be "\u00E9". This can also be specified as "c#" as
 * it uses a similar escape syntax.
 * <li><i>c</i> - Use the C/C++ escape style, which is similar to the the
 * Javascript style. Eg. an "e" with an acute accent would be "\x00E9"
 * <li><i>java</i> - Use the Java escape style. This is very similar to the
 * the Javascript style, but the backslash has to be escaped twice. Eg. an
 * "e" with an acute accent would be "\\u00E9". This can also be specified
 * as "ruby", as Ruby uses a similar escape syntax.
 * <li><i>perl</i> - USe the Perl escape style. Eg. an "e" with an acute
 * accent would be "\N{U+00E9}"
 * </ul>
 * The default if this style is not specified is "js" or Javascript.
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
	    loadParams = undefined,
	    name = "unicode";
	
	if (options) {
		if (typeof(options.name) !== 'undefined') {
			name = options.name;
		}
		
		if (typeof(options.sync) !== 'undefined') {
			sync = (options.sync == true);
		}
		
		if (typeof(options.loadParams) !== 'undefined') {
			loadParams = options.loadParams;
		}
	}

	if (!ilib.Charmap.cache) {
		ilib.Charmap.cache = {};
	}

	ilib.loadData({
		object: ilib.Charmap, 
		locale: "-", 
		name: name + ".json", 
		sync: sync, 
		loadParams: loadParams, 
		callback: ilib.bind(this, function (info) {
			if (!info) {
				// throw exception?
			}
			this.info = info;
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});
};

ilib.Charmap.prototype = {
    /**
     * Return the standard name of this charset.
     * @returns {string} the name of the locale's language in English
     */
    getName: function () {
    	return this.name;	
    },

    /**
     * Map a string to the native character set. This string may be 
     * given as a Javascript string object, an ilib.String object, an array of numbers 
     * where each number represents a code point in the "from" charset, or as a UIntArray8 
     * array of bytes representing the bytes of the string in order.
     * 
     * @param {string|ilib.String} string string to map to 
     * a different character set. 
     * @return {UIntArray8} A string in the standard Javascript charset UTF-16
     */
    mapToNative: function(string) {
    	
    },
    
    /**
     * Map a string to the standard Javascript charset of UTF-16. This string may be 
     * given as a Javascript string object, an ilib.String object, an array of numbers 
     * where each number represents a code point in the "from" charset, or as a UIntArray8 
     * array of bytes representing the bytes of the string in order.
     * 
     * @param {string|ilib.String|Array.<string>|UIntArray8} string string to map to 
     * a different character set. 
     * @return {string} A string in the standard Javascript charset UTF-16
     */
    mapToUnicode: function(string) {
    	return "";
    }
};
