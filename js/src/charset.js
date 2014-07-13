/*
 * charset.js - Return information about a particular character set
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

// !depends ilibglobal.js locale.js

// !data charset

/**
 * Create a new chararcter set info instance. Charset instances give information about
 * a particular character set, such as whether or not it is single byte or multibyte,
 * and which languages commonly use that charset.<p>
 * 
 * The optional options object holds extra parameters if they are necessary. The
 * current list of supported options are:
 * 
 * <ul>
 * <li><i>name</i> - the name of the charset. This can be given as any commonly
 * used name for the character set, which is mapped to a standard name by the
 * static method {@link ilib.Charset.getStandardName}. If a name is not given,
 * this class will return information about the base character set of Javascript,
 * which is currently unicode.
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
 * Depends directive: !depends charset.js
 * 
 * @class
 * @constructor
 * @see {ilib.setLoaderCallback} for information about registering a loader callback instance
 * @param {Object=} options options which govern the construction of this instance
 */
ilib.Charset = function(locale, options) {
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

	if (!ilib.Charset.cache) {
		ilib.Charset.cache = {};
	}

	ilib.loadData({
		object: ilib.Charset, 
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

/**
 * Return the standard name of the given charset.
 * 
 * @static
 * @param {string} name one of any number of variations that this charset could have
 * @return {string} the standard name
 */
ilib.Charset.getStandardName = function(name) {
	return "";
};

ilib.Charset.prototype = {
    /**
     * Return the standard name of this charset.
     * @returns {string} the name of the locale's language in English
     */
    getName: function () {
    	return this.name;	
    },
    
    /**
     * Return the largest number of bytes that a single character in this charset
     * could use.
     * @returns {number} the largest number of bytes that a single character in
     * this charset uses
     */
    getMaxCharWidth: function () {
    	return 1;
    },
    
    /**
     * Return true if this is a multibyte character set, or false for a fixed
     * width character set.
     * @returns {boolean} true if this is a multibyte charset, or false otherwise
     */
    isMultiByte: function() {
    	return false;
    }
};
