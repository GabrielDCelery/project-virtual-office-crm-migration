const {
  Addresses,
  Cities,
  ContactNames,
  Contacts,
  Contracts,
  Countries,
  Documents,
  DocumentsCloud,
  DocumentsTemporary,
  Emails,
  HistoryManyToManyChanges,
  HistoryRecordChanges,
  Invoices,
  LegalEntities,
  MailSubjects,
  Mails,
  MailsAuditTrails,
  MailsPendingActions,
  NaturalPeople,
  Phones,
  Services,
  Users
} = require('../../models');

exports.seed = async knex => {
  await knex(`${Contracts.tableName}_${Invoices.tableName}`).del();
  await knex(`${Contracts.tableName}_${Services.tableName}`).del();
  await knex(`${Contracts.tableName}_document_keepers`).del();
  await knex(`${Contracts.tableName}_mail_receivers`).del();
  await knex(`${Contracts.tableName}_contact_${Phones.tableName}`).del();
  await knex(
    `${Contracts.tableName}_mail_notification_${Emails.tableName}`
  ).del();
  await knex(`${Contracts.tableName}_contact_${Emails.tableName}`).del();
  await knex(Contracts.tableName).del();
  await knex(NaturalPeople.tableName).del();
  await knex(MailsPendingActions.tableName).del();
  await knex(MailsAuditTrails.tableName).del();
  await knex(Mails.tableName).del();
  await knex(LegalEntities.tableName).del();
  await knex(Users.tableName).del();
  await knex(MailSubjects.tableName).del();
  await knex(Contacts.tableName).del();
  await knex(ContactNames.tableName).del();
  await knex(Addresses.tableName).del();
  await knex(DocumentsTemporary.tableName).del();
  await knex(DocumentsCloud.tableName).del();
  await knex(Documents.tableName).del();
  await knex(Emails.tableName).del();
  await knex(Phones.tableName).del();
  await knex(Cities.tableName).del();
  await knex(Countries.tableName).del();
  await knex(Services.tableName).del();
  await knex(Invoices.tableName).del();
  await knex(HistoryManyToManyChanges.tableName).del();
  await knex(HistoryRecordChanges.tableName).del();
};
