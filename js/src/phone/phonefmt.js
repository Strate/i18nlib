/*
 * phonefmt.js - Represent a phone number formatter.
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

/*
!depends 
ilibglobal.js 
locale.js 
localeinfo.js
phone/numplan.js
phone/phonenum.js
*/

// !data phonefmt

/**
 * Create a new phone number formatter object that formats numbers according to the parameters.<p>
 * 
 * The options object can contain zero or more of the following parameters:
 *
 * <ul>
 * <li><i>locale</i> locale to use to format this number, or undefined to use the default locale
 * <li><i>style</i> the name of style to use to format numbers, or undefined to use the default style
 * <li><i>mcc</i> the MCC of the country to use if the number is a local number and the country code is not known
 *
 * <li><i>onLoad</i> - a callback function to call when the address info for the*
 * locale is fully loaded and the address has been parsed. When the onLoad 
 * option is given, the address formatter object 
 * will attempt to load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the 
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two. 
 * 
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or 
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while. 
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the 
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object 
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 *
 * Some regions have more than one style of formatting, and the style parameter
 * selects which style the user prefers. The style names can be found by calling <p>
 *
 * If the MCC is given, numbers will be formatted in the manner of the country
 * specified by the MCC. If it is not given, but the locale is, the manner of
 * the country in the locale will be used. If neither the locale or MCC are not given,
 * then the country of the current locale is used. 
 *
 * @class
 * @constructor
 * @param {Object} options properties that control how this formatter behaves
 */
ilib.PhoneFmt = function(options) {
	this.sync = true;
	this.styleName = 'default',
	this.loadParams = {};

	this.locale = new ilib.Locale();

	if (options) {
		if (options.locale) {
			this.locale = new ilib.Locale.PhoneLoc(options);
		} 

		if (options.mcc) {
			this.locale = new ilib.Locale.PhoneLoc(options);	
		}

		if (typeof(options.sync) !== 'undefined') {
			this.sync = (options.sync == true);
		}

		if (options.loadParams) {
			this.loadParams = options.loadParams;
		}

		if (options.style) {
			this.style = options.style;
		}
	}

	this.plan = new ilib.NumPlan(options);

	ilib.loadData({
		name: "phonefmt.json",
		object: ilib.PhoneFmt,
		locale: this.locale, 
		sync: this.sync,
		loadParams: ilib.merge(this.loadParams, {
			returnOne: true
		}),
		callback: ilib.bind(this, function (fmtdata) {
			this.fmtdata = fmtdata;
			if (options && typeof(options.onLoad) === 'function') {
				options.onLoad(this);
			}
		})
	});
};

ilib.PhoneFmt.prototype = {
	/**
	 * 
	 * @protected
	 * @param {string} part
	 * @param {Object} formats
	 * @param {boolean} mustUseAll
	 */
	_substituteDigits: function(part, formats, mustUseAll) {
		var formatString,
			formatted = "",
			partIndex = 0,
			i;

		// console.info("Globalization.Phone._substituteDigits: typeof(formats) is " + typeof(formats));
		if (!part) {
			return formatted;
		}

		if (typeof(formats) === "object") {
			if (part.length > formats.length) {
				// too big, so just use last resort rule.
				throw "part " + part + " is too big. We do not have a format template to format it.";
			}
			// use the format in this array that corresponds to the digit length of this
			// part of the phone number
			formatString = formats[part.length-1];
			// console.info("Globalization.Phone._substituteDigits: formats is an Array: " + JSON.stringify(formats));
		} else {
			formatString = formats;
		}

		for (i = 0; i < formatString.length; i++) {
			if (formatString.charAt(i) === "X") {
				formatted += part.charAt(partIndex);
				partIndex++;
			} else {
				formatted += formatString.charAt(i);
			}
		}
		
		if (mustUseAll && partIndex < part.length-1) {
			// didn't use the whole thing in this format? Hmm... go to last resort rule
			throw "too many digits in " + part + " for format " + formatString;
		}
		
		return formatted;
	},
	
	/**
	Returns the style with the given name, or the default style if there
	is no style with that name.
	*/
	getStyle: function getStyle(name) {
		return this.fmtdata[name] || this.fmtdata["default"];
	},

	/**
	Returns true if this locale contains the named style, and false otherwise.
	*/
	hasStyle: function hasStyle(name) {
		return this.fmtdata[name] !== undefined;
	},
	/**
	 * Format the parts of a phone number appropriately according to the settings in 
	 * this formatter instance.
	 *  
	 * The options can contain zero or more of these properties:
	 * 
	 * <ul>
	 * <li><i>partial</i> boolean which tells whether or not this phone number 
	 * represents a partial number or not. The default is false, which means the number 
	 * represents a whole number. 
	 * <li><i>style</i> style to use to format the number, if different from the 
	 * default style or the style specified in the constructor
	 * </ul>
	 *      
	 * The partial parameter specifies whether or not the phone number contains
	 * a partial phone number or if it is a whole phone number. A partial 
	 * number is usually a number as the user is entering it with a dial pad. The
	 * reason is that certain types of phone numbers should be formatted differently
	 * depending on whether or not it represents a whole number. Specifically, SMS
	 * short codes are formatted differently.<p>
	 * 
	 * Example: a subscriber number of "48773" in the US would get formatted as:
	 * 
	 * <ul>
	 * <li>partial: 487-73  (perhaps the user is in the process of typing a whole phone 
	 * number such as 487-7379)
	 * <li>whole:   48773   (this is the entire SMS short code)
	 * </ul>
	 * 
	 * Any place in the UI where the user types in phone numbers, such as the keypad in 
	 * the phone app, should pass in partial: true to this formatting routine. All other 
	 * places, such as the call log in the phone app, should pass in partial: false, or 
	 * leave the partial flag out of the parameters entirely. 
	 * 
	 * @param {string|ilib.PhoneNumber} number object containing the phone number to format, or a 
	 * string containing a phone number to parse and then reformat
	 * @param {Object} options Parameters which control how to format the number
	 * @return {string} Returns the formatted phone number as a string.
	 */
	format: function format(number, options) {
		var temp, 
			templates, 
			fieldName, 
			countryCode, 
			isWhole, 
			style,
			field,
			formatted = "",
			styles,
			locale,
			styleTemplates;

		try {
			style = this.style; // default style for this formatter

			// figure out what style to use for this type of number
			if (number.countryCode) {
				// dialing from outside the country
				// check to see if it to a mobile number because they are often formatted differently
				style = (number.mobilePrefix) ? "internationalmobile" : "international";
			} else if (number.mobilePrefix !== undefined) {
				style = "mobile";
			} else if (number.serviceCode !== undefined && this.hasStyle("service")) {
				// if there is a special format for service numbers, then use it
				style = "service";
			}

			isWhole = (!options || !options.partial);
			styleTemplates = this.getStyle(style);
			locale = this.locale;

			// console.log("Style ends up being " + style + " and using subtype " + (isWhole ? "whole" : "partial"));
			styleTemplates = (isWhole ? styleTemplates.whole : styleTemplates.partial) || styleTemplates;

			for (field in ilib.PhoneNumber._fieldOrder) {
				if (typeof field === 'string' && typeof ilib.PhoneNumber._fieldOrder[field] === 'string') {
					fieldName = ilib.PhoneNumber._fieldOrder[field];
					// console.info("format: formatting field " + fieldName + " value: " + number[fieldName]);
					if (number[fieldName] !== undefined) {
						if (styleTemplates[fieldName] !== undefined) {
							templates = styleTemplates[fieldName];
							if (fieldName === "trunkAccess") {
								if (number.areaCode === undefined && number.serviceCode === undefined && number.mobilePrefix === undefined) {
									templates = "X";
								}
							}
							// console.info("format: formatting field " + fieldName + " with templates " + JSON.stringify(templates));
							temp = this._substituteDigits(number[fieldName], templates, (fieldName === "subscriberNumber"));
							// console.info("format: formatted is: " + temp);
							formatted += temp;
			
							if ( fieldName === "countryCode" ) {
								// switch to the new country to format the rest of the number
								countryCode = number.countryCode.replace(/[wWpPtT\+#\*]/g, '');	// fix for NOV-108200
								this.locale = new ilib.Locale.PhoneLoc({countryCode: countryCode});

								ilib.loadData({
									name: "phonefmt.json",
									object: ilib.PhoneFmt,
									locale: this.locale,
									sync: true,
									loadParams: ilib.merge(this.loadParams, {
										returnOne: true
									}),
									callback: ilib.bind(this, function (fmtdata) {
										this.fmtdata = fmtdata;
										styleTemplates = this.getStyle((number.mobilePrefix !== undefined) ? "internationalmobile" : "international");
										// console.info("format: switching to region " + locale.region + " and style " + style + " to format the rest of the number ");
										if (options && typeof(options.onLoad) === 'function') {
											options.onLoad(this);
										}
									})
								});
							}
						} else {
							//console.warn("PhoneFmt.format: cannot find format template for field " + fieldName + ", region " + locale.region + ", style " + style);
							// use default of "minimal formatting" so we don't miss parts because of bugs in the format templates
							formatted += number[fieldName];
						}
					}
				}
			}
		} catch (e) {
			if (typeof(e) === 'string') { 
				// console.warn("caught exception: " + e + ". Using last resort rule.");
				// if there was some exception, use this last resort rule
				formatted = "";
				for (field in ilib.PhoneNumber._fieldOrder) {
					if (typeof field === 'string' && typeof ilib.PhoneNumber._fieldOrder[field] === 'string' && number[ilib.PhoneNumber._fieldOrder[field]] !== undefined) {
						// just concatenate without any formatting
						formatted += number[ilib.PhoneNumber._fieldOrder[field]];
						if (ilib.PhoneNumber._fieldOrder[field] === 'countryCode') {
							formatted += ' ';		// fix for NOV-107894
						}
					}
				}
			} else {
				throw e;
			}
		}
		return formatted;
	},
	
	/**
	 * Return an array of names of all available styles that can be used with the current 
	 * formatter.
	 * @return {Array.<string>} an array of names of styles that are supported by this formatter
	 */
	getAvailableStyles: function () {
		var ret = [],
			style;

		if (this.fmtdata) {
			for (style in this.fmtdata) {
				if (this.fmtdata[style].example) {
					ret.push(style);
				}
			}
		}
		return ret;
	},
	
	/**
	 * Return an example phone number formatted with the given style.
	 * 
	 * @param {string|undefined} style style to get an example of, or undefined to use
	 * the current default style for this formatter
	 * @return {string|undefined} an example phone number formatted according to the 
	 * given style, or undefined if the style is not recognized or does not have an 
	 * example 
	 */
	getStyleExample: function (style) {
		return this.fmtdata[style].example || undefined;
	}
};