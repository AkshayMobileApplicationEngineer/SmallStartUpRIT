// main.js (or your entry file)
import dotenv from 'dotenv';
import path from 'path';
import express from 'express'; // Import express for static file serving
import { fileURLToPath } from 'url'; // Needed to define __dirname with ES6 modules
import { dirname } from 'path'; // Import dirname from path
import  app  from './app.mjs'; // Correct ES6 import

dotenv.config({
  path: './.env'
});
// Get __filename and __dirname in ES6 module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // Use dirname to get __dirname

const port = process.env.PORT ||3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
