const authenticateUserByCookie = require('./authenticateUserByCookie');
const createAddress = require('./createAddress');
const createNaturalPerson = require('./createNaturalPerson');
const filterAddresses = require('./filterAddresses');
const filterCities = require('./filterCities');
const filterCountries = require('./filterCountries');
const filterNaturalPeople = require('./filterNaturalPeople');
const getAllAddresses = require('./getAllAddresses');
const getAllCities = require('./getAllCities');
const getAllCountries = require('./getAllCountries');
const loginUser = require('./loginUser');
const filterEntityNames = require('./filterEntityNames');
const createEntityName = require('./createEntityName');

module.exports = {
  authenticateUserByCookie,
  createAddress,
  createNaturalPerson,
  filterAddresses,
  filterCities,
  filterCountries,
  filterNaturalPeople,
  getAllAddresses,
  getAllCities,
  getAllCountries,
  loginUser,
  filterEntityNames,
  createEntityName
};
