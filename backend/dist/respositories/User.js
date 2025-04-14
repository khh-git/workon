"use strict";
// Acts as a layer between app and db so that making convinent in case of switching to sql queries
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findByUsername = exports.findUserById = void 0;
const User_1 = require("../models/User");
const findUserById = (userId) => {
    return User_1.userModel.findOne({ _id: userId });
};
exports.findUserById = findUserById;
const findByUsername = (username) => {
    return User_1.userModel.findOne({ username });
};
exports.findByUsername = findByUsername;
const createUser = (username, hash, email) => {
    return User_1.userModel.create({ username, password: hash, email });
};
exports.createUser = createUser;
