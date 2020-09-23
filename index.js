var express = require('express');
var bodyParser = require('body-parser');
const URL = "https://wa.notifyabhi.com/api/whatsapp/messages";
var axios = require('axios');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/test", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.post("/webhook", function (request, response, next) {
  console.log('request: ', request.body);
  // let req = JSON.stringify(request.body)
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  setTimeout(() => {
    response.sendStatus(200)
  }, 5000)
  axios.post(URL, request.body).then(res => {
  }).catch(err => {
    console.log(err, "Errorrrr")
  })
});

var listener = app.listen(5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;