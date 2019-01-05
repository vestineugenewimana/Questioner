/* eslint-disable linebreak-style */
import express from 'express';
import questioncontroller from '../controllers/questionController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.get('/api/v1/questions/:id', questioncontroller.getOnequestion);

export default router;
