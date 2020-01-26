const { expect } = require('chai');
//const verror = require('verror');
const sinon = require('sinon');
const services = require('../../../../../src/services');

describe('services.get("database").execute("cities", "findAll")', () => {
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

  it('returns all cities with countries', async () => {
    // Given
    const controller = 'cities';
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
          name: 'Aba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2,
          name: 'Abaliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3,
          name: 'Abasár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 4,
          name: 'Abaújalpár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 5,
          name: 'Abaújkér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 6,
          name: 'Abaújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 7,
          name: 'Abaújszolnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 8,
          name: 'Abaújszántó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 9,
          name: 'Abaújvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 10,
          name: 'Abda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 11,
          name: 'Abod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 12,
          name: 'Abony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 13,
          name: 'Abádszalók',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 14,
          name: 'Acsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 15,
          name: 'Acsalag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 16,
          name: 'Acsád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 17,
          name: 'Adony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 18,
          name: 'Adorjánháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 19,
          name: 'Adorjás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 20,
          name: 'Adács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 21,
          name: 'Adásztevel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 22,
          name: 'Aggtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 23,
          name: 'Agyagosszergény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 24,
          name: 'Ajak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 25,
          name: 'Ajka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 26,
          name: 'Aka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 27,
          name: 'Akasztó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 28,
          name: 'Alacska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 29,
          name: 'Alap',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 30,
          name: 'Alattyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 31,
          name: 'Albertirsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 32,
          name: 'Alcsútdoboz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 33,
          name: 'Aldebrő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 34,
          name: 'Algyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 35,
          name: 'Alibánfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 36,
          name: 'Almamellék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 37,
          name: 'Almásfüzitő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 38,
          name: 'Almásháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 39,
          name: 'Almáskamarás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 40,
          name: 'Almáskeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 41,
          name: 'Alsóberecki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 42,
          name: 'Alsóbogát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 43,
          name: 'Alsódobsza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 44,
          name: 'Alsógagy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 45,
          name: 'Alsómocsolád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 46,
          name: 'Alsónemesapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 47,
          name: 'Alsónyék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 48,
          name: 'Alsónána',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 49,
          name: 'Alsónémedi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 50,
          name: 'Alsópetény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 51,
          name: 'Alsópáhok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 52,
          name: 'Alsórajk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 53,
          name: 'Alsóregmec',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 54,
          name: 'Alsószenterzsébet',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 55,
          name: 'Alsószentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 56,
          name: 'Alsószentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 57,
          name: 'Alsószuha',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 58,
          name: 'Alsószölnök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 59,
          name: 'Alsótelekes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 60,
          name: 'Alsótold',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 61,
          name: 'Alsóvadász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 62,
          name: 'Alsózsolca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 63,
          name: 'Alsóörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 64,
          name: 'Alsóújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 65,
          name: 'Ambrózfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 66,
          name: 'Anarcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 67,
          name: 'Andocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 68,
          name: 'Andornaktálya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 69,
          name: 'Andrásfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 70,
          name: 'Annavölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 71,
          name: 'Apagy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 72,
          name: 'Apaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 73,
          name: 'Aparhant',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 74,
          name: 'Apc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 75,
          name: 'Apostag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 76,
          name: 'Apácatorna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 77,
          name: 'Apátfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 78,
          name: 'Apátistvánfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 79,
          name: 'Apátvarasd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 80,
          name: 'Aranyosapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 81,
          name: 'Aranyosgadány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 82,
          name: 'Arka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 83,
          name: 'Arló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 84,
          name: 'Arnót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 85,
          name: 'Aszaló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 86,
          name: 'Aszód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 87,
          name: 'Aszófő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 88,
          name: 'Atkár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 89,
          name: 'Attala',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 90,
          name: 'Babarc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 91,
          name: 'Babarcszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 92,
          name: 'Babosdöbréte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 93,
          name: 'Babócsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 94,
          name: 'Babót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 95,
          name: 'Badacsonytomaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 96,
          name: 'Badacsonytördemic',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 97,
          name: 'Bag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 98,
          name: 'Bagamér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 99,
          name: 'Baglad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 100,
          name: 'Bagod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 101,
          name: 'Baj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 102,
          name: 'Baja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 103,
          name: 'Bajna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 104,
          name: 'Bajánsenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 105,
          name: 'Bajót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 106,
          name: 'Bak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 107,
          name: 'Bakháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 108,
          name: 'Bakonszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 109,
          name: 'Bakonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 110,
          name: 'Bakonybánk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 111,
          name: 'Bakonybél',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 112,
          name: 'Bakonycsernye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 113,
          name: 'Bakonygyirót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 114,
          name: 'Bakonyjákó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 115,
          name: 'Bakonykoppány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 116,
          name: 'Bakonykúti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 117,
          name: 'Bakonynána',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 118,
          name: 'Bakonyoszlop',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 119,
          name: 'Bakonypéterd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 120,
          name: 'Bakonypölöske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 121,
          name: 'Bakonyszentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 122,
          name: 'Bakonyszentkirály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 123,
          name: 'Bakonyszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 124,
          name: 'Bakonyszombathely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 125,
          name: 'Bakonyszücs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 126,
          name: 'Bakonyság',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 127,
          name: 'Bakonysárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 128,
          name: 'Bakonytamási',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 129,
          name: 'Baks',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 130,
          name: 'Baksa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 131,
          name: 'Baktakék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 132,
          name: 'Baktalórántháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 133,
          name: 'Baktüttös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 134,
          name: 'Bakóca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 135,
          name: 'Balajt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 136,
          name: 'Balassagyarmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 137,
          name: 'Balaton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 138,
          name: 'Balatonakali',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 139,
          name: 'Balatonalmádi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 140,
          name: 'Balatonberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 141,
          name: 'Balatonboglár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 142,
          name: 'Balatoncsicsó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 143,
          name: 'Balatonederics',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 144,
          name: 'Balatonendréd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 145,
          name: 'Balatonfenyves',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 146,
          name: 'Balatonföldvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 147,
          name: 'Balatonfüred',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 148,
          name: 'Balatonfőkajár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 149,
          name: 'Balatonfűzfő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 150,
          name: 'Balatongyörök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 151,
          name: 'Balatonhenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 152,
          name: 'Balatonkenese',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 153,
          name: 'Balatonkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 154,
          name: 'Balatonlelle',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 155,
          name: 'Balatonmagyaród',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 156,
          name: 'Balatonmáriafürdő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 157,
          name: 'Balatonrendes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 158,
          name: 'Balatonszabadi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 159,
          name: 'Balatonszemes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 160,
          name: 'Balatonszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 161,
          name: 'Balatonszepezd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 162,
          name: 'Balatonszárszó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 163,
          name: 'Balatonszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 164,
          name: 'Balatonudvari',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 165,
          name: 'Balatonvilágos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 166,
          name: 'Balatonújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 167,
          name: 'Balatonőszöd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 168,
          name: 'Balinka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 169,
          name: 'Balkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 170,
          name: 'Ballószög',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 171,
          name: 'Balmazújváros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 172,
          name: 'Balogunyom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 173,
          name: 'Balotaszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 174,
          name: 'Balsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 175,
          name: 'Balástya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 176,
          name: 'Bana',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 177,
          name: 'Barabás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 178,
          name: 'Baracs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 179,
          name: 'Baracska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 180,
          name: 'Baranyahídvég',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 181,
          name: 'Baranyajenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 182,
          name: 'Baranyaszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 183,
          name: 'Barbacs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 184,
          name: 'Barcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 185,
          name: 'Barlahida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 186,
          name: 'Barnag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 187,
          name: 'Basal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 188,
          name: 'Baskó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 189,
          name: 'Battonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 190,
          name: 'Batyk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 191,
          name: 'Baté',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 192,
          name: 'Bazsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 193,
          name: 'Becsehely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 194,
          name: 'Becske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 195,
          name: 'Becskeháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 196,
          name: 'Becsvölgye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 197,
          name: 'Bedegkér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 198,
          name: 'Bedő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 199,
          name: 'Bejcgyertyános',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 200,
          name: 'Bekecs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 201,
          name: 'Bekölce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 202,
          name: 'Belecska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 203,
          name: 'Beled',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 204,
          name: 'Beleg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 205,
          name: 'Belezna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 206,
          name: 'Beloiannisz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 207,
          name: 'Belsősárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 208,
          name: 'Belvárdgyula',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 209,
          name: 'Benk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 210,
          name: 'Bercel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 211,
          name: 'Beregdaróc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 212,
          name: 'Beregsurány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 213,
          name: 'Berekböszörmény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 214,
          name: 'Berekfürdő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 215,
          name: 'Beremend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 216,
          name: 'Beret',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 217,
          name: 'Berettyóújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 218,
          name: 'Berhida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 219,
          name: 'Berkenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 220,
          name: 'Berkesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 221,
          name: 'Berkesz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 222,
          name: 'Bernecebaráti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 223,
          name: 'Berzence',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 224,
          name: 'Berzék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 225,
          name: 'Besence',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 226,
          name: 'Besenyszög',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 227,
          name: 'Besenyőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 228,
          name: 'Besenyőtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 229,
          name: 'Besnyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 230,
          name: 'Beszterec',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 231,
          name: 'Bezedek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 232,
          name: 'Bezenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 233,
          name: 'Bezeréd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 234,
          name: 'Bezi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 235,
          name: 'Biatorbágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 236,
          name: 'Bicske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 237,
          name: 'Bicsérd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 238,
          name: 'Bihardancsháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 239,
          name: 'Biharkeresztes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 240,
          name: 'Biharnagybajom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 241,
          name: 'Bihartorda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 242,
          name: 'Biharugra',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 243,
          name: 'Bikal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 244,
          name: 'Bikács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 245,
          name: 'Biri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 246,
          name: 'Birján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 247,
          name: 'Bisse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 248,
          name: 'Boba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 249,
          name: 'Bocfölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 250,
          name: 'Boconád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 251,
          name: 'Bocska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 252,
          name: 'Bocskaikert',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 253,
          name: 'Boda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 254,
          name: 'Bodajk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 255,
          name: 'Bodmér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 256,
          name: 'Bodolyabér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 257,
          name: 'Bodonhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 258,
          name: 'Bodony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 259,
          name: 'Bodorfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 260,
          name: 'Bodrog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 261,
          name: 'Bodroghalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 262,
          name: 'Bodrogkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 263,
          name: 'Bodrogkisfalud',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 264,
          name: 'Bodrogolaszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 265,
          name: 'Bogdása',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 266,
          name: 'Bogyiszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 267,
          name: 'Bogyoszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 268,
          name: 'Bogács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 269,
          name: 'Bogád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 270,
          name: 'Bogádmindszent',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 271,
          name: 'Bojt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 272,
          name: 'Bokod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 273,
          name: 'Bokor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 274,
          name: 'Boldog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 275,
          name: 'Boldogasszonyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 276,
          name: 'Boldogkőváralja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 277,
          name: 'Boldogkőújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 278,
          name: 'Boldva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 279,
          name: 'Bolhás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 280,
          name: 'Bolhó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 281,
          name: 'Boncodfölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 282,
          name: 'Bonnya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 283,
          name: 'Bonyhád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 284,
          name: 'Bonyhádvarasd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 285,
          name: 'Bordány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 286,
          name: 'Borgáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 287,
          name: 'Borjád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 288,
          name: 'Borota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 289,
          name: 'Borsfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 290,
          name: 'Borsodbóta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 291,
          name: 'Borsodgeszt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 292,
          name: 'Borsodivánka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 293,
          name: 'Borsodnádasd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 294,
          name: 'Borsodszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 295,
          name: 'Borsodszirák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 296,
          name: 'Borsosberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 297,
          name: 'Borszörcsök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 298,
          name: 'Borzavár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 299,
          name: 'Bosta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 300,
          name: 'Botpalád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 301,
          name: 'Botykapeterd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 302,
          name: 'Bozsok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 303,
          name: 'Bozzai',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 304,
          name: 'Bucsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 305,
          name: 'Bucsu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 306,
          name: 'Bucsuta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 307,
          name: 'Budajenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 308,
          name: 'Budakalász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 309,
          name: 'Budakeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 310,
          name: 'Budapest',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 311,
          name: 'Budaörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 312,
          name: 'Bugac',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 313,
          name: 'Bugacpusztaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 314,
          name: 'Bugyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 315,
          name: 'Buj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 316,
          name: 'Buják',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 317,
          name: 'Buzsák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 318,
          name: 'Bábolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 319,
          name: 'Bábonymegyer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 320,
          name: 'Bácsalmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 321,
          name: 'Bácsbokod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 322,
          name: 'Bácsborsód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 323,
          name: 'Bácsszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 324,
          name: 'Bácsszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 325,
          name: 'Bágyogszovát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 326,
          name: 'Bálványos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 327,
          name: 'Bánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 328,
          name: 'Bánfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 329,
          name: 'Bánhorváti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 330,
          name: 'Bánk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 331,
          name: 'Bánokszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 332,
          name: 'Bánréve',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 333,
          name: 'Bár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 334,
          name: 'Bárdudvarnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 335,
          name: 'Bárna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 336,
          name: 'Bársonyos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 337,
          name: 'Báránd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 338,
          name: 'Báta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 339,
          name: 'Bátaapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 340,
          name: 'Bátaszék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 341,
          name: 'Bátmonostor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 342,
          name: 'Bátonyterenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 343,
          name: 'Bátor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 344,
          name: 'Bátorliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 345,
          name: 'Bátya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 346,
          name: 'Bázakerettye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 347,
          name: 'Béb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 348,
          name: 'Békás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 349,
          name: 'Békés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 350,
          name: 'Békéscsaba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 351,
          name: 'Békésszentandrás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 352,
          name: 'Békéssámson',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 353,
          name: 'Bélapátfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 354,
          name: 'Bélavár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 355,
          name: 'Bélmegyer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 356,
          name: 'Bénye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 357,
          name: 'Bér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 358,
          name: 'Bérbaltavár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 359,
          name: 'Bócsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 360,
          name: 'Bódvalenke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 361,
          name: 'Bódvarákó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 362,
          name: 'Bódvaszilas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 363,
          name: 'Bókaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 364,
          name: 'Bóly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 365,
          name: 'Bózsva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 366,
          name: 'Böde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 367,
          name: 'Bödeháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 368,
          name: 'Bögöt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 369,
          name: 'Bögöte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 370,
          name: 'Böhönye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 371,
          name: 'Bököny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 372,
          name: 'Bölcske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 373,
          name: 'Börcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 374,
          name: 'Börzönce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 375,
          name: 'Búcsúszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 376,
          name: 'Bük',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 377,
          name: 'Bükkaranyos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 378,
          name: 'Bükkmogyorósd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 379,
          name: 'Bükkszenterzsébet',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 380,
          name: 'Bükkszentkereszt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 381,
          name: 'Bükkszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 382,
          name: 'Bükkszék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 383,
          name: 'Bükkzsérc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 384,
          name: 'Bükkábrány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 385,
          name: 'Bükkösd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 386,
          name: 'Bürüs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 387,
          name: 'Büssü',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 388,
          name: 'Büttös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 389,
          name: 'Bő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 390,
          name: 'Bőcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 391,
          name: 'Bőny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 392,
          name: 'Bőszénfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 393,
          name: 'Bősárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 394,
          name: 'Cakóháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 395,
          name: 'Cece',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 396,
          name: 'Cegléd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 397,
          name: 'Ceglédbercel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 398,
          name: 'Celldömölk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 399,
          name: 'Cered',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 400,
          name: 'Chernelházadamonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 401,
          name: 'Cibakháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 402,
          name: 'Cigánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 403,
          name: 'Cikó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 404,
          name: 'Cirák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 405,
          name: 'Csabacsűd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 406,
          name: 'Csabaszabadi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 407,
          name: 'Csabdi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 408,
          name: 'Csabrendek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 409,
          name: 'Csaholc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 410,
          name: 'Csajág',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 411,
          name: 'Csanytelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 412,
          name: 'Csanádalberti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 413,
          name: 'Csanádapáca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 414,
          name: 'Csanádpalota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 415,
          name: 'Csapi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 416,
          name: 'Csapod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 417,
          name: 'Csarnóta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 418,
          name: 'Csaroda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 419,
          name: 'Csataszög',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 420,
          name: 'Csatka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 421,
          name: 'Csatár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 422,
          name: 'Csebény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 423,
          name: 'Csegöld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 424,
          name: 'Csehbánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 425,
          name: 'Csehi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 426,
          name: 'Csehimindszent',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 427,
          name: 'Csempeszkopács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 428,
          name: 'Csemő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 429,
          name: 'Csengele',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 430,
          name: 'Csenger',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 431,
          name: 'Csengersima',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 432,
          name: 'Csengerújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 433,
          name: 'Csengőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 434,
          name: 'Csenyéte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 435,
          name: 'Csepreg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 436,
          name: 'Cserdi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 437,
          name: 'Cserháthaláp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 438,
          name: 'Cserhátsurány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 439,
          name: 'Cserhátszentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 440,
          name: 'Cserkeszőlő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 441,
          name: 'Cserkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 442,
          name: 'Csernely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 443,
          name: 'Cserszegtomaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 444,
          name: 'Csertalakos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 445,
          name: 'Csertő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 446,
          name: 'Cserénfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 447,
          name: 'Cserépfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 448,
          name: 'Cserépváralja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 449,
          name: 'Csesznek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 450,
          name: 'Csesztreg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 451,
          name: 'Csesztve',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 452,
          name: 'Csetény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 453,
          name: 'Csibrák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 454,
          name: 'Csikvánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 455,
          name: 'Csikéria',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 456,
          name: 'Csikóstőttős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 457,
          name: 'Csincse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 458,
          name: 'Csipkerek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 459,
          name: 'Csitár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 460,
          name: 'Csobaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 461,
          name: 'Csobád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 462,
          name: 'Csobánka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 463,
          name: 'Csokonyavisonta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 464,
          name: 'Csokvaomány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 465,
          name: 'Csolnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 466,
          name: 'Csoma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 467,
          name: 'Csombárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 468,
          name: 'Csomád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 469,
          name: 'Csongrád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 470,
          name: 'Csonkahegyhát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 471,
          name: 'Csonkamindszent',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 472,
          name: 'Csopak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 473,
          name: 'Csorna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 474,
          name: 'Csorvás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 475,
          name: 'Csurgó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 476,
          name: 'Csurgónagymarton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 477,
          name: 'Csáfordjánosfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 478,
          name: 'Csákberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 479,
          name: 'Csákvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 480,
          name: 'Csákány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 481,
          name: 'Csákánydoroszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 482,
          name: 'Csánig',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 483,
          name: 'Csány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 484,
          name: 'Csányoszró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 485,
          name: 'Csárdaszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 486,
          name: 'Császló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 487,
          name: 'Császár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 488,
          name: 'Császártöltés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 489,
          name: 'Csátalja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 490,
          name: 'Csávoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 491,
          name: 'Csécse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 492,
          name: 'Csém',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 493,
          name: 'Csénye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 494,
          name: 'Csép',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 495,
          name: 'Csépa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 496,
          name: 'Csér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 497,
          name: 'Csévharaszt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 498,
          name: 'Csókakő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 499,
          name: 'Csólyospálos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 500,
          name: 'Csór',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 501,
          name: 'Csót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 502,
          name: 'Csöde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 503,
          name: 'Csögle',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 504,
          name: 'Csökmő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 505,
          name: 'Csököly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 506,
          name: 'Csömend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 507,
          name: 'Csömödér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 508,
          name: 'Csömör',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 509,
          name: 'Csönge',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 510,
          name: 'Csörnyeföld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 511,
          name: 'Csörög',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 512,
          name: 'Csörötnek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 513,
          name: 'Csősz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 514,
          name: 'Csővár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 515,
          name: 'Cák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 516,
          name: 'Cégénydányád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 517,
          name: 'Cún',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 518,
          name: 'Dabas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 519,
          name: 'Dabronc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 520,
          name: 'Dabrony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 521,
          name: 'Dad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 522,
          name: 'Dalmand',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 523,
          name: 'Damak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 524,
          name: 'Daraboshegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 525,
          name: 'Darnó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 526,
          name: 'Darnózseli',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 527,
          name: 'Daruszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 528,
          name: 'Darvas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 529,
          name: 'Darány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 530,
          name: 'Debercsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 531,
          name: 'Debrecen',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 532,
          name: 'Debréte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 533,
          name: 'Decs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 534,
          name: 'Dejtár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 535,
          name: 'Demecser',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 536,
          name: 'Demjén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 537,
          name: 'Dencsháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 538,
          name: 'Derecske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 539,
          name: 'Derekegyház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 540,
          name: 'Deszk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 541,
          name: 'Detek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 542,
          name: 'Detk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 543,
          name: 'Devecser',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 544,
          name: 'Dinnyeberki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 545,
          name: 'Diósberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 546,
          name: 'Diósd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 547,
          name: 'Diósjenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 548,
          name: 'Dióskál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 549,
          name: 'Diósviszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 550,
          name: 'Doba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 551,
          name: 'Dobogókő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 552,
          name: 'Doboz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 553,
          name: 'Dobri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 554,
          name: 'Dobronhegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 555,
          name: 'Domaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 556,
          name: 'Domaszék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 557,
          name: 'Dombegyház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 558,
          name: 'Dombiratos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 559,
          name: 'Dombrád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 560,
          name: 'Dombóvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 561,
          name: 'Domony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 562,
          name: 'Domoszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 563,
          name: 'Dormánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 564,
          name: 'Dorog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 565,
          name: 'Dorogháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 566,
          name: 'Dozmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 567,
          name: 'Drágszél',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 568,
          name: 'Drávacsehi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 569,
          name: 'Drávacsepely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 570,
          name: 'Drávafok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 571,
          name: 'Drávagárdony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 572,
          name: 'Drávaiványi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 573,
          name: 'Drávakeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 574,
          name: 'Drávapalkonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 575,
          name: 'Drávapiski',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 576,
          name: 'Drávaszabolcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 577,
          name: 'Drávaszerdahely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 578,
          name: 'Drávasztára',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 579,
          name: 'Drávatamási',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 580,
          name: 'Drégelypalánk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 581,
          name: 'Dubicsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 582,
          name: 'Dudar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 583,
          name: 'Duka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 584,
          name: 'Dunaalmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 585,
          name: 'Dunabogdány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 586,
          name: 'Dunaegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 587,
          name: 'Dunafalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 588,
          name: 'Dunaföldvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 589,
          name: 'Dunaharaszti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 590,
          name: 'Dunakeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 591,
          name: 'Dunakiliti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 592,
          name: 'Dunapataj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 593,
          name: 'Dunaremete',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 594,
          name: 'Dunaszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 595,
          name: 'Dunaszekcső',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 596,
          name: 'Dunaszentbenedek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 597,
          name: 'Dunaszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 598,
          name: 'Dunaszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 599,
          name: 'Dunaszentpál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 600,
          name: 'Dunasziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 601,
          name: 'Dunatetétlen',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 602,
          name: 'Dunavarsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 603,
          name: 'Dunavecse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 604,
          name: 'Dunaújváros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 605,
          name: 'Dusnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 606,
          name: 'Dág',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 607,
          name: 'Dáka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 608,
          name: 'Dámóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 609,
          name: 'Dánszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 610,
          name: 'Dány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 611,
          name: 'Dávod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 612,
          name: 'Dédestapolcsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 613,
          name: 'Dég',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 614,
          name: 'Délegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 615,
          name: 'Dénesfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 616,
          name: 'Dévaványa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 617,
          name: 'Dóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 618,
          name: 'Döbröce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 619,
          name: 'Döbrököz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 620,
          name: 'Döbrönte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 621,
          name: 'Döbörhegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 622,
          name: 'Döge',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 623,
          name: 'Dömsöd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 624,
          name: 'Dömös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 625,
          name: 'Dör',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 626,
          name: 'Dörgicse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 627,
          name: 'Döröske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 628,
          name: 'Dötk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 629,
          name: 'Dövény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 630,
          name: 'Dúzs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 631,
          name: 'Ebergőc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 632,
          name: 'Ebes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 633,
          name: 'Ecseg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 634,
          name: 'Ecsegfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 635,
          name: 'Ecseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 636,
          name: 'Ecser',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 637,
          name: 'Ecséd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 638,
          name: 'Edde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 639,
          name: 'Edelény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 640,
          name: 'Edve',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 641,
          name: 'Eger',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 642,
          name: 'Egeralja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 643,
          name: 'Egeraracsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 644,
          name: 'Egerbakta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 645,
          name: 'Egerbocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 646,
          name: 'Egercsehi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 647,
          name: 'Egerfarmos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 648,
          name: 'Egerlövő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 649,
          name: 'Egerszalók',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 650,
          name: 'Egerszólát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 651,
          name: 'Egervár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 652,
          name: 'Egervölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 653,
          name: 'Egerág',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 654,
          name: 'Egyed',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 655,
          name: 'Egyek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 656,
          name: 'Egyházasdengeleg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 657,
          name: 'Egyházasfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 658,
          name: 'Egyházasgerge',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 659,
          name: 'Egyházasharaszti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 660,
          name: 'Egyházashetye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 661,
          name: 'Egyházashollós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 662,
          name: 'Egyházaskesző',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 663,
          name: 'Egyházaskozár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 664,
          name: 'Egyházasrádóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 665,
          name: 'Elek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 666,
          name: 'Ellend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 667,
          name: 'Előszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 668,
          name: 'Emőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 669,
          name: 'Encs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 670,
          name: 'Encsencs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 671,
          name: 'Endrefalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 672,
          name: 'Endrőc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 673,
          name: 'Enese',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 674,
          name: 'Enying',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 675,
          name: 'Eperjes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 676,
          name: 'Eperjeske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 677,
          name: 'Eplény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 678,
          name: 'Epöl',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 679,
          name: 'Ercsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 680,
          name: 'Erdőbénye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 681,
          name: 'Erdőhorváti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 682,
          name: 'Erdőkertes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 683,
          name: 'Erdőkövesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 684,
          name: 'Erdőkürt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 685,
          name: 'Erdősmecske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 686,
          name: 'Erdősmárok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 687,
          name: 'Erdőtarcsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 688,
          name: 'Erdőtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 689,
          name: 'Erk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 690,
          name: 'Erzsébet',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 691,
          name: 'Eszteregnye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 692,
          name: 'Esztergom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 693,
          name: 'Esztergályhorváti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 694,
          name: 'Esztár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 695,
          name: 'Ete',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 696,
          name: 'Etes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 697,
          name: 'Etyek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 698,
          name: 'Fadd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 699,
          name: 'Fajsz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 700,
          name: 'Fancsal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 701,
          name: 'Farkasgyepű',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 702,
          name: 'Farmos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 703,
          name: 'Farád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 704,
          name: 'Fazekasboda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 705,
          name: 'Fedémes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 706,
          name: 'Fegyvernek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 707,
          name: 'Fehérgyarmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 708,
          name: 'Fehértó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 709,
          name: 'Fehérvárcsurgó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 710,
          name: 'Feked',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 711,
          name: 'Feketeerdő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 712,
          name: 'Felcsút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 713,
          name: 'Feldebrő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 714,
          name: 'Felgyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 715,
          name: 'Felpéc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 716,
          name: 'Felsőberecki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 717,
          name: 'Felsőcsatár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 718,
          name: 'Felsődobsza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 719,
          name: 'Felsőegerszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 720,
          name: 'Felsőgagy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 721,
          name: 'Felsőjánosfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 722,
          name: 'Felsőkelecsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 723,
          name: 'Felsőlajos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 724,
          name: 'Felsőmarác',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 725,
          name: 'Felsőmocsolád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 726,
          name: 'Felsőnyárád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 727,
          name: 'Felsőnyék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 728,
          name: 'Felsőnána',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 729,
          name: 'Felsőpakony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 730,
          name: 'Felsőpetény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 731,
          name: 'Felsőpáhok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 732,
          name: 'Felsőrajk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 733,
          name: 'Felsőregmec',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 734,
          name: 'Felsőszenterzsébet',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 735,
          name: 'Felsőszentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 736,
          name: 'Felsőszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 737,
          name: 'Felsőszölnök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 738,
          name: 'Felsőtelekes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 739,
          name: 'Felsőtold',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 740,
          name: 'Felsőtárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 741,
          name: 'Felsővadász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 742,
          name: 'Felsőzsolca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 743,
          name: 'Felsőörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 744,
          name: 'Fenyőfő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 745,
          name: 'Ferencszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 746,
          name: 'Fertőboz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 747,
          name: 'Fertőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 748,
          name: 'Fertőendréd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 749,
          name: 'Fertőhomok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 750,
          name: 'Fertőrákos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 751,
          name: 'Fertőszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 752,
          name: 'Fertőszéplak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 753,
          name: 'Fiad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 754,
          name: 'Filkeháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 755,
          name: 'Fityeház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 756,
          name: 'Foktő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 757,
          name: 'Folyás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 758,
          name: 'Fony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 759,
          name: 'Fonyód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 760,
          name: 'Fonó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 761,
          name: 'Forráskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 762,
          name: 'Forró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 763,
          name: 'Fulókércs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 764,
          name: 'Furta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 765,
          name: 'Fábiánháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 766,
          name: 'Fábiánsebestyén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 767,
          name: 'Fácánkert',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 768,
          name: 'Fáj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 769,
          name: 'Fényeslitke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 770,
          name: 'Fót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 771,
          name: 'Földes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 772,
          name: 'Földeák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 773,
          name: 'Füle',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 774,
          name: 'Fülesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 775,
          name: 'Fülpösdaróc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 776,
          name: 'Fülöp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 777,
          name: 'Fülöpháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 778,
          name: 'Fülöpjakab',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 779,
          name: 'Fülöpszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 780,
          name: 'Fürged',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 781,
          name: 'Füzesabony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 782,
          name: 'Füzesgyarmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 783,
          name: 'Füzér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 784,
          name: 'Füzérkajata',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 785,
          name: 'Füzérkomlós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 786,
          name: 'Füzérradvány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 787,
          name: 'Főnyed',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 788,
          name: 'Fűzvölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 789,
          name: 'Gacsály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 790,
          name: 'Gadna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 791,
          name: 'Gadács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 792,
          name: 'Gadány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 793,
          name: 'Gagyapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 794,
          name: 'Gagybátor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 795,
          name: 'Gagyvendégi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 796,
          name: 'Galambok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 797,
          name: 'Galgaguta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 798,
          name: 'Galgagyörk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 799,
          name: 'Galgahévíz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 800,
          name: 'Galgamácsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 801,
          name: 'Galvács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 802,
          name: 'Gamás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 803,
          name: 'Ganna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 804,
          name: 'Gara',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 805,
          name: 'Garabonc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 806,
          name: 'Garadna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 807,
          name: 'Garbolc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 808,
          name: 'Garáb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 809,
          name: 'Garé',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 810,
          name: 'Gasztony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 811,
          name: 'Gecse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 812,
          name: 'Gelej',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 813,
          name: 'Gellénháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 814,
          name: 'Gelse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 815,
          name: 'Gelsesziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 816,
          name: 'Gelénes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 817,
          name: 'Gemzse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 818,
          name: 'Gencsapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 819,
          name: 'Gerde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 820,
          name: 'Gerendás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 821,
          name: 'Geresdlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 822,
          name: 'Gerjen',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 823,
          name: 'Gersekarát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 824,
          name: 'Gerényes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 825,
          name: 'Geszt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 826,
          name: 'Gesztely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 827,
          name: 'Geszteréd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 828,
          name: 'Gic',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 829,
          name: 'Gige',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 830,
          name: 'Gilvánfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 831,
          name: 'Girincs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 832,
          name: 'Golop',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 833,
          name: 'Gomba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 834,
          name: 'Gombosszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 835,
          name: 'Gordisa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 836,
          name: 'Gosztola',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 837,
          name: 'Grábóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 838,
          name: 'Gulács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 839,
          name: 'Gutorfölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 840,
          name: 'Gyalóka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 841,
          name: 'Gyanógeregye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 842,
          name: 'Gyarmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 843,
          name: 'Gyenesdiás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 844,
          name: 'Gyepükaján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 845,
          name: 'Gyermely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 846,
          name: 'Gyomaendrőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 847,
          name: 'Gyugy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 848,
          name: 'Gyula',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 849,
          name: 'Gyulaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 850,
          name: 'Gyulaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 851,
          name: 'Gyulakeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 852,
          name: 'Gyál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 853,
          name: 'Gyékényes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 854,
          name: 'Gyód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 855,
          name: 'Gyóró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 856,
          name: 'Gyömrő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 857,
          name: 'Gyömöre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 858,
          name: 'Gyöngyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 859,
          name: 'Gyöngyös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 860,
          name: 'Gyöngyösfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 861,
          name: 'Gyöngyöshalász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 862,
          name: 'Gyöngyösmellék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 863,
          name: 'Gyöngyösoroszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 864,
          name: 'Gyöngyöspata',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 865,
          name: 'Gyöngyössolymos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 866,
          name: 'Gyöngyöstarján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 867,
          name: 'Gyönk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 868,
          name: 'Györe',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 869,
          name: 'Györgytarló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 870,
          name: 'Györköny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 871,
          name: 'Gyúró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 872,
          name: 'Gyügye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 873,
          name: 'Gyüre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 874,
          name: 'Győr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 875,
          name: 'Győrasszonyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 876,
          name: 'Győrladamér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 877,
          name: 'Győrszemere',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 878,
          name: 'Győrság',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 879,
          name: 'Győrsövényház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 880,
          name: 'Győrtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 881,
          name: 'Győrvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 882,
          name: 'Győrzámoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 883,
          name: 'Győröcske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 884,
          name: 'Győrújbarát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 885,
          name: 'Győrújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 886,
          name: 'Gyűrűs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 887,
          name: 'Gáborján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 888,
          name: 'Gáborjánháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 889,
          name: 'Gádoros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 890,
          name: 'Gálosfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 891,
          name: 'Gánt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 892,
          name: 'Gárdony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 893,
          name: 'Gátér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 894,
          name: 'Gávavencsellő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 895,
          name: 'Géberjén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 896,
          name: 'Géderlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 897,
          name: 'Gégény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 898,
          name: 'Gérce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 899,
          name: 'Gétye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 900,
          name: 'Gógánfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 901,
          name: 'Gór',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 902,
          name: 'Göd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 903,
          name: 'Gödre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 904,
          name: 'Gödöllő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 905,
          name: 'Gölle',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 906,
          name: 'Gömörszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 907,
          name: 'Gönc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 908,
          name: 'Göncruszka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 909,
          name: 'Gönyű',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 910,
          name: 'Görbeháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 911,
          name: 'Görcsöny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 912,
          name: 'Görcsönydoboka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 913,
          name: 'Görgeteg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 914,
          name: 'Gősfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 915,
          name: 'Hagyárosbörönd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 916,
          name: 'Hahót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 917,
          name: 'Hajdúbagos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 918,
          name: 'Hajdúböszörmény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 919,
          name: 'Hajdúdorog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 920,
          name: 'Hajdúhadház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 921,
          name: 'Hajdúnánás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 922,
          name: 'Hajdúszoboszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 923,
          name: 'Hajdúszovát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 924,
          name: 'Hajdúsámson',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 925,
          name: 'Hajmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 926,
          name: 'Hajmáskér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 927,
          name: 'Hajós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 928,
          name: 'Halastó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 929,
          name: 'Halimba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 930,
          name: 'Halmaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 931,
          name: 'Halmajugra',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 932,
          name: 'Halogy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 933,
          name: 'Halászi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 934,
          name: 'Halásztelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 935,
          name: 'Hangony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 936,
          name: 'Hangács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 937,
          name: 'Hantos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 938,
          name: 'Harasztifalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 939,
          name: 'Harc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 940,
          name: 'Harka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 941,
          name: 'Harkakötöny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 942,
          name: 'Harkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 943,
          name: 'Harsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 944,
          name: 'Harta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 945,
          name: 'Hatvan',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 946,
          name: 'Hedrehely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 947,
          name: 'Hegyesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 948,
          name: 'Hegyeshalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 949,
          name: 'Hegyfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 950,
          name: 'Hegyháthodász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 951,
          name: 'Hegyhátmaróc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 952,
          name: 'Hegyhátszentjakab',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 953,
          name: 'Hegyhátszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 954,
          name: 'Hegyhátszentpéter',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 955,
          name: 'Hegyhátsál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 956,
          name: 'Hegykő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 957,
          name: 'Hegymagas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 958,
          name: 'Hegymeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 959,
          name: 'Hegyszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 960,
          name: 'Hejce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 961,
          name: 'Hejőbába',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 962,
          name: 'Hejőkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 963,
          name: 'Hejőkürt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 964,
          name: 'Hejőpapi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 965,
          name: 'Hejőszalonta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 966,
          name: 'Helesfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 967,
          name: 'Helvécia',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 968,
          name: 'Hencida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 969,
          name: 'Hencse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 970,
          name: 'Herceghalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 971,
          name: 'Hercegkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 972,
          name: 'Hercegszántó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 973,
          name: 'Herencsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 974,
          name: 'Herend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 975,
          name: 'Heresznye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 976,
          name: 'Hermánszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 977,
          name: 'Hernyék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 978,
          name: 'Hernád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 979,
          name: 'Hernádbűd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 980,
          name: 'Hernádcéce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 981,
          name: 'Hernádkak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 982,
          name: 'Hernádkércs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 983,
          name: 'Hernádnémeti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 984,
          name: 'Hernádpetri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 985,
          name: 'Hernádszentandrás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 986,
          name: 'Hernádszurdok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 987,
          name: 'Hernádvécse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 988,
          name: 'Heréd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 989,
          name: 'Hetefejércse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 990,
          name: 'Hetes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 991,
          name: 'Hetvehely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 992,
          name: 'Hetyefő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 993,
          name: 'Heves',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 994,
          name: 'Hevesaranyos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 995,
          name: 'Hevesvezekény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 996,
          name: 'Hidas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 997,
          name: 'Hidasnémeti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 998,
          name: 'Hidegkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 999,
          name: 'Hidegség',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1000,
          name: 'Hidvégardó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1001,
          name: 'Himesháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1002,
          name: 'Himod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1003,
          name: 'Hirics',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1004,
          name: 'Hobol',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1005,
          name: 'Hodász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1006,
          name: 'Hollád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1007,
          name: 'Hollóháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1008,
          name: 'Hollókő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1009,
          name: 'Homokbödöge',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1010,
          name: 'Homokkomárom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1011,
          name: 'Homokmégy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1012,
          name: 'Homokszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1013,
          name: 'Homorúd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1014,
          name: 'Homrogd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1015,
          name: 'Hont',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1016,
          name: 'Horpács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1017,
          name: 'Hort',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1018,
          name: 'Hortobágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1019,
          name: 'Horváthertelend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1020,
          name: 'Horvátlövő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1021,
          name: 'Horvátzsidány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1022,
          name: 'Hosszúhetény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1023,
          name: 'Hosszúpereszteg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1024,
          name: 'Hosszúpályi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1025,
          name: 'Hosszúvíz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1026,
          name: 'Hosszúvölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1027,
          name: 'Hosztót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1028,
          name: 'Hottó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1029,
          name: 'Hugyag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1030,
          name: 'Hunya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1031,
          name: 'Hunyadfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1032,
          name: 'Husztót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1033,
          name: 'Hács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1034,
          name: 'Háromfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1035,
          name: 'Háromhuta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1036,
          name: 'Hárskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1037,
          name: 'Hásságy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1038,
          name: 'Hédervár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1039,
          name: 'Héhalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1040,
          name: 'Héreg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1041,
          name: 'Hét',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1042,
          name: 'Hévíz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1043,
          name: 'Hévízgyörk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1044,
          name: 'Hódmezővásárhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1045,
          name: 'Hövej',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1046,
          name: 'Hőgyész',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1047,
          name: 'Ibafa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1048,
          name: 'Iborfia',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1049,
          name: 'Ibrány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1050,
          name: 'Igal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1051,
          name: 'Igar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1052,
          name: 'Igrici',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1053,
          name: 'Iharos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1054,
          name: 'Iharosberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1055,
          name: 'Ikervár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1056,
          name: 'Iklad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1057,
          name: 'Iklanberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1058,
          name: 'Iklódbördőce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1059,
          name: 'Ikrény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1060,
          name: 'Iliny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1061,
          name: 'Ilk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1062,
          name: 'Illocska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1063,
          name: 'Imola',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1064,
          name: 'Imrehegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1065,
          name: 'Inke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1066,
          name: 'Ináncs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1067,
          name: 'Inárcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1068,
          name: 'Ipacsfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1069,
          name: 'Ipolydamásd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1070,
          name: 'Ipolytarnóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1071,
          name: 'Ipolytölgyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1072,
          name: 'Ipolyvece',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1073,
          name: 'Iregszemcse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1074,
          name: 'Irota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1075,
          name: 'Isaszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1076,
          name: 'Ispánk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1077,
          name: 'Istenmezeje',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1078,
          name: 'Istvándi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1079,
          name: 'Iszkaszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1080,
          name: 'Iszkáz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1081,
          name: 'Isztimér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1082,
          name: 'Ivád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1083,
          name: 'Iván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1084,
          name: 'Ivánbattyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1085,
          name: 'Ivánc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1086,
          name: 'Iváncsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1087,
          name: 'Ivándárda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1088,
          name: 'Izmény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1089,
          name: 'Izsák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1090,
          name: 'Izsófalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1091,
          name: 'Jakabszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1092,
          name: 'Jenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1093,
          name: 'Jobaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1094,
          name: 'Jobbágyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1095,
          name: 'Juta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1096,
          name: 'Jágónak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1097,
          name: 'Ják',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1098,
          name: 'Jákfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1099,
          name: 'Jákfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1100,
          name: 'Jákó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1101,
          name: 'Jánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1102,
          name: 'Jánkmajtis',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1103,
          name: 'Jánoshalma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1104,
          name: 'Jánoshida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1105,
          name: 'Jánosháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1106,
          name: 'Jánossomorja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1107,
          name: 'Járdánháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1108,
          name: 'Jármi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1109,
          name: 'Jásd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1110,
          name: 'Jászalsószentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1111,
          name: 'Jászapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1112,
          name: 'Jászberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1113,
          name: 'Jászboldogháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1114,
          name: 'Jászdózsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1115,
          name: 'Jászfelsőszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1116,
          name: 'Jászfényszaru',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1117,
          name: 'Jászivány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1118,
          name: 'Jászjákóhalma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1119,
          name: 'Jászkarajenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1120,
          name: 'Jászkisér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1121,
          name: 'Jászladány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1122,
          name: 'Jászszentandrás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1123,
          name: 'Jászszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1124,
          name: 'Jásztelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1125,
          name: 'Jászágó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1126,
          name: 'Jászárokszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1127,
          name: 'Jéke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1128,
          name: 'Jósvafő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1129,
          name: 'Kaba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1130,
          name: 'Kacorlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1131,
          name: 'Kacsóta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1132,
          name: 'Kadarkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1133,
          name: 'Kajdacs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1134,
          name: 'Kajárpéc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1135,
          name: 'Kajászó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1136,
          name: 'Kakasd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1137,
          name: 'Kakucs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1138,
          name: 'Kalaznó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1139,
          name: 'Kallósd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1140,
          name: 'Kalocsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1141,
          name: 'Kamond',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1142,
          name: 'Kamut',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1143,
          name: 'Kapolcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1144,
          name: 'Kapoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1145,
          name: 'Kaposfő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1146,
          name: 'Kaposgyarmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1147,
          name: 'Kaposhomok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1148,
          name: 'Kaposkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1149,
          name: 'Kaposmérő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1150,
          name: 'Kapospula',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1151,
          name: 'Kaposszekcső',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1152,
          name: 'Kaposszerdahely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1153,
          name: 'Kaposvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1154,
          name: 'Kaposújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1155,
          name: 'Kapuvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1156,
          name: 'Karakó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1157,
          name: 'Karakószörcsök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1158,
          name: 'Karancsalja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1159,
          name: 'Karancsberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1160,
          name: 'Karancskeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1161,
          name: 'Karancslapujtő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1162,
          name: 'Karancsság',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1163,
          name: 'Karcag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1164,
          name: 'Karcsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1165,
          name: 'Kardos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1166,
          name: 'Kardoskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1167,
          name: 'Karmacs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1168,
          name: 'Karos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1169,
          name: 'Kartal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1170,
          name: 'Karácsond',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1171,
          name: 'Karád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1172,
          name: 'Kaskantyú',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1173,
          name: 'Kastélyosdombó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1174,
          name: 'Kaszaper',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1175,
          name: 'Kaszó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1176,
          name: 'Katafa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1177,
          name: 'Katymár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1178,
          name: 'Katádfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1179,
          name: 'Kazincbarcika',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1180,
          name: 'Kazsok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1181,
          name: 'Kazár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1182,
          name: 'Kecel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1183,
          name: 'Kecskemét',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1184,
          name: 'Kecskéd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1185,
          name: 'Kehidakustány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1186,
          name: 'Kelebia',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1187,
          name: 'Kelemér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1188,
          name: 'Kelevíz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1189,
          name: 'Keléd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1190,
          name: 'Kemecse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1191,
          name: 'Kemence',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1192,
          name: 'Kemendollár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1193,
          name: 'Kemeneshőgyész',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1194,
          name: 'Kemeneskápolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1195,
          name: 'Kemenesmagasi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1196,
          name: 'Kemenesmihályfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1197,
          name: 'Kemenespálfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1198,
          name: 'Kemenesszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1199,
          name: 'Kemenesszentpéter',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1200,
          name: 'Kemenessömjén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1201,
          name: 'Kemestaródfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1202,
          name: 'Kemse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1203,
          name: 'Keménfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1204,
          name: 'Kenderes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1205,
          name: 'Kengyel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1206,
          name: 'Kenyeri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1207,
          name: 'Kenéz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1208,
          name: 'Kenézlő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1209,
          name: 'Kercaszomor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1210,
          name: 'Kercseliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1211,
          name: 'Kerecsend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1212,
          name: 'Kerecseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1213,
          name: 'Kerekegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1214,
          name: 'Kereki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1215,
          name: 'Kerepes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1216,
          name: 'Keresztéte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1217,
          name: 'Kerkabarabás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1218,
          name: 'Kerkafalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1219,
          name: 'Kerkakutas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1220,
          name: 'Kerkaszentkirály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1221,
          name: 'Kerkateskánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1222,
          name: 'Kerkáskápolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1223,
          name: 'Kerta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1224,
          name: 'Kertészsziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1225,
          name: 'Kerékteleki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1226,
          name: 'Keszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1227,
          name: 'Kesznyéten',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1228,
          name: 'Keszthely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1229,
          name: 'Kesztölc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1230,
          name: 'Keszü',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1231,
          name: 'Keszőhidegkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1232,
          name: 'Kevermes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1233,
          name: 'Kilimán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1234,
          name: 'Kimle',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1235,
          name: 'Kincsesbánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1236,
          name: 'Királd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1237,
          name: 'Királyegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1238,
          name: 'Királyhegyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1239,
          name: 'Királyszentistván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1240,
          name: 'Kisapostag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1241,
          name: 'Kisapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1242,
          name: 'Kisar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1243,
          name: 'Kisasszond',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1244,
          name: 'Kisasszonyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1245,
          name: 'Kisbabot',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1246,
          name: 'Kisbajcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1247,
          name: 'Kisbajom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1248,
          name: 'Kisberzseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1249,
          name: 'Kisberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1250,
          name: 'Kisbeszterce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1251,
          name: 'Kisbodak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1252,
          name: 'Kisbucsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1253,
          name: 'Kisbudmér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1254,
          name: 'Kisbágyon',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1255,
          name: 'Kisbárapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1256,
          name: 'Kisbárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1257,
          name: 'Kisbér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1258,
          name: 'Kiscsehi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1259,
          name: 'Kiscsécs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1260,
          name: 'Kiscsősz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1261,
          name: 'Kisdobsza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1262,
          name: 'Kisdombegyház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1263,
          name: 'Kisdorog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1264,
          name: 'Kisdér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1265,
          name: 'Kisecset',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1266,
          name: 'Kisfalud',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1267,
          name: 'Kisfüzes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1268,
          name: 'Kisgyalán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1269,
          name: 'Kisgyőr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1270,
          name: 'Kisgörbő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1271,
          name: 'Kishajmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1272,
          name: 'Kisharsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1273,
          name: 'Kishartyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1274,
          name: 'Kisherend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1275,
          name: 'Kishuta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1276,
          name: 'Kishódos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1277,
          name: 'Kisigmánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1278,
          name: 'Kisjakabfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1279,
          name: 'Kiskassa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1280,
          name: 'Kiskinizs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1281,
          name: 'Kiskorpád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1282,
          name: 'Kiskunfélegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1283,
          name: 'Kiskunhalas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1284,
          name: 'Kiskunlacháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1285,
          name: 'Kiskunmajsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1286,
          name: 'Kiskutas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1287,
          name: 'Kisköre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1288,
          name: 'Kiskőrös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1289,
          name: 'Kislippó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1290,
          name: 'Kisláng',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1291,
          name: 'Kisléta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1292,
          name: 'Kislőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1293,
          name: 'Kismarja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1294,
          name: 'Kismaros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1295,
          name: 'Kismányok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1296,
          name: 'Kisnamény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1297,
          name: 'Kisnyárád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1298,
          name: 'Kisnána',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1299,
          name: 'Kisnémedi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1300,
          name: 'Kisoroszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1301,
          name: 'Kispalád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1302,
          name: 'Kispirit',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1303,
          name: 'Kispáli',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1304,
          name: 'Kisrozvágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1305,
          name: 'Kisrákos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1306,
          name: 'Kisrécse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1307,
          name: 'Kissikátor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1308,
          name: 'Kissomlyó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1309,
          name: 'Kisszekeres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1310,
          name: 'Kisszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1311,
          name: 'Kissziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1312,
          name: 'Kisszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1313,
          name: 'Kisszékely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1314,
          name: 'Kisszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1315,
          name: 'Kistamási',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1316,
          name: 'Kistapolca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1317,
          name: 'Kistarcsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1318,
          name: 'Kistelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1319,
          name: 'Kistokaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1320,
          name: 'Kistolmács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1321,
          name: 'Kistormás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1322,
          name: 'Kistótfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1323,
          name: 'Kisunyom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1324,
          name: 'Kisvarsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1325,
          name: 'Kisvaszar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1326,
          name: 'Kisvejke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1327,
          name: 'Kisvárda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1328,
          name: 'Kisvásárhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1329,
          name: 'Kiszombor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1330,
          name: 'Kiszsidány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1331,
          name: 'Kisújszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1332,
          name: 'Klárafalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1333,
          name: 'Kocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1334,
          name: 'Kocsola',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1335,
          name: 'Kocsord',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1336,
          name: 'Kocsér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1337,
          name: 'Kokad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1338,
          name: 'Kolontár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1339,
          name: 'Komjáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1340,
          name: 'Komló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1341,
          name: 'Komlódtótfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1342,
          name: 'Komlósd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1343,
          name: 'Komlóska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1344,
          name: 'Komoró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1345,
          name: 'Kompolt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1346,
          name: 'Komádi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1347,
          name: 'Komárom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1348,
          name: 'Kondorfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1349,
          name: 'Kondoros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1350,
          name: 'Kondó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1351,
          name: 'Konyár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1352,
          name: 'Koppányszántó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1353,
          name: 'Korlát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1354,
          name: 'Koroncó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1355,
          name: 'Kosd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1356,
          name: 'Kovácshida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1357,
          name: 'Kovácsszénája',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1358,
          name: 'Kovácsvágás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1359,
          name: 'Kozmadombja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1360,
          name: 'Kozárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1361,
          name: 'Kozármisleny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1362,
          name: 'Krasznokvajda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1363,
          name: 'Kulcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1364,
          name: 'Kunadacs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1365,
          name: 'Kunbaja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1366,
          name: 'Kunbaracs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1367,
          name: 'Kuncsorba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1368,
          name: 'Kunfehértó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1369,
          name: 'Kunhegyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1370,
          name: 'Kunmadaras',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1371,
          name: 'Kunpeszér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1372,
          name: 'Kunszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1373,
          name: 'Kunszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1374,
          name: 'Kunsziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1375,
          name: 'Kunszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1376,
          name: 'Kunágota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1377,
          name: 'Kup',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1378,
          name: 'Kupa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1379,
          name: 'Kurd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1380,
          name: 'Kurityán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1381,
          name: 'Kustánszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1382,
          name: 'Kutas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1383,
          name: 'Kutasó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1384,
          name: 'Kács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1385,
          name: 'Kákics',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1386,
          name: 'Kál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1387,
          name: 'Káld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1388,
          name: 'Kálló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1389,
          name: 'Kállósemjén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1390,
          name: 'Kálmáncsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1391,
          name: 'Kálmánháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1392,
          name: 'Káloz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1393,
          name: 'Kálócfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1394,
          name: 'Kám',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1395,
          name: 'Kántorjánosi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1396,
          name: 'Kány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1397,
          name: 'Kánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1398,
          name: 'Kányavár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1399,
          name: 'Kánó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1400,
          name: 'Kápolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1401,
          name: 'Kápolnásnyék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1402,
          name: 'Káptalanfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1403,
          name: 'Káptalantóti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1404,
          name: 'Kára',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1405,
          name: 'Károlyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1406,
          name: 'Kárász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1407,
          name: 'Kásád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1408,
          name: 'Kátoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1409,
          name: 'Káva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1410,
          name: 'Kávás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1411,
          name: 'Kázsmárk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1412,
          name: 'Kék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1413,
          name: 'Kékcse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1414,
          name: 'Kéked',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1415,
          name: 'Kékesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1416,
          name: 'Kékkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1417,
          name: 'Kéleshalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1418,
          name: 'Kémes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1419,
          name: 'Kérsemjén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1420,
          name: 'Kétbodony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1421,
          name: 'Kétegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1422,
          name: 'Kéthely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1423,
          name: 'Kétpó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1424,
          name: 'Kétsoprony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1425,
          name: 'Kétvölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1426,
          name: 'Kéty',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1427,
          name: 'Kétújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1428,
          name: 'Kóka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1429,
          name: 'Kóny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1430,
          name: 'Kópháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1431,
          name: 'Kórós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1432,
          name: 'Kóspallag',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1433,
          name: 'Kótaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1434,
          name: 'Köblény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1435,
          name: 'Köcsk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1436,
          name: 'Kökény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1437,
          name: 'Kölcse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1438,
          name: 'Kölesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1439,
          name: 'Kölked',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1440,
          name: 'Kömlő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1441,
          name: 'Kömlőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1442,
          name: 'Kömpöc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1443,
          name: 'Kömörő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1444,
          name: 'Körmend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1445,
          name: 'Környe',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1446,
          name: 'Köröm',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1447,
          name: 'Körösladány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1448,
          name: 'Körösnagyharsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1449,
          name: 'Körösszakál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1450,
          name: 'Körösszegapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1451,
          name: 'Köröstarcsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1452,
          name: 'Körösújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1453,
          name: 'Kötcse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1454,
          name: 'Kötegyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1455,
          name: 'Kövegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1456,
          name: 'Köveskál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1457,
          name: 'Kübekháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1458,
          name: 'Külsősárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1459,
          name: 'Külsővat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1460,
          name: 'Küngös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1461,
          name: 'Kőkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1462,
          name: 'Kőröshegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1463,
          name: 'Kőröstetétlen',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1464,
          name: 'Kőszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1465,
          name: 'Kőszegdoroszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1466,
          name: 'Kőszegpaty',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1467,
          name: 'Kőszegszerdahely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1468,
          name: 'Kőszárhegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1469,
          name: 'Kőtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1470,
          name: 'Kővágószőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1471,
          name: 'Kővágótöttös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1472,
          name: 'Kővágóörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1473,
          name: 'Lad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1474,
          name: 'Ladánybene',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1475,
          name: 'Lajoskomárom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1476,
          name: 'Lajosmizse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1477,
          name: 'Lak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1478,
          name: 'Lakhegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1479,
          name: 'Lakitelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1480,
          name: 'Lakócsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1481,
          name: 'Lapáncsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1482,
          name: 'Laskod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1483,
          name: 'Lasztonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1484,
          name: 'Legyesbénye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1485,
          name: 'Legénd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1486,
          name: 'Lendvadedes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1487,
          name: 'Lendvajakabfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1488,
          name: 'Lengyel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1489,
          name: 'Lengyeltóti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1490,
          name: 'Lenti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1491,
          name: 'Lepsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1492,
          name: 'Lesencefalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1493,
          name: 'Lesenceistvánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1494,
          name: 'Lesencetomaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1495,
          name: 'Letenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1496,
          name: 'Letkés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1497,
          name: 'Levelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1498,
          name: 'Levél',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1499,
          name: 'Leányfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1500,
          name: 'Leányvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1501,
          name: 'Libickozma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1502,
          name: 'Lickóvadamos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1503,
          name: 'Liget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1504,
          name: 'Ligetfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1505,
          name: 'Lippó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1506,
          name: 'Liptód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1507,
          name: 'Lipót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1508,
          name: 'Lispeszentadorján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1509,
          name: 'Liszó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1510,
          name: 'Litka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1511,
          name: 'Litke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1512,
          name: 'Litér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1513,
          name: 'Lothárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1514,
          name: 'Lovas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1515,
          name: 'Lovasberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1516,
          name: 'Lovászhetény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1517,
          name: 'Lovászi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1518,
          name: 'Lovászpatona',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1519,
          name: 'Lucfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1520,
          name: 'Ludas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1521,
          name: 'Ludányhalászi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1522,
          name: 'Lukácsháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1523,
          name: 'Lulla',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1524,
          name: 'Lábatlan',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1525,
          name: 'Lábod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1526,
          name: 'Lácacséke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1527,
          name: 'Ládbesenyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1528,
          name: 'Lánycsók',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1529,
          name: 'Lápafő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1530,
          name: 'Látrány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1531,
          name: 'Lázi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1532,
          name: 'Lébény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1533,
          name: 'Léh',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1534,
          name: 'Lénárddaróc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1535,
          name: 'Létavértes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1536,
          name: 'Lócs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1537,
          name: 'Lókút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1538,
          name: 'Lónya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1539,
          name: 'Lórév',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1540,
          name: 'Lövő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1541,
          name: 'Lövőpetri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1542,
          name: 'Lúzsok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1543,
          name: 'Lőkösháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1544,
          name: 'Lőrinci',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1545,
          name: 'Madaras',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1546,
          name: 'Madocsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1547,
          name: 'Maglóca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1548,
          name: 'Maglód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1549,
          name: 'Magosliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1550,
          name: 'Magy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1551,
          name: 'Magyaralmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1552,
          name: 'Magyaratád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1553,
          name: 'Magyarbánhegyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1554,
          name: 'Magyarbóly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1555,
          name: 'Magyarcsanád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1556,
          name: 'Magyardombegyház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1557,
          name: 'Magyaregregy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1558,
          name: 'Magyaregres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1559,
          name: 'Magyarföld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1560,
          name: 'Magyargencs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1561,
          name: 'Magyargéc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1562,
          name: 'Magyarhertelend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1563,
          name: 'Magyarhomorog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1564,
          name: 'Magyarkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1565,
          name: 'Magyarkeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1566,
          name: 'Magyarlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1567,
          name: 'Magyarlukafa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1568,
          name: 'Magyarmecske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1569,
          name: 'Magyarnádalja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1570,
          name: 'Magyarnándor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1571,
          name: 'Magyarpolány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1572,
          name: 'Magyarsarlós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1573,
          name: 'Magyarszecsőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1574,
          name: 'Magyarszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1575,
          name: 'Magyarszerdahely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1576,
          name: 'Magyarszombatfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1577,
          name: 'Magyarszék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1578,
          name: 'Magyartelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1579,
          name: 'Majosháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1580,
          name: 'Majs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1581,
          name: 'Makkoshotyka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1582,
          name: 'Maklár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1583,
          name: 'Makád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1584,
          name: 'Makó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1585,
          name: 'Malomsok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1586,
          name: 'Marcalgergelyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1587,
          name: 'Marcali',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1588,
          name: 'Marcaltő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1589,
          name: 'Markaz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1590,
          name: 'Markotabödöge',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1591,
          name: 'Markóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1592,
          name: 'Maroslele',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1593,
          name: 'Martfű',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1594,
          name: 'Martonfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1595,
          name: 'Martonvásár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1596,
          name: 'Martonyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1597,
          name: 'Maráza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1598,
          name: 'Maróc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1599,
          name: 'Marócsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1600,
          name: 'Matty',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1601,
          name: 'Mecseknádasd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1602,
          name: 'Mecsekpölöske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1603,
          name: 'Mecsér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1604,
          name: 'Medgyesbodzás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1605,
          name: 'Medgyesegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1606,
          name: 'Medina',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1607,
          name: 'Meggyeskovácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1608,
          name: 'Megyaszó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1609,
          name: 'Megyehíd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1610,
          name: 'Megyer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1611,
          name: 'Mekényes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1612,
          name: 'Mencshely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1613,
          name: 'Mende',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1614,
          name: 'Merenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1615,
          name: 'Mernye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1616,
          name: 'Mersevát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1617,
          name: 'Mesterháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1618,
          name: 'Mesteri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1619,
          name: 'Mesterszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1620,
          name: 'Meszes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1621,
          name: 'Meszlen',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1622,
          name: 'Mesztegnyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1623,
          name: 'Mezőberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1624,
          name: 'Mezőcsokonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1625,
          name: 'Mezőcsát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1626,
          name: 'Meződ',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1627,
          name: 'Mezőfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1628,
          name: 'Mezőgyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1629,
          name: 'Mezőhegyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1630,
          name: 'Mezőhék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1631,
          name: 'Mezőkeresztes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1632,
          name: 'Mezőkomárom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1633,
          name: 'Mezőkovácsháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1634,
          name: 'Mezőkövesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1635,
          name: 'Mezőladány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1636,
          name: 'Mezőlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1637,
          name: 'Mezőnagymihály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1638,
          name: 'Mezőnyárád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1639,
          name: 'Mezőpeterd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1640,
          name: 'Mezősas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1641,
          name: 'Mezőszemere',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1642,
          name: 'Mezőszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1643,
          name: 'Mezőszilas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1644,
          name: 'Mezőtárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1645,
          name: 'Mezőtúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1646,
          name: 'Mezőzombor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1647,
          name: 'Mezőörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1648,
          name: 'Miháld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1649,
          name: 'Mihályfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1650,
          name: 'Mihálygerge',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1651,
          name: 'Mihályháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1652,
          name: 'Mihályi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1653,
          name: 'Mike',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1654,
          name: 'Mikebuda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1655,
          name: 'Mikekarácsonyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1656,
          name: 'Mikepércs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1657,
          name: 'Miklósi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1658,
          name: 'Mikosszéplak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1659,
          name: 'Mikófalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1660,
          name: 'Mikóháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1661,
          name: 'Milejszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1662,
          name: 'Milota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1663,
          name: 'Mindszent',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1664,
          name: 'Mindszentgodisa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1665,
          name: 'Mindszentkálla',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1666,
          name: 'Misefa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1667,
          name: 'Miske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1668,
          name: 'Miskolc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1669,
          name: 'Miszla',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1670,
          name: 'Mocsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1671,
          name: 'Mogyoród',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1672,
          name: 'Mogyorósbánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1673,
          name: 'Mogyoróska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1674,
          name: 'Moha',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1675,
          name: 'Mohora',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1676,
          name: 'Mohács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1677,
          name: 'Molnaszecsőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1678,
          name: 'Molnári',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1679,
          name: 'Molvány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1680,
          name: 'Monaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1681,
          name: 'Monok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1682,
          name: 'Monor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1683,
          name: 'Monostorapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1684,
          name: 'Monostorpályi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1685,
          name: 'Monoszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1686,
          name: 'Monyoród',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1687,
          name: 'Mosdós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1688,
          name: 'Mosonmagyaróvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1689,
          name: 'Mosonszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1690,
          name: 'Mosonszolnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1691,
          name: 'Mozsgó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1692,
          name: 'Mucsfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1693,
          name: 'Mucsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1694,
          name: 'Muhi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1695,
          name: 'Murakeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1696,
          name: 'Murarátka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1697,
          name: 'Muraszemenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1698,
          name: 'Murga',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1699,
          name: 'Murony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1700,
          name: 'Mád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1701,
          name: 'Mágocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1702,
          name: 'Mályi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1703,
          name: 'Mályinka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1704,
          name: 'Mánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1705,
          name: 'Mándok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1706,
          name: 'Mánfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1707,
          name: 'Mány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1708,
          name: 'Márfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1709,
          name: 'Máriahalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1710,
          name: 'Máriakálnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1711,
          name: 'Máriakéménd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1712,
          name: 'Márianosztra',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1713,
          name: 'Máriapócs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1714,
          name: 'Márkháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1715,
          name: 'Márkó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1716,
          name: 'Márok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1717,
          name: 'Márokföld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1718,
          name: 'Márokpapi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1719,
          name: 'Mártély',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1720,
          name: 'Mátraballa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1721,
          name: 'Mátraderecske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1722,
          name: 'Mátramindszent',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1723,
          name: 'Mátranovák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1724,
          name: 'Mátraszele',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1725,
          name: 'Mátraszentimre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1726,
          name: 'Mátraszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1727,
          name: 'Mátraterenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1728,
          name: 'Mátraverebély',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1729,
          name: 'Mátyus',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1730,
          name: 'Mátyásdomb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1731,
          name: 'Mátészalka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1732,
          name: 'Mátételke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1733,
          name: 'Máza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1734,
          name: 'Méhkerék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1735,
          name: 'Méhtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1736,
          name: 'Mélykút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1737,
          name: 'Méra',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1738,
          name: 'Mérges',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1739,
          name: 'Mérk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1740,
          name: 'Mónosbél',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1741,
          name: 'Mór',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1742,
          name: 'Mórahalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1743,
          name: 'Móricgát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1744,
          name: 'Mórichida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1745,
          name: 'Mórágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1746,
          name: 'Múcsony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1747,
          name: 'Mőcsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1748,
          name: 'Nadap',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1749,
          name: 'Nagyacsád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1750,
          name: 'Nagyalásony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1751,
          name: 'Nagyar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1752,
          name: 'Nagyatád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1753,
          name: 'Nagybajcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1754,
          name: 'Nagybajom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1755,
          name: 'Nagybakónak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1756,
          name: 'Nagybaracska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1757,
          name: 'Nagybarca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1758,
          name: 'Nagyberki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1759,
          name: 'Nagyberény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1760,
          name: 'Nagybudmér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1761,
          name: 'Nagybánhegyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1762,
          name: 'Nagybárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1763,
          name: 'Nagybörzsöny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1764,
          name: 'Nagycenk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1765,
          name: 'Nagycsepely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1766,
          name: 'Nagycserkesz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1767,
          name: 'Nagycsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1768,
          name: 'Nagycsécs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1769,
          name: 'Nagydobos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1770,
          name: 'Nagydobsza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1771,
          name: 'Nagydorog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1772,
          name: 'Nagydém',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1773,
          name: 'Nagyecsed',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1774,
          name: 'Nagyesztergár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1775,
          name: 'Nagyfüged',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1776,
          name: 'Nagygeresd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1777,
          name: 'Nagygyimót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1778,
          name: 'Nagygörbő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1779,
          name: 'Nagyhajmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1780,
          name: 'Nagyhalász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1781,
          name: 'Nagyharsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1782,
          name: 'Nagyhegyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1783,
          name: 'Nagyhuta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1784,
          name: 'Nagyhódos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1785,
          name: 'Nagyigmánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1786,
          name: 'Nagyiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1787,
          name: 'Nagykamarás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1788,
          name: 'Nagykanizsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1789,
          name: 'Nagykapornak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1790,
          name: 'Nagykarácsony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1791,
          name: 'Nagykereki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1792,
          name: 'Nagykinizs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1793,
          name: 'Nagykorpád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1794,
          name: 'Nagykovácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1795,
          name: 'Nagykozár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1796,
          name: 'Nagykutas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1797,
          name: 'Nagykálló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1798,
          name: 'Nagykáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1799,
          name: 'Nagykónyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1800,
          name: 'Nagykökényes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1801,
          name: 'Nagykölked',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1802,
          name: 'Nagykörű',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1803,
          name: 'Nagykőrös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1804,
          name: 'Nagylak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1805,
          name: 'Nagylengyel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1806,
          name: 'Nagylóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1807,
          name: 'Nagylók',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1808,
          name: 'Nagylózs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1809,
          name: 'Nagymaros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1810,
          name: 'Nagymizdó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1811,
          name: 'Nagymágocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1812,
          name: 'Nagymányok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1813,
          name: 'Nagynyárád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1814,
          name: 'Nagyoroszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1815,
          name: 'Nagypall',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1816,
          name: 'Nagypeterd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1817,
          name: 'Nagypirit',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1818,
          name: 'Nagypáli',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1819,
          name: 'Nagyrada',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1820,
          name: 'Nagyrozvágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1821,
          name: 'Nagyrábé',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1822,
          name: 'Nagyrákos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1823,
          name: 'Nagyrécse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1824,
          name: 'Nagyréde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1825,
          name: 'Nagyrév',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1826,
          name: 'Nagysimonyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1827,
          name: 'Nagyszakácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1828,
          name: 'Nagyszekeres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1829,
          name: 'Nagyszentjános',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1830,
          name: 'Nagyszokoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1831,
          name: 'Nagyszékely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1832,
          name: 'Nagyszénás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1833,
          name: 'Nagysáp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1834,
          name: 'Nagytarcsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1835,
          name: 'Nagytevel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1836,
          name: 'Nagytilaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1837,
          name: 'Nagytálya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1838,
          name: 'Nagytótfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1839,
          name: 'Nagytőke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1840,
          name: 'Nagyvarsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1841,
          name: 'Nagyvejke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1842,
          name: 'Nagyveleg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1843,
          name: 'Nagyvenyim',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1844,
          name: 'Nagyvisnyó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1845,
          name: 'Nagyváty',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1846,
          name: 'Nagyvázsony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1847,
          name: 'Nagyér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1848,
          name: 'Nagyút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1849,
          name: 'Nak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1850,
          name: 'Napkor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1851,
          name: 'Narda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1852,
          name: 'Naszály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1853,
          name: 'Nekézseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1854,
          name: 'Nemesapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1855,
          name: 'Nemesbikk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1856,
          name: 'Nemesborzova',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1857,
          name: 'Nemesbük',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1858,
          name: 'Nemesbőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1859,
          name: 'Nemescsó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1860,
          name: 'Nemesdéd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1861,
          name: 'Nemesgulács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1862,
          name: 'Nemesgörzsöny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1863,
          name: 'Nemeshany',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1864,
          name: 'Nemeshetés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1865,
          name: 'Nemeske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1866,
          name: 'Nemeskeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1867,
          name: 'Nemeskisfalud',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1868,
          name: 'Nemeskocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1869,
          name: 'Nemeskolta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1870,
          name: 'Nemeskér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1871,
          name: 'Nemesládony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1872,
          name: 'Nemesmedves',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1873,
          name: 'Nemesnádudvar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1874,
          name: 'Nemesnép',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1875,
          name: 'Nemespátró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1876,
          name: 'Nemesrempehollós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1877,
          name: 'Nemesrádó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1878,
          name: 'Nemesszalók',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1879,
          name: 'Nemesszentandrás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1880,
          name: 'Nemessándorháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1881,
          name: 'Nemesvid',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1882,
          name: 'Nemesvita',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1883,
          name: 'Nemesvámos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1884,
          name: 'Nemti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1885,
          name: 'Neszmély',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1886,
          name: 'Nick',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1887,
          name: 'Nikla',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1888,
          name: 'Noszlop',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1889,
          name: 'Noszvaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1890,
          name: 'Nova',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1891,
          name: 'Novaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1892,
          name: 'Novajidrány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1893,
          name: 'Nyalka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1894,
          name: 'Nyergesújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1895,
          name: 'Nyim',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1896,
          name: 'Nyirád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1897,
          name: 'Nyomár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1898,
          name: 'Nyugotszenterzsébet',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1899,
          name: 'Nyáregyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1900,
          name: 'Nyárlőrinc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1901,
          name: 'Nyársapát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1902,
          name: 'Nyárád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1903,
          name: 'Nyékládháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1904,
          name: 'Nyésta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1905,
          name: 'Nyíracsád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1906,
          name: 'Nyíradony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1907,
          name: 'Nyírbogdány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1908,
          name: 'Nyírbogát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1909,
          name: 'Nyírbátor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1910,
          name: 'Nyírbéltek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1911,
          name: 'Nyírcsaholy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1912,
          name: 'Nyírcsászári',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1913,
          name: 'Nyírderzs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1914,
          name: 'Nyíregyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1915,
          name: 'Nyírgelse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1916,
          name: 'Nyírgyulaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1917,
          name: 'Nyíri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1918,
          name: 'Nyíribrony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1919,
          name: 'Nyírjákó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1920,
          name: 'Nyírkarász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1921,
          name: 'Nyírkáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1922,
          name: 'Nyírkércs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1923,
          name: 'Nyírlugos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1924,
          name: 'Nyírlövő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1925,
          name: 'Nyírmada',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1926,
          name: 'Nyírmeggyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1927,
          name: 'Nyírmihálydi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1928,
          name: 'Nyírmártonfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1929,
          name: 'Nyírparasznya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1930,
          name: 'Nyírpazony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1931,
          name: 'Nyírpilis',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1932,
          name: 'Nyírtass',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1933,
          name: 'Nyírtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1934,
          name: 'Nyírtura',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1935,
          name: 'Nyírtét',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1936,
          name: 'Nyírvasvári',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1937,
          name: 'Nyírábrány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1938,
          name: 'Nyúl',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1939,
          name: 'Nyőgér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1940,
          name: 'Nábrád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1941,
          name: 'Nádasd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1942,
          name: 'Nádasdladány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1943,
          name: 'Nádudvar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1944,
          name: 'Nágocs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1945,
          name: 'Nárai',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1946,
          name: 'Négyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1947,
          name: 'Németbánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1948,
          name: 'Németfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1949,
          name: 'Németkér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1950,
          name: 'Nézsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1951,
          name: 'Nógrád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1952,
          name: 'Nógrádkövesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1953,
          name: 'Nógrádmarcal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1954,
          name: 'Nógrádmegyer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1955,
          name: 'Nógrádsipek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1956,
          name: 'Nógrádszakál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1957,
          name: 'Nógrádsáp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1958,
          name: 'Nóráp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1959,
          name: 'Nőtincs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1960,
          name: 'Okorvölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1961,
          name: 'Okorág',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1962,
          name: 'Okány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1963,
          name: 'Olasz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1964,
          name: 'Olaszfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1965,
          name: 'Olaszfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1966,
          name: 'Olaszliszka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1967,
          name: 'Olcsva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1968,
          name: 'Olcsvaapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1969,
          name: 'Old',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1970,
          name: 'Oltárc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1971,
          name: 'Onga',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1972,
          name: 'Orbányosfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1973,
          name: 'Orci',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1974,
          name: 'Ordacsehi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1975,
          name: 'Ordas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1976,
          name: 'Orfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1977,
          name: 'Orfű',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1978,
          name: 'Orgovány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1979,
          name: 'Ormosbánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1980,
          name: 'Ormándlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1981,
          name: 'Orosháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1982,
          name: 'Oroszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1983,
          name: 'Oroszlány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1984,
          name: 'Oroszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1985,
          name: 'Orosztony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1986,
          name: 'Ortaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1987,
          name: 'Osli',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1988,
          name: 'Ostffyasszonyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1989,
          name: 'Ostoros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1990,
          name: 'Oszkó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1991,
          name: 'Oszlár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1992,
          name: 'Osztopán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1993,
          name: 'Ozmánbük',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1994,
          name: 'Ozora',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1995,
          name: 'Pacsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1996,
          name: 'Padár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1997,
          name: 'Pakod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1998,
          name: 'Paks',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 1999,
          name: 'Palkonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2000,
          name: 'Palotabozsok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2001,
          name: 'Palotás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2002,
          name: 'Paloznak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2003,
          name: 'Palé',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2004,
          name: 'Pamlény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2005,
          name: 'Pamuk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2006,
          name: 'Pankasz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2007,
          name: 'Pannonhalma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2008,
          name: 'Panyola',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2009,
          name: 'Pap',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2010,
          name: 'Papkeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2011,
          name: 'Papos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2012,
          name: 'Parasznya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2013,
          name: 'Parád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2014,
          name: 'Parádsasvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2015,
          name: 'Paszab',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2016,
          name: 'Pat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2017,
          name: 'Patak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2018,
          name: 'Patalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2019,
          name: 'Patapoklosi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2020,
          name: 'Patca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2021,
          name: 'Patosfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2022,
          name: 'Patvarc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2023,
          name: 'Pecöl',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2024,
          name: 'Pellérd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2025,
          name: 'Penc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2026,
          name: 'Penyige',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2027,
          name: 'Penészlek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2028,
          name: 'Perbál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2029,
          name: 'Pere',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2030,
          name: 'Perecse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2031,
          name: 'Pereked',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2032,
          name: 'Perenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2033,
          name: 'Peresznye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2034,
          name: 'Pereszteg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2035,
          name: 'Perkupa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2036,
          name: 'Perkáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2037,
          name: 'Perőcsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2038,
          name: 'Peterd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2039,
          name: 'Pethőhenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2040,
          name: 'Petneháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2041,
          name: 'Petrikeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2042,
          name: 'Petrivente',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2043,
          name: 'Pettend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2044,
          name: 'Petőfibánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2045,
          name: 'Petőfiszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2046,
          name: 'Petőháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2047,
          name: 'Petőmihályfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2048,
          name: 'Piliny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2049,
          name: 'Pilis',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2050,
          name: 'Pilisborosjenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2051,
          name: 'Piliscsaba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2052,
          name: 'Piliscsév',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2053,
          name: 'Pilisjászfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2054,
          name: 'Pilismarót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2055,
          name: 'Pilisszentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2056,
          name: 'Pilisszentkereszt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2057,
          name: 'Pilisszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2058,
          name: 'Pilisszántó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2059,
          name: 'Pilisvörösvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2060,
          name: 'Pincehely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2061,
          name: 'Pinkamindszent',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2062,
          name: 'Pinnye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2063,
          name: 'Piricse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2064,
          name: 'Pirtó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2065,
          name: 'Piskó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2066,
          name: 'Pitvaros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2067,
          name: 'Pocsaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2068,
          name: 'Pogány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2069,
          name: 'Pogányszentpéter',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2070,
          name: 'Polgár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2071,
          name: 'Polgárdi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2072,
          name: 'Polány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2073,
          name: 'Pomáz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2074,
          name: 'Porcsalma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2075,
          name: 'Pornóapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2076,
          name: 'Poroszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2077,
          name: 'Porpác',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2078,
          name: 'Porrog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2079,
          name: 'Porrogszentkirály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2080,
          name: 'Porrogszentpál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2081,
          name: 'Porva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2082,
          name: 'Potony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2083,
          name: 'Potyond',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2084,
          name: 'Prügy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2085,
          name: 'Pula',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2086,
          name: 'Pusztaapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2087,
          name: 'Pusztaberki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2088,
          name: 'Pusztacsalád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2089,
          name: 'Pusztacsó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2090,
          name: 'Pusztadobos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2091,
          name: 'Pusztaederics',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2092,
          name: 'Pusztafalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2093,
          name: 'Pusztaföldvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2094,
          name: 'Pusztahencse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2095,
          name: 'Pusztakovácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2096,
          name: 'Pusztamagyaród',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2097,
          name: 'Pusztamiske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2098,
          name: 'Pusztamonostor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2099,
          name: 'Pusztamérges',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2100,
          name: 'Pusztaottlaka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2101,
          name: 'Pusztaradvány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2102,
          name: 'Pusztaszabolcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2103,
          name: 'Pusztaszemes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2104,
          name: 'Pusztaszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2105,
          name: 'Pusztaszer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2106,
          name: 'Pusztavacs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2107,
          name: 'Pusztavám',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2108,
          name: 'Pusztazámor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2109,
          name: 'Putnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2110,
          name: 'Pácin',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2111,
          name: 'Pácsony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2112,
          name: 'Páhi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2113,
          name: 'Páka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2114,
          name: 'Pákozd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2115,
          name: 'Pálfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2116,
          name: 'Pálfiszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2117,
          name: 'Pálháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2118,
          name: 'Páli',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2119,
          name: 'Pálmajor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2120,
          name: 'Pálmonostora',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2121,
          name: 'Pánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2122,
          name: 'Pányok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2123,
          name: 'Pápa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2124,
          name: 'Pápadereske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2125,
          name: 'Pápakovácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2126,
          name: 'Pápasalamon',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2127,
          name: 'Pápateszér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2128,
          name: 'Pápoc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2129,
          name: 'Páprád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2130,
          name: 'Pásztori',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2131,
          name: 'Pásztó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2132,
          name: 'Pátka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2133,
          name: 'Pátroha',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2134,
          name: 'Páty',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2135,
          name: 'Pátyod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2136,
          name: 'Pázmánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2137,
          name: 'Pázmándfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2138,
          name: 'Pécel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2139,
          name: 'Pécs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2140,
          name: 'Pécsbagota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2141,
          name: 'Pécsdevecser',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2142,
          name: 'Pécsely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2143,
          name: 'Pécsudvard',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2144,
          name: 'Pécsvárad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2145,
          name: 'Pély',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2146,
          name: 'Pénzesgyőr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2147,
          name: 'Pér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2148,
          name: 'Péterhida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2149,
          name: 'Péteri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2150,
          name: 'Pétervására',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2151,
          name: 'Pétfürdő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2152,
          name: 'Pócsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2153,
          name: 'Pócsmegyer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2154,
          name: 'Pócspetri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2155,
          name: 'Pókaszepetk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2156,
          name: 'Pórszombat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2157,
          name: 'Pósfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2158,
          name: 'Pölöske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2159,
          name: 'Pölöskefő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2160,
          name: 'Pörböly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2161,
          name: 'Pördefölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2162,
          name: 'Pötréte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2163,
          name: 'Püski',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2164,
          name: 'Püspökhatvan',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2165,
          name: 'Püspökladány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2166,
          name: 'Püspökmolnári',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2167,
          name: 'Püspökszilágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2168,
          name: 'Radostyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2169,
          name: 'Ragály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2170,
          name: 'Rajka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2171,
          name: 'Rakaca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2172,
          name: 'Rakacaszend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2173,
          name: 'Rakamaz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2174,
          name: 'Ramocsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2175,
          name: 'Ramocsaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2176,
          name: 'Raposka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2177,
          name: 'Ravazd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2178,
          name: 'Recsk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2179,
          name: 'Regenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2180,
          name: 'Regéc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2181,
          name: 'Regöly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2182,
          name: 'Remeteszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2183,
          name: 'Resznek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2184,
          name: 'Rezi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2185,
          name: 'Ricse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2186,
          name: 'Rigyác',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2187,
          name: 'Rigács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2188,
          name: 'Rimóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2189,
          name: 'Rinyabesenyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2190,
          name: 'Rinyakovácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2191,
          name: 'Rinyaszentkirály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2192,
          name: 'Rinyaújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2193,
          name: 'Rinyaújnép',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2194,
          name: 'Rohod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2195,
          name: 'Romhány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2196,
          name: 'Romonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2197,
          name: 'Románd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2198,
          name: 'Rozsály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2199,
          name: 'Rudabánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2200,
          name: 'Rudolftelep',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2201,
          name: 'Rum',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2202,
          name: 'Ruzsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2203,
          name: 'Rábacsanak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2204,
          name: 'Rábacsécsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2205,
          name: 'Rábagyarmat',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2206,
          name: 'Rábahídvég',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2207,
          name: 'Rábakecöl',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2208,
          name: 'Rábapatona',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2209,
          name: 'Rábapaty',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2210,
          name: 'Rábapordány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2211,
          name: 'Rábasebes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2212,
          name: 'Rábaszentandrás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2213,
          name: 'Rábaszentmihály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2214,
          name: 'Rábaszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2215,
          name: 'Rábatamási',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2216,
          name: 'Rábatöttös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2217,
          name: 'Rábcakapi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2218,
          name: 'Rácalmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2219,
          name: 'Ráckeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2220,
          name: 'Ráckeve',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2221,
          name: 'Rád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2222,
          name: 'Rádfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2223,
          name: 'Rádóckölked',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2224,
          name: 'Ráksi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2225,
          name: 'Rákóczibánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2226,
          name: 'Rákóczifalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2227,
          name: 'Rákócziújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2228,
          name: 'Rápolt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2229,
          name: 'Rásonysápberencs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2230,
          name: 'Rátka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2231,
          name: 'Rátót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2232,
          name: 'Réde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2233,
          name: 'Rédics',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2234,
          name: 'Rém',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2235,
          name: 'Répcelak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2236,
          name: 'Répceszemere',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2237,
          name: 'Répceszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2238,
          name: 'Répcevis',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2239,
          name: 'Répáshuta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2240,
          name: 'Rétalap',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2241,
          name: 'Rétközberencs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2242,
          name: 'Rétság',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2243,
          name: 'Révfülöp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2244,
          name: 'Révleányvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2245,
          name: 'Rózsafa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2246,
          name: 'Rózsaszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2247,
          name: 'Röjtökmuzsaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2248,
          name: 'Rönök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2249,
          name: 'Röszke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2250,
          name: 'Sajtoskál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2251,
          name: 'Sajóbábony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2252,
          name: 'Sajóecseg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2253,
          name: 'Sajógalgóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2254,
          name: 'Sajóhídvég',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2255,
          name: 'Sajóivánka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2256,
          name: 'Sajókaza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2257,
          name: 'Sajókeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2258,
          name: 'Sajókápolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2259,
          name: 'Sajólád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2260,
          name: 'Sajólászlófalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2261,
          name: 'Sajómercse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2262,
          name: 'Sajónémeti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2263,
          name: 'Sajópetri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2264,
          name: 'Sajópálfala',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2265,
          name: 'Sajópüspöki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2266,
          name: 'Sajósenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2267,
          name: 'Sajószentpéter',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2268,
          name: 'Sajószöged',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2269,
          name: 'Sajóvelezd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2270,
          name: 'Sajóvámos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2271,
          name: 'Sajóörös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2272,
          name: 'Salföld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2273,
          name: 'Salgótarján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2274,
          name: 'Salköveskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2275,
          name: 'Salomvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2276,
          name: 'Sand',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2277,
          name: 'Sarkad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2278,
          name: 'Sarkadkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2279,
          name: 'Sarród',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2280,
          name: 'Sarud',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2281,
          name: 'Segesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2282,
          name: 'Sellye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2283,
          name: 'Selyeb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2284,
          name: 'Semjén',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2285,
          name: 'Semjénháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2286,
          name: 'Seregélyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2287,
          name: 'Serényfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2288,
          name: 'Siklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2289,
          name: 'Siklósbodony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2290,
          name: 'Siklósnagyfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2291,
          name: 'Sikátor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2292,
          name: 'Sima',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2293,
          name: 'Simaság',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2294,
          name: 'Simonfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2295,
          name: 'Simontornya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2296,
          name: 'Sirok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2297,
          name: 'Sitke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2298,
          name: 'Sióagárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2299,
          name: 'Siófok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2300,
          name: 'Siójut',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2301,
          name: 'Sobor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2302,
          name: 'Sokorópátka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2303,
          name: 'Solt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2304,
          name: 'Soltszentimre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2305,
          name: 'Soltvadkert',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2306,
          name: 'Solymár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2307,
          name: 'Som',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2308,
          name: 'Somberek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2309,
          name: 'Somlójenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2310,
          name: 'Somlószőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2311,
          name: 'Somlóvecse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2312,
          name: 'Somlóvásárhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2313,
          name: 'Somodor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2314,
          name: 'Somogyacsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2315,
          name: 'Somogyapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2316,
          name: 'Somogyaracs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2317,
          name: 'Somogyaszaló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2318,
          name: 'Somogybabod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2319,
          name: 'Somogybükkösd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2320,
          name: 'Somogycsicsó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2321,
          name: 'Somogydöröcske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2322,
          name: 'Somogyegres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2323,
          name: 'Somogyfajsz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2324,
          name: 'Somogygeszti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2325,
          name: 'Somogyhatvan',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2326,
          name: 'Somogyhárságy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2327,
          name: 'Somogyjád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2328,
          name: 'Somogymeggyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2329,
          name: 'Somogysimonyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2330,
          name: 'Somogyszentpál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2331,
          name: 'Somogyszil',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2332,
          name: 'Somogyszob',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2333,
          name: 'Somogysámson',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2334,
          name: 'Somogysárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2335,
          name: 'Somogytúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2336,
          name: 'Somogyudvarhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2337,
          name: 'Somogyviszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2338,
          name: 'Somogyvámos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2339,
          name: 'Somogyvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2340,
          name: 'Somogyzsitfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2341,
          name: 'Sonkád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2342,
          name: 'Soponya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2343,
          name: 'Sopron',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2344,
          name: 'Sopronhorpács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2345,
          name: 'Sopronkövesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2346,
          name: 'Sopronnémeti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2347,
          name: 'Sorkifalud',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2348,
          name: 'Sorkikápolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2349,
          name: 'Sormás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2350,
          name: 'Sorokpolány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2351,
          name: 'Sukoró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2352,
          name: 'Sumony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2353,
          name: 'Surd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2354,
          name: 'Szabadbattyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2355,
          name: 'Szabadegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2356,
          name: 'Szabadhídvég',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2357,
          name: 'Szabadi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2358,
          name: 'Szabadkígyós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2359,
          name: 'Szabadszentkirály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2360,
          name: 'Szabadszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2361,
          name: 'Szabolcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2362,
          name: 'Szabolcsbáka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2363,
          name: 'Szabolcsveresmart',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2364,
          name: 'Szabás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2365,
          name: 'Szada',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2366,
          name: 'Szajk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2367,
          name: 'Szajla',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2368,
          name: 'Szajol',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2369,
          name: 'Szakadát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2370,
          name: 'Szakcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2371,
          name: 'Szakmár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2372,
          name: 'Szaknyér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2373,
          name: 'Szakoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2374,
          name: 'Szakony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2375,
          name: 'Szakonyfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2376,
          name: 'Szakácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2377,
          name: 'Szakáld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2378,
          name: 'Szakály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2379,
          name: 'Szalafő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2380,
          name: 'Szalapa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2381,
          name: 'Szalaszend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2382,
          name: 'Szalatnak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2383,
          name: 'Szalkszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2384,
          name: 'Szalmatercs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2385,
          name: 'Szalonna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2386,
          name: 'Szalánta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2387,
          name: 'Szamosangyalos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2388,
          name: 'Szamosbecs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2389,
          name: 'Szamoskér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2390,
          name: 'Szamosszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2391,
          name: 'Szamossályi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2392,
          name: 'Szamostatárfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2393,
          name: 'Szamosújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2394,
          name: 'Szanda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2395,
          name: 'Szank',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2396,
          name: 'Szany',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2397,
          name: 'Szaporca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2398,
          name: 'Szarvas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2399,
          name: 'Szarvasgede',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2400,
          name: 'Szarvaskend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2401,
          name: 'Szarvaskő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2402,
          name: 'Szatmárcseke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2403,
          name: 'Szatta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2404,
          name: 'Szatymaz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2405,
          name: 'Szava',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2406,
          name: 'Szebény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2407,
          name: 'Szederkény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2408,
          name: 'Szedres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2409,
          name: 'Szeged',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2410,
          name: 'Szegerdő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2411,
          name: 'Szeghalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2412,
          name: 'Szegi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2413,
          name: 'Szegilong',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2414,
          name: 'Szegvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2415,
          name: 'Szekszárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2416,
          name: 'Szeleste',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2417,
          name: 'Szelevény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2418,
          name: 'Szellő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2419,
          name: 'Szemely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2420,
          name: 'Szemenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2421,
          name: 'Szemere',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2422,
          name: 'Szendehely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2423,
          name: 'Szendrő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2424,
          name: 'Szendrőlád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2425,
          name: 'Szenna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2426,
          name: 'Szenta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2427,
          name: 'Szentantalfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2428,
          name: 'Szentbalázs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2429,
          name: 'Szentborbás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2430,
          name: 'Szentbékkálla',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2431,
          name: 'Szentdomonkos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2432,
          name: 'Szentdénes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2433,
          name: 'Szente',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2434,
          name: 'Szentegát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2435,
          name: 'Szentendre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2436,
          name: 'Szentes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2437,
          name: 'Szentgotthárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2438,
          name: 'Szentgyörgyvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2439,
          name: 'Szentgyörgyvölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2440,
          name: 'Szentgál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2441,
          name: 'Szentgáloskér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2442,
          name: 'Szentimrefalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2443,
          name: 'Szentistván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2444,
          name: 'Szentistvánbaksa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2445,
          name: 'Szentjakabfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2446,
          name: 'Szentkatalin',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2447,
          name: 'Szentkirály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2448,
          name: 'Szentkirályszabadja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2449,
          name: 'Szentkozmadombja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2450,
          name: 'Szentliszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2451,
          name: 'Szentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2452,
          name: 'Szentlőrinc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2453,
          name: 'Szentlőrinckáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2454,
          name: 'Szentmargitfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2455,
          name: 'Szentmártonkáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2456,
          name: 'Szentpéterfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2457,
          name: 'Szentpéterfölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2458,
          name: 'Szentpéterszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2459,
          name: 'Szentpéterúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2460,
          name: 'Szenyér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2461,
          name: 'Szepetnek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2462,
          name: 'Szerecseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2463,
          name: 'Szeremle',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2464,
          name: 'Szerencs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2465,
          name: 'Szerep',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2466,
          name: 'Szergény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2467,
          name: 'Szigetbecse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2468,
          name: 'Szigetcsép',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2469,
          name: 'Szigethalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2470,
          name: 'Szigetmonostor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2471,
          name: 'Szigetszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2472,
          name: 'Szigetszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2473,
          name: 'Szigetvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2474,
          name: 'Szigetújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2475,
          name: 'Szigliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2476,
          name: 'Szihalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2477,
          name: 'Szijártóháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2478,
          name: 'Szikszó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2479,
          name: 'Szil',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2480,
          name: 'Szilaspogony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2481,
          name: 'Szilsárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2482,
          name: 'Szilvágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2483,
          name: 'Szilvás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2484,
          name: 'Szilvásszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2485,
          name: 'Szilvásvárad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2486,
          name: 'Szilágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2487,
          name: 'Szin',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2488,
          name: 'Szinpetri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2489,
          name: 'Szirmabesenyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2490,
          name: 'Szirák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2491,
          name: 'Szob',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2492,
          name: 'Szokolya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2493,
          name: 'Szolnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2494,
          name: 'Szombathely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2495,
          name: 'Szomolya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2496,
          name: 'Szomor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2497,
          name: 'Szomód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2498,
          name: 'Szorgalmatos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2499,
          name: 'Szorosad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2500,
          name: 'Szuha',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2501,
          name: 'Szuhafő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2502,
          name: 'Szuhakálló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2503,
          name: 'Szuhogy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2504,
          name: 'Szulimán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2505,
          name: 'Szulok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2506,
          name: 'Szurdokpüspöki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2507,
          name: 'Szágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2508,
          name: 'Szákszend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2509,
          name: 'Szálka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2510,
          name: 'Szántód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2511,
          name: 'Szápár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2512,
          name: 'Szár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2513,
          name: 'Szárazd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2514,
          name: 'Szárföld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2515,
          name: 'Szárliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2516,
          name: 'Szárász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2517,
          name: 'Szászberek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2518,
          name: 'Szászfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2519,
          name: 'Szászvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2520,
          name: 'Szátok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2521,
          name: 'Százhalombatta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2522,
          name: 'Szécsisziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2523,
          name: 'Szécsénke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2524,
          name: 'Szécsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2525,
          name: 'Szécsényfelfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2526,
          name: 'Székely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2527,
          name: 'Székelyszabar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2528,
          name: 'Székesfehérvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2529,
          name: 'Székkutas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2530,
          name: 'Szólád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2531,
          name: 'Szögliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2532,
          name: 'Szörény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2533,
          name: 'Szúcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2534,
          name: 'Szügy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2535,
          name: 'Szőc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2536,
          name: 'Szőce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2537,
          name: 'Sződ',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2538,
          name: 'Sződliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2539,
          name: 'Szőke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2540,
          name: 'Szőkedencs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2541,
          name: 'Szőkéd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2542,
          name: 'Szőlősardó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2543,
          name: 'Szőlősgyörök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2544,
          name: 'Szűcsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2545,
          name: 'Szűr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2546,
          name: 'Ságvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2547,
          name: 'Ságújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2548,
          name: 'Sály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2549,
          name: 'Sámod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2550,
          name: 'Sámsonháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2551,
          name: 'Sándorfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2552,
          name: 'Sántos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2553,
          name: 'Sáp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2554,
          name: 'Sárazsadány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2555,
          name: 'Sárbogárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2556,
          name: 'Sáregres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2557,
          name: 'Sárfimizdó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2558,
          name: 'Sárhida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2559,
          name: 'Sárisáp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2560,
          name: 'Sárkeresztes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2561,
          name: 'Sárkeresztúr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2562,
          name: 'Sárkeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2563,
          name: 'Sármellék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2564,
          name: 'Sárok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2565,
          name: 'Sárosd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2566,
          name: 'Sárospatak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2567,
          name: 'Sárpilis',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2568,
          name: 'Sárrétudvari',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2569,
          name: 'Sárszentlőrinc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2570,
          name: 'Sárszentmihály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2571,
          name: 'Sárszentágota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2572,
          name: 'Sárvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2573,
          name: 'Sáránd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2574,
          name: 'Sásd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2575,
          name: 'Sáska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2576,
          name: 'Sáta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2577,
          name: 'Sátoraljaújhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2578,
          name: 'Sátorhely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2579,
          name: 'Sávoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2580,
          name: 'Sé',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2581,
          name: 'Sénye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2582,
          name: 'Sényő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2583,
          name: 'Sérsekszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2584,
          name: 'Sóly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2585,
          name: 'Sóshartyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2586,
          name: 'Sóskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2587,
          name: 'Sóstófalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2588,
          name: 'Sósvertike',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2589,
          name: 'Sótony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2590,
          name: 'Söjtör',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2591,
          name: 'Söpte',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2592,
          name: 'Söréd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2593,
          name: 'Súr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2594,
          name: 'Sükösd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2595,
          name: 'Sülysáp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2596,
          name: 'Sümeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2597,
          name: 'Sümegcsehi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2598,
          name: 'Sümegprága',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2599,
          name: 'Süttő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2600,
          name: 'Tab',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2601,
          name: 'Tabajd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2602,
          name: 'Tabdi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2603,
          name: 'Tagyon',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2604,
          name: 'Tahitótfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2605,
          name: 'Taksony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2606,
          name: 'Taktabáj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2607,
          name: 'Taktaharkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2608,
          name: 'Taktakenéz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2609,
          name: 'Taktaszada',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2610,
          name: 'Takácsi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2611,
          name: 'Taliándörögd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2612,
          name: 'Tamási',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2613,
          name: 'Tanakajd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2614,
          name: 'Tapolca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2615,
          name: 'Tapsony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2616,
          name: 'Tar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2617,
          name: 'Tarany',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2618,
          name: 'Tarcal',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2619,
          name: 'Tard',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2620,
          name: 'Tardona',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2621,
          name: 'Tardos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2622,
          name: 'Tarhos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2623,
          name: 'Tarján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2624,
          name: 'Tarjánpuszta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2625,
          name: 'Tarnabod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2626,
          name: 'Tarnalelesz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2627,
          name: 'Tarnaméra',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2628,
          name: 'Tarnaszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2629,
          name: 'Tarnaszentmária',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2630,
          name: 'Tarnazsadány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2631,
          name: 'Tarnaörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2632,
          name: 'Tarpa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2633,
          name: 'Tarrós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2634,
          name: 'Tass',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2635,
          name: 'Taszár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2636,
          name: 'Tata',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2637,
          name: 'Tatabánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2638,
          name: 'Tataháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2639,
          name: 'Tatárszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2640,
          name: 'Teklafalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2641,
          name: 'Telekes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2642,
          name: 'Telekgerendás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2643,
          name: 'Teleki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2644,
          name: 'Telki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2645,
          name: 'Telkibánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2646,
          name: 'Tengelic',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2647,
          name: 'Tengeri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2648,
          name: 'Tengőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2649,
          name: 'Tenk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2650,
          name: 'Terem',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2651,
          name: 'Tereske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2652,
          name: 'Teresztenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2653,
          name: 'Terpes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2654,
          name: 'Terény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2655,
          name: 'Teskánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2656,
          name: 'Tetétlen',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2657,
          name: 'Tevel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2658,
          name: 'Tibolddaróc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2659,
          name: 'Tiborszállás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2660,
          name: 'Tihany',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2661,
          name: 'Tikos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2662,
          name: 'Tilaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2663,
          name: 'Timár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2664,
          name: 'Tinnye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2665,
          name: 'Tiszaadony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2666,
          name: 'Tiszaalpár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2667,
          name: 'Tiszabecs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2668,
          name: 'Tiszabercel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2669,
          name: 'Tiszabezdéd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2670,
          name: 'Tiszabura',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2671,
          name: 'Tiszabábolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2672,
          name: 'Tiszabő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2673,
          name: 'Tiszacsege',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2674,
          name: 'Tiszacsermely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2675,
          name: 'Tiszacsécse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2676,
          name: 'Tiszadada',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2677,
          name: 'Tiszaderzs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2678,
          name: 'Tiszadob',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2679,
          name: 'Tiszadorogma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2680,
          name: 'Tiszaeszlár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2681,
          name: 'Tiszaföldvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2682,
          name: 'Tiszafüred',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2683,
          name: 'Tiszagyenda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2684,
          name: 'Tiszagyulaháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2685,
          name: 'Tiszaigar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2686,
          name: 'Tiszainoka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2687,
          name: 'Tiszajenő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2688,
          name: 'Tiszakanyár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2689,
          name: 'Tiszakarád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2690,
          name: 'Tiszakerecseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2691,
          name: 'Tiszakeszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2692,
          name: 'Tiszakécske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2693,
          name: 'Tiszakóród',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2694,
          name: 'Tiszakürt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2695,
          name: 'Tiszaladány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2696,
          name: 'Tiszalök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2697,
          name: 'Tiszalúc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2698,
          name: 'Tiszamogyorós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2699,
          name: 'Tiszanagyfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2700,
          name: 'Tiszanána',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2701,
          name: 'Tiszapalkonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2702,
          name: 'Tiszapüspöki',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2703,
          name: 'Tiszaroff',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2704,
          name: 'Tiszarád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2705,
          name: 'Tiszasas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2706,
          name: 'Tiszaszalka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2707,
          name: 'Tiszaszentimre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2708,
          name: 'Tiszaszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2709,
          name: 'Tiszasziget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2710,
          name: 'Tiszaszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2711,
          name: 'Tiszasüly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2712,
          name: 'Tiszatardos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2713,
          name: 'Tiszatarján',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2714,
          name: 'Tiszatelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2715,
          name: 'Tiszatenyő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2716,
          name: 'Tiszaug',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2717,
          name: 'Tiszavalk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2718,
          name: 'Tiszavasvári',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2719,
          name: 'Tiszavid',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2720,
          name: 'Tiszavárkony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2721,
          name: 'Tiszaörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2722,
          name: 'Tiszaújváros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2723,
          name: 'Tisztaberek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2724,
          name: 'Tivadar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2725,
          name: 'Tokaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2726,
          name: 'Tokod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2727,
          name: 'Tokodaltáró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2728,
          name: 'Tokorcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2729,
          name: 'Tolcsva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2730,
          name: 'Told',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2731,
          name: 'Tolmács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2732,
          name: 'Tolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2733,
          name: 'Tolnanémedi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2734,
          name: 'Tomajmonostora',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2735,
          name: 'Tomor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2736,
          name: 'Tompa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2737,
          name: 'Tompaládony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2738,
          name: 'Tordas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2739,
          name: 'Tormafölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2740,
          name: 'Tormás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2741,
          name: 'Tormásliget',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2742,
          name: 'Tornabarakony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2743,
          name: 'Tornakápolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2744,
          name: 'Tornanádaska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2745,
          name: 'Tornaszentandrás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2746,
          name: 'Tornaszentjakab',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2747,
          name: 'Tornyiszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2748,
          name: 'Tornyosnémeti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2749,
          name: 'Tornyospálca',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2750,
          name: 'Torony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2751,
          name: 'Torvaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2752,
          name: 'Trizs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2753,
          name: 'Tunyogmatolcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2754,
          name: 'Tura',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2755,
          name: 'Tuzsér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2756,
          name: 'Tyukod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2757,
          name: 'Táborfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2758,
          name: 'Tác',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2759,
          name: 'Tákos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2760,
          name: 'Tállya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2761,
          name: 'Táp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2762,
          name: 'Tápióbicske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2763,
          name: 'Tápiógyörgye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2764,
          name: 'Tápiószecső',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2765,
          name: 'Tápiószele',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2766,
          name: 'Tápiószentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2767,
          name: 'Tápiószőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2768,
          name: 'Tápióság',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2769,
          name: 'Táplánszentkereszt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2770,
          name: 'Tápszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2771,
          name: 'Tárkány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2772,
          name: 'Tárnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2773,
          name: 'Tárnokréti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2774,
          name: 'Táska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2775,
          name: 'Tát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2776,
          name: 'Tázlár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2777,
          name: 'Téglás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2778,
          name: 'Tékes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2779,
          name: 'Tényő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2780,
          name: 'Tépe',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2781,
          name: 'Tés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2782,
          name: 'Tésa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2783,
          name: 'Tésenfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2784,
          name: 'Téseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2785,
          name: 'Tét',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2786,
          name: 'Tóalmás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2787,
          name: 'Tófalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2788,
          name: 'Tófej',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2789,
          name: 'Tófű',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2790,
          name: 'Tószeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2791,
          name: 'Tótkomlós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2792,
          name: 'Tótszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2793,
          name: 'Tótszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2794,
          name: 'Tótszerdahely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2795,
          name: 'Tótvázsony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2796,
          name: 'Tótújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2797,
          name: 'Tök',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2798,
          name: 'Tököl',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2799,
          name: 'Töltéstava',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2800,
          name: 'Tömörd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2801,
          name: 'Tömörkény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2802,
          name: 'Törtel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2803,
          name: 'Törökbálint',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2804,
          name: 'Törökkoppány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2805,
          name: 'Törökszentmiklós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2806,
          name: 'Töttös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2807,
          name: 'Túristvándi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2808,
          name: 'Túrkeve',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2809,
          name: 'Túrony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2810,
          name: 'Túrricse',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2811,
          name: 'Türje',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2812,
          name: 'Tüskevár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2813,
          name: 'Udvar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2814,
          name: 'Udvari',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2815,
          name: 'Ugod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2816,
          name: 'Ukk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2817,
          name: 'Und',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2818,
          name: 'Uppony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2819,
          name: 'Ura',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2820,
          name: 'Uraiújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2821,
          name: 'Uszka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2822,
          name: 'Uszód',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2823,
          name: 'Uzsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2824,
          name: 'Vadna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2825,
          name: 'Vadosfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2826,
          name: 'Vaja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2827,
          name: 'Vajdácska',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2828,
          name: 'Vajszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2829,
          name: 'Vajta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2830,
          name: 'Valkonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2831,
          name: 'Valkó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2832,
          name: 'Vanyarc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2833,
          name: 'Vanyola',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2834,
          name: 'Varbó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2835,
          name: 'Varbóc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2836,
          name: 'Varga',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2837,
          name: 'Varsád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2838,
          name: 'Varsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2839,
          name: 'Varászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2840,
          name: 'Vasad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2841,
          name: 'Vasalja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2842,
          name: 'Vasasszonyfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2843,
          name: 'Vasboldogasszony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2844,
          name: 'Vasegerszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2845,
          name: 'Vashosszúfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2846,
          name: 'Vaskeresztes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2847,
          name: 'Vaskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2848,
          name: 'Vasmegyer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2849,
          name: 'Vaspör',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2850,
          name: 'Vassurány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2851,
          name: 'Vasszentmihály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2852,
          name: 'Vasszilvágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2853,
          name: 'Vasszécseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2854,
          name: 'Vasvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2855,
          name: 'Vaszar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2856,
          name: 'Vatta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2857,
          name: 'Vecsés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2858,
          name: 'Vejti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2859,
          name: 'Vekerd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2860,
          name: 'Velem',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2861,
          name: 'Velemér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2862,
          name: 'Velence',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2863,
          name: 'Velény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2864,
          name: 'Vereb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2865,
          name: 'Veresegyház',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2866,
          name: 'Verpelét',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2867,
          name: 'Verseg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2868,
          name: 'Versend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2869,
          name: 'Verőce',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2870,
          name: 'Veszkény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2871,
          name: 'Veszprém',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2872,
          name: 'Veszprémfajsz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2873,
          name: 'Veszprémgalsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2874,
          name: 'Veszprémvarsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2875,
          name: 'Vezseny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2876,
          name: 'Vid',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2877,
          name: 'Vigántpetend',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2878,
          name: 'Villány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2879,
          name: 'Villánykövesd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2880,
          name: 'Vilmány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2881,
          name: 'Vilonya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2882,
          name: 'Vilyvitány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2883,
          name: 'Vindornyafok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2884,
          name: 'Vindornyalak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2885,
          name: 'Vindornyaszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2886,
          name: 'Vinár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2887,
          name: 'Visegrád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2888,
          name: 'Visnye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2889,
          name: 'Visonta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2890,
          name: 'Viss',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2891,
          name: 'Visz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2892,
          name: 'Viszló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2893,
          name: 'Visznek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2894,
          name: 'Viszák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2895,
          name: 'Vitnyéd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2896,
          name: 'Vizslás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2897,
          name: 'Vizsoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2898,
          name: 'Vokány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2899,
          name: 'Vonyarcvashegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2900,
          name: 'Vác',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2901,
          name: 'Vácduka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2902,
          name: 'Vácegres',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2903,
          name: 'Váchartyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2904,
          name: 'Váckisújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2905,
          name: 'Vácrátót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2906,
          name: 'Vácszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2907,
          name: 'Vág',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2908,
          name: 'Vágáshuta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2909,
          name: 'Vál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2910,
          name: 'Vállaj',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2911,
          name: 'Vállus',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2912,
          name: 'Vámosatya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2913,
          name: 'Vámoscsalád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2914,
          name: 'Vámosgyörk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2915,
          name: 'Vámosmikola',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2916,
          name: 'Vámosoroszi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2917,
          name: 'Vámospércs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2918,
          name: 'Vámosszabadi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2919,
          name: 'Vámosújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2920,
          name: 'Váncsod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2921,
          name: 'Várad',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2922,
          name: 'Váralja',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2923,
          name: 'Váraszó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2924,
          name: 'Várbalog',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2925,
          name: 'Várda',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2926,
          name: 'Várdomb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2927,
          name: 'Várfölde',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2928,
          name: 'Várgesztes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2929,
          name: 'Várkesző',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2930,
          name: 'Várong',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2931,
          name: 'Városföld',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2932,
          name: 'Városlőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2933,
          name: 'Várpalota',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2934,
          name: 'Várvölgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2935,
          name: 'Vászoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2936,
          name: 'Vásárosbéc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2937,
          name: 'Vásárosdombó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2938,
          name: 'Vásárosfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2939,
          name: 'Vásárosmiske',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2940,
          name: 'Vásárosnamény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2941,
          name: 'Vát',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2942,
          name: 'Vázsnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2943,
          name: 'Vécs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2944,
          name: 'Végegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2945,
          name: 'Vékény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2946,
          name: 'Véménd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2947,
          name: 'Vének',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2948,
          name: 'Vép',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2949,
          name: 'Vértesacsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2950,
          name: 'Vértesboglár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2951,
          name: 'Vérteskethely',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2952,
          name: 'Vértessomló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2953,
          name: 'Vértesszőlős',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2954,
          name: 'Vértestolna',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2955,
          name: 'Vése',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2956,
          name: 'Vésztő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2957,
          name: 'Vízvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2958,
          name: 'Vöckönd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2959,
          name: 'Völcsej',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2960,
          name: 'Vönöck',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2961,
          name: 'Vörs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2962,
          name: 'Vöröstó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2963,
          name: 'Zabar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2964,
          name: 'Zagyvarékas',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2965,
          name: 'Zagyvaszántó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2966,
          name: 'Zajk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2967,
          name: 'Zajta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2968,
          name: 'Zala',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2969,
          name: 'Zalaapáti',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2970,
          name: 'Zalabaksa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2971,
          name: 'Zalaboldogfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2972,
          name: 'Zalabér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2973,
          name: 'Zalacsány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2974,
          name: 'Zalacséb',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2975,
          name: 'Zalaegerszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2976,
          name: 'Zalaerdőd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2977,
          name: 'Zalagyömörő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2978,
          name: 'Zalahaláp',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2979,
          name: 'Zalaháshágy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2980,
          name: 'Zalaigrice',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2981,
          name: 'Zalaistvánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2982,
          name: 'Zalakaros',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2983,
          name: 'Zalakomár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2984,
          name: 'Zalaköveskút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2985,
          name: 'Zalalövő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2986,
          name: 'Zalameggyes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2987,
          name: 'Zalamerenye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2988,
          name: 'Zalaszabar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2989,
          name: 'Zalaszegvár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2990,
          name: 'Zalaszentbalázs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2991,
          name: 'Zalaszentgrót',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2992,
          name: 'Zalaszentgyörgy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2993,
          name: 'Zalaszentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2994,
          name: 'Zalaszentjakab',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2995,
          name: 'Zalaszentlászló',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2996,
          name: 'Zalaszentlőrinc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2997,
          name: 'Zalaszentmihály',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2998,
          name: 'Zalaszentmárton',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 2999,
          name: 'Zalaszombatfa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3000,
          name: 'Zalaszántó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3001,
          name: 'Zalasárszeg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3002,
          name: 'Zalatárnok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3003,
          name: 'Zalavár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3004,
          name: 'Zalavég',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3005,
          name: 'Zalaújlak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3006,
          name: 'Zalkod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3007,
          name: 'Zaláta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3008,
          name: 'Zamárdi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3009,
          name: 'Zaránk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3010,
          name: 'Zebecke',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3011,
          name: 'Zebegény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3012,
          name: 'Zemplénagárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3013,
          name: 'Zengővárkony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3014,
          name: 'Zichyújfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3015,
          name: 'Zics',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3016,
          name: 'Ziliz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3017,
          name: 'Zimány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3018,
          name: 'Zirc',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3019,
          name: 'Zomba',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3020,
          name: 'Zsadány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3021,
          name: 'Zsana',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3022,
          name: 'Zsarolyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3023,
          name: 'Zsebeháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3024,
          name: 'Zselickisfalud',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3025,
          name: 'Zselickislak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3026,
          name: 'Zselicszentpál',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3027,
          name: 'Zsennye',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3028,
          name: 'Zsira',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3029,
          name: 'Zsombó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3030,
          name: 'Zsujta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3031,
          name: 'Zsurk',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3032,
          name: 'Zsáka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3033,
          name: 'Zsámbok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3034,
          name: 'Zsámbék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3035,
          name: 'Zsédeny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3036,
          name: 'Zubogy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3037,
          name: 'Zádor',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3038,
          name: 'Zádorfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3039,
          name: 'Záhony',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3040,
          name: 'Zákány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3041,
          name: 'Zákányfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3042,
          name: 'Zákányszék',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3043,
          name: 'Zámoly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3044,
          name: 'Zánka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3045,
          name: 'Závod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3046,
          name: 'Zók',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3047,
          name: 'Ábrahámhegy',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3048,
          name: 'Ács',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3049,
          name: 'Ácsteszér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3050,
          name: 'Ádánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3051,
          name: 'Ág',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3052,
          name: 'Ágasegyháza',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3053,
          name: 'Ágfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3054,
          name: 'Álmosd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3055,
          name: 'Áporka',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3056,
          name: 'Ároktő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3057,
          name: 'Árpádhalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3058,
          name: 'Árpás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3059,
          name: 'Ártánd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3060,
          name: 'Ásotthalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3061,
          name: 'Ásványráró',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3062,
          name: 'Ászár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3063,
          name: 'Áta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3064,
          name: 'Átány',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3065,
          name: 'Écs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3066,
          name: 'Égerszög',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3067,
          name: 'Érd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3068,
          name: 'Érpatak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3069,
          name: 'Érsekcsanád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3070,
          name: 'Érsekhalma',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3071,
          name: 'Érsekvadkert',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3072,
          name: 'Értény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3073,
          name: 'Óbudavár',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3074,
          name: 'Óbánya',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3075,
          name: 'Ócsa',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3076,
          name: 'Ócsárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3077,
          name: 'Ófalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3078,
          name: 'Ófehértó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3079,
          name: 'Óföldeák',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3080,
          name: 'Óhíd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3081,
          name: 'Ólmod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3082,
          name: 'Ónod',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3083,
          name: 'Ópusztaszer',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3084,
          name: 'Ópályi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3085,
          name: 'Ózd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3086,
          name: 'Ózdfalu',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3087,
          name: 'Öcs',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3088,
          name: 'Öcsöd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3089,
          name: 'Ököritófülpös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3090,
          name: 'Ölbő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3091,
          name: 'Ömböly',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3092,
          name: 'Öregcsertő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3093,
          name: 'Öreglak',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3094,
          name: 'Örkény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3095,
          name: 'Örményes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3096,
          name: 'Örménykút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3097,
          name: 'Örvényes',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3098,
          name: 'Öskü',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3099,
          name: 'Öttevény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3100,
          name: 'Öttömös',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3101,
          name: 'Ötvöskónyi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3102,
          name: 'Újbarok',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3103,
          name: 'Újcsanálos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3104,
          name: 'Újdombrád',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3105,
          name: 'Újfehértó',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3106,
          name: 'Újhartyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3107,
          name: 'Újireg',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3108,
          name: 'Újiráz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3109,
          name: 'Újkenéz',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3110,
          name: 'Újkér',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3111,
          name: 'Újkígyós',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3112,
          name: 'Újlengyel',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3113,
          name: 'Újléta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3114,
          name: 'Újlőrincfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3115,
          name: 'Újpetre',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3116,
          name: 'Újrónafő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3117,
          name: 'Újsolt',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3118,
          name: 'Újszalonta',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3119,
          name: 'Újszentiván',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3120,
          name: 'Újszentmargita',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3121,
          name: 'Újszilvás',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3122,
          name: 'Újszász',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3123,
          name: 'Újtelek',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3124,
          name: 'Újtikos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3125,
          name: 'Újudvar',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3126,
          name: 'Újvárfalva',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3127,
          name: 'Úny',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3128,
          name: 'Úrhida',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3129,
          name: 'Úri',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3130,
          name: 'Úrkút',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3131,
          name: 'Üllés',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3132,
          name: 'Üllő',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3133,
          name: 'Üröm',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3134,
          name: 'Őcsény',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3135,
          name: 'Őr',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3136,
          name: 'Őrbottyán',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3137,
          name: 'Őrhalom',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3138,
          name: 'Őrimagyarósd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3139,
          name: 'Őriszentpéter',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3140,
          name: 'Őrtilos',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3141,
          name: 'Ősagárd',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        },
        {
          id: 3142,
          name: 'Ősi',
          countryId: 98,
          countryName: 'Hungary', countryShortName: 'HU'
        }
      ]
    });
  });
});
