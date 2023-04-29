const express = require('express');
const router = express.Router();

const { NutritionLog } = require('../models');

/* GET Nutrition_logs page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ title: 'NutritionLog' });
});

module.exports = router;
