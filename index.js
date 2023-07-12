const express = require('express');
const app = express();

// Routes
const router = require('./routes/index')()

// Set 'views' directory for any views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use('/', router)

module.exports = app

app.listen(8000)
console.log('Server is listening on port 8000')