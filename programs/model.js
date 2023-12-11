import mongoose from "mongoose";
import schema from "./schema.js";
const programModel = mongoose.model("programs", schema);
export default programModel;