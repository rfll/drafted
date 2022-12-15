const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    // headless --> false opens the browser to watch the script execute
    headless: false,
    // ignoreHTTPSErrors allows navigation through http
    'ignoreHTTPSErrors': true
  });
  const page = await browser.newPage();
  page.on('console', msg => console.log(msg.text()));

  await page.goto('https://www.sports-reference.com/cbb/players/jarace-walker-1.html');

  // Type into search box.
  // await page.type('.devsite-search-field', 'Headless Chrome');

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '.devsite-suggest-all-results';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Wait for the page to load and display the results.
  const resultsSelector = 'div > #div_players_per_game';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    return [...document.querySelectorAll(resultsSelector)].map(anchor => {
      // const title = anchor.textContent.split('|')[0].trim();
      // return `${title} - ${anchor.href}`;
      console.log(anchor)
    });
  }, resultsSelector);

  // Print all the files.
  // console.log(links.join('\n'));

  await browser.close();
})();