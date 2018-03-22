var express = require('express');
var router = express.Router();
//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('hotels', 'root', 'toor', {
  host: "127.0.0.1",
  port: 3306,
  dialect: 'mysql'
});

//Checking connection status
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Booking = sequelize.define('booking', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  identityNumber: {
    type: Sequelize.STRING
  },
  startDate: {
    type: Sequelize.DATE
  },
  lastDate: {
    type: Sequelize.DATE
  },
  roomNumber: {
    type: Sequelize.STRING
  }
});

//create table
router.get('/tables', (req, res, next) => {
  Booking.sync({
      force: true
    })
    .then(() => {
      res.send({
        message: 'Table created successfully.'
      });
    })
    .catch(err => {
      res.send({
        message: 'Unable create table',
        err
      });
    });
});

module.exports = router;
