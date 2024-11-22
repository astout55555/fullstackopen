require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('dist'));
app.use(express.json());

const Note = require('./models/note');

const cors = require('cors');
app.use(cors());

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  });
});

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.post('/api/notes', (request, response, next) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
  }); // can cause Mongoose to throw a validation error
  // will appear unhandled in browser but error shown in fly logs
  note.save()
    .then(savedNote => {
      response.json(savedNote);
    })
    .catch(error => next(error));
});

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch(error => next(error));
});

app.put('/api/notes/:id', (request, response, next) => {
  const { content, important } = request.body;

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updatedNote => {
      response.json(updatedNote);
    })
    .catch(error => next(error));
});

// this has to be the last loaded middleware, also all the routes should be registered before this!
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
}

app.use(errorHandler);

const PORT = process.env.PORT; // `|| 3001` deleted...but PORT not set in fly secrets?
app.listen(PORT, () => { // I think fly production environment uses its own port
  console.log(`Server running on port ${PORT}`);
});
