const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:8082'
  }));
app.listen(8082, () => {
  console.log('Server is running on port 8083');
});
