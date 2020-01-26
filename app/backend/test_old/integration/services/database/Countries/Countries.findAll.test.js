const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("countries", "findAll")', () => {
  let clock = null;

  beforeEach(async () => {
    await services
      .get('database')
      .getKnex()
      .seed.run();
    clock = sinon.useFakeTimers(new Date('2019-08-27T11:11:11.000Z').getTime());
  });

  afterEach(async () => {
    clock.restore();
  });

  it('returns all the countries', async () => {
    // Given
    const controller = 'countries';
    const method = 'findAll';

    // When
    const result = await services.get('database').execute(controller, method);

    // Then
    expect(result).to.deep.equal({
      success: true,
      service: 'database',
      errors: [],
      payload: [
        {
          id: 1,
          name: 'United States',
          shortName: 'US',
          phoneCode: null
        },
        {
          id: 2,
          name: 'Canada',
          shortName: 'CA',
          phoneCode: null
        },
        {
          id: 3,
          name: 'Afghanistan',
          shortName: 'AF',
          phoneCode: null
        },
        {
          id: 4,
          name: 'Albania',
          shortName: 'AL',
          phoneCode: null
        },
        {
          id: 5,
          name: 'Algeria',
          shortName: 'DZ',
          phoneCode: null
        },
        {
          id: 6,
          name: 'American Samoa',
          shortName: 'AS',
          phoneCode: null
        },
        {
          id: 7,
          name: 'Andorra',
          shortName: 'AD',
          phoneCode: null
        },
        {
          id: 8,
          name: 'Angola',
          shortName: 'AO',
          phoneCode: null
        },
        {
          id: 9,
          name: 'Anguilla',
          shortName: 'AI',
          phoneCode: null
        },
        {
          id: 10,
          name: 'Antarctica',
          shortName: 'AQ',
          phoneCode: null
        },
        {
          id: 11,
          name: 'Antigua and/or Barbuda',
          shortName: 'AG',
          phoneCode: null
        },
        {
          id: 12,
          name: 'Argentina',
          shortName: 'AR',
          phoneCode: null
        },
        {
          id: 13,
          name: 'Armenia',
          shortName: 'AM',
          phoneCode: null
        },
        {
          id: 14,
          name: 'Aruba',
          shortName: 'AW',
          phoneCode: null
        },
        {
          id: 15,
          name: 'Australia',
          shortName: 'AU',
          phoneCode: null
        },
        {
          id: 16,
          name: 'Austria',
          shortName: 'AT',
          phoneCode: null
        },
        {
          id: 17,
          name: 'Azerbaijan',
          shortName: 'AZ',
          phoneCode: null
        },
        {
          id: 18,
          name: 'Bahamas',
          shortName: 'BS',
          phoneCode: null
        },
        {
          id: 19,
          name: 'Bahrain',
          shortName: 'BH',
          phoneCode: null
        },
        {
          id: 20,
          name: 'Bangladesh',
          shortName: 'BD',
          phoneCode: null
        },
        {
          id: 21,
          name: 'Barbados',
          shortName: 'BB',
          phoneCode: null
        },
        {
          id: 22,
          name: 'Belarus',
          shortName: 'BY',
          phoneCode: null
        },
        {
          id: 23,
          name: 'Belgium',
          shortName: 'BE',
          phoneCode: null
        },
        {
          id: 24,
          name: 'Belize',
          shortName: 'BZ',
          phoneCode: null
        },
        {
          id: 25,
          name: 'Benin',
          shortName: 'BJ',
          phoneCode: null
        },
        {
          id: 26,
          name: 'Bermuda',
          shortName: 'BM',
          phoneCode: null
        },
        {
          id: 27,
          name: 'Bhutan',
          shortName: 'BT',
          phoneCode: null
        },
        {
          id: 28,
          name: 'Bolivia',
          shortName: 'BO',
          phoneCode: null
        },
        {
          id: 29,
          name: 'Bosnia and Herzegovina',
          shortName: 'BA',
          phoneCode: null
        },
        {
          id: 30,
          name: 'Botswana',
          shortName: 'BW',
          phoneCode: null
        },
        {
          id: 31,
          name: 'Bouvet Island',
          shortName: 'BV',
          phoneCode: null
        },
        {
          id: 32,
          name: 'Brazil',
          shortName: 'BR',
          phoneCode: null
        },
        {
          id: 33,
          name: 'British lndian Ocean Territory',
          shortName: 'IO',
          phoneCode: null
        },
        {
          id: 34,
          name: 'Brunei Darussalam',
          shortName: 'BN',
          phoneCode: null
        },
        {
          id: 35,
          name: 'Bulgaria',
          shortName: 'BG',
          phoneCode: null
        },
        {
          id: 36,
          name: 'Burkina Faso',
          shortName: 'BF',
          phoneCode: null
        },
        {
          id: 37,
          name: 'Burundi',
          shortName: 'BI',
          phoneCode: null
        },
        {
          id: 38,
          name: 'Cambodia',
          shortName: 'KH',
          phoneCode: null
        },
        {
          id: 39,
          name: 'Cameroon',
          shortName: 'CM',
          phoneCode: null
        },
        {
          id: 40,
          name: 'Cape Verde',
          shortName: 'CV',
          phoneCode: null
        },
        {
          id: 41,
          name: 'Cayman Islands',
          shortName: 'KY',
          phoneCode: null
        },
        {
          id: 42,
          name: 'Central African Republic',
          shortName: 'CF',
          phoneCode: null
        },
        {
          id: 43,
          name: 'Chad',
          shortName: 'TD',
          phoneCode: null
        },
        {
          id: 44,
          name: 'Chile',
          shortName: 'CL',
          phoneCode: null
        },
        {
          id: 45,
          name: 'China',
          shortName: 'CN',
          phoneCode: null
        },
        {
          id: 46,
          name: 'Christmas Island',
          shortName: 'CX',
          phoneCode: null
        },
        {
          id: 47,
          name: 'Cocos (Keeling) Islands',
          shortName: 'CC',
          phoneCode: null
        },
        {
          id: 48,
          name: 'Colombia',
          shortName: 'CO',
          phoneCode: null
        },
        {
          id: 49,
          name: 'Comoros',
          shortName: 'KM',
          phoneCode: null
        },
        {
          id: 50,
          name: 'Congo',
          shortName: 'CG',
          phoneCode: null
        },
        {
          id: 51,
          name: 'Cook Islands',
          shortName: 'CK',
          phoneCode: null
        },
        {
          id: 52,
          name: 'Costa Rica',
          shortName: 'CR',
          phoneCode: null
        },
        {
          id: 53,
          name: 'Croatia (Hrvatska)',
          shortName: 'HR',
          phoneCode: null
        },
        {
          id: 54,
          name: 'Cuba',
          shortName: 'CU',
          phoneCode: null
        },
        {
          id: 55,
          name: 'Cyprus',
          shortName: 'CY',
          phoneCode: null
        },
        {
          id: 56,
          name: 'Czech Republic',
          shortName: 'CZ',
          phoneCode: null
        },
        {
          id: 57,
          name: 'Democratic Republic of Congo',
          shortName: 'CD',
          phoneCode: null
        },
        {
          id: 58,
          name: 'Denmark',
          shortName: 'DK',
          phoneCode: null
        },
        {
          id: 59,
          name: 'Djibouti',
          shortName: 'DJ',
          phoneCode: null
        },
        {
          id: 60,
          name: 'Dominica',
          shortName: 'DM',
          phoneCode: null
        },
        {
          id: 61,
          name: 'Dominican Republic',
          shortName: 'DO',
          phoneCode: null
        },
        {
          id: 62,
          name: 'East Timor',
          shortName: 'TP',
          phoneCode: null
        },
        {
          id: 63,
          name: 'Ecudaor',
          shortName: 'EC',
          phoneCode: null
        },
        {
          id: 64,
          name: 'Egypt',
          shortName: 'EG',
          phoneCode: null
        },
        {
          id: 65,
          name: 'El Salvador',
          shortName: 'SV',
          phoneCode: null
        },
        {
          id: 66,
          name: 'Equatorial Guinea',
          shortName: 'GQ',
          phoneCode: null
        },
        {
          id: 67,
          name: 'Eritrea',
          shortName: 'ER',
          phoneCode: null
        },
        {
          id: 68,
          name: 'Estonia',
          shortName: 'EE',
          phoneCode: null
        },
        {
          id: 69,
          name: 'Ethiopia',
          shortName: 'ET',
          phoneCode: null
        },
        {
          id: 70,
          name: 'Falkland Islands (Malvinas)',
          shortName: 'FK',
          phoneCode: null
        },
        {
          id: 71,
          name: 'Faroe Islands',
          shortName: 'FO',
          phoneCode: null
        },
        {
          id: 72,
          name: 'Fiji',
          shortName: 'FJ',
          phoneCode: null
        },
        {
          id: 73,
          name: 'Finland',
          shortName: 'FI',
          phoneCode: null
        },
        {
          id: 74,
          name: 'France',
          shortName: 'FR',
          phoneCode: null
        },
        {
          id: 75,
          name: 'France, Metropolitan',
          shortName: 'FX',
          phoneCode: null
        },
        {
          id: 76,
          name: 'French Guiana',
          shortName: 'GF',
          phoneCode: null
        },
        {
          id: 77,
          name: 'French Polynesia',
          shortName: 'PF',
          phoneCode: null
        },
        {
          id: 78,
          name: 'French Southern Territories',
          shortName: 'TF',
          phoneCode: null
        },
        {
          id: 79,
          name: 'Gabon',
          shortName: 'GA',
          phoneCode: null
        },
        {
          id: 80,
          name: 'Gambia',
          shortName: 'GM',
          phoneCode: null
        },
        {
          id: 81,
          name: 'Georgia',
          shortName: 'GE',
          phoneCode: null
        },
        {
          id: 82,
          name: 'Germany',
          shortName: 'DE',
          phoneCode: null
        },
        {
          id: 83,
          name: 'Ghana',
          shortName: 'GH',
          phoneCode: null
        },
        {
          id: 84,
          name: 'Gibraltar',
          shortName: 'GI',
          phoneCode: null
        },
        {
          id: 85,
          name: 'Greece',
          shortName: 'GR',
          phoneCode: null
        },
        {
          id: 86,
          name: 'Greenland',
          shortName: 'GL',
          phoneCode: null
        },
        {
          id: 87,
          name: 'Grenada',
          shortName: 'GD',
          phoneCode: null
        },
        {
          id: 88,
          name: 'Guadeloupe',
          shortName: 'GP',
          phoneCode: null
        },
        {
          id: 89,
          name: 'Guam',
          shortName: 'GU',
          phoneCode: null
        },
        {
          id: 90,
          name: 'Guatemala',
          shortName: 'GT',
          phoneCode: null
        },
        {
          id: 91,
          name: 'Guinea',
          shortName: 'GN',
          phoneCode: null
        },
        {
          id: 92,
          name: 'Guinea-Bissau',
          shortName: 'GW',
          phoneCode: null
        },
        {
          id: 93,
          name: 'Guyana',
          shortName: 'GY',
          phoneCode: null
        },
        {
          id: 94,
          name: 'Haiti',
          shortName: 'HT',
          phoneCode: null
        },
        {
          id: 95,
          name: 'Heard and Mc Donald Islands',
          shortName: 'HM',
          phoneCode: null
        },
        {
          id: 96,
          name: 'Honduras',
          shortName: 'HN',
          phoneCode: null
        },
        {
          id: 97,
          name: 'Hong Kong',
          shortName: 'HK',
          phoneCode: null
        },
        {
          id: 98,
          name: 'Hungary',
          shortName: 'HU',
          phoneCode: '+36'
        },
        {
          id: 99,
          name: 'Iceland',
          shortName: 'IS',
          phoneCode: null
        },
        {
          id: 100,
          name: 'India',
          shortName: 'IN',
          phoneCode: null
        },
        {
          id: 101,
          name: 'Indonesia',
          shortName: 'ID',
          phoneCode: null
        },
        {
          id: 102,
          name: 'Iran (Islamic Republic of)',
          shortName: 'IR',
          phoneCode: null
        },
        {
          id: 103,
          name: 'Iraq',
          shortName: 'IQ',
          phoneCode: null
        },
        {
          id: 104,
          name: 'Ireland',
          shortName: 'IE',
          phoneCode: null
        },
        {
          id: 105,
          name: 'Israel',
          shortName: 'IL',
          phoneCode: null
        },
        {
          id: 106,
          name: 'Italy',
          shortName: 'IT',
          phoneCode: null
        },
        {
          id: 107,
          name: 'Ivory Coast',
          shortName: 'CI',
          phoneCode: null
        },
        {
          id: 108,
          name: 'Jamaica',
          shortName: 'JM',
          phoneCode: null
        },
        {
          id: 109,
          name: 'Japan',
          shortName: 'JP',
          phoneCode: null
        },
        {
          id: 110,
          name: 'Jordan',
          shortName: 'JO',
          phoneCode: null
        },
        {
          id: 111,
          name: 'Kazakhstan',
          shortName: 'KZ',
          phoneCode: null
        },
        {
          id: 112,
          name: 'Kenya',
          shortName: 'KE',
          phoneCode: null
        },
        {
          id: 113,
          name: 'Kiribati',
          shortName: 'KI',
          phoneCode: null
        },
        {
          id: 114,
          name: "Korea, Democratic People\\'s Republic of",
          shortName: 'KP',
          phoneCode: null
        },
        {
          id: 115,
          name: 'Korea, Republic of',
          shortName: 'KR',
          phoneCode: null
        },
        {
          id: 116,
          name: 'Kuwait',
          shortName: 'KW',
          phoneCode: null
        },
        {
          id: 117,
          name: 'Kyrgyzstan',
          shortName: 'KG',
          phoneCode: null
        },
        {
          id: 118,
          name: "Lao People\\'s Democratic Republic",
          shortName: 'LA',
          phoneCode: null
        },
        {
          id: 119,
          name: 'Latvia',
          shortName: 'LV',
          phoneCode: null
        },
        {
          id: 120,
          name: 'Lebanon',
          shortName: 'LB',
          phoneCode: null
        },
        {
          id: 121,
          name: 'Lesotho',
          shortName: 'LS',
          phoneCode: null
        },
        {
          id: 122,
          name: 'Liberia',
          shortName: 'LR',
          phoneCode: null
        },
        {
          id: 123,
          name: 'Libyan Arab Jamahiriya',
          shortName: 'LY',
          phoneCode: null
        },
        {
          id: 124,
          name: 'Liechtenstein',
          shortName: 'LI',
          phoneCode: null
        },
        {
          id: 125,
          name: 'Lithuania',
          shortName: 'LT',
          phoneCode: null
        },
        {
          id: 126,
          name: 'Luxembourg',
          shortName: 'LU',
          phoneCode: null
        },
        {
          id: 127,
          name: 'Macau',
          shortName: 'MO',
          phoneCode: null
        },
        {
          id: 128,
          name: 'Macedonia',
          shortName: 'MK',
          phoneCode: null
        },
        {
          id: 129,
          name: 'Madagascar',
          shortName: 'MG',
          phoneCode: null
        },
        {
          id: 130,
          name: 'Malawi',
          shortName: 'MW',
          phoneCode: null
        },
        {
          id: 131,
          name: 'Malaysia',
          shortName: 'MY',
          phoneCode: null
        },
        {
          id: 132,
          name: 'Maldives',
          shortName: 'MV',
          phoneCode: null
        },
        {
          id: 133,
          name: 'Mali',
          shortName: 'ML',
          phoneCode: null
        },
        {
          id: 134,
          name: 'Malta',
          shortName: 'MT',
          phoneCode: null
        },
        {
          id: 135,
          name: 'Marshall Islands',
          shortName: 'MH',
          phoneCode: null
        },
        {
          id: 136,
          name: 'Martinique',
          shortName: 'MQ',
          phoneCode: null
        },
        {
          id: 137,
          name: 'Mauritania',
          shortName: 'MR',
          phoneCode: null
        },
        {
          id: 138,
          name: 'Mauritius',
          shortName: 'MU',
          phoneCode: null
        },
        {
          id: 139,
          name: 'Mayotte',
          shortName: 'TY',
          phoneCode: null
        },
        {
          id: 140,
          name: 'Mexico',
          shortName: 'MX',
          phoneCode: null
        },
        {
          id: 141,
          name: 'Micronesia, Federated States of',
          shortName: 'FM',
          phoneCode: null
        },
        {
          id: 142,
          name: 'Moldova, Republic of',
          shortName: 'MD',
          phoneCode: null
        },
        {
          id: 143,
          name: 'Monaco',
          shortName: 'MC',
          phoneCode: null
        },
        {
          id: 144,
          name: 'Mongolia',
          shortName: 'MN',
          phoneCode: null
        },
        {
          id: 145,
          name: 'Montserrat',
          shortName: 'MS',
          phoneCode: null
        },
        {
          id: 146,
          name: 'Morocco',
          shortName: 'MA',
          phoneCode: null
        },
        {
          id: 147,
          name: 'Mozambique',
          shortName: 'MZ',
          phoneCode: null
        },
        {
          id: 148,
          name: 'Myanmar',
          shortName: 'MM',
          phoneCode: null
        },
        {
          id: 149,
          name: 'Namibia',
          shortName: 'NA',
          phoneCode: null
        },
        {
          id: 150,
          name: 'Nauru',
          shortName: 'NR',
          phoneCode: null
        },
        {
          id: 151,
          name: 'Nepal',
          shortName: 'NP',
          phoneCode: null
        },
        {
          id: 152,
          name: 'Netherlands',
          shortName: 'NL',
          phoneCode: null
        },
        {
          id: 153,
          name: 'Netherlands Antilles',
          shortName: 'AN',
          phoneCode: null
        },
        {
          id: 154,
          name: 'New Caledonia',
          shortName: 'NC',
          phoneCode: null
        },
        {
          id: 155,
          name: 'New Zealand',
          shortName: 'NZ',
          phoneCode: null
        },
        {
          id: 156,
          name: 'Nicaragua',
          shortName: 'NI',
          phoneCode: null
        },
        {
          id: 157,
          name: 'Niger',
          shortName: 'NE',
          phoneCode: null
        },
        {
          id: 158,
          name: 'Nigeria',
          shortName: 'NG',
          phoneCode: null
        },
        {
          id: 159,
          name: 'Niue',
          shortName: 'NU',
          phoneCode: null
        },
        {
          id: 160,
          name: 'Norfork Island',
          shortName: 'NF',
          phoneCode: null
        },
        {
          id: 161,
          name: 'Northern Mariana Islands',
          shortName: 'MP',
          phoneCode: null
        },
        {
          id: 162,
          name: 'Norway',
          shortName: 'NO',
          phoneCode: null
        },
        {
          id: 163,
          name: 'Oman',
          shortName: 'OM',
          phoneCode: null
        },
        {
          id: 164,
          name: 'Pakistan',
          shortName: 'PK',
          phoneCode: null
        },
        {
          id: 165,
          name: 'Palau',
          shortName: 'PW',
          phoneCode: null
        },
        {
          id: 166,
          name: 'Panama',
          shortName: 'PA',
          phoneCode: null
        },
        {
          id: 167,
          name: 'Papua New Guinea',
          shortName: 'PG',
          phoneCode: null
        },
        {
          id: 168,
          name: 'Paraguay',
          shortName: 'PY',
          phoneCode: null
        },
        {
          id: 169,
          name: 'Peru',
          shortName: 'PE',
          phoneCode: null
        },
        {
          id: 170,
          name: 'Philippines',
          shortName: 'PH',
          phoneCode: null
        },
        {
          id: 171,
          name: 'Pitcairn',
          shortName: 'PN',
          phoneCode: null
        },
        {
          id: 172,
          name: 'Poland',
          shortName: 'PL',
          phoneCode: null
        },
        {
          id: 173,
          name: 'Portugal',
          shortName: 'PT',
          phoneCode: null
        },
        {
          id: 174,
          name: 'Puerto Rico',
          shortName: 'PR',
          phoneCode: null
        },
        {
          id: 175,
          name: 'Qatar',
          shortName: 'QA',
          phoneCode: null
        },
        {
          id: 176,
          name: 'Republic of South Sudan',
          shortName: 'SS',
          phoneCode: null
        },
        {
          id: 177,
          name: 'Reunion',
          shortName: 'RE',
          phoneCode: null
        },
        {
          id: 178,
          name: 'Romania',
          shortName: 'RO',
          phoneCode: null
        },
        {
          id: 179,
          name: 'Russian Federation',
          shortName: 'RU',
          phoneCode: null
        },
        {
          id: 180,
          name: 'Rwanda',
          shortName: 'RW',
          phoneCode: null
        },
        {
          id: 181,
          name: 'Saint Kitts and Nevis',
          shortName: 'KN',
          phoneCode: null
        },
        {
          id: 182,
          name: 'Saint Lucia',
          shortName: 'LC',
          phoneCode: null
        },
        {
          id: 183,
          name: 'Saint Vincent and the Grenadines',
          shortName: 'VC',
          phoneCode: null
        },
        {
          id: 184,
          name: 'Samoa',
          shortName: 'WS',
          phoneCode: null
        },
        {
          id: 185,
          name: 'San Marino',
          shortName: 'SM',
          phoneCode: null
        },
        {
          id: 186,
          name: 'Sao Tome and Principe',
          shortName: 'ST',
          phoneCode: null
        },
        {
          id: 187,
          name: 'Saudi Arabia',
          shortName: 'SA',
          phoneCode: null
        },
        {
          id: 188,
          name: 'Senegal',
          shortName: 'SN',
          phoneCode: null
        },
        {
          id: 189,
          name: 'Serbia',
          shortName: 'RS',
          phoneCode: null
        },
        {
          id: 190,
          name: 'Seychelles',
          shortName: 'SC',
          phoneCode: null
        },
        {
          id: 191,
          name: 'Sierra Leone',
          shortName: 'SL',
          phoneCode: null
        },
        {
          id: 192,
          name: 'Singapore',
          shortName: 'SG',
          phoneCode: null
        },
        {
          id: 193,
          name: 'Slovakia',
          shortName: 'SK',
          phoneCode: null
        },
        {
          id: 194,
          name: 'Slovenia',
          shortName: 'SI',
          phoneCode: null
        },
        {
          id: 195,
          name: 'Solomon Islands',
          shortName: 'SB',
          phoneCode: null
        },
        {
          id: 196,
          name: 'Somalia',
          shortName: 'SO',
          phoneCode: null
        },
        {
          id: 197,
          name: 'South Africa',
          shortName: 'ZA',
          phoneCode: null
        },
        {
          id: 198,
          name: 'South Georgia South Sandwich Islands',
          shortName: 'GS',
          phoneCode: null
        },
        {
          id: 199,
          name: 'Spain',
          shortName: 'ES',
          phoneCode: null
        },
        {
          id: 200,
          name: 'Sri Lanka',
          shortName: 'LK',
          phoneCode: null
        },
        {
          id: 201,
          name: 'St. Helena',
          shortName: 'SH',
          phoneCode: null
        },
        {
          id: 202,
          name: 'St. Pierre and Miquelon',
          shortName: 'PM',
          phoneCode: null
        },
        {
          id: 203,
          name: 'Sudan',
          shortName: 'SD',
          phoneCode: null
        },
        {
          id: 204,
          name: 'Suriname',
          shortName: 'SR',
          phoneCode: null
        },
        {
          id: 205,
          name: 'Svalbarn and Jan Mayen Islands',
          shortName: 'SJ',
          phoneCode: null
        },
        {
          id: 206,
          name: 'Swaziland',
          shortName: 'SZ',
          phoneCode: null
        },
        {
          id: 207,
          name: 'Sweden',
          shortName: 'SE',
          phoneCode: null
        },
        {
          id: 208,
          name: 'Switzerland',
          shortName: 'CH',
          phoneCode: null
        },
        {
          id: 209,
          name: 'Syrian Arab Republic',
          shortName: 'SY',
          phoneCode: null
        },
        {
          id: 210,
          name: 'Taiwan',
          shortName: 'TW',
          phoneCode: null
        },
        {
          id: 211,
          name: 'Tajikistan',
          shortName: 'TJ',
          phoneCode: null
        },
        {
          id: 212,
          name: 'Tanzania, United Republic of',
          shortName: 'TZ',
          phoneCode: null
        },
        {
          id: 213,
          name: 'Thailand',
          shortName: 'TH',
          phoneCode: null
        },
        {
          id: 214,
          name: 'Togo',
          shortName: 'TG',
          phoneCode: null
        },
        {
          id: 215,
          name: 'Tokelau',
          shortName: 'TK',
          phoneCode: null
        },
        {
          id: 216,
          name: 'Tonga',
          shortName: 'TO',
          phoneCode: null
        },
        {
          id: 217,
          name: 'Trinidad and Tobago',
          shortName: 'TT',
          phoneCode: null
        },
        {
          id: 218,
          name: 'Tunisia',
          shortName: 'TN',
          phoneCode: null
        },
        {
          id: 219,
          name: 'Turkey',
          shortName: 'TR',
          phoneCode: null
        },
        {
          id: 220,
          name: 'Turkmenistan',
          shortName: 'TM',
          phoneCode: null
        },
        {
          id: 221,
          name: 'Turks and Caicos Islands',
          shortName: 'TC',
          phoneCode: null
        },
        {
          id: 222,
          name: 'Tuvalu',
          shortName: 'TV',
          phoneCode: null
        },
        {
          id: 223,
          name: 'Uganda',
          shortName: 'UG',
          phoneCode: null
        },
        {
          id: 224,
          name: 'Ukraine',
          shortName: 'UA',
          phoneCode: null
        },
        {
          id: 225,
          name: 'United Arab Emirates',
          shortName: 'AE',
          phoneCode: null
        },
        {
          id: 226,
          name: 'United Kingdom',
          shortName: 'GB',
          phoneCode: '+44'
        },
        {
          id: 227,
          name: 'United States minor outlying islands',
          shortName: 'UM',
          phoneCode: null
        },
        {
          id: 228,
          name: 'Uruguay',
          shortName: 'UY',
          phoneCode: null
        },
        {
          id: 229,
          name: 'Uzbekistan',
          shortName: 'UZ',
          phoneCode: null
        },
        {
          id: 230,
          name: 'Vanuatu',
          shortName: 'VU',
          phoneCode: null
        },
        {
          id: 231,
          name: 'Vatican City State',
          shortName: 'VA',
          phoneCode: null
        },
        {
          id: 232,
          name: 'Venezuela',
          shortName: 'VE',
          phoneCode: null
        },
        {
          id: 233,
          name: 'Vietnam',
          shortName: 'VN',
          phoneCode: null
        },
        {
          id: 234,
          name: 'Virgin Islands (British)',
          shortName: 'VG',
          phoneCode: null
        },
        {
          id: 235,
          name: 'Virgin Islands (U.S.)',
          shortName: 'VI',
          phoneCode: null
        },
        {
          id: 236,
          name: 'Wallis and Futuna Islands',
          shortName: 'WF',
          phoneCode: null
        },
        {
          id: 237,
          name: 'Western Sahara',
          shortName: 'EH',
          phoneCode: null
        },
        {
          id: 238,
          name: 'Yemen',
          shortName: 'YE',
          phoneCode: null
        },
        {
          id: 239,
          name: 'Yugoslavia',
          shortName: 'YU',
          phoneCode: null
        },
        {
          id: 240,
          name: 'Zaire',
          shortName: 'ZR',
          phoneCode: null
        },
        {
          id: 241,
          name: 'Zambia',
          shortName: 'ZM',
          phoneCode: null
        },
        {
          id: 242,
          name: 'Zimbabwe',
          shortName: 'ZW',
          phoneCode: null
        }
      ]
    });
  });
});
