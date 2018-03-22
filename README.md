# Booking Hotel API
API for Booking Hotel System

## Run locally
1. ```git clone https://github.com/agtamasmiftahul/booking-hotel-api.git```
2. ```cd booking-hotel-api```
3. ```npm install``` or ```yarn install```
4. Run your mysql services
5. Create database with name **hotels**
5. ```npm start``` or ```yarn start```

## Tech Stack
1. Node js
2. MySQL
3. Sequelize
4. Express js

## Routes
Method | URL | Description
-------|-----|------------
GET | /api | Test connection to API
GET | /tables | Create bookings table
GET | /api/booking | Get all data
GET | /api/booking/{id} | Get data by id
POST | /api/booking | Post data
PUT | /api/booking/{id} | Update data
DELETE | /api/booking/{id} | Delete data
