const express = require('express');
const router  = express.Router();
const Story = require("../models/Story");

/* GET home page */
router.get('/', (req, res, next) => {
  
  Story.find({})
    .then(story => {
      res.render('index', {
        story
      })
    });
});



router.post("/add-story", (req, res, next) => {
  let content = req.body.content;
  let writer = req.body.writer;

  Story.create({
    content: content,
    writer: writer
  }).then(storyCreated => {
    res.redirect("/");
  })

});

module.exports = router;
