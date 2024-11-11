const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/personRoutes');
const path=require('path');


require('dotenv').config();
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/folketinget', { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes)

//Middleware
app.use(express.static(path.join(__dirname, 'public')));

//app.listen(3000, () => console.log('Server running on http://localhost:3000'));
app.listen(3000,() => console.log(`Server running on http://localhost:3000`));