import React from 'react';
import {
  CustomLeftAlignedContainer,
  FormFieldControl,
  FormPaper,
  FormStep,
  FormSelect
} from 'components';
import { TextField } from '@material-ui/core';

const ContractsAddNewView = ({ getter, handler }) => {
  return (
    <CustomLeftAlignedContainer maxWidth="lg">
      <FormStep label="Client">
        <FormPaper>
          <FormFieldControl>
            <TextField
              fullWidth={true}
              label="Client Name"
              InputLabelProps={{
                shrink: true
              }}
              onChange={event => {
                handler('client', 'actionSetClientName')(event.target.value);
              }}
              value={getter('fields', 'client', 'name')}
            />
          </FormFieldControl>
          <FormFieldControl>
            <FormSelect
              handleChange={event => {
                handler('client', 'actionSetClientType')(event.target.value);
              }}
              inputLabel={'Client Type'}
              selectables={getter('legalEntities', 'types')}
              selectedValue={getter('fields', 'client', 'type')}
            />
          </FormFieldControl>
        </FormPaper>
      </FormStep>
    </CustomLeftAlignedContainer>
  );
};

export default ContractsAddNewView;
