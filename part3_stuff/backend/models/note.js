const url = process.env.MONGODB_URI;
const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

console.log('connecting to', url);
mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.error('error connecting to MongoDB:', error.message);
  });

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  important: Boolean,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Note', noteSchema);
