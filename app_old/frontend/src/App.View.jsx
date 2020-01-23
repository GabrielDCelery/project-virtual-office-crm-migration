import React from 'react';
import { Route /*, Redirect, Switch */ } from 'react-router-dom';
import {
  AuthenticatedRoute,
  CustomAppLoadingScreen,
  CustomAppSnackbar
} from 'components';
import {
  ContractsAddNew,
  Dashboard,
  Database,
  Login,
  Logout,
  MailsAddNew,
  MailsSearch,
  NavBar,
  Search
} from 'views';
import config from 'config';

const views = {
  ContractsAddNew,
  Dashboard,
  Database,
  Login,
  Logout,
  MailsAddNew,
  MailsSearch,
  Search
};

const ViewWithNavbar = ToWrapComponent => {
  return props => (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flexGrow: 1, width: 'calc(100vw - 300px)' }}>
        <ToWrapComponent {...props} />
      </div>
    </div>
  );
};

const ViewWithoutNavbar = ToWrapComponent => {
  return props => (
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1 }}>
        <ToWrapComponent {...props} />
      </div>
    </div>
  );
};

let AppView = ({ getter, handler }) => {
  return (
    <React.Fragment>
      {getter('app', 'isLoadingScreenOn') ? (
        <CustomAppLoadingScreen />
      ) : (
        <React.Fragment>
          {config.routes.map(
            (
              { path, component, redirectTo, bHasNavbar, bNeedsAuthentication },
              index
            ) => (
              <React.Fragment key={`route-${index}`}>
                {bNeedsAuthentication ? (
                  <AuthenticatedRoute
                    exact={true}
                    path={path}
                    ComponentToRender={
                      bHasNavbar
                        ? ViewWithNavbar(views[component])
                        : ViewWithoutNavbar(views[component])
                    }
                    redirectTo={redirectTo}
                  />
                ) : (
                  <Route
                    exact={true}
                    path={path}
                    component={
                      bHasNavbar
                        ? ViewWithNavbar(views[component])
                        : ViewWithoutNavbar(views[component])
                    }
                  />
                )}
              </React.Fragment>
            )
          )}
        </React.Fragment>
      )}

      <CustomAppSnackbar
        {...{
          handleClose: handler('snackbar', 'handleClose'),
          isOpen: getter('snackbar', 'isOpen'),
          message: getter('snackbar', 'message'),
          type: getter('snackbar', 'type')
        }}
      />
    </React.Fragment>
  );
};

export default AppView;
