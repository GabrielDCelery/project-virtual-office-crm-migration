import React from "react";
import _ from "lodash";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import {
  CustomLeftAlignedContainer,
  DocumentPdf,
  FormFieldControl,
  FormFileUpload,
  FormPaper,
  FormReactCreateSelect,
  FormReactSelect,
  FormStep
} from "components";

const MailsAddNewView = ({ getter, handler }) => {
  return (
    <CustomLeftAlignedContainer maxWidth="lg">
      <FormStep label="Mail Receiver">
        <FormPaper>
          <FormFieldControl>
            <FormReactSelect
              inputId="mail-sender-legal-entity"
              isClearable={true}
              isDisabled={
                getter("ajaxInProgress", "createNewMail") ||
                getter("ajaxInProgress", "legalEntityRecommendations")
              }
              isLoading={getter("ajaxInProgress", "legalEntityRecommendations")}
              label="Legal Entity"
              onChange={recommendation => {
                handler("mailReceiver", "setMailReceiver")(recommendation);
              }}
              options={getter("recommendations", "legalEntities")}
              placeholder="Select a legal entity"
              value={getter("fields", "mailReceiver")}
            />
          </FormFieldControl>
        </FormPaper>
      </FormStep>

      <FormStep label="Mail Sender">
        <Tabs
          indicatorColor="primary"
          onChange={(event, newValue) => {
            handler("layout", "setMailSenderActivePanel")(newValue);
          }}
          textColor="primary"
          value={getter("layout", "mailSenderActivePanel")}
          style={{ background: "#eee" }}
        >
          <Tab label="Choose Existing Mail Sender" />
          <Tab label="Add New Mail Sender" />
        </Tabs>
        <FormPaper>
          {getter("layout", "mailSenderActivePanel") === 0 ? (
            <FormFieldControl>
              <FormReactSelect
                inputId="mail-sender"
                isClearable={true}
                isDisabled={
                  getter("ajaxInProgress", "createNewMail") ||
                  getter("ajaxInProgress", "mailSenderRecommendations")
                }
                isLoading={getter(
                  "ajaxInProgress",
                  "mailSenderRecommendations"
                )}
                label="Mail Sender"
                onChange={recommendation => {
                  handler(
                    "existingMailSender",
                    "actionSetSelectedMailSender"
                  )(recommendation);
                }}
                options={getter("recommendations", "mailSenders")}
                placeholder="Select a mail sender"
                value={getter("fields", "existingMailSender")}
              />
            </FormFieldControl>
          ) : null}
          {getter("layout", "mailSenderActivePanel") === 1 ? (
            <React.Fragment>
              <FormFieldControl>
                <FormReactCreateSelect
                  inputId="react-select-single"
                  isClearable={true}
                  isDisabled={
                    getter("ajaxInProgress", "createNewMail") ||
                    getter("ajaxInProgress", "mailSenderNameRecommendations")
                  }
                  isLoading={getter(
                    "ajaxInProgress",
                    "mailSenderNameRecommendations"
                  )}
                  onChange={recommendation => {
                    handler(
                      "newMailSender",
                      "actionSetSelectedMailSenderName"
                    )(recommendation);
                  }}
                  onCreateOption={mailSenderName => {
                    handler(
                      "newMailSender",
                      "actionCreateNewMailSenderNameAndReFetch"
                    )(mailSenderName);
                  }}
                  options={getter("recommendations", "mailSenderNames")}
                  label="Mail Sender Name"
                  placeholder="Select or create Mail Sender Name"
                  value={getter("fields", "newMailSender", "name")}
                />
              </FormFieldControl>

              <FormFieldControl>
                <TextField
                  fullWidth={true}
                  id="outlined-name"
                  label="Postcode"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={event => {
                    handler("newMailSender", "setPostcode")(event.target.value);
                  }}
                  value={getter("fields", "newMailSender", "postcode")}
                />
              </FormFieldControl>

              <FormFieldControl>
                <FormReactSelect
                  inputId="react-select-single"
                  isClearable={true}
                  isDisabled={
                    getter("ajaxInProgress", "createNewMail") ||
                    getter("ajaxInProgress", "countryRecommendations")
                  }
                  isLoading={getter("ajaxInProgress", "countryRecommendations")}
                  label="Country"
                  onChange={recommendation => {
                    handler(
                      "newMailSender",
                      "actionSetSelectedCountry"
                    )(recommendation);
                  }}
                  options={getter("recommendations", "countries")}
                  placeholder="Select Country"
                  value={getter("fields", "newMailSender", "country")}
                />
              </FormFieldControl>

              <FormFieldControl>
                <FormReactSelect
                  inputId="react-select-single"
                  isClearable={true}
                  isDisabled={
                    getter("ajaxInProgress", "createNewMail") ||
                    getter("ajaxInProgress", "cityRecommendations")
                  }
                  isLoading={getter("ajaxInProgress", "cityRecommendations")}
                  label="City"
                  onChange={recommendation => {
                    handler(
                      "newMailSender",
                      "actionSetSelectedCity"
                    )(recommendation);
                    const country = _.get(recommendation, "country");
                    if (country) {
                      handler(
                        "newMailSender",
                        "actionSetSelectedCountry"
                      )(country);
                    }
                  }}
                  options={getter("recommendations", "cities")}
                  placeholder="Select City"
                  value={getter("fields", "newMailSender", "city")}
                />
              </FormFieldControl>

              <FormFieldControl>
                <TextField
                  fullWidth={true}
                  id="outlined-name"
                  label="Long Street"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={event => {
                    handler("newMailSender", "setStreet")(event.target.value);
                  }}
                  value={getter("fields", "newMailSender", "street")}
                />
              </FormFieldControl>
            </React.Fragment>
          ) : null}
        </FormPaper>
      </FormStep>

      <FormStep label="Mail Details">
        <FormPaper>
          <FormFieldControl>
            <FormReactCreateSelect
              inputId="react-select-single"
              isClearable={true}
              isDisabled={
                getter("ajaxInProgress", "createNewMail") ||
                getter("ajaxInProgress", "mailSubjects")
              }
              isLoading={getter("ajaxInProgress", "mailSubjects")}
              label="Mail Subject"
              onChange={recommendation => {
                handler(
                  "mailDetails",
                  "actionSetSelectedMailSubject"
                )(recommendation);
              }}
              onCreateOption={mailSubject => {
                handler(
                  "mailDetails",
                  "actionCreateNewMailSubjectAndReFetch"
                )(mailSubject);
              }}
              options={getter("recommendations", "mailSubjects")}
              placeholder="Select Mail Subject"
              value={getter("fields", "mailDetails", "subject")}
            />
          </FormFieldControl>

          <FormFieldControl>
            <TextField
              id="date"
              label="Received Date"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              defaultValue={getter("fields", "mailDetails", "receivedDate")}
              onChange={event => {
                handler("mailDetails", "setReceivedDate")(event.target.value);
              }}
            />
          </FormFieldControl>
        </FormPaper>
      </FormStep>

      <FormStep label="Document Upload">
        <FormPaper>
          <FormFieldControl>
            <FormFileUpload
              selectedFile={getter("fields", "document", "file")}
              fileName={getter("callbacks", "document", "fileName")()}
              handleSetFile={_file => {
                handler("document", "setFile")(_file);
              }}
              handleClearFile={() => {
                handler("document", "setFile")(null);
              }}
            />
          </FormFieldControl>
          <DocumentPdf file={getter("fields", "document", "file")} />
        </FormPaper>
      </FormStep>

      <div style={{ height: "1em" }}></div>
      <FormPaper>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          fullWidth={true}
          disabled={
            getter("ajaxInProgress", "createNewMail") ||
            !getter("callbacks", "form", "isReadyToSubmit")()
          }
          onClick={getter("callbacks", "form", "submit")}
        >
          {getter("callbacks", "form", "isReadyToSubmit")()
            ? "Submit mail"
            : "Please fill out the form before submitting"}
        </Button>
      </FormPaper>
      <div style={{ height: "2em" }}></div>
    </CustomLeftAlignedContainer>
  );
};

export default MailsAddNewView;
