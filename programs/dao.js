import programModel from "./model.js";
export const createProgram = (program) => programModel.create(program);
export const findAllPrograms = () => programModel.find();
export const findProgramByUser = (username) =>
programModel.find({user : username});
export const updateProgram = (programName, program) =>
programModel.updateOne({ name: programName }, { $set: program });


/*
export const findUserByCredentials = (username, password) =>
userModel.findOne({ username, password });
export const updateUser = (userId, user) =>
userModel.updateOne({ username: userId }, { $set: user });
export const deleteUser = (userId) => userModel.deleteOne({ _id: userId });
*/