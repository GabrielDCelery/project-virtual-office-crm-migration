import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tabs,
  Tab,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';

import NavBar from '../../../components/Nav/Bar';
import UILeftAlignedContainer from '../../../components/UI/LeftAlignedContainer';
import UIAppBar from '../../../components/UI/AppBar';
import UIFormReactSelect from '../../../components/UI/FormReactSelect';

const AddContractView = ({
  actionSetFieldAddNewContract,
  stateFormAddNewContract,
  stateRecommendedAddresses,
  stateRecommendedCountries
}) => {
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

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UIAppBar
                  height="narrow"
                  position="static"
                  background="secondary"
                >
                  <Toolbar>
                    <Typography component="h4">CLIENT DETAILS</Typography>
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
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'clientLongName',
                            fieldValue: event.target.value
                          });
                        }}
                        value={stateFormAddNewContract.clientLongName}
                        disabled={false}
                      />
                    </FormControl>

                    <Box height="2em" />

                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="client-short-name"
                        label="Short Name"
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'clientShortName',
                            fieldValue: event.target.value
                          });
                        }}
                        value={stateFormAddNewContract.clientShortName}
                        disabled={false}
                      />
                    </FormControl>

                    <Box height="2em" />

                    <FormControl style={{ width: '100%' }}>
                      <InputLabel id="demo-simple-select-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="client-type-label"
                        id="client-type"
                        value={stateFormAddNewContract.clientType}
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'clientType',
                            fieldValue: event.target.value
                          });
                        }}
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
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'clientRegistrationId',
                            fieldValue: event.target.value
                          });
                        }}
                        value={stateFormAddNewContract.clientRegistrationId}
                        disabled={false}
                      />
                    </FormControl>

                    <Box height="2em" />

                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="client-tax-id"
                        label="Tax ID"
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'clientTaxId',
                            fieldValue: event.target.value
                          });
                        }}
                        value={stateFormAddNewContract.clientTaxId}
                        disabled={false}
                      />
                    </FormControl>

                    <Box height="2em" />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <UIAppBar
                  height="narrow"
                  position="static"
                  background="secondary"
                >
                  <Toolbar>
                    <Typography component="h4">CLIENT ADDRESS</Typography>
                  </Toolbar>
                </UIAppBar>

                <Box height="1em" />

                <Tabs
                  indicatorColor="secondary"
                  onChange={(event, newValue) => {}}
                  textColor="primary"
                  value={0}
                  style={{ background: '#eee' }}
                  variant="fullWidth"
                >
                  <Tab label="Choose existing address" />
                  <Tab label="Add new address" />
                </Tabs>

                <Paper>
                  <Box padding="2em">
                    {true === true ? (
                      <React.Fragment>
                        <FormControl style={{ width: '100%' }}>
                          <TextField
                            fullWidth={true}
                            id="client-address-postcode"
                            label="Postcode"
                            onChange={() => {}}
                            value={''}
                            disabled={false}
                          />
                        </FormControl>

                        <Box height="2em" />

                        <FormControl style={{ width: '100%' }}>
                          <UIFormReactSelect
                            inputId="react-select-single"
                            isClearable={true}
                            isDisabled={false}
                            isLoading={false}
                            label="Country"
                            onChange={chosen => {
                              actionSetFieldAddNewContract({
                                fieldName: 'clientAddressId',
                                fieldValue: chosen === null ? null : chosen.id
                              });
                            }}
                            options={stateRecommendedCountries}
                            placeholder="Select Country"
                            value={stateFormAddNewContract.clientAddressId}
                          />
                        </FormControl>

                        <Box height="2em" />

                        <FormControl style={{ width: '100%' }}>
                          <TextField
                            fullWidth={true}
                            id="client-address-city"
                            label="City"
                            onChange={() => {}}
                            value={''}
                            disabled={false}
                          />
                        </FormControl>

                        <Box height="2em" />

                        <FormControl style={{ width: '100%' }}>
                          <TextField
                            fullWidth={true}
                            id="client-address-street"
                            label="Street"
                            onChange={() => {}}
                            value={''}
                            disabled={false}
                          />
                        </FormControl>

                        <Box height="2em" />
                      </React.Fragment>
                    ) : null}
                    {true === false ? (
                      <React.Fragment>
                        <FormControl style={{ width: '100%' }}>
                          <TextField
                            fullWidth={true}
                            id="client-address-id"
                            label="Long Name"
                            onChange={() => {}}
                            value={''}
                            disabled={false}
                          />
                        </FormControl>
                      </React.Fragment>
                    ) : null}
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UIAppBar
                  height="narrow"
                  position="static"
                  background="secondary"
                >
                  <Toolbar>
                    <Typography component="h4">SERVICE PROVIDER</Typography>
                  </Toolbar>
                </UIAppBar>

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="service-provider"
                        label="Service Provider"
                        onChange={() => {}}
                        value={''}
                        disabled={false}
                      />
                    </FormControl>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <UIAppBar
                  height="narrow"
                  position="static"
                  background="secondary"
                >
                  <Toolbar>
                    <Typography component="h4">SERVICES</Typography>
                  </Toolbar>
                </UIAppBar>

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="service-provider-services"
                        label="Services"
                        onChange={() => {}}
                        value={''}
                        disabled={false}
                      />
                    </FormControl>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </UILeftAlignedContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AddContractView;
