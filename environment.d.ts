declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT: string;
      BCRYPT_SECRET: string;
      BCRYPT_SALT: string;
    }
  }
}

export {};
