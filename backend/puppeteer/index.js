const puppeteer = require("puppeteer");
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv").config();
const axios = require("axios");

(async () => {
  const uri = `${process.env.DB_URI}`;

  const client = new MongoClient(uri);

  const database = client.db("draftApp");
  const collection = database.collection("players");
  const playerDataAll = await collection.find().toArray();
  const playerData = playerDataAll.reverse();

  const browser = await puppeteer.launch({
    args: ["--proxy-server=http://45.94.47.66:8110"],
  });
  // const page = await browser.newPage();
  const page = (await browser.pages())[0];

  for (let i = 0; i < playerData.length; i++) {
    const url = playerData[i].url;
    const img = playerData[i].img;
    const lastName = playerData[i].lastName;
    const name = playerData[i].name;
    const league = playerData[i].league;
    const team = playerData[i].team;
    const height = playerData[i].height;
    const weight = playerData[i].weight;

    await page.goto(`${url}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout((Math.floor(Math.random() * 12) + 5) * 1000);

    if (league === "NCAA") {
      const [data] = await page.$$eval("#wrap", (option) => {
        return option.map((row) => {
          return {
            height: row.querySelector(
              "#meta > div > p:nth-child(3) > span:nth-child(1)"
            )?.textContent,
            weight: row.querySelector(
              "#meta > div > p:nth-child(3) > span:nth-child(2)"
            )?.textContent,
            team: row.querySelector(
              "#players_per_game\\.2023 > .left[data-stat='school_name'] > a"
            )?.textContent,
            gamesPlayed: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='games']"
            )?.textContent,
            minutes: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='mp_per_g']"
            )?.textContent,
            points: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='pts_per_g']"
            )?.textContent,
            assists: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='ast_per_g']"
            )?.textContent,
            rebounds: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='trb_per_g']"
            )?.textContent,
            steals: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='stl_per_g']"
            )?.textContent,
            blocks: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='blk_per_g']"
            )?.textContent,
            turnovers: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='tov_per_g']"
            )?.textContent,
            fouls: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='pf_per_g']"
            )?.textContent,
            fgPercentage: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='fg_pct']"
            )?.textContent,
            threePercentage: row.querySelector(
              "#players_per_game\\.2023 > .right[data-stat='fg3_pct']"
            )?.textContent,
            stlPercentage: row.querySelector(
              "#players_advanced\\.2023 > .right[data-stat='stl_pct']"
            )?.textContent,
            blkPercentage: row.querySelector(
              "#players_advanced\\.2023 > .right[data-stat='blk_pct']"
            )?.textContent,
            per: row.querySelector(
              "#players_advanced\\.2023 > .right[data-stat='per']"
            )?.textContent,
            offRating: row.querySelector(
              "#players_per_poss\\.2023 > .right[data-stat='off_rtg']"
            )?.textContent,
            defRating: row.querySelector(
              "#players_per_poss\\.2023 > .right[data-stat='def_rtg']"
            )?.textContent,
            wsPer40: row.querySelector(
              "#players_advanced\\.2023 > .right[data-stat='ws_per_40']"
            )?.textContent,
            bpm: row.querySelector(
              "#players_advanced\\.2023 > .right[data-stat='bpm']"
            )?.textContent,
          };
        });
      });

      const filter = { name: name };
      const updateDoc = {
        $set: {
          name: name,
          lastName: lastName,
          url: url,
          img: img,
          height: data.height,
          weight: data.weight,
          league: league,
          team: data.team,
          gamesPlayed: data.gamesPlayed,
          minutesPerGame: data.minutes,
          pointsPerGame: data.points,
          assistsPerGame: data.assists,
          reboundsPerGame: data.rebounds,
          stealPerGame: data.steals,
          blocksPerGame: data.blocks,
          turnoversPerGame: data.turnovers,
          foulsPerGame: data.fouls,
          fgPercentage: data.fgPercentage,
          threePercentage: data.threePercentage,
          stlPercentage: data.stlPercentage,
          blkPercentage: data.blkPercentage,
          per: data.per,
          offRating: data.offRating,
          defRating: data.defRating,
          wsPer40: data.wsPer40,
          bpm: data.bpm,
        },
      };

      const result = await collection.updateOne(filter, updateDoc);

      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s) for ${name}`
      );
    }

    if (league === "INT") {
      const [data] = await page.$$eval("#wrap", (option) => {
        return option.map((row) => {
          return {
            height: row.querySelector(
              "#meta > div > p:nth-child(3) > span"
            )?.textContent,
            weight: row.querySelector(
              "#meta > div:nth-child(2) > p:nth-child(3) > span:nth-child(2)"
            )?.textContent,
            team: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > td:nth-child(2) > a"
            )?.textContent,
            gamesPlayed: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='g']"
            )?.textContent,
            minutes: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='mp_per_g']"
            )?.textContent,
            points: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='pts_per_g']"
            )?.textContent,
            assists: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='ast_per_g']"
            )?.textContent,
            rebounds: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='trb_per_g']"
            )?.textContent,
            steals: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='stl_per_g']"
            )?.textContent,
            blocks: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='blk_per_g']"
            )?.textContent,
            turnovers: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='tov_per_g']"
            )?.textContent,
            fouls: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='pf_per_g']"
            )?.textContent,
            fgPercentage: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='fg_pct']"
            )?.textContent,
            threePercentage: row.querySelector(
              "#player-stats-per_game-league- > tbody > tr:last-child > .right[data-stat='fg3_pct']"
            )?.textContent,
          };
        });
      });

      const filter = { name: name };
      const updateDoc = {
        $set: {
          name: name,
          lastName: lastName,
          url: url,
          img: img,
          height: data.height,
          weight: data.weight,
          league: league,
          team: data.team,
          gamesPlayed: data.gamesPlayed,
          minutesPerGame: data.minutes,
          pointsPerGame: data.points,
          assistsPerGame: data.assists,
          reboundsPerGame: data.rebounds,
          stealPerGame: data.steals,
          blocksPerGame: data.blocks,
          turnoversPerGame: data.turnovers,
          foulsPerGame: data.fouls,
          fgPercentage: data.fgPercentage,
          threePercentage: data.threePercentage,
          stlPercentage: data.stlPercentage,
          blkPercentage: data.blkPercentage,
          per: data.per,
          offRating: data.offRating,
          defRating: data.defRating,
          wsPer40: data.wsPer40,
          bpm: data.bpm,
        },
      };

      const result = await collection.updateOne(filter, updateDoc);

      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s) for ${name}`
      );
    }

    if (league === "GLI") {
      const [data] = await page.$$eval("#wrap", (option) => {
        return option.map((row) => {
          return {
            height: row.querySelector(
              "#meta > div > p:nth-child(3) > span:nth-child(1)"
            )?.textContent,
            weight: row.querySelector(
              "#meta > div > p:nth-child(3) > span:nth-child(2)"
            )?.textContent,
            team: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .left[data-stat='team_id'] > a"
            )?.textContent,
            gamesPlayed: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='g']"
            )?.textContent,
            minutes: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='mp_per_g']"
            )?.textContent,
            points: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='pts_per_g']"
            )?.textContent,
            assists: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='ast_per_g']"
            )?.textContent,
            rebounds: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='trb_per_g']"
            )?.textContent,
            steals: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='stl_per_g']"
            )?.textContent,
            blocks: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='blk_per_g']"
            )?.textContent,
            turnovers: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='tov_per_g']"
            )?.textContent,
            fouls: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='pf_per_g']"
            )?.textContent,
            fgPercentage: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='fg_pct']"
            )?.textContent,
            threePercentage: row.querySelector(
              "#nbdl_per_game-reg > tbody > tr:last-child > .right[data-stat='fg3_pct']"
            )?.textContent,
            stlPercentage: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='stl_pct']"
            )?.textContent,
            blkPercentage: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='blk_pct']"
            )?.textContent,
            per: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='per']"
            )?.textContent,
            offRating: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='off_rtg']"
            )?.textContent,
            defRating: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='def_rtg']"
            )?.textContent,
            wsPer48: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='ws_per_48']"
            )?.textContent,
            trueShooting: row.querySelector(
              "#nbdl_advanced-reg > tbody > tr:last-child > .right[data-stat='ts_pct']"
            )?.textContent
          };
        });
      });

      const filter = { name: name };
      const updateDoc = {
        $set: {
          name: name,
          lastName: lastName,
          url: url,
          img: img,
          height: data.height,
          weight: data.weight,
          league: league,
          team: data.team,
          gamesPlayed: data.gamesPlayed,
          minutesPerGame: data.minutes,
          pointsPerGame: data.points,
          assistsPerGame: data.assists,
          reboundsPerGame: data.rebounds,
          stealPerGame: data.steals,
          blocksPerGame: data.blocks,
          turnoversPerGame: data.turnovers,
          foulsPerGame: data.fouls,
          fgPercentage: data.fgPercentage,
          threePercentage: data.threePercentage,
          trueShooting: data.trueShooting,
          stlPercentage: data.stlPercentage,
          blkPercentage: data.blkPercentage,
          per: data.per,
          offRating: data.offRating,
          defRating: data.defRating,
          wsPer48: data.wsPer48,
          bpm: data.bpm
        },
      };

      const result = await collection.updateOne(filter, updateDoc);

      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s) for ${name}`
      );
    }

    if (league === "OTE") {
      const [data] = await page.$$eval(".PlayerSeason", (option) => {
        return option.map((row) => {
          return {
            minutes: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(8)"
            )?.textContent,
            points: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(2)"
            )?.textContent,
            assists: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(3)"
            )?.textContent,
            rebounds: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(4)"
            )?.textContent,
            steals: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(5)"
            )?.textContent,
            blocks: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(6)"
            )?.textContent,
            turnovers: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(23)"
            )?.textContent,
            fouls: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(22)"
            )?.textContent,
            fgPercentage: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(17)"
            )?.textContent,
            threePercentage: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(14)"
            )?.textContent,
            ftPercentage: row.querySelector(
              "#root > div > div > div > div > div > div.content.ContentContainer > div > div > div > div > table > tbody > tr.Average > td:nth-child(20)"
            )?.textContent
          };
        });
      });

      const filter = { name: name };
      const updateDoc = {
        $set: {
          name: name,
          lastName: lastName,
          url: url,
          img: img,
          height: height,
          weight: weight,
          league: league,
          team: team,
          gamesPlayed: '16',
          minutesPerGame: data.minutes,
          pointsPerGame: data.points,
          assistsPerGame: data.assists,
          reboundsPerGame: data.rebounds,
          stealPerGame: data.steals,
          blocksPerGame: data.blocks,
          turnoversPerGame: data.turnovers,
          foulsPerGame: data.fouls,
          fgPercentage: data.fgPercentage,
          threePercentage: data.threePercentage,
          ftPercentage: data.ftPercentage,
          trueShooting: data.trueShooting,
          stlPercentage: data.stlPercentage,
          blkPercentage: data.blkPercentage,
          per: data.per,
          offRating: data.offRating,
          defRating: data.defRating,
          wsPer48: data.wsPer48,
          bpm: data.bpm
        },
      };

      const result = await collection.updateOne(filter, updateDoc);

      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s) for ${name}`
      );
    }
  }

  await client.close();

  await browser.close();
})();
// console.log(`A document was inserted with the _id: ${result.insertedId}`)
