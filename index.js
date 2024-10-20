//npm install express body-parser cors dotenv

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // To use environment variables from .env file

// Initialize the Express app
const app = express();

// Middleware
app.use(bodyParser.json());  // Parse incoming request bodies in JSON format
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded bodies (form data)
app.use(cors());  // Enable Cross-Origin Resource Sharing

// Routes

// Home Route (GET)
app.get('/', (req, res) => {
  res.send('Welcome to the Express API');
});

// Sample POST route to consume data from frontend/Postman
app.post('/api/data', (req, res) => {
  const { name, email, message } = req.body;  // Extract data from the request body
  console.log(req.body);  // Print incoming data for debugging
  
  // Respond back with the received data or perform further actions (e.g., saving to DB)
  res.json({
    message: 'Data received successfully',
    receivedData: { name, email, message }
  });
});

// 404 Handler (in case of wrong route)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
