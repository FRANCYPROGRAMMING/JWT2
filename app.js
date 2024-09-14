const express = require('express');
const dotenv = require('dotenv');
const usersRoute = require('./routes/user');

dotenv.config();

const app = express();
app.use(express.json()); 

app.use('/users', usersRoute); 


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});