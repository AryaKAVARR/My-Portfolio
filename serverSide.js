const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve images from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
