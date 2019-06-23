const express = require('express');
const bodyParser = require('body-parser');
const {getIdeas, addIdeas} = require('../database/controllers/index.js')
var cors = require('cors')




const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

app.post('/addidea', (req, res) => {
  addIdeas (req, res)
  console.log(req.body)
  //console.log(req.data)
 // console.log(res.body)
});

app.get('/addidea', (req, res, err) => {
  getIdeas(req, res)
  if (err) {
    console.log(err)
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
