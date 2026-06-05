const puppeteer = require("puppeteer");

const BASE = "http://localhost:8000";

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test("title содержит Lab11", async () => {
  await page.goto(BASE);
  const title = await page.title();
  expect(title).toContain("Lab11");
});

test("форма существует", async () => {
  await page.goto(BASE);
  const form = await page.$("#regForm");
  expect(form).not.toBeNull();
});

test("можно ввести имя пользователя", async () => {
  await page.goto(BASE);
  await page.type("#username", "TestUser");
  const val = await page.$eval("#username", el => el.value);
  expect(val).toBe("TestUser");
});

test("кнопка имеет текст Отправить", async () => {
  await page.goto(BASE);
  const text = await page.$eval("#submitBtn", el => el.textContent);
  expect(text).toBe("Отправить");
});