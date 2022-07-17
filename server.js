const express = require('express')
const app = express()
const port = process.env.PORT || 5656;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/', (req, res) => {
  res.redirect('index')
})
app.listen(port, () => {
    console.log('http://localhost:5656')
})
