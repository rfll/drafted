const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
const axios = require('axios');

app.use(express.static('../frontend'));
app.listen(8080, console.log('Port 8080'));


// async function listDatabases(client){
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// (async() => {

//   const uri = `${process.env.DB_URI}`;
//   const client = new MongoClient(uri);
//   await client.connect();
//   await listDatabases(client);
//   await client.close();

// })();

const data = JSON.stringify({
    "collection": `${process.env.DB_COLLECTION}`,
    "database": `${process.env.DB_NAME}`,
    "dataSource": `${process.env.DB_CLUSTER}`
});
            
const config = {
    method: 'post',
    url: `${process.env.DB_API_URL}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': `${process.env.DB_KEY}`,
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        // console.log(JSON.stringify(response.data));
        console.log(response.data.document);
    })
    .catch(function (error) {
        console.log(error);
    });
