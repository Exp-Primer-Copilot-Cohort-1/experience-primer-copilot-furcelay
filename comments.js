// Create web server
// Path: server.js
// Create a database
// Path: database.js
// Create a model
// Path: model.js
// Create a controller
// Path: controller.js
// Create a view
// Path: view.js
// Create a router
// Path: router.js
// Create a main file
// Path: index.js
// Create a test
// Path: test.js
// Create a configuration file
// Path: config.js

// 1. Create a web server
// Path: server.js
const http = require('http');
const port = 3000;
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

// 2. Create a database
// Path: database.js
const mongoose = require('mongoose');
const database = 'mongodb://localhost:27017/my_database';
mongoose.connect(database, { useNewUrlParser: true });

// 3. Create a model
// Path: model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({