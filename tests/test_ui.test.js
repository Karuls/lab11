const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "../index.html"), "utf8");

test("title содержит Lab11", () => {
  expect(html).toContain("<title>Lab11");
});

test("форма существует", () => {
  expect(html).toContain('id="regForm"');
});

test("поле username существует", () => {
  expect(html).toContain('id="username"');
});

test("кнопка имеет текст Отправить форму", () => {
  expect(html).toContain("Отправить форму");
});