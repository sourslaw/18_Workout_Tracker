const router = require("express").Router();
const Workout = require("../models/Workout.js");

// get workouts (GET)
router.get("/api/workouts", (req, res) => {

	Workout.find({}).then(dbWorkout => {
		res.json(dbWorkout);
		
	  }).catch(err => {
		res.status(400).json(err);
	  });
  });
// add exercise (POST)

// creaete workout (POST)

// get workouts in range (GET)

module.exports = router;