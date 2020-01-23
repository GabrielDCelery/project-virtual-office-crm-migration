module.exports = ({
  SERVICE_CLOUD_S3_ACCESS_KEY_ID,
  SERVICE_CLOUD_S3_SECRET_ACCESS_KEY,
  SERVICE_CLOUD_S3_ENDPOINT
}) => {
  return {
    s3: {
      accessKeyId: SERVICE_CLOUD_S3_ACCESS_KEY_ID,
      accessSecretKey: SERVICE_CLOUD_S3_SECRET_ACCESS_KEY,
      endpoint: SERVICE_CLOUD_S3_ENDPOINT
    }
  };
};
