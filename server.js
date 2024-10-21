// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a sample route
app.post('/login/verify', (req, res) => {
  // Your login verification logic here
  res.json({ message: 'Login verification successful' });
});

// Start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
