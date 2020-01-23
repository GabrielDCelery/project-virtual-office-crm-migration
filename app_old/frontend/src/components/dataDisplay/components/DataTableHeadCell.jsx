import React from 'react';
import { TableCell } from '@material-ui/core';
import styled from 'styled-components';
import config from 'config';
import Color from 'color';

const createSize = sizeName => {
  return (
    config.styles.layout.dataTables.cellWidth[sizeName] ||
    config.styles.layout.dataTables.cellWidth['m']
  );
};

const createBaseBackground = colorName => {
  const colorToUse = Color(
    config.styles.colors[colorName] || config.styles.colors['secondary']
  );

  return `${colorToUse.hex()}`;
};

const createLinearGradientBackground = colorName => {
  const colorToUse = Color(
    config.styles.colors[colorName] || config.styles.colors['secondary']
  );

  return `linear-gradient(
    90deg,
    ${colorToUse.hex()} 0%,  
    ${colorToUse.lighten(0.1).hex()} 50%, 
    ${colorToUse.hex()} 100%)`;
};

const StyledTableCell = styled(TableCell)`
  font-size: 40px;
  min-width: ${({ width }) => {
    return createSize(width);
  }};
  height: ${config.styles.layout.dataTables.cellHeight};
  min-height: ${config.styles.layout.dataTables.cellHeight};
  background: ${({ background }) => {
    return createBaseBackground(background);
  }};
  background: ${({ background }) => {
    return createLinearGradientBackground(background);
  }};
  color: #fff !important;
  border-right: 1px solid #e0e0e0;
  padding: ${props => {
    const { padding } = props;
    switch (padding) {
      case 'none':
        return '0 !important';
      default:
        return 'initial';
    }
  }};
  box-sizing: border-box;
`;

const DataTableHeadCell = props => {
  const { children, ...other } = props;
  return <StyledTableCell {...other}>{children}</StyledTableCell>;
};

export { DataTableHeadCell };
