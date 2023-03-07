// Import required modules
const express = require('express');
require('dotenv-safe').config({
    allowEmptyValues: false
});
// Initialize monogdb
const initMongo = require('./app/config/mongo')


// Initialize express app
const app = express();

// Define port number
const port = 3000;

//  routes / api endpoints
app.use(require('./app/routes'))



// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


initMongo()
module.exports = app
