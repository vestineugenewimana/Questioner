/* eslint-disable linebreak-style */
import express from 'express';
import meetupController from '../controllers/meetupController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.post('/api/v1/meetups', meetupController.createMeetup);

export default router;
