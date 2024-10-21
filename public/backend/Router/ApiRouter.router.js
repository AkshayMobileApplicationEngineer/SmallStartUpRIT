import { Router } from 'express';

const router = Router();

// Define the route for /feedback
router.get('/feedback', (req, res) => {
  res.json({
    feedback: "Thank you for your feedback"
  });
});

// Export the router instance
export default router;
