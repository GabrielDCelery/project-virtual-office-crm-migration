const {
  Addresses,
  Cities,
  Contacts,
  Contracts,
  ContractsContacts,
  Countries,
  Documents,
  DocumentsCloud,
  DocumentsTemporary,
  Emails,
  EntityNames,
  HistoryManyToManyChanges,
  HistoryRecordChanges,
  Invoices,
  LegalEntities,
  MailSubjects,
  Mails,
  MailsAuditTrails,
  MailsAuditTrailsDetails,
  MailsPendingActions,
  NaturalPeople,
  Phones,
  Services,
  Users
} = require('../../models');

exports.up = async knex => {
  await knex.schema.createTable(EntityNames.tableName, table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.unique('name');
  });

  await knex.schema.createTable(HistoryRecordChanges.tableName, table => {
    table.increments('id').primary();
    table
      .enum('table', [
        HistoryRecordChanges.TABLES.LEGAL_ENTITIES,
        HistoryRecordChanges.TABLES.NATURAL_PEOPLE
      ])
      .notNullable()
      .index();
    table
      .enum('column', [
        HistoryRecordChanges.COLUMNS.SHORT_NAME,
        HistoryRecordChanges.COLUMNS.LONG_NAME,
        HistoryRecordChanges.COLUMNS.TYPE,
        HistoryRecordChanges.COLUMNS.REGISTRATION_ID,
        HistoryRecordChanges.COLUMNS.TAX_ID,
        HistoryRecordChanges.COLUMNS.PERMANENT_ADDRESS_ID,
        HistoryRecordChanges.COLUMNS.FIRST_NAME,
        HistoryRecordChanges.COLUMNS.LAST_NAME,
        HistoryRecordChanges.COLUMNS.MOTHER_NAME,
        HistoryRecordChanges.COLUMNS.BIRTH_DATE,
        HistoryRecordChanges.COLUMNS.IDENTIFIER_DOCUMENT_ID
      ])
      .notNullable();
    table
      .enum('column_type', [
        HistoryRecordChanges.COLUMN_TYPES.STRING,
        HistoryRecordChanges.COLUMN_TYPES.INTEGER
      ])
      .notNullable();
    table.integer('record_id').notNullable();
    table.string('old_value');
    table.string('new_value');
    table.timestamp('changed_at');
    table.index(['table', 'record_id']);
  });

  await knex.schema.createTable(HistoryManyToManyChanges.tableName, table => {
    table.increments('id').primary();
    table
      .enum('table_one', [HistoryManyToManyChanges.TABLES.CONTRACTS])
      .notNullable()
      .index();
    table.integer('table_one_column').notNullable();
    table
      .enum('table_two', [HistoryManyToManyChanges.TABLES.EMAILS])
      .notNullable()
      .index();
    table.integer('table_two_column').notNullable();
    table
      .enum('actions', [
        HistoryManyToManyChanges.ACTIONS.ADDED,
        HistoryManyToManyChanges.ACTIONS.REMOVED
      ])
      .notNullable();
    table.timestamp('changed_at');
  });

  await knex.schema.createTable(Invoices.tableName, table => {
    table.increments('id').primary();
    table.string('number').notNullable();
    table.integer('payment_amount').notNullable();
    table
      .enum('payment_method', [
        Invoices.PAYMENT_METHODS.CASH,
        Invoices.PAYMENT_METHODS.BANK_TRANSFER
      ])
      .notNullable();
    table.date('creation_date').notNullable();
    table.date('transfer_date').notNullable();
    table.unique('number');
    table.timestamps();
  });

  await knex.schema.createTable(Services.tableName, table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.unique('name');
  });

  await knex.schema.createTable(Countries.tableName, table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('short_name').notNullable();
    table.string('phone_code');
  });

  await knex.schema.createTable(Cities.tableName, table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .integer('country_id')
      .references('id')
      .inTable(Countries.tableName)
      .notNullable()
      .index();
    table.unique(['name', 'country_id']);
  });

  await knex.schema.createTable(Phones.tableName, table => {
    table.increments('id').primary();
    table.string('number').notNullable();
    table
      .integer('country_id')
      .references('id')
      .inTable(Countries.tableName)
      .notNullable()
      .index();
    table
      .enum('status', [Phones.STATUSES.ACTIVE, Phones.STATUSES.INACTIVE])
      .notNullable();
    table.enum('type', [Phones.TYPES.MOBILE, Phones.TYPES.HOME]).notNullable();
    table.unique(['country_id', 'number']);
  });

  await knex.schema.createTable(Emails.tableName, table => {
    table.increments('id').primary();
    table.string('address').notNullable();
    table
      .enum('status', [Emails.STATUSES.ACTIVE, Emails.STATUSES.INACTIVE])
      .notNullable();
  });

  await knex.schema.createTable(Documents.tableName, table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .enum('type', [
        Documents.TYPES.DEED_OF_ASSOCIATION,
        Documents.TYPES.IDENTITY_CARD,
        Documents.TYPES.MAIL,
        Documents.TYPES.SPECIMEN_SIGNATURE
      ])
      .notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(DocumentsTemporary.tableName, table => {
    table.uuid('id').primary();
    table
      .integer('document_id')
      .references('id')
      .inTable(Documents.tableName)
      .notNullable()
      .index();
    table.binary('file').notNullable();
    table
      .enum('mimetype', [DocumentsTemporary.MIMETYPES.APPLICATION_PDF])
      .notNullable();
    table.enum('extension', [DocumentsTemporary.EXTENSIONS.PDF]).notNullable();
    table.integer('size').notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(DocumentsCloud.tableName, table => {
    table.uuid('id').primary();
    table
      .integer('document_id')
      .references('id')
      .inTable(Documents.tableName)
      .notNullable()
      .index();
    table.jsonb('storage_details').notNullable();
    table
      .enum('mimetype', [DocumentsCloud.MIMETYPES.APPLICATION_PDF])
      .notNullable();
    table.enum('extension', [DocumentsCloud.EXTENSIONS.PDF]).notNullable();
    table.integer('size').notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(Users.tableName, table => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table
      .enum('status', [
        Users.STATUSES.INACTIVE,
        Users.STATUSES.ACTIVE,
        Users.STATUSES.SUSPENDED
      ])
      .defaultTo(Users.STATUSES.INACTIVE)
      .notNullable();
    table.timestamps();
    table.unique(['email']);
  });

  await knex.schema.createTable(Addresses.tableName, table => {
    table.increments('id').primary();
    table.string('postcode').notNullable();
    table
      .integer('city_id')
      .references('id')
      .inTable(Cities.tableName)
      .notNullable()
      .index();
    table.string('long_street').notNullable();
    table.timestamps();
    table.unique(['postcode', 'city_id', 'long_street']);
  });

  await knex.schema.createTable(Contacts.tableName, table => {
    table.increments('id').primary();
    table
      .integer('name_id')
      .references('id')
      .inTable(EntityNames.tableName)
      .notNullable()
      .index();
    table
      .integer('phone_id')
      .references('id')
      .inTable(Phones.tableName)
      .index();
    table
      .integer('email_id')
      .references('id')
      .inTable(Emails.tableName)
      .index();
    table
      .integer('address_id')
      .references('id')
      .inTable(Addresses.tableName)
      .index();
    table.timestamps();
    table.unique(['name_id', 'phone_id', 'email_id', 'address_id']);
  });

  await knex.schema.createTable(MailSubjects.tableName, table => {
    table.increments('id').primary();
    table.string('long_subject').notNullable();
    table.unique(['long_subject']);
  });

  await knex.schema.createTable(LegalEntities.tableName, table => {
    table.increments('id').primary();
    table.string('short_name').notNullable();
    table.string('long_name').notNullable();
    table
      .enum('type', [
        LegalEntities.TYPES.LIMITED_LIABILITY_COMPANY,
        LegalEntities.TYPES.UNLIMITED_PARTNERSHIP
      ])
      .notNullable();
    table.string('registration_id');
    table.string('tax_id');
    table
      .integer('permanent_address_id')
      .references('id')
      .inTable(Addresses.tableName)
      .notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(Mails.tableName, table => {
    table.increments('id').primary();
    table
      .integer('legal_entity_id')
      .references('id')
      .inTable(LegalEntities.tableName)
      .notNullable()
      .index();
    table
      .integer('sender_name_id')
      .references('id')
      .inTable(EntityNames.tableName)
      .notNullable();
    table
      .integer('sender_address_id')
      .references('id')
      .inTable(Addresses.tableName)
      .notNullable();
    table
      .integer('subject_id')
      .references('id')
      .inTable(MailSubjects.tableName)
      .notNullable();
    table
      .integer('document_id')
      .references('id')
      .inTable(Documents.tableName)
      .notNullable()
      .index();
  });

  await knex.schema.createTable(MailsAuditTrails.tableName, table => {
    table.increments('id').primary();
    table
      .integer('mail_id')
      .references('id')
      .inTable(Mails.tableName)
      .notNullable()
      .index();
    table
      .enum('event_type', [
        MailsAuditTrails.TYPES.RECEIVED,
        MailsAuditTrails.TYPES.SAVED_TO_TEMPORARY_DATABASE,
        MailsAuditTrails.TYPES.COPIED_TO_CLOUD_SERVICE,
        MailsAuditTrails.TYPES.EMAIL_NOTIFICATION_PENDING,
        MailsAuditTrails.TYPES.EMAIL_NOTIFICATION_SENT_TO_LEGAL_ENTITY,
        MailsAuditTrails.TYPES.ENVELOPED_FOR_POSTING,
        MailsAuditTrails.TYPES.POSTED_TO_LEGAL_ENTITY
      ])
      .notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(MailsAuditTrailsDetails.tableName, table => {
    table.uuid('id').primary();
    table
      .integer('mails_audit_trail_id')
      .references('id')
      .inTable(MailsAuditTrails.tableName)
      .notNullable();
    table.jsonb('data').notNullable();
  });

  await knex.schema.createTable(MailsPendingActions.tableName, table => {
    table.increments('id').primary();
    table
      .integer('mail_id')
      .references('id')
      .inTable(Mails.tableName)
      .notNullable()
      .index();
    table
      .enum('action', [
        MailsPendingActions.ACTIONS.CONFIRM_SENDING_EMAIL_NOTIFICATION,
        MailsPendingActions.ACTIONS.SEND_EMAIL_NOTIFICATION
      ])
      .notNullable();
    table
      .enum('reason', [
        MailsPendingActions.REASONS.RECEIVED_NEW_MAIL,
        MailsPendingActions.REASONS.REQUESTED_BY_USER
      ])
      .notNullable();
    table
      .boolean('pending')
      .defaultTo(true)
      .notNullable();
    table.timestamps();
    table.index(['action', 'pending']);
  });

  await knex.schema.createTable(NaturalPeople.tableName, table => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('mother_name');
    table.date('birth_date');
    table
      .enum('identifier_document_type', [
        NaturalPeople.IDENTIFIER_DOCUMENT_TYPES.IDENTITY_CARD,
        NaturalPeople.IDENTIFIER_DOCUMENT_TYPES.PASSPORT
      ])
      .notNullable();
    table.string('identifier_document_number').notNullable();
    table
      .integer('permanent_address_id')
      .references('id')
      .inTable(Addresses.tableName)
      .notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(Contracts.tableName, table => {
    table.increments('id').primary();
    table
      .integer('client_id')
      .references('id')
      .inTable(LegalEntities.tableName)
      .notNullable();
    table
      .integer('client_signatory_id')
      .references('id')
      .inTable(NaturalPeople.tableName)
      .notNullable();
    table
      .enum('client_signatory_type', [Contracts.SIGNATORY_TYPES.MANAGER])
      .notNullable();
    table
      .integer('service_provider_id')
      .references('id')
      .inTable(LegalEntities.tableName)
      .notNullable();
    table
      .integer('service_provider_signatory_id')
      .references('id')
      .inTable(NaturalPeople.tableName)
      .notNullable();
    table
      .enum('service_provider_signatory_type', [
        Contracts.SIGNATORY_TYPES.MANAGER
      ])
      .notNullable();
    table.integer('renewal_fee_monthly').notNullable();
    table
      .enum('renewal_period', [
        Contracts.RENEWAL_PERIODS.MONTHLY,
        Contracts.RENEWAL_PERIODS.QUARTERLY,
        Contracts.RENEWAL_PERIODS.SEMI_ANNUALLY,
        Contracts.RENEWAL_PERIODS.ANNUALLY
      ])
      .notNullable();
    table.date('start_at');
    table.date('end_at');
    table.enum('status', [Contracts.STATUSES.ACTIVE]).notNullable();
    table.timestamps();
  });

  await knex.schema.createTable(ContractsContacts.tableName, table => {
    table
      .integer('contract_id')
      .references('id')
      .inTable(Contracts.tableName)
      .notNullable()
      .index();
    table
      .integer('contact_id')
      .references('id')
      .inTable(Contacts.tableName)
      .notNullable()
      .index();
    table
      .enum('activity', [
        ContractsContacts.ACTIVITIES.CONTACT_EMAIL,
        ContractsContacts.ACTIVITIES.DOCUMENT_HOLDER,
        ContractsContacts.ACTIVITIES.MAIL_NOTIFICATION_EMAIL,
        ContractsContacts.ACTIVITIES.MAIL_POSTAL_RECEIVER
      ])
      .notNullable();
    table.unique(['contract_id', 'contact_id', 'activity']);
  });

  await knex.schema.createTable(
    `${Contracts.tableName}_contact_${Emails.tableName}`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('name_id')
        .references('id')
        .inTable(EntityNames.tableName)
        .notNullable()
        .index();
      table
        .integer('email_id')
        .references('id')
        .inTable(Emails.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'email_id']);
    }
  );

  await knex.schema.createTable(
    `${Contracts.tableName}_mail_notification_${Emails.tableName}`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('name_id')
        .references('id')
        .inTable(EntityNames.tableName)
        .notNullable()
        .index();
      table
        .integer('email_id')
        .references('id')
        .inTable(Emails.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'email_id']);
    }
  );

  await knex.schema.createTable(
    `${Contracts.tableName}_contact_${Phones.tableName}`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('name_id')
        .references('id')
        .inTable(EntityNames.tableName)
        .notNullable()
        .index();
      table
        .integer('phone_id')
        .references('id')
        .inTable(Phones.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'phone_id']);
    }
  );

  await knex.schema.createTable(
    `${Contracts.tableName}_mail_receivers`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('name_id')
        .references('id')
        .inTable(EntityNames.tableName)
        .notNullable()
        .index();
      table
        .integer('address_id')
        .references('id')
        .inTable(Addresses.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'name_id', 'address_id']);
    }
  );

  await knex.schema.createTable(
    `${Contracts.tableName}_document_keepers`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('name_id')
        .references('id')
        .inTable(EntityNames.tableName)
        .notNullable()
        .index();
      table
        .integer('address_id')
        .references('id')
        .inTable(Addresses.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'name_id', 'address_id']);
    }
  );

  await knex.schema.createTable(
    `${Contracts.tableName}_${Services.tableName}`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('service_id')
        .references('id')
        .inTable(Services.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'service_id']);
    }
  );

  await knex.schema.createTable(
    `${Contracts.tableName}_${Invoices.tableName}`,
    table => {
      table
        .integer('contract_id')
        .references('id')
        .inTable(Contracts.tableName)
        .notNullable()
        .index();
      table
        .integer('invoice_id')
        .references('id')
        .inTable(Invoices.tableName)
        .notNullable()
        .index();
      table.unique(['contract_id', 'invoice_id']);
    }
  );
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists(
    `${Contracts.tableName}_${Invoices.tableName}`
  );
  await knex.schema.dropTableIfExists(
    `${Contracts.tableName}_${Services.tableName}`
  );
  await knex.schema.dropTableIfExists(
    `${Contracts.tableName}_document_keepers`
  );
  await knex.schema.dropTableIfExists(`${Contracts.tableName}_mail_receivers`);
  await knex.schema.dropTableIfExists(
    `${Contracts.tableName}_contact_${Phones.tableName}`
  );
  await knex.schema.dropTableIfExists(
    `${Contracts.tableName}_mail_notification_${Emails.tableName}`
  );
  await knex.schema.dropTableIfExists(
    `${Contracts.tableName}_contact_${Emails.tableName}`
  );
  await knex.schema.dropTableIfExists(ContractsContacts.tableName);
  await knex.schema.dropTableIfExists(Contracts.tableName);
  await knex.schema.dropTableIfExists(NaturalPeople.tableName);
  await knex.schema.dropTableIfExists(MailsPendingActions.tableName);
  await knex.schema.dropTableIfExists(MailsAuditTrailsDetails.tableName);
  await knex.schema.dropTableIfExists(MailsAuditTrails.tableName);
  await knex.schema.dropTableIfExists(Mails.tableName);
  await knex.schema.dropTableIfExists(LegalEntities.tableName);
  await knex.schema.dropTableIfExists(MailSubjects.tableName);
  await knex.schema.dropTableIfExists(Contacts.tableName);
  await knex.schema.dropTableIfExists(Addresses.tableName);
  await knex.schema.dropTableIfExists(Users.tableName);
  await knex.schema.dropTableIfExists(DocumentsTemporary.tableName);
  await knex.schema.dropTableIfExists(DocumentsCloud.tableName);
  await knex.schema.dropTableIfExists(Documents.tableName);
  await knex.schema.dropTableIfExists(Emails.tableName);
  await knex.schema.dropTableIfExists(Phones.tableName);
  await knex.schema.dropTableIfExists(Cities.tableName);
  await knex.schema.dropTableIfExists(Countries.tableName);
  await knex.schema.dropTableIfExists(Services.tableName);
  await knex.schema.dropTableIfExists(Invoices.tableName);
  await knex.schema.dropTableIfExists(HistoryManyToManyChanges.tableName);
  await knex.schema.dropTableIfExists(HistoryRecordChanges.tableName);
  await knex.schema.dropTableIfExists(EntityNames.tableName);
};
