//const mongoose = require('mongoose');
// TODO 2: Import and use routes



const express = require('express');
const app = express();



app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

// TODO # 1: Set up MongoDB Database and then connect with mongoose with below code


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));