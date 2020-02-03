module.exports = ({
  ENV_SERVICE_JWT_SECRET,
  ENV_SERVICE_JWT_EXPIRY_IN_SECONDS
}) => {
  return {
    jwt: {
      secret: ENV_SERVICE_JWT_SECRET || 'super_secret',
      expiryInSeconds:
        parseInt(ENV_SERVICE_JWT_EXPIRY_IN_SECONDS, 10) || 60 * 60 * 24
    }
  };
};
