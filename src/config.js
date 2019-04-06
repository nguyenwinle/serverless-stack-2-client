const dev = {
  STRIPE_KEY: "pk_test_gtrP28sqtycTLfVPeXvtDwsC00GWyIb3FJ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ou53thkej2.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_fSjUx5Amm",
    APP_CLIENT_ID: "3usval1tv1vek1nqtfpqseemac",
    IDENTITY_POOL_ID: "us-east-1:9b783d0d-59af-45b9-942f-74b205ec57c6"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_gtrP28sqtycTLfVPeXvtDwsC00GWyIb3FJ",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k2kowozfag.execute-api.us-east-1.amazonaws.com/prod"

  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_tDt6cXnMd",
    APP_CLIENT_ID: "3j2t4h4giq389odb99chnb6vp4",
    IDENTITY_POOL_ID: "us-east-1:9931127c-3ed0-4fbe-b2ce-8ddf5ca0a8ec"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
