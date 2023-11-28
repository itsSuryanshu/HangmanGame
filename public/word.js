const fetch = require("node-fetch");
const config = require("../config");

//ADD YOUR OWN API_KEY BELOW FROM https://api-ninjas.com/
const apiKey = config.API_KEY;

const apiUrl = "https://api.api-ninjas.com/v1/randomword/";

const getRandomWord = async () => {
  try {
    const request = await fetch(apiUrl, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
      contentType: "application/json",
    });
    //   .then((response) => response.json())
    //   .then((json) => (word = json.word));
    if (request.ok) {
      const jsonRequest = await request.json();
      const word = jsonRequest.word;
      return word.toLowerCase();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getRandomWord };
