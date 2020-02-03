import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import NavBar from '~/components/Nav/Bar';
import UILeftAlignedContainer from '~/components/UI/LeftAlignedContainer';
import UIAppBar from '~/components/UI/AppBar';
import ContainerFormAddress from '~/components/Container/FormAddress';
import UIFormStepAppBar from '~/components/UI/FormStepAppBar';
import { UstartCase, UstartCaseEveryWord } from '~/common/utils';

const AddContractView = ({
  actionSetFieldAddNewContract,
  stateFormAddNewContract
}) => {
  const { t } = useTranslation();

  return (
    <Box display="flex">
      <NavBar />
      <Box position="relative" flexGrow={1}>
        <Box position="relative" width="100%">
          <Box height="2em" />
          <UILeftAlignedContainer maxWidth="xl">
            <UIAppBar position="static" background="primary">
              <Toolbar>
                <Typography component="h3">
                  {t('add new contract').toUpperCase()}
                </Typography>
              </Toolbar>
            </UIAppBar>

            <Box height="1em" />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UIFormStepAppBar label={t('client details')} />

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="client-long-name"
                        label={UstartCase(t('long name'))}
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
                        label={UstartCase(t('short name'))}
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
                        {UstartCase(t('type'))}
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
                          {UstartCaseEveryWord(t('limited liability company'))}
                        </MenuItem>
                      </Select>
                    </FormControl>

                    <Box height="2em" />

                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="client-registration-id"
                        label={UstartCase(t('registration id'))}
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
                        label={UstartCase(t('tax id'))}
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
                <ContainerFormAddress
                  label={t('client address')}
                  defaultAddress={stateFormAddNewContract.clientAddress}
                  handleSelectAddress={value => {
                    actionSetFieldAddNewContract({
                      fieldName: 'clientAddress',
                      fieldValue: value
                    });
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UIFormStepAppBar label={t('client signatory')} />

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="client-signatory-first-name"
                        label={UstartCase(t('first name'))}
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'signatoryFirstName',
                            fieldValue: event.target.value
                          });
                        }}
                        value={stateFormAddNewContract.signatoryFirstName}
                        disabled={false}
                      />
                    </FormControl>

                    <Box height="2em" />

                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="client-signatory-last-name"
                        label={UstartCase(t('last name'))}
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'signatoryLastName',
                            fieldValue: event.target.value
                          });
                        }}
                        value={stateFormAddNewContract.signatoryLastName}
                        disabled={false}
                      />
                    </FormControl>

                    <Box height="2em" />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UIFormStepAppBar label={t('service provider')} />

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        fullWidth={true}
                        id="service-provider"
                        label={UstartCase(t('name'))}
                        onChange={() => {}}
                        value={''}
                        disabled={false}
                      />
                    </FormControl>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <UIFormStepAppBar label={t('services')} />

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={false}
                              onChange={() => {}}
                              value="gilad"
                            />
                          }
                          label={UstartCase(t('monthly posting of mails'))}
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UIFormStepAppBar label={t('contract')} />

                <Box height="1em" />

                <Paper>
                  <Box padding="2em">
                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        id="contract-start-date"
                        label={UstartCase(t('start date'))}
                        type="date"
                        value={stateFormAddNewContract['contractStartDate']}
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'contractStartDate',
                            fieldValue: event.target.value
                          });
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </FormControl>

                    <Box height="2em" />

                    <FormControl style={{ width: '100%' }}>
                      <TextField
                        id="contract-end-date"
                        label={UstartCase(t('end date'))}
                        type="date"
                        value={stateFormAddNewContract['contractEndDate']}
                        onChange={event => {
                          actionSetFieldAddNewContract({
                            fieldName: 'contractEndDate',
                            fieldValue: event.target.value
                          });
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                    </FormControl>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid>
          </UILeftAlignedContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AddContractView;
