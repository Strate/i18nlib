/*
 * ilibglobal.js - define the ilib name space
 * 
 * Copyright © 2012-2014, JEDLSoft
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

/**
 * @namespace The global namespace that contains all ilib functions and classes.
 */
var ilib = {};

/**
 * Return the current version of ilib.
 * 
 * @static
 * @return {string} a version string for this instance of ilib
 */
ilib.getVersion = function () {
    // increment this for each release
    return // !macro ilibVersion
    ;
};

/**
 * Place where resources and such are eventually assigned.
 */
ilib.data = {
    norm: {
        nfc: {},
        nfd: {},
        nfkd: {},
        ccc: {}
    },
    zoneinfo: {
        "Etc/UTC":{"o":"0:0","f":"UTC"},
        "local":{"f":"local"}
    },
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ ctype: null,
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ ctype_c: null,
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ ctype_l: null,
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ ctype_m: null,
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ ctype_p: null,
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ ctype_z: null,
    /** @type {null|Object.<string,Array.<Array.<number>>>} */ scriptToRange: null,
    /** @type {null|Object.<string,string|Object.<string|Object.<string,string>>>} */ dateformats: null
};

/*
if (typeof(window) !== 'undefined') {
    window["ilib"] = ilib;
}
*/

// export ilib for use as a module in nodejs
if (typeof(module) !== 'undefined') {
    module.exports = ilib;
    module.exports.ilib = ilib;  // for backwards compatibility with older versions of ilib
}

ilib.pseudoLocales = ["zxx-XX"];

/**
 * Sets the pseudo locale. Pseudolocalization (or pseudo-localization) is used for testing
 * internationalization aspects of software. Instead of translating the text of the software
 * into a foreign language, as in the process of localization, the textual elements of an application
 * are replaced with an altered version of the original language.These specific alterations make
 * the original words appear readable, but include the most problematic characteristics of 
 * the world's languages: varying length of text or characters, language direction, and so on.
 * Regular Latin pseudo locale: eu-ES and RTL pseudo locale: ps-AF
 * 
 * @param {string|undefined|null} localename the locale specifier for the pseudo locale
 */
ilib.setAsPseudoLocale = function (localename) {
   if (localename) {
	   ilib.pseudoLocales.push(localename)
   }
};

/**
 * Reset the list of pseudo locales back to the default single locale of zxx-XX.
 */
ilib.clearPseudoLocales = function() {
	ilib.pseudoLocales = ["zxx-XX"];
};

/**
 * Return the name of the platform
 * @private
 * @static
 * @return {string} string naming the platform
 */
ilib._getPlatform = function () {
    if (!ilib._platform) {
        if (typeof(environment) !== 'undefined') {
            ilib._platform = "rhino";
        } else if (typeof(process) !== 'undefined' || typeof(require) !== 'undefined') {
            ilib._platform = "nodejs";
        } else if (typeof(window) !== 'undefined') {
            ilib._platform = (typeof(PalmSystem) !== 'undefined') ? "webos" : "browser";
        } else {
            ilib._platform = "unknown";
        }
    }    
    return ilib._platform;
};

/**
 * If this ilib is running in a browser, return the name of that browser.
 * @private
 * @static
 * @return {string|undefined} the name of the browser that this is running in ("firefox", "chrome", "ie", 
 * "safari", or "opera"), or undefined if this is not running in a browser or if
 * the browser name could not be determined 
 */
ilib._getBrowser = function () {
	var browser = undefined;
	if (ilib._getPlatform() === "browser") {
		if (navigator && navigator.userAgent) {
			if (navigator.userAgent.indexOf("Firefox") > -1) {
				browser = "firefox";
			}
			if (navigator.userAgent.indexOf("Opera") > -1) {
				browser = "opera";
			}
			if (navigator.userAgent.indexOf("Chrome") > -1) {
				browser = "chrome";
			}
			if (navigator.userAgent.indexOf(" .NET") > -1) {
				browser = "ie";
			}
			if (navigator.userAgent.indexOf("Safari") > -1) {
				// chrome also has the string Safari in its userAgent, but the chrome case is 
				// already taken care of above
				browser = "safari";
			}
		}
	}
	return browser;
};

/**
 * Return true if the global variable is defined on this platform.
 * @private
 * @static
 * @return {boolean} true if the global variable is defined on this platform, false otherwise
 */
ilib._isGlobal = function(name) {
    switch (ilib._getPlatform()) {
        case "rhino":
            var top = (function() {
              return (typeof global === 'object') ? global : this;
            })();
            return typeof(top[name]) !== undefined;
        case "nodejs":
            var root = typeof(global) !== 'undefined' ? global : this;
            return root && typeof(root[name]) !== undefined;
            
        default:
            return typeof(window[name]) !== undefined;
    }
};

/**
 * Sets the default locale for all of ilib. This locale will be used
 * when no explicit locale is passed to any ilib class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @static
 * @param {string|undefined|null} spec the locale specifier for the default locale
 */
ilib.setLocale = function (spec) {
    if (typeof(spec) === 'string' || !spec) {
        ilib.locale = spec;
    }
    // else ignore other data types, as we don't have the dependencies
    // to look into them to find a locale
};

/**
 * Return the default locale for all of ilib if one has been set. This 
 * locale will be used when no explicit locale is passed to any ilib 
 * class. If the default
 * locale is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the locale "en-US".<p>
 * 
 * Depends directive: !depends ilibglobal.js 
 * 
 * @static
 * @return {string} the locale specifier for the default locale
 */
ilib.getLocale = function () {
    if (typeof(ilib.locale) !== 'string') {
        if (typeof(navigator) !== 'undefined' && typeof(navigator.language) !== 'undefined') {
            // running in a browser
            ilib.locale = navigator.language.substring(0,3) + navigator.language.substring(3,5).toUpperCase();  // FF/Opera/Chrome/Webkit
            if (!ilib.locale) {
                // IE on Windows
                var lang = typeof(navigator.browserLanguage) !== 'undefined' ? 
                    navigator.browserLanguage : 
                    (typeof(navigator.userLanguage) !== 'undefined' ? 
                        navigator.userLanguage : 
                        (typeof(navigator.systemLanguage) !== 'undefined' ?
                            navigator.systemLanguage :
                            undefined));
                if (typeof(lang) !== 'undefined' && lang) {
                    // for some reason, MS uses lower case region tags
                    ilib.locale = lang.substring(0,3) + lang.substring(3,5).toUpperCase();
                }
            }
        } else if (typeof(PalmSystem) !== 'undefined' && typeof(PalmSystem.locales) !== 'undefined') {
            // webOS
            if (typeof(PalmSystem.locales.UI) != 'undefined' && PalmSystem.locales.UI.length > 0) {
                ilib.locale = PalmSystem.locales.UI;
            }
        } else if (typeof(environment) !== 'undefined' && typeof(environment.user) !== 'undefined') {
            // running under rhino
            if (typeof(environment.user.language) === 'string' && environment.user.language.length > 0) {
                ilib.locale = environment.user.language;
                if (typeof(environment.user.country) === 'string' && environment.user.country.length > 0) {
                    ilib.locale += '-' + environment.user.country;
                }
            }
        } else if (typeof(process) !== 'undefined' && typeof(process.env) !== 'undefined') {
            // running under nodejs
            var lang = process.env.LANG || process.env.LC_ALL;
            // the LANG variable on unix is in the form "lang_REGION.CHARSET"
            // where language and region are the correct ISO codes separated by
            // an underscore. This translate it back to the BCP-47 form.
            if (lang && lang !== 'undefined') {
                ilib.locale = lang.substring(0,2).toLowerCase() + '-' + lang.substring(3,5).toUpperCase();
            }
        }
             
        ilib.locale = typeof(ilib.locale) === 'string' ? ilib.locale : 'en-US';
    }
    return ilib.locale;
};

/**
 * Sets the default time zone for all of ilib. This time zone will be used when
 * no explicit time zone is passed to any ilib class. If the default time zone
 * is not set, ilib will attempt to use the time zone of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the UTC zone "Etc/UTC".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @static
 * @param {string} tz the name of the time zone to set as the default time zone
 */
ilib.setTimeZone = function (tz) {
    ilib.tz = tz || ilib.tz;
};

/**
 * Return the default time zone for all of ilib if one has been set. This 
 * time zone will be used when no explicit time zone is passed to any ilib 
 * class. If the default time zone
 * is not set, ilib will attempt to use the locale of the
 * environment it is running in, if it can find that. If not, it will
 * default to the the zone "local".<p>
 * 
 * Depends directive: !depends ilibglobal.js
 * 
 * @static
 * @return {string} the default time zone for ilib
 */
ilib.getTimeZone = function() {
    if (typeof(ilib.tz) === 'undefined') {
        if (typeof(navigator) !== 'undefined' && typeof(navigator.timezone) !== 'undefined') {
            // running in a browser
            if (navigator.timezone.length > 0) {
                ilib.tz = navigator.timezone;
            }
        } else if (typeof(PalmSystem) !== 'undefined' && typeof(PalmSystem.timezone) !== 'undefined') {
            // running in webkit on webOS
            if (PalmSystem.timezone.length > 0) {
                ilib.tz = PalmSystem.timezone;
            }
        } else if (typeof(environment) !== 'undefined' && typeof(environment.user) !== 'undefined') {
            // running under rhino
            if (typeof(environment.user.timezone) !== 'undefined' && environment.user.timezone.length > 0) {
                ilib.tz = environment.user.timezone;
            }
        } else if (typeof(process) !== 'undefined' && typeof(process.env) !== 'undefined') {
            // running in nodejs
            if (process.env.TZ && process.env.TZ !== "undefined") {
                ilib.tz = process.env.TZ;
            }
        }
        
        ilib.tz = ilib.tz || "local"; 
    }

    return ilib.tz;
};

/**
 * @class
 * Defines the interface for the loader class for ilib. The main method of the
 * loader object is loadFiles(), which loads a set of requested locale data files
 * from where-ever it is stored.
 * @param {Object} ilib The current ilib name space into which files and data should
 * be loaded
 * @interface
 */
ilib.Loader = function(ilib) {};

/**
 * Load a set of files from where-ever it is stored.<p>
 * 
 * This is the main function define a callback function for loading missing locale 
 * data or resources.
 * If this copy of ilib is assembled without including the required locale data
 * or resources, then that data can be lazy loaded dynamically when it is 
 * needed by calling this method. Each ilib class will first
 * check for the existence of data under ilib.data, and if it is not there, 
 * it will attempt to load it by calling this method of the laoder, and then place
 * it there.<p>
 * 
 * Suggested implementations of this method might load files 
 * directly from disk under nodejs or rhino, or within web pages, to load 
 * files from the server with XHR calls.<p>
 * 
 * The first parameter to this method, paths, is an array of relative paths within 
 * the ilib dir structure for the 
 * requested data. These paths will already have the locale spec integrated 
 * into them, so no further tweaking needs to happen to load the data. Simply
 * load the named files. The second
 * parameter tells the loader whether to load the files synchronously or asynchronously.
 * If the sync parameters is false, then the onLoad function must also be specified.
 * The third parameter gives extra parameters to the loader passed from the calling
 * code. This may contain any property/value pairs.  The last parameter, callback,
 * is a callback function to call when all of the data is finishing loading. Make
 * sure to call the callback with the context of "this" so that the caller has their 
 * context back again.<p>
 * 
 * The loader function must be able to operate either synchronously or asychronously. 
 * If the loader function is called with an undefined callback function, it is
 * expected to load the data synchronously, convert it to javascript
 * objects, and return the array of json objects as the return value of the 
 * function. If the loader 
 * function is called with a callback function, it may load the data 
 * synchronously or asynchronously (doesn't matter which) as long as it calls
 * the callback function with the data converted to a javascript objects
 * when it becomes available. If a particular file could not be loaded, the 
 * loader function should put undefined into the corresponding entry in the
 * results array. 
 * Note that it is important that all the data is loaded before the callback
 * is called.<p>
 * 
 * An example implementation for nodejs might be:
 * 
 * <pre>
 * var fs = require("fs");
 * 
 * var myLoader = function() {};
 * myLoader.prototype = new ilib.Loader();
 * myLoader.prototype.constructor = myLoader;
 * myLoader.prototype.loadFiles = function(paths, sync, params, callback) {
 *    if (sync) {
 *        var ret = [];
 *        // synchronous load -- just return the result
 *        paths.forEach(function (path) {
 *            var json = fs.readFileSync(path, "utf-8");
 *            ret.push(json ? JSON.parse(json) : undefined);
 *        });
 *        
 *        return ret;
 *    }
 *    this.callback = callback;
 *
 *    // asynchronous
 *    this.results = [];
 *    this._loadFilesAsync(paths);
 * }
 * myLoader.prototype._loadFilesAsync = function (paths) {
 *    if (paths.length > 0) {
 *        var file = paths.shift();
 *        fs.readFile(file, "utf-8", function(err, json) {
 *            this.results.push(err ? undefined : JSON.parse(json));
 *            // call self recursively so that the callback is only called at the end
 *            // when all the files are loaded sequentially
 *            if (paths.length > 0) {
 *                this._loadFilesAsync(paths);
 *            } else {
 *                this.callback(this.results);
 *            }
 *        });
 *     }
 * }
 * 
 * // bind to "this" so that "this" is relative to your own instance
 * ilib.setLoaderCallback(new myLoader());
 * </pre>

 * @param {Array.<string>} paths An array of paths to load from wherever the files are stored 
 * @param {Boolean} sync if true, load the files synchronously, and false means asynchronously
 * @param {Object} params an object with any extra parameters for the loader. These can be 
 * anything. The caller of the ilib class passes these parameters in. Presumably, the code that
 * calls ilib and the code that provides the loader are together and can have a private 
 * agreement between them about what the parameters should contain.
 * @param {function(Object)} callback function to call when the files are all loaded. The 
 * parameter of the callback function is the contents of the files.
 */
ilib.Loader.prototype.loadFiles = function (paths, sync, params, callback) {};

/**
 * Return all files available for loading using this loader instance.
 * This method returns an object where the properties are the paths to
 * directories where files are loaded from and the values are an array
 * of strings containing the relative paths under the directory of each
 * file that can be loaded.<p>
 * 
 * Example:
 *  <pre>
 *  {
 *      "/usr/share/javascript/ilib/locale": [
 *          "dateformats.json",
 *          "aa/dateformats.json",
 *          "af/dateformats.json",
 *          "agq/dateformats.json",
 *          "ak/dateformats.json",
 *          ...
 *          "zxx/dateformats.json"
 *      ]
 *  }
 *  </pre>
 * @returns {Object} a hash containing directory names and
 * paths to file that can be loaded by this loader 
 */
ilib.Loader.prototype.listAvailableFiles = function() {};

/**
 * Return true if the file in the named path is available for loading using
 * this loader. The path may be given as an absolute path, in which case
 * only that file is checked, or as a relative path, in which case, the
 * relative path may appear underneath any of the directories that the loader
 * knows about.
 * @returns {boolean} true if the file in the named path is available for loading, and
 * false otherwise
 */
ilib.Loader.prototype.isAvailable = function(path) {};

/**
 * Load an ilib javascript module in to memory and initialize it. This function is
 * used for the module system which loads ilib code dynamically as it is needed.
 * The module loaded by require() may itself call require() for its dependencies,
 * meaning that one call to require may result in the loading of multiple JS files.
 * The module system is roughly modeled on the nodejs module system, and is actually
 * implemented on top of the nodejs module system when run on nodejs itself.<p>
 * 
 * The loader should cache the file names of the code files it has already loaded 
 * and avoid loading them again upon the second call to require with the same
 * file name. This way, files that multiple other files depend upon will only 
 * get loaded once. 
 * 
 * @param {string|Array.<string>} path Path or array of paths to modules to load
 * @returns {Object} the object/namespace where the module loads itself
 */
ilib.Loader.prototype.require = function(path) {};

/**
 * Clear the cache of files names already loaded in order to cause require() to
 * load them again. This is mainly used for debugging and unit testing.
 */
ilib.Loader.prototype.clearRequireCache = function() {};

/**
 * Set the custom loader used to load ilib's locale data in your environment. 
 * The instance passed in must implement the ilib.Loader interface. See the
 * ilib.Loader class documentation for more information about loaders. 
 * 
 * @static
 * @param {ilib.Loader} loader class to call to access the requested data.
 * @return {boolean} true if the loader was installed correctly, or false
 * if not
 */
ilib.setLoaderCallback = function(loader) {
    // only a basic check
    if ((typeof(loader) === 'object' && loader instanceof ilib.Loader) || 
            typeof(loader) === 'function' || typeof(loader) === 'undefined') {
        // console.log("setting callback loader to " + (loader ? loader.name : "undefined"));
        ilib._load = loader;
        return true;
    }
    return false;
};

/**
 * Return the custom ilib.Loader instance currently in use with this instance 
 * of ilib. If there is no loader, this method returns undefined.
 * 
 * @static
 * @return {ilib.Loader|undefined} the loader instance currently in use, or 
 * undefined if there is no such loader
 */
ilib.getLoader = function() {
	return ilib._load;
};

/**
 * Extend object1 by mixing in everything from object2 into it. The objects
 * are deeply extended, meaning that this method recursively descends the
 * tree in the objects and mixes them in at each level. Arrays are extended
 * by concatenating the elements of object2 onto those of object1.  
 * 
 * @param {Object} object1 the target object to extend
 * @param {Object} object1 the object to mix in to object1
 * @param {Object} returns object1
 */
ilib.extend = function (object1, object2) {
	var prop = undefined;
	for (prop in object2) {
		if (prop && typeof(object2[prop]) !== 'undefined') {
			if (object1[prop] instanceof Array && object2[prop] instanceof Array) {
				//console.log("Merging array prop " + prop);
				object1[prop] = object1[prop].concat(object2[prop]);
			} else if (typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object') {
				//console.log("Merging object prop " + prop);
				if (prop !== "ilib") {
					object1[prop] = this.merge(object1[prop], object2[prop]);
				}
			} else {
				//console.log("Copying prop " + prop);
				// for debugging. Used to determine whether or not json files are overriding their parents unnecessarily
				object1[prop] = object2[prop];
			}
		}
	}
	return object1;
};
