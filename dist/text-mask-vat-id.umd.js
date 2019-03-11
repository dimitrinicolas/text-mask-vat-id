(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.generateVatIdMask = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * Default options.
   */
  var DEFAULT_OPTIONS = {
    localeFormat: false
  };
  /**
   * Optional separators inserted if localeFormat option is set to true.
   */

  var SEPARATORS = [' ', '-', '.', '/'];
  /**
   * Country Code Text Mask.
   */

  var COUNTRY_CODE_MASK = [/\w/, /\w/];
  /**
   * Generate a flexible VAT Text Mask.
   * @param {string} value Input typed value to mask.
   */

  var generateFluidMask = function generateFluidMask() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(Math.max(value.length - 3, 0) + 1).fill(/\w|\d/)));
  };
  /**
   * Generate country, locale fomated text mask.
   * @param {string} countryCode Country code.
   * @param {string} value Input typed value to mask.
   * @returns {Regex[]}
   */


  var generateCountryVatIdMask = function generateCountryVatIdMask(countryCode, value) {
    var defaultTextMask = generateFluidMask(value);

    switch (countryCode) {
      /**
       * Austria
       */
      case 'AT':
        return [].concat(COUNTRY_CODE_MASK, [' ', 'U'], _toConsumableArray(Array(8).fill(/\d/)));

      /**
       * Belgium
       */

      case 'BE':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(4).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)));

      /**
       * Bulgaria
       */

      case 'BG':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(10).fill(/\d/)));

      /**
       * Croatia
       */

      case 'HR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)));

      /**
       * Cyprus
       */

      case 'CY':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)), [/\w/]);

      /**
       * Czech Republic
       */

      case 'CZ':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(13).fill(/\d/)));

      /**
       * Denmark
       */

      case 'DK':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(2).fill(/\d/)), [' '], _toConsumableArray(Array(2).fill(/\d/)), [' '], _toConsumableArray(Array(2).fill(/\d/)), [' '], _toConsumableArray(Array(2).fill(/\d/)));

      /**
       * Estonia
       */

      case 'EE':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Finland
       */

      case 'FI':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)));

      /**
       * France and Monaco
       */

      case 'FR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(2).fill(/\d|([a-hj-np-za-hj-np-z])/i)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)));

      /**
       * Germany
       */

      case 'DE':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Greece
       */

      case 'EL':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      case 'GR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Hungary
       */

      case 'HU':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)));

      /**
       * Ireland
       */

      case 'IE':
        return [].concat(COUNTRY_CODE_MASK, [' ', /\d/, /\w|\d/], _toConsumableArray(Array(5).fill(/\d/)), _toConsumableArray(Array(2).fill(/\w|\d/)));

      /**
       * Italy
       */

      case 'IT':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)));

      /**
       * Latvia
       */

      case 'LV':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)));

      /**
       * Lithuania
       */

      case 'LT':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(12).fill(/\d/)));

      /**
       * Luxembourg
       */

      case 'LU':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)));

      /**
       * Malta
       */

      case 'MT':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)));

      /**
       * Netherlands
       */

      case 'NL':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)), ['B'], _toConsumableArray(Array(2).fill(/\d/)));

      /**
       * Poland
       */

      case 'PL':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(2).fill(/\d/)), [' '], _toConsumableArray(Array(2).fill(/\d/)));

      /**
       * Portugal
       */

      case 'PT':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Romania
       */

      case 'RO':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(10).fill(/\d/)));

      /**
       * Slovakia
       */

      case 'SK':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(10).fill(/\d/)));

      /**
       * Slovenia
       */

      case 'SI':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)));

      /**
       * Spain
       * TODO: Improve masking
       */

      case 'ES':
        return [].concat(COUNTRY_CODE_MASK, [' ', /\w|\d/], _toConsumableArray(Array(7).fill(/\d/)), [/\w|\d/]);

      /**
       * Sweden
       */

      case 'SE':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(12).fill(/\d/)));

      /**
       * United Kingdom and Isle of Man
       * TODO: Improve masking
       */

      case 'GB':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(12).fill(/\w|\d/)));

      /**
      * Non-EU countries
      */

      /**
       * Albania
       */

      case 'AL':
        return [].concat(COUNTRY_CODE_MASK, [' ', /j|k/i], _toConsumableArray(Array(8).fill(/\d/)), [/\w/]);

      /**
       * Australia
       */

      case 'AU':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(2).fill(/\d/)), [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Belarus
       */

      case 'BY':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Canada
       */

      case 'CA':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Iceland
       */

      case 'IS':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(6).fill(/\d/)));

      /**
       * India
       */

      case 'IN':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)), [/v|c/i]);

      /**
       * Indonesia
       */

      case 'ID':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(2).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['-'], _toConsumableArray(Array(1).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)));

      /**
       * Israel
       */

      case 'IL':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * New Zealand
       */

      case 'NZ':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(13).fill(/\d/)));

      /**
       * Norway
       */

      case 'NO':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)), [/m/i, /v/i, /a/i]);

      /**
       * Philippines
       */

      case 'PH':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)), [' '], _toConsumableArray(Array(3).fill(/\d/)));

      /**
       * Russia
       */

      case 'RU':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(12).fill(/\d/)));

      /**
       * San Marino
       */

      case 'SM':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(5).fill(/\d/)));

      /**
       * Serbia
       */

      case 'RS':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)));

      /**
       * Switzerland
       * TODO: Improve masking
       */

      case 'CH':
        return [].concat(COUNTRY_CODE_MASK, ['-'], _toConsumableArray(Array(3).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), [' ', /t|m|i/i, /v|w/i, /a|s/i, /t/i]);

      /**
       * Turkey
       */

      case 'TR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(10).fill(/\d/)));

      /**
       * Ukraine
       */

      case 'UA':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(10).fill(/\d/)));

      /**
       * Uzbekistan
       */

      case 'UZ':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(8).fill(/\d/)), [/\w|\d/]);

      /**
      * Latin American countries
      */

      /**
       * Argentina
       */

      case 'AR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)));

      /**
       * Bolivia
       */

      case 'BO':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(7).fill(/\d/)));

      /**
       * Brazil
       */

      case 'BR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(2).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['/'], _toConsumableArray(Array(4).fill(/\d/)), ['-'], _toConsumableArray(Array(2).fill(/\d/)));

      /**
       * Chile
       */

      case 'CL':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(2).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['.'], _toConsumableArray(Array(3).fill(/\d/)), ['-', /\d|k/i]);

      /**
       * Colombia
       */

      case 'CO':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(9).fill(/\d/)), [' ', /\d/]);

      /**
       * Costa Rica
       */

      case 'CR':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(12).fill(/\d/)));

      /**
       * Ecuador
       */

      case 'EC':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(13).fill(/\d/)));

      /**
       * El Salvador
       */

      case 'SV':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(4).fill(/\d/)), ['-'], _toConsumableArray(Array(6).fill(/\d/)), ['-'], _toConsumableArray(Array(3).fill(/\d/)), ['-', /\d/]);

      /**
       * Guatemala
       */

      case 'GT':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(7).fill(/\d/)), ['-', /\d/]);

      /**
       * Honduras
       * TODO: Find format
       */

      case 'HN':
        return defaultTextMask;

      /**
       * Mexico
       * TODO: Improve masking
       */

      case 'MX':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(13).fill(/\w|\d/)));

      /**
       * Nicaragua
       */

      case 'NI':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(3).fill(/\d/)), ['-'], _toConsumableArray(Array(6).fill(/\d/)), ['-'], _toConsumableArray(Array(4).fill(/\d/)), [/\w/]);

      /**
       * Panama
       * TODO: Find format
       */

      case 'PA':
        return defaultTextMask;

      /**
       * Paraguay
       */

      case 'PY':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(6).fill(/\d/)), ['-', /\d/]);

      /**
       * Peru
       */

      case 'PE':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)));

      /**
       * Dominican Republic
       */

      case 'DO':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(11).fill(/\d/)));

      /**
       * Uruguay
       */

      case 'UY':
        return [].concat(COUNTRY_CODE_MASK, [' '], _toConsumableArray(Array(12).fill(/\d/)));

      /**
       * Venezuela
       */

      case 'VE':
        return [].concat(COUNTRY_CODE_MASK, [' ', /j|g|v|e/i, '-'], _toConsumableArray(Array(9).fill(/\d/)));

      default:
        return defaultTextMask;
    }
  };
  /**
   * Generate VAT Identifiaction Number Text Mask.
   * @param {Object} [options] Mask options.
   * @param {boolean} [options.localeFormat=false] If mask should add optional
   * separators to mask.
   * @returns {(value: string) => Regex[]}
   */


  var generateVatIdMask = function generateVatIdMask() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _DEFAULT_OPTIONS$opti = _objectSpread({}, DEFAULT_OPTIONS, options),
        localeFormat = _DEFAULT_OPTIONS$opti.localeFormat;

    return function (value) {
      var countryCode = value.slice(0, 2).toUpperCase();
      /**
       * Wait for complete country identification
       */

      if (countryCode.length !== 2) {
        return COUNTRY_CODE_MASK;
      }

      var mask = generateCountryVatIdMask(countryCode, value);

      if (!localeFormat) {
        return mask.filter(function (item) {
          return SEPARATORS.indexOf(item) === -1;
        });
      }

      return mask;
    };
  };

  return generateVatIdMask;

}));
