const express = require('express');
const path = require('path');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const httpServer = http.createServer(app);

// # server dist
app.use(express.static(path.join(__dirname, '/dist')));

// # serve html page
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

httpServer.listen(PORT, console.log(`Server started on port ${PORT}`));
