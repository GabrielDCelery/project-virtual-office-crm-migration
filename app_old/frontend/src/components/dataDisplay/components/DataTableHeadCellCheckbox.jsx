import React from 'react';
import { Checkbox } from '@material-ui/core';
import styled from 'styled-components';
import { DataTableHeadCell } from './DataTableHeadCell';
import { FlexboxCenterPositioner } from './FlexboxCenterPositioner';

const StyledCheckbox = styled(Checkbox)`
  color: #fff !important;
`;

const DataTableHeadCellCheckbox = ({
  isChecked,
  isIndeterminate,
  handleClick
}) => {
  return (
    <DataTableHeadCell width="xs" padding="none">
      <FlexboxCenterPositioner>
        <StyledCheckbox
          checked={isChecked}
          indeterminate={isIndeterminate}
          onClick={handleClick}
        />
      </FlexboxCenterPositioner>
    </DataTableHeadCell>
  );
};

export { DataTableHeadCellCheckbox };
