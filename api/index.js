//const mongoose = require('mongoose');
// TODO 2: Import and use routes


const express = require('express');
const app = express();
const { getAccessToken } = require('./utils/authUtils'); // Import getAccessToken from authUtils
const sharepointRoutes = require('./routes/sharepointRoutes');

app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/home', (req, res) => {
  res.send('home');
});



const PORT = process.env.PORT || 5000;


// Test route for getting the access token
app.get('/test-token', async (req, res) => {
  try {
      const accessToken = await getAccessToken();
      res.send(`Access Token: ${accessToken}`);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Failed to retrieve access token');
      
  }
});

app.use('/api/sharepoint', sharepointRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));