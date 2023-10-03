// require('./db/connect');
const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const { dbConnection } = require('./db/config');
require('dotenv').config();

dbConnection();

//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', taskRoutes);

const port = process.env.PORT;
app.listen(port, console.log(`Server lister on port ${port}`));
