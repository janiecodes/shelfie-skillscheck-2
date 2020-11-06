require('dotenv').config();

const express = require('express');
const massive = require('massive');
const app = express();
const ctrl = require('./controller');

const port = 3012;

// const {SERVER_PORT, CONNECTION_STRING} =process.env

app.use(express.json());







app.listen(port, () => console.log(`Yahoo! Server listening on Port:${port}`));