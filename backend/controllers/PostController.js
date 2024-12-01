const Post = require("../models/PostModel")

exports.createPost = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate input
        if (!title || !description) {
            return res.status(400).json({ error: "Title and description are required." });
        }

        const post = new Post({
            title,
            description,
        });

        const savedPost = await post.save();

        res.status(201).json({
            message: "Post created successfully!",
            post: savedPost,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while creating post",
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            posts,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while fetching posts",
        });
    }
};

 