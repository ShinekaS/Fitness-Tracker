const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const nutritionLogsRouter = require('./routes/nutrition_log');
const physicalActivityRouter = require('./routes/physical_activities');

const app = express();

// const Sequelize = require('sequelize');
// const { User } = require('./models');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nutrition_log', nutritionLogsRouter);
app.use('/physical_activities', physicalActivityRouter);

module.exports = app;
