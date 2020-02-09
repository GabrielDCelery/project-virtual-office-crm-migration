import addresses from './addresses';
import countries from './countries';
import cities from './cities';
import legalEntities from './legalEntities';
import naturalPeople from './naturalPeople';
import users from './users';

const wrapAPICall = method => {
  return async argsObj => {
    try {
      return {
        success: true,
        error: null,
        payload: await method(argsObj)
      };
    } catch (error) {
      return {
        success: false,
        error,
        payload: null
      };
    }
  };
};

export default {
  addresses: {
    create: wrapAPICall(addresses.create),
    getAll: wrapAPICall(addresses.getAll),
    filter: wrapAPICall(addresses.filter)
  },
  cities: {
    getAll: wrapAPICall(cities.getAll),
    filter: wrapAPICall(cities.filter)
  },
  countries: {
    getAll: wrapAPICall(countries.getAll),
    filter: wrapAPICall(countries.filter)
  },
  legalEntities: {
    filter: wrapAPICall(legalEntities.filter)
  },
  naturalPeople: {
    create: wrapAPICall(naturalPeople.create),
    filter: wrapAPICall(naturalPeople.filter)
  },
  users: {
    authenticateByCookie: wrapAPICall(users.authenticateByCookie),
    login: wrapAPICall(users.login),
    logout: wrapAPICall(users.logout)
  }
};
