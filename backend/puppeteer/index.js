const puppeteer = require('puppeteer');
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();
const axios = require('axios');


(async () => {

  const uri = `${process.env.DB_URI}`;

  const client = new MongoClient(uri);

  const database = client.db("draftApp");
  const collection = database.collection("playerData");

  const playerDataAll = await collection.findOne();
  const playerData = playerDataAll.players;

  // console.log(playerData);


  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (let i = 0; i < playerData.length; i++) {
    const url = playerData[i].url;

    await page.goto(`${url}`, { waitUntil: 'domcontentloaded' });


    const [data] = await page.$$eval('#wrap', option => {
      return option.map(row => {
        return {
          name: row.querySelector("#meta > div > h1 > span")?.textContent,
          height: row.querySelector("#meta > div > p:nth-child(3) > span:nth-child(1)")?.textContent,
          weight: row.querySelector("#meta > div > p:nth-child(3) > span:nth-child(2)")?.textContent,
          team: row.querySelector("#players_per_game\\.2023 > .left[data-stat='school_name'] > a")?.textContent,
          gamesPlayed: row.querySelector("#players_per_game\\.2023 > .right[data-stat='games']")?.textContent,
          minutes: row.querySelector("#players_per_game\\.2023 > .right[data-stat='mp_per_g']")?.textContent,
          points: row.querySelector("#players_per_game\\.2023 > .right[data-stat='pts_per_g']")?.textContent,
          assists: row.querySelector("#players_per_game\\.2023 > .right[data-stat='ast_per_g']")?.textContent,
          rebounds: row.querySelector("#players_per_game\\.2023 > .right[data-stat='trb_per_g']")?.textContent,
          steals: row.querySelector("#players_per_game\\.2023 > .right[data-stat='stl_per_g']")?.textContent,
          blocks: row.querySelector("#players_per_game\\.2023 > .right[data-stat='blk_per_g']")?.textContent,
          turnovers: row.querySelector("#players_per_game\\.2023 > .right[data-stat='tov_per_g']")?.textContent,
          fouls: row.querySelector("#players_per_game\\.2023 > .right[data-stat='pf_per_g']")?.textContent,
          fgPercentage: row.querySelector("#players_per_game\\.2023 > .right[data-stat='fg_pct']")?.textContent,
          threePercentage: row.querySelector("#players_per_game\\.2023 > .right[data-stat='fg3_pct']")?.textContent,
          stlPercentage: row.querySelector("#players_advanced\\.2023 > .right[data-stat='stl_pct']")?.textContent,
          blkPercentage: row.querySelector("#players_advanced\\.2023 > .right[data-stat='blk_pct']")?.textContent,
          per: row.querySelector("#players_advanced\\.2023 > .right[data-stat='per']")?.textContent,
          offRating: row.querySelector("#players_per_poss\\.2023 > .right[data-stat='off_rtg']")?.textContent,
          defRating: row.querySelector("#players_per_poss\\.2023 > .right[data-stat='def_rtg']")?.textContent,
          wsPer40: row.querySelector("#players_advanced\\.2023 > .right[data-stat='ws_per_40']")?.textContent,
          bpm: row.querySelector("#players_advanced\\.2023 > .right[data-stat='bpm']")?.textContent
        }
      })
    })

    // console.log(data.name);
    

    const filter = { "players.name" : data.name };
    const updateDoc = {
      $set: {
        "players.$" : {
          "name": data.name,
          "url": url,
          "height": data.height,
          "weight": data.weight,
          "team": data.team,
          "gamesPlayed": data.gamesPlayed,
          "minutesPerGame": data.minutes,
          "pointsPerGame": data.points,
          "assistsPerGame": data.assists,
          "reboundsPerGame": data.rebounds,
          "stealPerGame": data.steals,
          "blocksPerGame": data.blocks,
          "turnoversPerGame": data.turnovers,
          "foulsPerGame": data.fouls,
          "fgPercentage": data.fgPercentage,
          "threePercentage": data.threePercentage,
          "stlPercentage": data.stlPercentage,
          "blkPercentage": data.blkPercentage,
          "per": data.per,
          "offRating": data.offRating,
          "defRating": data.defRating,
          "wsPer40": data.wsPer40,
          "bpm": data.bpm
        }
      }
    }

    const result = await collection.updateOne(filter, updateDoc);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s) for ${data.name}`,
    );

  }

  await client.close();

  await browser.close();
})();

