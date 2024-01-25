import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from 'express';

const router = express.Router();

import { UserModel } from "../models/User.js";

const salt = bcrypt.genSaltSync(10);
const privateKey = 'bsjfwibs238ans3u4823ndkaske831'

router.get("/all-users", async (req, res) => {
    try{
        const users = await UserModel.find();
        console.log(users);
        res.json(users);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
    
});

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    try{
        if (user) {
            return res.status(400).json({ message: "Username already exists" });
        }
        const newUser = new UserModel({ username, password:bcrypt.hashSync(password, salt) });
        await newUser.save();
        console.log(newUser);
        res.json({ message: "User registered successfully" });
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
    
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    
    try{
        if(bcrypt.compareSync(password, user.password)){
            const token = await jwt.sign({id: user._id, username}, privateKey);
            //     .then(token => res.json({ token, userID: user._id }))
            //     .catch(error => console.log(error));
            res.json({token, userID: user._id});
        }
        else{
            res.status(400).json('Incorrect username or password');
        }
    }catch(error){
        res.status(400).json('User does not exist');
    }
    
});

export { router as userRouter };