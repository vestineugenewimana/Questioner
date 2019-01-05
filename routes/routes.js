/* eslint-disable linebreak-style */
import express from 'express';


import usercontroller from '../controllers/usercontroller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.get('/api/v1/users', usercontroller.getUser);

export default router;
