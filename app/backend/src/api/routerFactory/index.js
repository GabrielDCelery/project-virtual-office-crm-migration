const { ERouter } = globalRequire('common/enums');
const {
  ROUTER_ADDRESSES,
  ROUTER_CITIES,
  ROUTER_COUNTRIES,
  ROUTER_USERS
} = ERouter;

class RouterFactory {
  constructor() {
    this.routers = {
      [ROUTER_ADDRESSES]: require('./Addresses'),
      [ROUTER_CITIES]: require('./Cities'),
      [ROUTER_COUNTRIES]: require('./Countries'),
      [ROUTER_USERS]: require('./Users')
    };
  }

  createRouter({ routerClassName, middlewares, orchestrator }) {
    const RouterClass = this.routers[routerClassName];

    if (!RouterClass) {
      throw new Error(`Invalid router ${routerClassName}`);
    }

    return new RouterClass().createRouter({ middlewares, orchestrator });
  }
}

module.exports = new RouterFactory();
