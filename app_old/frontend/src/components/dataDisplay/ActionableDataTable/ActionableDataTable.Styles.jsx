import React from 'react';
import styled from 'styled-components';
import { Table, Paper } from '@material-ui/core';

const StyledPapersContainer = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const StyledPaperOverflow = styled(Paper)`
  width: calc(100%) !important;
  min-width: calc(100%) !important;
`;

const StyledTable = styled(Table)`
  width: 100% !important;
`;

const StyledTablesContainer = styled.div`
  width: 100%;
  min-width: 100%;
  overflow-x: auto;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
`;

export default ToWrapComponent => {
  let ActionableDataTableStyles = props => {
    return (
      <ToWrapComponent
        {...props}
        {...{
          StyledPaper,
          StyledPaperOverflow,
          StyledPapersContainer,
          StyledTable,
          StyledTablesContainer
        }}
      />
    );
  };

  return ActionableDataTableStyles;
};
