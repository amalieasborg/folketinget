const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const routes = require('./routes/personRoutes');
const path=require('path');

mongoose.connect('mongodb://localhost:27017/filmManager', { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes)

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

//app.listen(3000, () => console.log('Server running on http://localhost:3000'));
app.listen(() => console.log(`Server running on http://localhost:${port}`));