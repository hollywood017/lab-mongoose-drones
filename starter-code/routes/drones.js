const express = require('express');
const Drone = require('../models/drone-models.js');
const router = express.Router();


// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2
Drone.find(
  (err, theDrone) => {
    if(err){
      next(err);
      return;
    }
    res.locals.drones = theDrone;
    res.render('drones/index.ejs');
  }
);
});
router.post('/drones', (req, res, next) => {
  const theDrone = new Drone({
    name: req.body.droneName,
    propellers: req.body.dronePropellers,
    maxSpeed: req.body.droneMaxSpeed
  });
  theDrone.save((err) => {
    if(err){
    //use next() to skip to the ERROR PAGE
    next(err);
    return;
  }
  // if save successfully, redirect to URL
  //(redirect is STEP 3 )
  res.redirect('/drones');
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new.ejs');
});

router.post('/drones/new', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
