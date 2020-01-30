const authenticateUserByCookie = require('./authenticateUserByCookie');
const getAllAddresses = require('./getAllAddresses');
const filterAddresses = require('./filterAddresses');
const getAllCities = require('./getAllCities');
const getAllCountries = require('./getAllCountries');
const loginUser = require('./loginUser');

module.exports = {
  authenticateUserByCookie,
  getAllAddresses,
  getAllCities,
  getAllCountries,
  loginUser,
  filterAddresses
};
