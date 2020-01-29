import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';

import NavBar from '../../../components/Nav/Bar';
import UILeftAlignedContainer from '../../../components/UI/LeftAlignedContainer';
import UIAppBar from '../../../components/UI/AppBar';

const AddContractView = () => {
  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1}>
        <Box position="relative" width="100%">
          <Box height="2em" />
          <UILeftAlignedContainer maxWidth="xl">
            <UIAppBar position="static" background="primary">
              <Toolbar>
                <Typography component="h3">ADD NEW CONTRACT</Typography>
              </Toolbar>
            </UIAppBar>

            <Box height="1em" />

            <UIAppBar height="narrow" position="static" background="secondary">
              <Toolbar>
                <Typography component="h4">CLIENT</Typography>
              </Toolbar>
            </UIAppBar>

            <Box height="1em" />

            <Paper>
              <Box padding="2em">
                <FormControl style={{ width: '100%' }}>
                  <TextField
                    fullWidth={true}
                    id="client-long-name"
                    label="Long Name"
                    onChange={() => {}}
                    value={''}
                    disabled={false}
                  />
                </FormControl>

                <Box height="2em" />

                <FormControl style={{ width: '100%' }}>
                  <TextField
                    fullWidth={true}
                    id="client-short-name"
                    label="Short Name"
                    onChange={() => {}}
                    value={''}
                    disabled={false}
                  />
                </FormControl>

                <Box height="2em" />

                <FormControl style={{ width: '100%' }}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="client-type-label"
                    id="client-type"
                    value={''}
                    onChange={() => {}}
                  >
                    <MenuItem value={'limited liability company'}>
                      Limited Liability Company
                    </MenuItem>
                  </Select>
                </FormControl>

                <Box height="2em" />

                <FormControl style={{ width: '100%' }}>
                  <TextField
                    fullWidth={true}
                    id="client-registration-id"
                    label="Registration ID"
                    onChange={() => {}}
                    value={''}
                    disabled={false}
                  />
                </FormControl>

                <Box height="2em" />

                <FormControl style={{ width: '100%' }}>
                  <TextField
                    fullWidth={true}
                    id="client-tax-id"
                    label="Tax ID"
                    onChange={() => {}}
                    value={''}
                    disabled={false}
                  />
                </FormControl>

                <Box height="2em" />
              </Box>
            </Paper>
          </UILeftAlignedContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AddContractView;
