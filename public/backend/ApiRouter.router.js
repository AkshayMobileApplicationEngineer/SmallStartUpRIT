import { Router } from 'express';
import chalk from 'chalk'; // Ensure you have chalk installed if using .grey

const router = Router();
const port = process.env.PORT || 3000; // Define your port here or use an environment variable

// Define the route for /feedback
router.get('/feedback', (req, res) => {
  res.json({
    feedback: "Thank you for your feedback"
  });
});

// Log the feedback URL
console.log(chalk.white(`Feedback: http://localhost:${port}/api/v1/feedback`));

// Export the router instance
export default router;
