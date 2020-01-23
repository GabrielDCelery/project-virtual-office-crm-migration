module.exports = services => {
  return async () => {
    return await services.get('database').execute('mailSenders', 'findAll');
  };
};
