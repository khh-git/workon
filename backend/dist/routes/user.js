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
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../respositories/User");
const auth_1 = require("../middlewares/auth");
const JWT_SECRET = "THISSECRETISNOTSECRETTOME";
const userRouter = (0, express_1.Router)();
userRouter.post("/join", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = req.body;
    const user = yield (0, User_1.findByUsername)(username);
    if (user) {
        throw new Error("Username already exists");
    }
    const passwordHash = yield (0, bcrypt_1.hash)(password, 12);
    const newUser = yield (0, User_1.createUser)(username, passwordHash, email);
    res.send(newUser);
}));
userRouter.post("/getin", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { username, password } = req.body;
    const user = yield (0, User_1.findByUsername)(username);
    if (!user) {
        throw new Error("Invalid username/password");
    }
    const isValidPassword = yield (0, bcrypt_1.compare)(password, (_a = user.password) !== null && _a !== void 0 ? _a : "");
    if (!isValidPassword) {
        throw new Error("Invalid username/password");
    }
    const jwtToken = (0, jsonwebtoken_1.sign)({ userId: user._id }, JWT_SECRET);
    res.send({ token: jwtToken, message: "login sucessfull" });
}));
userRouter.get("/profile", auth_1.isLoggedIn, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req;
    const user = yield (0, User_1.findUserById)(userId);
    if (!user) {
        next(new Error("invalid user with token"));
    }
    res.send({ email: user === null || user === void 0 ? void 0 : user.email, username: user === null || user === void 0 ? void 0 : user.username });
}));
exports.default = userRouter;
