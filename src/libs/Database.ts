const mongoose = require('mongoose');
export default class Database {
  public static async open(mongoURL: string) {
    const options = {
      autoIndex: false,
      minPoolSize: 10, //maintains 10 connections socket
    };
    try {
      await mongoose.connect(mongoURL, options);
      console.log('Connected to MongoDB Successfully!');
      return true;
    } catch (e) {
      throw new Error(`MongoDb connection Failed: ${mongoURL}`);
    }
  }
  public static close() {
    mongoose.disconnect();
  }
}