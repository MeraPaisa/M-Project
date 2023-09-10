if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')

// Middleware's
app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());



// Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user')
//   const dashboardRoutes = require('./routes/dashboard');
//   const userRoutes = require('./routes/user');

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
//   app.use('/api/dashboard', dashboardRoutes);
//   app.use('/api/user', userRoutes);


// Server Init
app.listen(PORT, () => {
  console.log(`Listening to Port: ${PORT}`);
});