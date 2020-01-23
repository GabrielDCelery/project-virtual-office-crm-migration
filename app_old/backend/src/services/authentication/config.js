module.exports = ({ SERVICE_JWT_SECRET, SERVICE_JWT_EXPIRY_IN_SECONDS }) => {
  return {
    jwt: {
      secret: SERVICE_JWT_SECRET || 'super_secret',
      expiryInSeconds:
        parseInt(SERVICE_JWT_EXPIRY_IN_SECONDS, 10) || 60 * 60 * 24
    }
  };
};
