const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = globalRequire('config');
const routerFactory = globalRequire('api/routerFactory');
const { ERouter } = globalRequire('common/enums');
const { ROUTER_ADDRESSES, ROUTER_USERS } = ERouter;

module.exports = {
  start: async ({ middlewares, orchestrator }) => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cookieParser());
    //app.use(cors());

    app.use(
      config.get('api.routerPathPrefix.addresses'),
      routerFactory.createRouter({
        routerClassName: ROUTER_ADDRESSES,
        middlewares,
        orchestrator
      })
    );
    /*
    app.use(
      config.api.routerPathPrefix.cities,
      cities({ Router, helpers, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.countries,
      countries({ Router, helpers, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.legalEntities,
      legalEntities({ Router, helpers, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.mails,
      mails({ Router, helpers, middlewares, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.mailSenders,
      mailSenders({ Router, helpers, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.mailSenderNames,
      mailSenderNames({ Router, helpers, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.mailSubjects,
      mailSubjects({ Router, helpers, orchestrator })
    );
    app.use(
      config.api.routerPathPrefix.mailsPendingActions,
      mailsPendingActions({ Router, helpers, orchestrator })
    );
    */
    app.use(
      config.get('api.routerPathPrefix.users'),
      routerFactory.createRouter({
        routerClassName: ROUTER_USERS,
        middlewares,
        orchestrator
      })
    );

    // Path for performing health check on the service
    app.get('/health', (req, res) => {
      res.status(200);
      res.send('OK');
    });

    return app;
  },
  stop: async () => {}
};
