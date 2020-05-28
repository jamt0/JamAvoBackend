const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.get('/', function (req, res) {
    res.send('Hello World desde ./')
    console.log("Estoy en ./");
});

app.use('/api/correos', require('./routes/correos'));

module.exports = app;
