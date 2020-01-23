const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const api = globalRequire('api');
const config = globalRequire('config');
const helpers = globalRequire('helpers');

module.exports = {
  start: async ({ app, middlewares, orchestrator, Router }) => {
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(cors());

    const {
      addresses,
      cities,
      countries,
      legalEntities,
      mailSenderNames,
      mailSenders,
      mailSubjects,
      mails,
      mailsPendingActions,
      users
    } = api;

    app.use(
      config.api.routerPathPrefix.addresses,
      addresses({ Router, helpers, orchestrator })
    );
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
    app.use(
      config.api.routerPathPrefix.users,
      users({ Router, helpers, orchestrator })
    );

    // Path for performing health check on the service
    app.get('/health', (req, res) => {
      res.status(200);
      res.send('OK');
    });
  },
  stop: async () => {}
};
