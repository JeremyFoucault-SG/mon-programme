import { MongoMemoryServer } from 'mongodb-memory-server';
import { Logger } from '@nestjs/common';
import * as mongoose from 'mongoose'
export async function startInMemoryDB() {
  const mongod = new MongoMemoryServer({ instance: { ip: '0.0.0.0', dbName: 'monprogramme', port: 27017 } });

  try {
    process.env.MONGO_URI = await mongod.getConnectionString();
    await mongoose.connect(process.env.MONGO_URI);
    const collections = await mongoose.connection.db.collections();

    for (const collection of collections) {
      await collection.deleteMany({})
    }

  } catch (err) {
    Logger.error('---------------------------');
    Logger.error(err);
    Logger.error('---------------------------');
  }
  Logger.log('-----------------------------------------------------------------------');
  Logger.log('Mongo In Memory Server succesfully started', 'startInMemoryDB()');
  Logger.log(`uri : ${process.env.MONGO_URI}`, 'startInMemoryDB()');
  Logger.log('-----------------------------------------------------------------------');
  return mongod;
}
