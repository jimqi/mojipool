const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');

app.use(cors);

const authCheck = jwt({
    secret: new Buffer('Your_AUTH0_SECRET', 'base64'),
    audience: 'AUTH0_Client_ID'
});