/* eslint-disable linebreak-style */
import express from 'express';
import meetupController from '../controllers/meetupController';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});


router.delete('/api/v1/meetups/:id', meetupController.deleteMeetup);


export default router;
