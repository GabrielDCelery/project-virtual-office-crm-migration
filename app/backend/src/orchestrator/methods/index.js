const addresses = require('./addresses');
const cities = require('./cities');
const countries = require('./countries');
const entityNames = require('./entityNames');
const legalEntities = require('./legalEntities');
const naturalPeople = require('./naturalPeople');
const users = require('./users');

module.exports = {
  ...addresses,
  ...cities,
  ...countries,
  ...entityNames,
  ...legalEntities,
  ...naturalPeople,
  ...users
};
