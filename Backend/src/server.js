import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import connectDB from './db/todoConnectDB.js';
import todo from './routes/todo.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
if(process.env.NODE_ENV !== 'production') {
  app.use(cors());
}
app.use(cors());

// Routes
app.use('/api/todos', todo)


if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../Client/dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/dist/index.html'));
  });
}

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


