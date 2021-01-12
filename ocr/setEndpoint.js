// $env:GOOGLE_APPLICATION_CREDENTIALS="D:\GitHub\ocr_googleapi_test\auth\StudyEnglish-0e5094e14cd7.json"

const express = require("express");
const router = express.Router();

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

async function setEndpoint() {
  // Specifies the location of the api endpoint
  const clientOptions = {apiEndpoint: 'vision.googleapis.com'};

  // Creates a client
  const client = new vision.ImageAnnotatorClient(clientOptions);

  // Performs text detection on the image file
  const [result] = await client.textDetection('./resources/test.png');
  const labels = result.textAnnotations;
  console.log('Text:');
  labels.forEach(label => console.log(label.description));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  setEndpoint();
  res.send('oci page'); 
});
 
module.exports = router;
