class Mails {
  constructor({ models, nodeModules, recordPreparator }) {
    this.models = models;
    this.nodeModules = nodeModules;
    this.recordPreparator = recordPreparator;
    this.create = this.create.bind(this);
  }

  async _findOrCreateAddress({ sender, transaction }) {
    const where = {
      postcode: sender['postcode'],
      city_id: sender['city'],
      long_street: sender['street']
    };

    const addressRecord = await this.models.Addresses.query(
      transaction
    ).findOne(where);

    if (addressRecord) {
      return addressRecord;
    }

    return await this.models.Addresses.query(transaction).insert(where);
  }

  async _findOrCreateSender({ sender, transaction }) {
    if (Number.isInteger(sender)) {
      return sender;
    }

    const addressRecord = await this._findOrCreateAddress({
      sender,
      transaction
    });

    const where = {
      address_id: addressRecord['id'],
      name_id: sender['name']
    };

    const existingMailSenderRecord = await this.models.Contacts.query(
      transaction
    ).findOne(where);

    if (existingMailSenderRecord) {
      return existingMailSenderRecord['id'];
    }

    const mailSenderRecord = await this.models.Contacts.query(
      transaction
    ).insert({
      ...where,
      is_mail_sender: true,
      is_mail_receiver: false
    });

    return mailSenderRecord['id'];
  }

  async create({ receiver, sender, subject, document, file, transaction }) {
    const { uuidv4 } = this.nodeModules;

    const newDocumentDbRecord = await this.models.Documents.query(
      transaction
    ).insert({
      name: document['name'],
      type: this.models.Documents.TYPES.MAIL
    });

    const documentId = newDocumentDbRecord['id'];

    await this.models.DocumentsTemporary.query(transaction).insert({
      id: uuidv4(),
      document_id: documentId,
      file: file['buffer'],
      mimetype: file['mimetype'],
      extension: file['originalname'].split('.')[1],
      size: file['size']
    });

    const mailSenderId = await this._findOrCreateSender({
      sender,
      transaction
    });

    const newMailRecord = await this.models.Mails.query(transaction).insert({
      legal_entity_id: receiver,
      sender_id: mailSenderId,
      subject_id: subject,
      document_id: documentId
    });

    await this.models.MailsPendingActions.query(transaction).insert({
      mail_id: newMailRecord['id'],
      action: this.models.MailsPendingActions.ACTIONS
        .CONFIRM_SENDING_EMAIL_NOTIFICATION,
      reason: this.models.MailsPendingActions.REASONS.RECEIVED_NEW_MAIL
    });

    await this.models.MailsAuditTrails.query(transaction).insert([
      {
        mail_id: newMailRecord['id'],
        event_type: this.models.MailsAuditTrails.TYPES.RECEIVED
      },
      {
        mail_id: newMailRecord['id'],
        event_type: this.models.MailsAuditTrails.TYPES
          .SAVED_TO_TEMPORARY_DATABASE
      }
    ]);

    return true;
  }
}

module.exports = Mails;
