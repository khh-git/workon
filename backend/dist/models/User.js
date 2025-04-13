"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const User_1 = require("../schema/User");
exports.userModel = (0, mongoose_1.model)("User", User_1.userSchema);
