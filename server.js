const express = require('express')
const app = express()
const port = process.env.PORT || 5656;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/charles', (req, res) => {
  res.render('index', {
    firstname: 'Charles',
    lastname: 'Chaplin',
    tag: 'The Little Tramp',
    content: '...',
    movies: 'hi'
  })
})
app.get('/marilyn', (req, res) => {
  res.render('index', {
    firstname: 'Marilyn',
    lastname: 'Monroe',
    tag: 'Being normal is boring',
    content: '...',
    movies: 'hi'
  })
})
app.get('/jean', (req, res) => {
  res.render('index')
})
app.get('/', (req, res) => {
  res.redirect('/charles')
})
app.listen(port, () => {
    console.log('http://localhost:5656')
})
