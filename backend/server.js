const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
const axios = require('axios');

app.listen(8080, console.log('Port 8080'));

(async () => {

  const uri = `${process.env.DB_URI}`;

  const client = new MongoClient(uri);

  const database = client.db("draftApp");
  const collection = database.collection("players");

  const playerDataAll = await collection.find().sort({'lastName': 1}).toArray();

  await client.close()


  app.get('/db/players', (req, res) => {

    res.send(playerDataAll);
  })

})()