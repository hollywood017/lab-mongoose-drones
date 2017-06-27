const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myDroneSchema = new Schema({
  name: {type: String},
  propellers: {type: Number},
  maxSpeed: {type: Number}

});
//Model
//  constructor function that allows us to interact with a single collection
 const Drone = mongoose.model('Drone', myDroneSchema);
//                                  |
//   --------------------------------
//   |
// 'Drone'  ->   'drones'  ->   db.drones.find()
//
//Collection name is automatically determined by mongoose


//DON'T FORGET THIS OR IT WILL NOT WORK
module.exports = Drone;
