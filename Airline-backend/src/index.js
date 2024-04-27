const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./Routes/routes');
const dotenv = require('../.env');
var constants = require('../src/config/config');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = `${constants.MONGODB_URI}`;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error connection with mongoDB:', error));
