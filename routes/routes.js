/* eslint-disable linebreak-style */
import express from 'express';
import meetupController from '../controllers/meetupController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.put('/api/v1/meetups/:id', meetupController.updateMeetup);

export default router;
