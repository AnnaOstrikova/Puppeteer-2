const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto("http://qamid.tmweb.ru/client/index.php", {
    setTimeout: 50000,
  });
});

When('user click on the day of the week', async function () {
  return await clickElement(page, ".page-nav__day.page-nav__day_chosen");
});

When('user click on the movie seance time', async function () {
  return await clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='199']");
});

When('user click on a free seat', async function () {
  await clickElement(this.page, ".buying-scheme__chair_standart");
 });

When('user click on the accept button', async function () {
  await clickElement(this.page, ".acceptin-button");
});



// When('user selects VIP-space', async function () {
//   await clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='199']");
//   await clickElement(this.page, ".buying-scheme__chair_vip");
//   await clickElement(this.page, ".acceptin-button");
// });

// When('user selects reserved seat', async function () {
//   await clickElement(this.page, ".movie-seances__time[href='#'][data-seance-id='199']");
//   await clickElement(this.page, ".buying-scheme__chair_disabled");
//   await clickElement(this.page, ".buying-scheme__chair_disabled");
// });


Then('user sees sees the title {string}', async function (string) {
  const actual = await getText(this.page, ".ticket__check-title");
  const expected = await string;
  await expect(actual).toContain(expected);
});


// Then('the {string} button is inactive', async function (string) {
//   const actual = await this.page.$eval("button", (button) => button.disabled);
//   expect(actual).toBe(true);
// });