const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Datenbankverbindung
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/persoenliche-budgetplanung', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB verbunden'))
.catch(err => console.error('MongoDB Verbindungsfehler:', err));

// Beispiel-Route
app.get('/', (req, res) => {
  res.send('Willkommen zur Persönlichen Budgetplanung API!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});