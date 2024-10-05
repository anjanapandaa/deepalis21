/*const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());  // To parse JSON request bodies
app.use(cors());          // To enable CORS

// Routes
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Use routes
app.use('/api/products', productRoutes);  // Route to handle products-related requests
app.use('/api/contact', contactRoutes);   // Route to handle contact form submissions

// Error handling middleware (for undefined routes)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/
