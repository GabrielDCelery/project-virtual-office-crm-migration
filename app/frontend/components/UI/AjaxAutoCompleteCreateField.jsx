import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const UIAjaxAutoCompleteField = ({ handleChange, options }) => {
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

  const toRenderOptions = [...options, { name: 'some custom ' }];

  const renderOptionMethod = (option, state) => {
    return <React.Fragment>{option.name}</React.Fragment>;
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      filterOptions={(options, state) => {
        return options;
      }}
      getOptionSelected={(option, value) => {
        return option.name === value.name;
      }}
      getOptionLabel={option => option.name}
      options={toRenderOptions}
      loading={loading}
      renderOption={renderOptionMethod}
      renderInput={params => {
        return (
          <TextField
            {...params}
            fullWidth={true}
            label="Country"
            fullWidth
            onChange={handleChange}
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
