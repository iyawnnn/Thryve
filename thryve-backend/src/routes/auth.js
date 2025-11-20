
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');
const crypto = require('crypto');
const sendEmail = require('../utils/mailer');
const bcrypt = require('bcrypt');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authMiddleware, authController.me);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', authController.resetPassword);

// Test email endpoint for debugging
router.post('/test-email', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });
    
    console.log('🧪 Testing email to:', email);
    
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Test Email from Thryve</h2>
        <p>This is a test email to verify the email system is working.</p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      </div>
    `;
    
    await sendEmail(email, "Test Email from Thryve", html);
    res.json({ message: "Test email sent successfully!" });
    
  } catch (err) {
    console.error('❌ Test email failed:', err);
    res.status(500).json({ 
      error: "Failed to send test email",
      details: err.message
    });
  }
});

module.exports = router;
