import React from 'react';
import { CustomAppBar, ActionableDataTable, VerticalGutter } from 'components';

const columnConfigs = [
  {
    type: 'FIELD_TYPE_STRING',
    label: 'Legal Entity Name',
    field: 'legalEntityName',
    width: 'm'
  },
  {
    type: 'FIELD_TYPE_STRING',
    label: 'Document Name',
    field: 'mailDocumentName',
    width: 'l'
  },
  {
    type: 'FIELD_TYPE_STRING',
    label: 'Mail Subject',
    field: 'mailSubject',
    width: 'm'
  },
  {
    type: 'FIELD_TYPE_STRING',
    label: 'Action',
    field: 'action',
    width: 'm'
  },
  {
    type: 'FIELD_TYPE_STRING',
    label: 'Reason',
    field: 'reason',
    width: 'm'
  },
  {
    type: 'FIELD_TYPE_DATE',
    label: 'Created',
    field: 'createdAt',
    width: 's'
  },
  {
    type: 'FIELD_TYPE_DATE',
    label: 'Updated',
    field: 'updatedAt',
    width: 's'
  }
];

const MailsSearchView = ({
  StyledContainer,
  statePendingActionsNotifyEmails,
  actionPendingActionsSendEmailNotifications
}) => {
  return (
    <React.Fragment>
      <StyledContainer maxWidth={false}>
        <CustomAppBar label="Notify Clients" />
        <VerticalGutter />
        <ActionableDataTable
          items={statePendingActionsNotifyEmails}
          columnConfigs={columnConfigs}
          handleActionForSelecteds={items => {
            actionPendingActionsSendEmailNotifications({
              ids: items.map(item => item.id)
            });
          }}
        />
      </StyledContainer>
    </React.Fragment>
  );
};

export default MailsSearchView;
