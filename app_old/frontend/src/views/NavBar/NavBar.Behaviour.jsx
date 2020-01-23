import React from 'react';
import config from 'config';
import { WithRouterDecorator } from 'components';

export default ToWrapComponent => {
  let NavBarBehaviour = props => {
    const { location } = props;
    const navBarItems = config.navbar.map(
      ({ path, component, icon, label, rbacRule, children }) => {
        const navbarItem = {
          bIsActive: path === location.pathname,
          component,
          icon,
          label,
          path,
          rbacRule
        };

        if (children) {
          navbarItem['navBarItemChildren'] = children.map(
            ({ path, label, component, rbacRule }) => {
              const navBarChildItem = {
                path,
                label,
                component,
                rbacRule
              };

              if (path === location.pathname) {
                navbarItem['bIsActive'] = true;
                navBarChildItem['bIsActive'] = true;
              }

              return navBarChildItem;
            }
          );
        }

        return navbarItem;
      }
    );

    return (
      <ToWrapComponent
        {...props}
        {...{
          navBarItems: navBarItems
        }}
      />
    );
  };

  NavBarBehaviour = WithRouterDecorator(NavBarBehaviour);

  return NavBarBehaviour;
};
