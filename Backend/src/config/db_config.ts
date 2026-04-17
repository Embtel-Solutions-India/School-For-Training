import { config } from 'dotenv';
config();

const db_config = {
  PORT: process.env.PORT || 4000,
  URI: process.env.LOCAL_DB_URL || ""
};

export default db_config;