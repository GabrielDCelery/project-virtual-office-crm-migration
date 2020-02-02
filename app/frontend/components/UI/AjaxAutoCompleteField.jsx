import { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const UIAjaxAutoCompleteField = ({
  handleFilter,
  handleSelect,
  id,
  label,
  options,
  defaultValue,
  bDisabled
}) => {
  const [open, setOpen] = React.useState(false);
  const [localInputValue, setLocalInputValue] = useState(null);
  const loading = open && options.length === 0;

  return (
    <Autocomplete
      id={id}
      open={open}
      loading={false}
      options={options}
      inputValue={localInputValue}
      value={defaultValue}
      disabled={bDisabled}
      onOpen={() => {
        setOpen(true);
      }}
      autoSelect={true}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => {
        return option.name === value.name;
      }}
      onChange={(event, state) => {
        setLocalInputValue(state ? state.name : null);
        handleSelect ? handleSelect(state) : null;
      }}
      getOptionLabel={option => option.name}
      renderInput={params => {
        return (
          <TextField
            {...params}
            fullWidth={true}
            label={label}
            fullWidth
            onChange={event => {
              setLocalInputValue(event.target.value);
              handleFilter(event.target.value);
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              )
            }}
          />
        );
      }}
    />
  );
};

export default UIAjaxAutoCompleteField;
