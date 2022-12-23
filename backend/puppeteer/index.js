const puppeteer = require('puppeteer');

async function scraper() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://www.sports-reference.com/cbb/players/jarace-walker-1.html', { waitUntil: 'domcontentloaded' });
  await page.goto('https://www.sports-reference.com/cbb/players/cam-whitmore-1.html', { waitUntil: 'domcontentloaded' });


  const data = await page.$$eval('#wrap', option => {
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
        oRating: row.querySelector(".right[data-stat='off_rtg']").textContent,
        dRating: row.querySelector(".right[data-stat='def_rtg']").textContent,
        wsPer40: row.querySelector(".right[data-stat='ws_per_40']").textContent,
        bpm: row.querySelector(".right[data-stat='bpm']").textContent
      }
    })
  })

  console.log(data);

  await browser.close();
}


scraper();