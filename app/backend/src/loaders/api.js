const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const cors = require('cors');
const config = globalRequire('config');
const APIFactory = globalRequire('api');
const { ERoute, EOrchestratorMethod } = globalRequire('common/enums');
const { CStatusCode } = globalRequire('common/constants');

module.exports = {
  start: async ({ middlewares, orchestrator }) => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cookieParser());
    //app.use(cors());

    APIFactory.createSingleton({
      CStatusCode,
      EOrchestratorMethod,
      ERoute,
      Router: express.Router,
      app,
      middlewares,
      orchestrator
    })
      .createRouter({
        path: config.get('api.routerPathPrefix.addresses'),
        routeName: ERoute.ROUTE_ADDRESSES
      })
      .createRouter({
        path: config.get('api.routerPathPrefix.cities'),
        routeName: ERoute.ROUTE_CITIES
      })
      .createRouter({
        path: config.get('api.routerPathPrefix.countries'),
        routeName: ERoute.ROUTE_COUNTRIES
      })
      .createRouter({
        path: config.get('api.routerPathPrefix.users'),
        routeName: ERoute.ROUTE_USERS
      });

    // Path for performing health check on the service
    app.get('/health', (req, res) => {
      res.status(200);
      res.send('OK');
    });

    return app;
  },
  stop: async () => {}
};
