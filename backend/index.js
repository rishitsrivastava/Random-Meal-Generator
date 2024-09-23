const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000

const router = require('./routes/index')

app.use('/api/v1', router);

app.listen(port, () => {
    console.log("backend running on the ", port);
});