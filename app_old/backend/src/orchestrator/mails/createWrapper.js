module.exports = services => {
  return async ({ receiver, sender, subject, document, file }) => {
    return await services.get('database').execute('mails', 'create', {
      receiver: JSON.parse(receiver),
      sender: JSON.parse(sender),
      subject: JSON.parse(subject),
      document: JSON.parse(document),
      file
    });
  };
};
