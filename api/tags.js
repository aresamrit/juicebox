const express = require('express');
const usersRouter = express.Router();
const { getAllTags } = require('../db');

usersRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags: [],
  });
});

module.exports = usersRouter;
