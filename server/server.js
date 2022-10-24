const express = require('express');
const path = require('path');
const app = express();
const eventController = require('./controllers/eventController');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/events', eventController.getEvents, (req, res) => {
  console.log(res.locals.eventList);
  return res.status(200).json(res.locals.eventList)
});


// app.delete('/deleteEvent', eventController.deleteEvent, (req, res) => {
//   return res.status(202).json(console.log('event deleted'))
// });

//route handlers to serve entry-point files when in production mode. Dev mode is handled in the config file
if('NODE_ENV=production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });
};

//404 error handler
app.use((req, res) => {
  return res.status(404).sendFile(path.join(__dirname, '../client/404.html'));
});


// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});