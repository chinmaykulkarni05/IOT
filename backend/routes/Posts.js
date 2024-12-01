const express = require("express");
const router = express.Router();

const { createPost, getAllPosts} = require("../controllers/PostController"); 

router.post("/createPost",createPost);
router.get("/getAllposts", getAllPosts);
  

module.exports = router;  