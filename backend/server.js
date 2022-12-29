const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();

app.use(express.static('../frontend'));
app.listen(8080, console.log('Port 8080'));


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

(async() => {

  const uri = `${process.env.DB_URI}`;
  const client = new MongoClient(uri);
  await client.connect();
  await listDatabases(client);
  await client.close();

})();