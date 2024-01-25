import express from 'express';

const router = express.Router();

import { PostModel } from "../models/Post.js";

router.get("/all-posts", async (req, res) => {
    try{
        const posts = await PostModel.find();
        console.log(posts);
        res.json(posts);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }    
});

router.post("/new", async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new PostModel({ title, content, author });
    await newPost.save();
    console.log(newPost);
    res.json(newPost);
    
});

export { router as postRouter };