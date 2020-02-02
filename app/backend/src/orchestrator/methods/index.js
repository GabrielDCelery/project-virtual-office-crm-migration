const authenticateUserByCookie = require('./authenticateUserByCookie');
const createAddress = require('./createAddress');
const filterAddresses = require('./filterAddresses');
const filterCities = require('./filterCities');
const filterCountries = require('./filterCountries');
const getAllAddresses = require('./getAllAddresses');
const getAllCities = require('./getAllCities');
const getAllCountries = require('./getAllCountries');
const loginUser = require('./loginUser');

module.exports = {
  authenticateUserByCookie,
  createAddress,
  filterAddresses,
  filterCities,
  filterCountries,
  getAllAddresses,
  getAllCities,
  getAllCountries,
  loginUser
};
