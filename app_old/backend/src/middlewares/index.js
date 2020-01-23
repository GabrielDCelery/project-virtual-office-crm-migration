const middlewares = {
  multer: require('./multer')
};

const get = name => {
  return middlewares[name];
};

module.exports = {
  get
};
