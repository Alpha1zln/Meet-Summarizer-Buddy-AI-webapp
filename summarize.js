// This is the function where the call to the API is made. Returns the summarized text as a string.
const axios = require('axios');


async function summarizeText(text) {

  // INSERT CODE SNIPPET FROM POSTMAN BELOW

  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  // text =    Amelia, a curious astronomer, spotted a peculiar comet through her telescope. It emitted a mesmerizing glow and seemed to change course. Determined to investigate, she built a spaceship. On her journey, she encountered cosmic wonders, yet the comet remained elusive. Finally, at the edge of the universe, she understood its secret: the comet was a celestial guide, leading her to discover the boundless wonders within herself. Grateful for the voyage, Amelia returned, sharing her newfound wisdom with the world, inspiring others to explore both the cosmos and the depths of their souls.

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
     
    },
    data: data
  };

  // async function makeRequest() {
    try {
      const response = await axios.request(config);
      // console.log(JSON.stringify(response.data));
      return response.data[0].summary_text;
    }
    catch (error) {
      console.log(error);
    }
  // }

  // makeRequest();



}

// Allows for summarizeText() to be called outside of this file

module.exports = summarizeText;
