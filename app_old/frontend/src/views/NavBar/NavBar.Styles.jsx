import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import config from 'config';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledDrawerContainer = styled.nav`
  width: ${config.styles.layout.navbar.width};
  flex-shrink: 0;
`;

const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    width: ${config.styles.layout.navbar.width};
    background-color: ${config.styles.colors.navbar.background
      .default} !important;
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;

const StyledListItemText = styled(ListItemText)`
  color: ${config.styles.colors.navbar.text.default} !important;
  transition: all 0.5s ease-in-out;
`;

const StyledListItem = styled(ListItem)`
  border-top: 1px solid ${config.styles.colors.navbar.border.default} !important;
  border-bottom: 1px solid ${config.styles.colors.navbar.border.default} !important;
  background-color: ${config.styles.colors.navbar.background
    .default} !important;
  transition: all 0.5s ease-in-out !important;
  &:hover,
  &.active {
    background-color: ${config.styles.colors.navbar.background
      .hover} !important;
    border-color: ${config.styles.colors.navbar.border.hover} !important;
  }
  ,
  &:hover ${StyledListItemIcon}, &.active ${StyledListItemIcon} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }
  ,
  &:hover ${StyledListItemText}, &.active ${StyledListItemText} {
    color: ${config.styles.colors.navbar.text.hover} !important;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-right: 16px !important;
`;

export default ToWrapComponent => {
  let NavBarStyles = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledDrawer,
          StyledDrawerContainer,
          StyledIconButton,
          StyledLink,
          StyledListItem,
          StyledListItemIcon,
          StyledListItemText
        }}
      />
    );
  };

  return NavBarStyles;
};
