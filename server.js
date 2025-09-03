const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/personal_budget_planning';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB successfully connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Budget Planning API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});