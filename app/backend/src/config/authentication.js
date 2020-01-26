module.exports = ({ USER_JWT_SECRET, USER_JWT_EXPIRY }) => {
  return {
    userJwtSecret: USER_JWT_SECRET || 'super_secret',
    userJwtExpiry:
      parseInt(USER_JWT_EXPIRY, 10) ||
      Math.floor(new Date() / 1000) + 60 * 60 * 24
  };
};
