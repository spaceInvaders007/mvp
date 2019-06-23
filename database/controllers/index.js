const {Idea, save} = require('../models/index.js');

const getIdeas = (req, res) => {
  Idea.find({}, function(err, ideas) {
    if (err) {
      next(err)
    } else {
      return res.json({ideas: ideas});
    }
  })
};

const addIdeas = (req, res) => {
   save (req.body)
};

module.exports = {
  getIdeas,
  addIdeas
}