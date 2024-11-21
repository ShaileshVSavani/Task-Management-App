// const app = require('./app');
// // require('./src/config/connection');
const connectDB = require('./src/config/connection');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./src/routes/auth');
const taskRoutes = require('./src/routes/task');
const PORT = process.env.PORT || 5000;

require('dotenv').config();
// require('./src/config/connection'); // MongoDB connection

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
