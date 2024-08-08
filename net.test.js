const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Testing cinema ticket booking", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The reservation of free space", async () => {
    await clickElement(page, ".page-nav__day.page-nav__day_chosen");
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='199']");
    await clickElement(page, ".buying-scheme__chair_standart");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".ticket__check-title");
    await expect(actual).toContain("Вы выбрали билеты:");
  });

  test("The reservation of VIP-space", async () => {
    await clickElement(page, ".page-nav__day.page-nav__day_chosen")
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='199']");
    await clickElement(page, ".buying-scheme__chair_vip");
    await clickElement(page, ".acceptin-button");
    const actual = await getText(page, ".ticket__check-title");
    await expect(actual).toContain("Вы выбрали билеты:");
  });

  test("The reserved seat reservation", async () => {
    await clickElement(page, ".page-nav__day.page-nav__day_chosen")
    await clickElement(page, ".movie-seances__time[href='#'][data-seance-id='199']");
    await clickElement(page, ".buying-scheme__chair_disabled");
    await clickElement(page, ".buying-scheme__chair_disabled");
    const actual = await page.$eval("button", (button) => button.disabled);
    expect(actual).toBe(true);
  });
});
