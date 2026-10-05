const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.CLIENT_URL || 'http://localhost:3000' }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb' }));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lahore-road-safety')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Routes
app.use('/api/incidents', require('./routes/incidents'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// WebSocket Connection
io.on('connection', (socket) => {
  console.log(`👤 User connected: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`👤 User disconnected: ${socket.id}`);
  });
});

// Make io available globally
app.io = io;

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
