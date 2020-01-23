import React from 'react';
import { Checkbox } from '@material-ui/core';
import { DataTableBodyCell } from './DataTableBodyCell';
import { FlexboxCenterPositioner } from './FlexboxCenterPositioner';

const DataTableBodyCellCheckbox = ({ isChecked, handleClick }) => {
  return (
    <DataTableBodyCell width="xs" padding="none">
      <FlexboxCenterPositioner>
        <Checkbox checked={isChecked} onChange={handleClick} />
      </FlexboxCenterPositioner>
    </DataTableBodyCell>
  );
};

export { DataTableBodyCellCheckbox };
