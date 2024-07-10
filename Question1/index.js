// index.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9888;  // Default port or from .env file

// Middleware to parse JSON bodies
app.use(express.json());

// Constants
const WINDOW_SIZE = 10;
let numberWindow = [];

// Function to fetch numbers from test server
async function fetchNumbers(qualifier) {
    const url = `http://20.244.56.144/test/${qualifier}`;
    try {
        const response = await axios.get(url, { timeout: 500 });  // Timeout set to 500ms
        return response.data.numbers || [];
    } catch (error) {
        console.error(`Error fetching ${qualifier} numbers:`, error.message);
        return [];
    }
}

// API endpoint
app.get('/numbers/:qualifier', async (req, res) => {
    const { qualifier } = req.params;

    // Fetch numbers from test server
    const fetchedNumbers = await fetchNumbers(qualifier);

    // Filter out duplicates and ensure uniqueness
    const uniqueNumbers = fetchedNumbers.filter((num, index, self) => self.indexOf(num) === index);

    // Update numberWindow with unique numbers
    numberWindow = [...numberWindow, ...uniqueNumbers].slice(-WINDOW_SIZE);

    // Calculate average of current window numbers
    const avg = numberWindow.length > 0 ? (numberWindow.reduce((acc, num) => acc + num, 0) / numberWindow.length).toFixed(2) : 0;

    // Prepare response object
    const response = {
        numbers: uniqueNumbers,
        windowPrevState: [...numberWindow],  // Copy of previous window state
        windowCurrState: [...numberWindow],  // Current window state
        avg: Number(avg)
    };

    // Send response
    res.json(response);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
