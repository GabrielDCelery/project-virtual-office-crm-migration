let singleton = null;

class APIFactory {
  constructor({
    CStatusCode,
    EOrchestratorMethod,
    ERoute,
    Router,
    app,
    middlewares,
    orchestrator
  }) {
    this.app = app;
    this.Router = Router;
    this.routeDependencies = {
      CStatusCode,
      EOrchestratorMethod,
      middlewares,
      orchestrator
    };
    this.routes = {
      [ERoute.ROUTE_ADDRESSES]: require('./routers/addresses'),
      [ERoute.ROUTE_CITIES]: require('./routers/cities'),
      [ERoute.ROUTE_COUNTRIES]: require('./routers/countries'),
      [ERoute.ROUTE_USERS]: require('./routers/users')
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
