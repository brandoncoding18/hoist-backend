import mongoose from "mongoose";

const setSchema = new mongoose.Schema({
  setno: Number,
  reps: Number,
  rpe: Number, 
  intensity: Number,
  weight: Number 

});
const exerciseSchema = new mongoose.Schema({
  exno : Number,
  name: {type: String, required: true},
  notes: String, 
  units: {type: String},
  sets: [setSchema]

});
const daySchema = new mongoose.Schema({
  dayno: Number,
  exercises: [exerciseSchema]
});
const weekSchema = new mongoose.Schema({
  weekno: Number,
  days: [daySchema]
});

const programSchema = new mongoose.Schema({
    user: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    current: Object,
    weeks: [weekSchema]
    
  },
  { collection: "programs" });
export default programSchema;

