// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Mongo connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
// Add after auth routes in server.js
app.use('/api/clubs', require('./routes/clubs'));
app.use('/api/members', require('./routes/members'));
app.use('/api/events', require('./routes/events'));
//Integrating upload route
app.use('/api/upload', require('./routes/upload'));


// Routes
app.use('/api/auth', require('./routes/auth'));
// Other routes like clubs, members, events will be added similarly

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

