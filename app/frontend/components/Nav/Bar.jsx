import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CssBaseline, Collapse, List } from '@material-ui/core';
import NavDrawer from './Drawer';
import NavDrawerContainer from './DrawerContainer';
import NavListItem from './ListItem';
import NavListItemIcon from './ListItemIcon';
import NavListItemText from './ListItemText';
import config from '../../config';
import {
  ContactMail as ContactMailIcon,
  Dashboard as DashboardIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  Layers as LayersIcon,
  ListAlt as ListAltIcon,
  Person as PersonIcon,
  Search as SearchIcon
} from '@material-ui/icons';

const Icons = {
  ContactMailIcon,
  DashboardIcon,
  LayersIcon,
  ListAltIcon,
  PersonIcon,
  SearchIcon
};

const SingleNavBarItem = ({ bIsActive, icon, label, path }) => {
  const Icon = Icons[icon];

  return (
    <NavListItem button className={`${bIsActive ? 'active' : ''}`}>
      <NavListItemIcon>
        <Icon />
      </NavListItemIcon>
      <NavListItemText primary={label} />
    </NavListItem>
  );
};

const DropDownNavBarItem = ({ bIsActive, icon, label, navBarItemChildren }) => {
  const [bIsOpen, setOpen] = useState(false);
  const Icon = Icons[icon];

  return (
    <div onClick={() => setOpen(!bIsOpen)}>
      <NavListItem button className={`${bIsActive ? 'active' : ''}`}>
        <NavListItemIcon>
          <Icon />
        </NavListItemIcon>
        <NavListItemText primary={label} />
        <NavListItemIcon>
          {bIsActive || bIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </NavListItemIcon>
      </NavListItem>

      <Collapse in={bIsActive || bIsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {navBarItemChildren.map(({ label, bIsActive, path }, index) => (
            <React.Fragment key={`navbar-item-collapsible-${index}`}>
              <NavListItem button className={`${bIsActive ? 'active' : ''}`}>
                <NavListItemText primary={label} />
              </NavListItem>
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default function NavBar({}) {
  const router = useRouter();

  const navBarItems = config.navbar.map(
    ({ path, component, icon, label, rbacRule, children }) => {
      const navbarItem = {
        bIsActive: path === router.pathname,
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

            if (path === router.pathname) {
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
    <React.Fragment>
      <CssBaseline />
      <NavDrawerContainer>
        <NavDrawer variant="permanent" anchor="left">
          <List style={{ width: '100%' }}>
            {(navBarItems || []).map((navBarItem, index) => {
              const {
                label,
                icon,
                bIsActive,
                path,
                navBarItemChildren
              } = navBarItem;

              return (
                <React.Fragment key={`navbar-item-${index}`}>
                  {navBarItemChildren ? (
                    <DropDownNavBarItem
                      {...{
                        bIsActive,
                        icon,
                        label,
                        navBarItemChildren
                      }}
                    />
                  ) : (
                    <SingleNavBarItem
                      {...{
                        bIsActive,
                        icon,
                        label,
                        path
                      }}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </NavDrawer>
      </NavDrawerContainer>
    </React.Fragment>
  );
}
