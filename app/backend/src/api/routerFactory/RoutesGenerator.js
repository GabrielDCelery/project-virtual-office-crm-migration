const express = require('express');

module.exports = class RoutesGenerator {
  createRouter({ middlewares, orchestrator }) {
    return this._createRouter({
      router: express.Router(),
      middlewares,
      orchestrator
    });
  }
};
