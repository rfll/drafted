const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
const axios = require('axios');

app.listen(8080, console.log('Port 8080'));

// let playerData = [];

// app.get('/db/players', (req, res) => {

(async () => {

  const uri = `${process.env.DB_URI}`;

  const client = new MongoClient(uri);

  const database = client.db("draftApp");
  const collection = database.collection("playerData");

  const playerDataAll = await collection.findOne();
  const playerData = playerDataAll.players;

  await client.close()


  app.get('/db/players', (req, res) => {

    res.send(playerData);
  })

})()

// app.get('/db/players', (req, res) => {

//   res.send(playerData);
// })