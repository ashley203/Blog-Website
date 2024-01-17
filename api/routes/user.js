// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

import express from 'express';
const router = express.Router();

import { UserModel } from "../models/User.js";

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
        //ADD PASSWORD ENCYRPTION
        const newUser = new UserModel({ username, password });
        await newUser.save();
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
        if(user.password === password){
            //ADD LOGIN
            res.json({id: user._id, username});
        }
        else{
            res.status(400).json('Incorrect username or password');
        }
    }catch(error){
        res.status(400).json('User does not exist');
    }
    
});

export { router as userRouter };