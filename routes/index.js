const express = require('express');
const user = require('./users');
const film = require('./films');
const rating = require('./rating');
const reviews = require("./reviews")
const categories = require('./categories');
const countries = require('./countries');

const router = express();

router.use('/user', user);
router.use('/films', film);
router.use('/films/rating', rating);
router.use('/films/reviews', reviews);
router.use('/categories', categories);
router.use('/countries', countries);

module.exports = router
