// Acts as a layer between app and db so that making convinent in case of switching to sql queries

import { userModel } from "../models/User";

const findUserById = (userId: string) => {
  return userModel.findOne({ _id: userId });
};

const findByUsername = (username: string) => {
  return userModel.findOne({ username });
};

const createUser = (username: string, hash: string, email: string) => {
  return userModel.create({ username, password: hash, email });
};

export { findUserById, findByUsername, createUser };
