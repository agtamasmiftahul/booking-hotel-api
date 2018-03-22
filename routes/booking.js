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

// GET all data from table
router.get('/', (req, res, next) => {
  Booking.findAll()
    .then(bookings => {
      res.send(JSON.parse(JSON.stringify(bookings)))
    })
});

// GET one data by id from table
router.get('/:id', (req, res, next) => {
  Booking.findById(
      req.params.id
    )
    .then(bookings => {
      res.send(JSON.parse(JSON.stringify(bookings)))
    })
});

// POST data into table
router.post('/', (req, res, next) => {
  Booking.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      identityNumber: req.body.identityNumber,
      startDate: req.body.startDate,
      lastDate: req.body.lastDate,
      roomNumber: req.body.roomNumber
    })
    .then(() => {
      res.send({
        message: 'Data created successfully.'
      });
    })
    .catch(err => {
      res.send({
        message: 'Unable create data',
        err
      });
    });
});

// UPDATE data
router.put('/:id', (req, res, next) => {
  Booking.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      indentityNumber: req.body.identityNumber,
      startDate: req.body.startDate,
      lastDate: req.body.lastDate,
      roomNumber: req.body.roomNumber
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(() => {
      res.send({
        message: 'Update data successfully.'
      });
    })
    .catch(err => {
      res.send({
        message: 'Unable update data',
        err
      });
    });
});

module.exports = router;
