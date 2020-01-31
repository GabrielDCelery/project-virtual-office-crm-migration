import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const UIAjaxAutoCompleteField = ({ label, handleChange, options }) => {
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

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
      getOptionSelected={(option, value) => {
        return option.name === value.name;
      }}
      getOptionLabel={option => option.name}
      options={options}
      loading={loading}
      renderInput={params => {
        return (
          <TextField
            {...params}
            fullWidth={true}
            label={label}
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
