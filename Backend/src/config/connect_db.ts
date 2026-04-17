import mongoose from 'mongoose';
import db_config from './db_config';

const connect_to_db = async () => {
  try {
    const { URI } = db_config;

    console.log("USING DB:", URI); // DEBUG

    await mongoose.connect(URI);

    console.log("SERVER LOAD");
    console.log("connected to MongoDb");

  } catch (error) {
    console.log("DB ERROR:", error);
    process.exit(1);
  }
};

export default connect_to_db;