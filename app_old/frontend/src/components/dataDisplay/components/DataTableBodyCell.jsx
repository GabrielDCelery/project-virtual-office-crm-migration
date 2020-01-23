import React from 'react';
import { TableCell } from '@material-ui/core';
import styled from 'styled-components';
import config from 'config';

const createSize = sizeName => {
  return (
    config.styles.layout.dataTables.cellWidth[sizeName] ||
    config.styles.layout.dataTables.cellWidth['m']
  );
};

const StyledTableCell = styled(TableCell)`
  min-width: ${({ width }) => {
    return createSize(width);
  }};
  //border-right: 1px solid #e0e0e0;
  box-sizing: border-box;
  padding: ${props => {
    const { padding } = props;
    switch (padding) {
      case 'none':
        return '0 !important';
      default:
        return 'inherit';
    }
  }};
  cursor: ${props => {
    const { cursorify } = props;
    return cursorify === 'true' ? 'pointer' : 'default';
  }};
`;

const DataTableBodyCell = props => {
  const { children, ...other } = props;
  return <StyledTableCell {...other}>{children}</StyledTableCell>;
};

export { DataTableBodyCell };
