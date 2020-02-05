const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const cors = require('cors');
const APIFactory = globalRequire('api');
const { EMiddlewareMethod, ERoute, EOrchestratorMethod } = globalRequire(
  'common/enums'
);
const { CSession, CStatusCode } = globalRequire('common/constants');

module.exports = {
  start: async ({ config, logger, middlewares, orchestrator }) => {
    const app = express();
    app.use(bodyParser.json());
    app.use(cookieParser());
    //app.use(cors());

    APIFactory.createSingleton({
      CSession,
      CStatusCode,
      EMiddlewareMethod,
      EOrchestratorMethod,
      ERoute,
      Router: express.Router,
      app,
      logger,
      middlewares,
      orchestrator
    })
      .createRouter({
        path: config.get('api.addresses'),
        routeName: ERoute.ROUTE_ADDRESSES
      })
      .createRouter({
        path: config.get('api.cities'),
        routeName: ERoute.ROUTE_CITIES
      })
      .createRouter({
        path: config.get('api.countries'),
        routeName: ERoute.ROUTE_COUNTRIES
      })
      .createRouter({
        path: config.get('api.entityNames'),
        routeName: ERoute.ROUTE_ENTITY_NAMES
      })
      .createRouter({
        path: config.get('api.naturalPeople'),
        routeName: ERoute.ROUTE_NATURAL_PEOPLE
      })
      .createRouter({
        path: config.get('api.users'),
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
