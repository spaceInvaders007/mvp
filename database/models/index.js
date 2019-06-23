const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/ideas', {
 useNewUrlParser: true
})
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log('error'));


const db = mongoose.connection;

  db.on('error', () => {
    console.log('mongoose connection error');
  });

  db.once('open', () => {
    console.log('mongoose connected successfully');
  });

  var Schema = mongoose.Schema;

const ideaSchema = new Schema({
  title: String,
  description: String,
});

const Idea = mongoose.model('Idea', ideaSchema);

let save = idea => {
  var data = new Idea ({
    title: idea.title,
    description : idea.description
  })
  data.save (err => {
    if (err) return console.log(err)
  })
  console.log ('data saved')
}


module.exports = {Idea, save}