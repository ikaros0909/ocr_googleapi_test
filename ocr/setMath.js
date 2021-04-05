const fs = require("fs");
const path = require("path")
const express = require("express");
const request = require("request")
const router = express.Router();

async function setEndpoint() {
  let text;
  const fileName = "./resources/eq1_1.png";
  const imageFile = fs.readFileSync(fileName);
  const image = Buffer.from(imageFile).toString("base64");

  //API Key
  var options = {
    'method': 'POST',
    'url': 'https://api.mathpix.com/v3/text',
    'headers': {
      'app_id': 'ikaros0909_gmail_com_5c4b0a_9aa1c9',
      'app_key': '1f7197c2e9f79e71b2ff',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // "src":"https://mathpix.com/examples/limit.jpg",
        "src":"https://github.com/ikaros0909/ocr_googleapi_test/blob/main/resources/test5.jpg?raw=true",        
        "formats":["text","data","html"],
        "data_options":{"include_asciimath":true,"include_latex":true}})
  };
  
  //API 결과
  var result = '';
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    result = response.body;
  });
}


/* GET home page. */
router.get('/', function(req, res, next) {
    setEndpoint();
    res.send('oci math page'); 
});

module.exports = router;
