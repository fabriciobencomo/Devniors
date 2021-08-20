// Create express application
const express = require("express");
const app = express();
app.use(express.json());

// DB connection
const { sequelize } = require('./db/models/index'); 

// Set the app port and handle routes
app.set("port", 5500);
const port = app.set("port");

// Get all routes
app.use('/', require('./routes'));

// If not fitting route was found, send error
app.use((req, res) => {
    return res.sendStatus(404);
});

// Set up and run the API server
app.listen(port, async () => {
    console.log("The server is running on http://localhost:" + port);

    // Connect to DB with migrations ran
    try {
        await sequelize.authenticate();
        console.log('Database connected!');
    } catch(e) {
        console.error('Unable to connect to the database:', e);
    }
});