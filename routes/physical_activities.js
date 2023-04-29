const express = require('express');
const router = express.Router();


const {PhysicalActivities} = require('../models');


/* GET PhysicalActivities page. */
router.get('/', function(req, res, next) {
  res.render('Physical_Activities', { title: 'PhysicalActivities' });
});


module.exports = router;
