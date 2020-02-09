let singleton = null;

class APIFactory {
  constructor({
    CSession,
    CStatusCode,
    EMiddlewareMethod,
    EOrchestratorMethod,
    ERoute,
    Router,
    app,
    logger,
    middlewares,
    orchestrator
  }) {
    this.app = app;
    this.Router = Router;
    this.routeDependencies = {
      CSession,
      CStatusCode,
      EMiddlewareMethod,
      EOrchestratorMethod,
      logger,
      middlewares,
      orchestrator
    };
    this.routes = {
      [ERoute.ROUTE_ADDRESSES]: require('./routes/addresses'),
      [ERoute.ROUTE_CITIES]: require('./routes/cities'),
      [ERoute.ROUTE_COUNTRIES]: require('./routes/countries'),
      [ERoute.ROUTE_ENTITY_NAMES]: require('./routes/entityNames'),
      [ERoute.ROUTE_LEGAL_ENTITIES]: require('./routes/legalEntities'),
      [ERoute.ROUTE_NATURAL_PEOPLE]: require('./routes/naturalPeople'),
      [ERoute.ROUTE_USERS]: require('./routes/users')
    };
  }

  static createSingleton(params) {
    if (!singleton) {
      singleton = new APIFactory(params);
    }

    return singleton;
  }

  createRouter({ routeName, path }) {
    const route = this.routes[routeName];

    if (!route) {
      throw new Error(`Invalid router ${routeName}`);
    }

    this.app.use(
      path,
      route({
        router: this.Router(),
        ...this.routeDependencies
      })
    );

    return this;
  }
}

module.exports = APIFactory;
