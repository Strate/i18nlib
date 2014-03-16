/*
 * persian.js - Represent a Persian calendar object.
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


/* !depends calendar.js locale.js date.js julianday.js util/utils.js */

/**
 * @class
 * Construct a new Persian calendar object. This class encodes information about
 * a Persian calendar.<p>
 * 
 * Depends directive: !depends persian.js
 * 
 * @constructor
 * @implements ilib.Cal
 */
ilib.Cal.Persian = function() {
	this.type = "persian";
};

/**
 * @private
 * @const
 * @type Array.<number> 
 * the lengths of each month 
 */
ilib.Cal.Persian.monthLengths = [
	31,  /* Jan */
	28,  /* Feb */
	31,  /* Mar */
	30,  /* Apr */
	31,  /* May */
	30,  /* Jun */
	31,  /* Jul */
	31,  /* Aug */
	30,  /* Sep */
	31,  /* Oct */
	30,  /* Nov */
	31   /* Dec */
];

/**
 * Return the number of months in the given year. The number of months in a year varies
 * for some luni-solar calendars because in some years, an extra month is needed to extend the 
 * days in a year to an entire solar year. The month is represented as a 1-based number
 * where 1=first month, 2=second month, etc.
 * 
 * @param {number} year a year for which the number of months is sought
 * @return {number} The number of months in the given year
 */
ilib.Cal.Persian.prototype.getNumMonths = function(year) {
	return 12;
};

/**
 * Return the number of days in a particular month in a particular year. This function
 * can return a different number for a month depending on the year because of things
 * like leap years.
 * 
 * @param {number} month the month for which the length is sought
 * @param {number} year the year within which that month can be found
 * @return {number} the number of days within the given month in the given year
 */
ilib.Cal.Persian.prototype.getMonLength = function(month, year) {
	if (month !== 2 || !this.isLeapYear(year)) {
		return ilib.Cal.Persian.monthLengths[month-1];
	} else {
		return 29;
	}
};

/**
 * Return true if the given year is a leap year in the Persian calendar.
 * The year parameter may be given as a number, or as a PersDate object.
 * @param {number|ilib.Date.PersDate} year the year for which the leap year information is being sought
 * @return {boolean} true if the given year is a leap year
 */
ilib.Cal.Persian.prototype.isLeapYear = function(year) {
	var y = (typeof(year) === 'number' ? year : year.getYears());
	var centuries = ilib.mod(y, 400);
	return (ilib.mod(y, 4) === 0 && centuries !== 100 && centuries !== 200 && centuries !== 300);
};

/**
 * Return the type of this calendar.
 * 
 * @return {string} the name of the type of this calendar 
 */
ilib.Cal.Persian.prototype.getType = function() {
	return this.type;
};

/**
 * Return a date instance for this calendar type using the given
 * options.
 * @param {Object} options options controlling the construction of 
 * the date instance
 * @return {ilib.Date} a date appropriate for this calendar type
 */
ilib.Cal.Persian.prototype.newDateInstance = function (options) {
	return new ilib.Date.PersDate(options);
};

/* register this calendar for the factory method */
ilib.Cal._constructors["persian"] = ilib.Cal.Persian;
