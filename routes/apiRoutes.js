const db = require("../models");

module.exports = function(app) {
  app.get("/api/workout", function(req, res) {
    db.Workout.find({}).then(function(dbWorkout) {
        let test = db.Workout.aggregate([
            {
                $addFields: {
                  totalDuration: { $sum: "$exercises.duration" } ,
                  
                }
              },
        ])
        console.log(test)
        res.json(dbWorkout);
    });
  });


};
