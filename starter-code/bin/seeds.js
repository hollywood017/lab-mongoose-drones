// Iteration #1
// SEED FILE
// just a JavaScript file that saves things to your database when you run it
// (makes onboarding easier and it allows you to re-populate the DB after you delete things.)
const mongoose = require('mongoose');
                                    //database name
                                    //    |
mongoose.connect('mongodb://localhost/drones');
                                    //    |
                                    // use ironshop
//We have to connect the DB again here
//because seed.js is SEPARATE from app.js
const Drone = require('../models/drone-models.js');

const droneInfoArray =[{
  name:'BB8',
  propellers: 4,
  maxSpeed: 20
},
{
  name:'Metal Drone',
  propellers: 8,
  maxSpeed: 5
},
{
  name:'MQ-9 Reaper',
  propellers: 8,
  maxSpeed: 50
}
];

Drone.create(
  droneInfoArray,                 //1st argument -> array of product info objects
  (err, droneResults) => {        //2nd argument -> callback!
    if (err){
      console.log("OMG! Database error.");
      return;
    }

    droneResults.forEach((oneDrone) =>{
      console.log('New Drone! ' + oneDrone.name);
    });
  }
);
