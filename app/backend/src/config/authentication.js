module.exports = ({ USER_JWT_SECRET, USER_JWT_EXPIRY }) => {
  return {
    jwt: {
      secret: USER_JWT_SECRET || 'super_secret',
      expiry:
        parseInt(USER_JWT_EXPIRY, 10) ||
        Math.floor(new Date() / 1000) + 60 * 60 * 24
    }
  };
};
