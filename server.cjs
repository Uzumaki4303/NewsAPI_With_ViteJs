const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.VITE_NEWS_API_KEY; // Store your API key in a .env file for security

app.use(cors());

app.get('/api/news', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=published&language=en&apiKey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from News API:', error);
    res.status(500).json({ error: 'Failed to fetch data from News API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
