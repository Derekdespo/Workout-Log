// require mongoose
const mongoose = require("mongoose");
// set up schema
const Schema = mongoose.Schema;
// create framework for schema components
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
        
    },
    exercises: [
      {
        type: {
            type: String
        },
        name: {
            type: String, 
            trim: true
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
      }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
