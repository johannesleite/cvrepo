const express = require("express");
const ejs = require("ejs");
const en = require('./locales/en.json')
const no = require('./locales/no.json')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index', {lang: no})
})

app.get('/en', (req, res) => {
  res.render('index', {lang: en})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
