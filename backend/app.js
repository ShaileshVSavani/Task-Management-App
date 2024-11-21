// const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
// const authRoutes = require('./src/routes/auth');
// const taskRoutes = require('./src/routes/task');

// require('dotenv').config();
// require('./src/config/connection'); // MongoDB connection

// const app = express();

// app.use(cors());
// app.use(helmet());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);

// app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// module.exports = app;
