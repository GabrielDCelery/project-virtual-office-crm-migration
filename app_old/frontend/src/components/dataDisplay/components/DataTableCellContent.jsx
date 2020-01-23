import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import { FIELD_TYPE_STRING, FIELD_TYPE_DATE } from 'consts';

const normalizeValue = ({ type, label }) => {
  switch (type) {
    case FIELD_TYPE_STRING:
      return label;
    case FIELD_TYPE_DATE:
      return moment(new Date(label)).format('YYYY-MM-DD');
    default:
      return label;
  }
};

const DataTableCellContent = props => {
  const { label, type } = props;
  return (
    <Typography component="p">{normalizeValue({ label, type })}</Typography>
  );
};

export { DataTableCellContent };
