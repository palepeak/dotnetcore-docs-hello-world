// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Tell Express to serve all static files out of the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});