const { MongoClient } = require('mongodb');
const XCollection = require('mongodb-xcollection');

class MongoDb {
  static async connect(connectionString, dbName) {
    const client = await MongoClient.connect(connectionString);
    return new MongoDb(client, dbName);
  }

  constructor(client, dbName) {
    this.client = client;
    if (dbName) {
      this.db = client.db(dbName);
    }
  }

  close() {
    if (!this.client || !this.client.isConnected()) return null;
    return this.client.close();
  }

  siblingDb(dbName) {
    return this.client.db(dbName);
  }

  xcollection(schema, options = {}) {
    return new XCollection(this, schema, options);
  }
}

module.exports = MongoDb;