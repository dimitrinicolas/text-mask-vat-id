/**
 * Default options.
 */
const DEFAULT_OPTIONS = { localeFormat: false };

/**
 * Optional separators inserted if localeFormat option is set to true.
 */
const SEPARATORS = [' ', '-', '.', '/'];

/**
 * Country Code Text Mask.
 */
const COUNTRY_CODE_MASK = [/\w/, /\w/];

/**
 * Generate a flexible VAT Text Mask.
 * @param {string} value Input typed value to mask.
 */
const generateFluidMask = value => [...COUNTRY_CODE_MASK, ' ', ...Array(Math.max(value.length - 3, 0) + 1).fill(/\w|\d/)];

/**
 * Generate country, locale fomated text mask.
 * @param {string} countryCode Country code.
 * @param {string} [value=] Input typed value to mask.
 * @returns {Regex[]}
 */
const generateCountryVatIdMask = (countryCode, value = '') => {
  const defaultTextMask = generateFluidMask(value);

  switch (countryCode) {
    /**
     * Austria
     */
    case 'AT':
      return [...COUNTRY_CODE_MASK, ' ', 'U', ...Array(8).fill(/\d/)];

    /**
     * Belgium
     */
    case 'BE':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(4).fill(/\d/), ' ', ...Array(3).fill(/\d/), ' ', ...Array(3).fill(/\d/)];

    /**
     * Bulgaria
     */
    case 'BG':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(10).fill(/\d/)];

    /**
     * Croatia
     */
    case 'HR':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/)];

    /**
     * Cyprus
     */
    case 'CY':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/), /\w/];

    /**
     * Czech Republic
     */
    case 'CZ':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(13).fill(/\d/)];

    /**
     * Denmark
     */
    case 'DK':
      return [
        ...COUNTRY_CODE_MASK,
        ' ',
        ...Array(2).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/)
      ];

    /**
     * Estonia
     */
    case 'EE':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Finland
     */
    case 'FI':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/)];

    /**
     * France and Monaco
     */
    case 'FR':
      return [
        ...COUNTRY_CODE_MASK,
        ' ',

        /**
         * Matches any digit or letter except o, O, i and I.
         */
        ...Array(2).fill(/\d|([a-hj-np-za-hj-np-z])/i),

        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/)
      ];

    /**
     * Germany
     */
    case 'DE':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Greece
     */
    case 'EL':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    case 'GR':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Hungary
     */
    case 'HU':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/)];

    /**
     * Ireland
     */
    case 'IE':
      return [...COUNTRY_CODE_MASK, ' ', /\d/, /\w|\d/, ...Array(5).fill(/\d/), ...Array(2).fill(/\w|\d/)];

    /**
     * Italy
     */
    case 'IT':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/)];

    /**
     * Latvia
     */
    case 'LV':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/)];

    /**
     * Lithuania
     */
    case 'LT':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(12).fill(/\d/)];

    /**
     * Luxembourg
     */
    case 'LU':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/)];

    /**
     * Malta
     */
    case 'MT':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/)];

    /**
     * Netherlands
     */
    case 'NL':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/), 'B', ...Array(2).fill(/\d/)];

    /**
     * Poland
     */
    case 'PL':
      return [
        ...COUNTRY_CODE_MASK,
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/),
        ' ',
        ...Array(2).fill(/\d/)
      ];

    /**
     * Portugal
     */
    case 'PT':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Romania
     */
    case 'RO':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(10).fill(/\d/)];

    /**
     * Slovakia
     */
    case 'SK':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(10).fill(/\d/)];

    /**
     * Slovenia
     */
    case 'SI':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/)];

    /**
     * Spain
     * TODO: Improve masking
     */
    case 'ES':
      return [...COUNTRY_CODE_MASK, ' ', /\w|\d/, ...Array(7).fill(/\d/), /\w|\d/];

    /**
     * Sweden
     */
    case 'SE':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(12).fill(/\d/)];

    /**
     * United Kingdom and Isle of Man
     * TODO: Improve masking
     */
    case 'GB':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(12).fill(/\w|\d/)];

      /**
     * Non-EU countries
     */

    /**
     * Albania
     */
    case 'AL':
      return [...COUNTRY_CODE_MASK, ' ', /j|k/i, ...Array(8).fill(/\d/), /\w/];

    /**
     * Australia
     */
    case 'AU':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(2).fill(/\d/), ' ', ...Array(9).fill(/\d/)];

    /**
     * Belarus
     */
    case 'BY':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Canada
     */
    case 'CA':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Iceland
     */
    case 'IS':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(6).fill(/\d/)];

    /**
     * India
     */
    case 'IN':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/), /v|c/i];

    /**
     * Indonesia
     */
    case 'ID':
      return [
        ...COUNTRY_CODE_MASK,
        ' ',
        ...Array(2).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        '-',
        ...Array(1).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/)
      ];

    /**
     * Israel
     */
    case 'IL':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * New Zealand
     */
    case 'NZ':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(13).fill(/\d/)];

    /**
     * Norway
     */
    case 'NO':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/), /m/i, /v/i, /a/i];

    /**
     * Philippines
     */
    case 'PH':
      return [
        ...COUNTRY_CODE_MASK,
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/)
      ];

    /**
     * Russia
     */
    case 'RU':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(12).fill(/\d/)];

    /**
     * San Marino
     */
    case 'SM':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(5).fill(/\d/)];

    /**
     * Serbia
     */
    case 'RS':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/)];

    /**
     * Switzerland
     * TODO: Improve masking
     */
    case 'CH':
      return [
        ...COUNTRY_CODE_MASK,
        '-',
        ...Array(3).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        ' ',
        /t|m|i/i,
        /v|w/i,
        /a|s/i,
        /t/i
      ];

    /**
     * Turkey
     */
    case 'TR':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(10).fill(/\d/)];

    /**
     * Ukraine
     */
    case 'UA':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(10).fill(/\d/)];

    /**
     * Uzbekistan
     */
    case 'UZ':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(8).fill(/\d/), /\w|\d/];

      /**
     * Latin American countries
     */

    /**
     * Argentina
     */
    case 'AR':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/)];

    /**
     * Bolivia
     */
    case 'BO':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(7).fill(/\d/)];

    /**
     * Brazil
     */
    case 'BR':
      return [
        ...COUNTRY_CODE_MASK,
        ' ',
        ...Array(2).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        '.',
        ...Array(3).fill(/\d/),
        '/',
        ...Array(4).fill(/\d/),
        '-',
        ...Array(2).fill(/\d/)
      ];

    /**
     * Chile
     */
    case 'CL':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(2).fill(/\d/), '.', ...Array(3).fill(/\d/), '.', ...Array(3).fill(/\d/), '-', /\d|k/i];

    /**
     * Colombia
     */
    case 'CO':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(9).fill(/\d/), ' ', /\d/];

    /**
     * Costa Rica
     */
    case 'CR':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(12).fill(/\d/)];

    /**
     * Ecuador
     */
    case 'EC':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(13).fill(/\d/)];

    /**
     * El Salvador
     */
    case 'SV':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(4).fill(/\d/), '-', ...Array(6).fill(/\d/), '-', ...Array(3).fill(/\d/), '-', /\d/];

    /**
     * Guatemala
     */
    case 'GT':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(7).fill(/\d/), '-', /\d/];

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
      return [...COUNTRY_CODE_MASK, ' ', ...Array(13).fill(/\w|\d/)];

    /**
     * Nicaragua
     */
    case 'NI':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(3).fill(/\d/), '-', ...Array(6).fill(/\d/), '-', ...Array(4).fill(/\d/), /\w/];

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
      return [...COUNTRY_CODE_MASK, ' ', ...Array(6).fill(/\d/), '-', /\d/];

    /**
     * Peru
     */
    case 'PE':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/)];

    /**
     * Dominican Republic
     */
    case 'DO':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(11).fill(/\d/)];

    /**
     * Uruguay
     */
    case 'UY':
      return [...COUNTRY_CODE_MASK, ' ', ...Array(12).fill(/\d/)];

    /**
     * Venezuela
     */
    case 'VE':
      return [...COUNTRY_CODE_MASK, ' ', /j|g|v|e/i, '-', ...Array(9).fill(/\d/)];

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
const createVatIdMask = (options = {}) => {
  const { localeFormat } = { ...DEFAULT_OPTIONS, ...options };

  return value => {
    const countryCode = value.slice(0, 2).toUpperCase();

    /**
     * Wait for complete country identification
     */
    if (countryCode.length !== 2) {
      return COUNTRY_CODE_MASK;
    }

    const mask = generateCountryVatIdMask(countryCode, value);

    if (!localeFormat) {
      return mask.filter(item => SEPARATORS.indexOf(item) === -1);
    }

    return mask;
  };
};

export default createVatIdMask;
