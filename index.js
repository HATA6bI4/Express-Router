const express = require('express');
const app = express();

const PORT = 3000;

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

app.listen(PORT, () => console.log("Server started on port: " + PORT));