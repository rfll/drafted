const puppeteer = require('puppeteer');
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
const axios = require('axios');


(async () => {

  const db = JSON.stringify({
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
    data: db
  };

  const playerData = [];
  const urls = [];

  await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      // console.log(response.data.document);
      return response.data.document.players.forEach(element => urls.push(element.url));
    })
    .catch(function (error) {
      console.log(error);
    });

  // console.log(urls);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    await page.goto(`${url}`, { waitUntil: 'domcontentloaded' });


    const [data] = await page.$$eval('#wrap', option => {
      return option.map(row => {
        return {
          name: row.querySelector("#meta > div > h1 > span").textContent,
          height: row.querySelector("#meta > div > p:nth-child(3) > span:nth-child(1)").textContent,
          weight: row.querySelector("#meta > div > p:nth-child(3) > span:nth-child(2)").textContent,
          team: row.querySelector("#meta > div > p:nth-child(7) > a").textContent,
          gamesPlayed: row.querySelector(".right[data-stat='games']").textContent,
          minutes: row.querySelector(".right[data-stat='mp_per_g']").textContent,
          points: row.querySelector(".right[data-stat='pts_per_g']").textContent,
          assists: row.querySelector(".right[data-stat='ast_per_g']").textContent,
          rebounds: row.querySelector(".right[data-stat='trb_per_g']").textContent,
          steals: row.querySelector(".right[data-stat='stl_per_g']").textContent,
          blocks: row.querySelector(".right[data-stat='blk_per_g']").textContent,
          turnovers: row.querySelector(".right[data-stat='tov_per_g']").textContent,
          fouls: row.querySelector(".right[data-stat='pf_per_g']").textContent,
          fgPercentage: row.querySelector(".right[data-stat='fg_pct']").textContent,
          threePercentage: row.querySelector(".right[data-stat='fg3_pct']").textContent,
          stlPercentage: row.querySelector(".right[data-stat='stl_pct']").textContent,
          blkPercentage: row.querySelector(".right[data-stat='blk_pct']").textContent,
          per: row.querySelector(".right[data-stat='per']").textContent,
          offRating: row.querySelector(".right[data-stat='off_rtg']").textContent,
          defRating: row.querySelector(".right[data-stat='def_rtg']").textContent,
          wsPer40: row.querySelector(".right[data-stat='ws_per_40']").textContent,
          bpm: row.querySelector(".right[data-stat='bpm']").textContent
        }
      })
    })

    console.log(data);

    await data.findOneAndUpdate(
      {name: data.name},
      { $push: data }
    )
  }

  await browser.close();
})();

