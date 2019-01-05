/* eslint-disable linebreak-style */
import express from 'express';
import usercontroller from '../controllers/usercontroller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.post('/api/v1/users', usercontroller.createUser);

export default router;
