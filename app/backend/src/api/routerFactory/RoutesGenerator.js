const express = require('express');
const { APIResultWrapper } = require('../utils');

module.exports = class RoutesGenerator {
  createRouter({ middlewares, orchestrator }) {
    return this._createRouter({
      router: express.Router(),
      resWrapper: new APIResultWrapper(),
      middlewares,
      orchestrator
    });
  }
};
