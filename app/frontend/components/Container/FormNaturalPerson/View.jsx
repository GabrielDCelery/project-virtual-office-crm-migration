import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import { UstartCase } from '~/common/utils';

const FormNaturalPersonView = ({}) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Paper>
        <Box padding="2em">
          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="client-signatory-first-name"
              label={UstartCase(t('first name'))}
              onChange={event => {}}
              value={''}
              disabled={false}
            />
          </FormControl>

          <Box height="2em" />

          <FormControl style={{ width: '100%' }}>
            <TextField
              fullWidth={true}
              id="client-signatory-last-name"
              label={UstartCase(t('last name'))}
              onChange={event => {}}
              value={''}
              disabled={false}
            />
          </FormControl>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default FormNaturalPersonView;
