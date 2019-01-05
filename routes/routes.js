/* eslint-disable linebreak-style */
import express from 'express';
import questioncontroller from '../controllers/questionController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.post('/api/v1/questions', questioncontroller.createQuestion);

export default router;
