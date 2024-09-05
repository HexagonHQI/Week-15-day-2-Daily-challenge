const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route
app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

// POST route
app.post('/api/world', (req, res) => {
    const message = req.body.message;
    console.log('Request Body:', req.body);
    res.send(`I received your POST request. This is what you sent me: ${message}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
