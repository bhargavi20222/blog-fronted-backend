const express = require("express");

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());


require('./db/conne');

app.use('/public/', express.static('public'));

app.listen(1031, () => {
    console.log("Sever Start...");
});

app.use('/api', require('./api/crudapi'));

app.use('/', (req, res) => {
    return res.send("<h1 align='center'>Blog Backend</h1>");
})