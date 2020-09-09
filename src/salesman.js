const express = require('express')
const router = express.Router();
const Database = require('../database/database');
const BodyParser = require('body-parser');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())