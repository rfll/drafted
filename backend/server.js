const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
// dotenv.config();
const uri = `${process.env.DB_URI}`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});