"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = require("bcrypt");
const User_1 = require("../respositories/User");
const userRouter = (0, express_1.Router)();
userRouter.post("/join", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = req.body;
    const user = yield (0, User_1.findByUsername)(username);
    if (user) {
        throw new Error("username already exists");
    }
    const passwordHash = yield (0, bcrypt_1.hash)(password, 12);
    const newUser = yield (0, User_1.createUser)(username, passwordHash, email);
    res.send(newUser);
}));
exports.default = userRouter;
