require('newrelic');
const express = require('express');
const app = express();
let proxy = require('http-proxy-middleware');

require('dotenv').config();


//set up for future deployment:
let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}


app.use(proxy('/api/audienceReviews', {target: 'http://localhost:8100'}));
// app.use(proxy('/api/audienceReviews', {target: 'http://ec2-34-222-160-243.us-west-2.compute.amazonaws.com:8000'}));
app.use(express.static('public'));

app.listen(port, () => console.log(`proxy server on ${port} is here!`));
