import React, { useState } from 'react';
import { Collapse, CssBaseline, List } from '@material-ui/core';
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

const SingleNavBarItem = ({
  StyledLink,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  bIsActive,
  icon,
  label,
  path
}) => {
  const Icon = Icons[icon];

  return (
    <StyledLink to={path}>
      <StyledListItem button className={`${bIsActive ? 'active' : ''}`}>
        <StyledListItemIcon>
          <Icon />
        </StyledListItemIcon>
        <StyledListItemText primary={label} />
      </StyledListItem>
    </StyledLink>
  );
};

const DropDownNavBarItem = ({
  StyledLink,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  bIsActive,
  icon,
  label,
  navBarItemChildren
}) => {
  const [bIsOpen, setOpen] = useState(false);
  const Icon = Icons[icon];

  return (
    <div onClick={() => setOpen(!bIsOpen)}>
      <StyledListItem button className={`${bIsActive ? 'active' : ''}`}>
        <StyledListItemIcon>
          <Icon />
        </StyledListItemIcon>
        <StyledListItemText primary={label} />
        <StyledListItemIcon>
          {bIsActive || bIsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </StyledListItemIcon>
      </StyledListItem>

      <Collapse in={bIsActive || bIsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {navBarItemChildren.map(({ label, bIsActive, path }, index) => (
            <React.Fragment key={`navbar-item-collapsible-${index}`}>
              <StyledLink to={path}>
                <StyledListItem
                  button
                  className={`${bIsActive ? 'active' : ''}`}
                >
                  <StyledListItemText primary={label} />
                </StyledListItem>
              </StyledLink>
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

const NavBarView = ({
  StyledDrawer,
  StyledDrawerContainer,
  StyledLink,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  navBarItems
}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledDrawerContainer>
        <StyledDrawer variant="permanent" anchor="left">
          <List>
            {navBarItems.map((navBarItem, index) => {
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
                        StyledLink,
                        StyledListItem,
                        StyledListItemIcon,
                        StyledListItemText,
                        bIsActive,
                        icon,
                        label,
                        navBarItemChildren
                      }}
                    />
                  ) : (
                    <SingleNavBarItem
                      {...{
                        StyledLink,
                        StyledListItem,
                        StyledListItemIcon,
                        StyledListItemText,
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
        </StyledDrawer>
      </StyledDrawerContainer>
    </React.Fragment>
  );
};

export default NavBarView;
