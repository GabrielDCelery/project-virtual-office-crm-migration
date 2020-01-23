import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

export const FormSelect = ({
  handleChange,
  inputLabel,
  selectables,
  selectedValue
}) => {
  return (
    <React.Fragment>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        //id="demo-simple-select-helper"
        value={selectedValue || ''}
        onChange={handleChange}
      >
        <MenuItem value="">None</MenuItem>
        {selectables.map(({ value, label }, index) => {
          return (
            <MenuItem key={`menu-item-${index}`} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </React.Fragment>
  );
};
