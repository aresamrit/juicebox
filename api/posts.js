// api/posts.js

const express = require('express');
const usersRouter = express.Router();
const { getAllPosts } = require('../db');

usersRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts: [],
  });
});

module.exports = usersRouter;
