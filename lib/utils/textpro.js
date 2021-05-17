const request = require("request");
const cheerio = require("cheerio");

const tema = {
  shadow: "https://textpro.me/xmas-cards-3d-online-942.html",
  romantic: "https://textpro.me/pornhub-style-logo-online-generator-free-977.html"
}

async function tXmas(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.xmas,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function tPornhub(text1, text2) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.Pornhub,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, text_2: text2, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

module.exports = {
  tXmas,
  tPornhub
};
