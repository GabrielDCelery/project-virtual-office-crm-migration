import React from 'react';
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';
import config from '../../config';
import Color from 'color';

const createBaseBackground = colorName => {
  const colorToUse = Color(
    config.styles.colors[colorName] || config.styles.colors['primary']
  );

  return `${colorToUse.hex()}`;
};

const createLinearGradientBackground = colorName => {
  const colorToUse = Color(
    config.styles.colors[colorName] || config.styles.colors['primary']
  );

  return `linear-gradient(
    135deg,
    ${colorToUse.hex()} 0%,
    ${colorToUse.lighten(0.2).hex()} 100%)`;
};

const StyledAppBar = styled(AppBar)`
  border-radius: 0.2em;
  background: ${({ background }) => {
    return createBaseBackground(background);
  }};
  background: ${({ background }) => {
    return createLinearGradientBackground(background);
  }};
  .MuiToolbar-regular {
    min-height: ${props => {
      const { height } = props;
      switch (height) {
        case 'inherit':
          return '0';
        case 'narrow':
          return '48px';
        default:
          return '64px';
      }
    }};
  }
`;

const UIAppBar = props => {
  const { children, ...other } = props;
  return <StyledAppBar {...other}>{children}</StyledAppBar>;
};

export default UIAppBar;
