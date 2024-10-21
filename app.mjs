import express from 'express';
import ApiRouter from './public/backend/ApiRouter.router.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Use the API router for all routes starting with /api/v1/
app.use("/api/v1", ApiRouter);

const port = process.env.PORT || 8000;

// Log the API URL to the console
console.log(`API is running at http://localhost:${port}/api/v1`.grey); // Make sure to use chalk if you want to color the output

// Export the app instance
export default app;
