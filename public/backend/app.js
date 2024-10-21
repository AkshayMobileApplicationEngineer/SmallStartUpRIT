// public/backend/app.js
const  express =require('express') 
const dotenv = require('dotenv')
const colors = require('colors')
import ApiRouter from './Router/ApiRouter.router'; // Ensure the path is correct

// Load environment variables from .env file
dotenv.config({
  path: './.env'
});

// Initialize the Express application
const app = express();

// Use the API router for all routes starting with /api/v1/
app.use("/api/v1/", ApiRouter);

// Log the API URL to the console with colors
console.log(`Server is running at: http://localhost:${process.env.PORT}/api/v1/feedback`.red);

// Export the app instance
export { app };
