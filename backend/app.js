const express = require("express");
const cors = require("cors");
require("dotenv").config();

const roversRoute = require('./routes/rovers');
const manifestsRoute = require('./routes/manifests');
const photosRoute = require('./routes/photos');
const apodRoute = require('./routes/apod');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/rovers', roversRoute);
app.use('/api/manifests', manifestsRoute);
app.use('/api/photos', photosRoute);
app.use('/api/apod', apodRoute);

module.exports = app;