/*jslint todo: true, browser: true, continue: true, white: true*/

/**
 * Store measure value.
 *
 * @class
 * @param {number|string} measure - The value to put. If a string, use
 * Measure.parseNumber for conversion.
 * @param {boolean} [isInInch] - If undefined, will use Measure.isInInch for
 * converting the measure. Else, if true, the measure is in inch; if false: is
 * in millimeters.
 */
var Measure = function(measure, isInInch) {
    "use strict";
    var that = this;

    var value = Measure.parseNumber(measure);
    var valueInInch = (isInInch === undefined) ? Measure.isInInch : isInInch;

    /**
     * Get the value.
     *
     * @function get
     * @memberof Measure
     * @instance
     *
     * @param {boolean} [inInch] - If undefined, will use Measure.isInInch for
     * converting the measure. Else, if true, the measure is in inch; if false:
     * is in millimeters.
     * @return {number} The measure in the wanted mesure system.
     */
    that.get = function(inInch) {
        var wantedInInch = (inInch === undefined) ? Measure.isInInch : inInch;

        if(wantedInInch === valueInInch) {
            return value;
        }

        if(wantedInInch === true) {
            return value * Measure.MILLIMETER_TO_INCH;
        }
        return value * Measure.INCH_TO_MILLIMETER;
    };


    /**
     * Sets a new value.
     *
     * @function get
     * @memberof Measure
     * @instance
     *
     * @param {number|string} measure - The value to put. If a string, use
     * Measure.parseNumber for conversion.
     * @param {boolean} [isInInch] - If undefined, will use Measure.isInInch
     * for converting the measure. Else, if true, the measure is in inch; if
     * false: is in millimeters.
     */
    that.set = function(measure, isInInch) {
        value = Measure.parseNumber(measure);
        valueInInch = (isInInch === undefined) ? Measure.isInInch : isInInch;
    };
};

/**
 * Determines if all unit values are automatically supposed to be in inches or
 * millimeters.
 */
Measure.isInInch = true;

/**
 * Constant for converting inches values into millimeters values.
 */
Measure.INCH_TO_MILLIMETER = 25.4;

/**
 * Constant for converting millimeters values into inches values.
 */
Measure.MILLIMETER_TO_INCH = 0.03937008;

/**
 * Converts a string in a number. If the string cannot be converted or isNan or
 * infinte, then it is converted to zero.
 *
 * @param {string} string - The string to convert.
 * @return {number} The converted string in number.
 */
Measure.parseNumber = function(string) {
    "use strict";
    var n = Number(string);
    return (isFinite(n) === true) ? n : 0;
};
