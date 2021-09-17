const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const { addRoute } = require('./utils');

const router = express.Router();

const ennara = require('./ennara');
const { getPlayers, getRewards } = ennara;

addRoute(router, '/players', getPlayers);
addRoute(router, '/rewards', getRewards);

const hodwartz = require('./hodwartz');
const { getChart } = hodwartz;

addRoute(router, '/chart', getChart);

const mon = require('./mon');
const { getMons, getTrainers } = mon;

addRoute(router, '/mons', getMons);
addRoute(router, '/trainers', getTrainers);

app.use(bodyParser.json());
app.use('/.netlify/functions/simple-be', router);
app.use('/', (_, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
