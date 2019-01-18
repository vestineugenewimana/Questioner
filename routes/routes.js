/* eslint-disable linebreak-style */
import express from 'express';
import meetupController from '../controllers/meetupController';
import questioncontroller from '../controllers/questionController';
import usercontroller from '../controllers/usercontroller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

router.get('/api/v1/meetups', meetupController.getMeetup);
router.post('/api/v1/meetups', meetupController.createMeetup);
router.get('/api/v1/meetups/:id', meetupController.getOnemeetup);
router.put('/api/v1/meetups/:id', meetupController.updateMeetup);
router.delete('/api/v1/meetups/:id', meetupController.deleteMeetup);

router.get('/api/v1/questions', questioncontroller.getquestion);
router.post('/api/v1/questions', questioncontroller.createQuestion);
router.get('/api/v1/questions/:id', questioncontroller.getOnequestion);
router.patch('/api/v1/questions/:id', questioncontroller.updateQuestion);
router.delete('/api/v1/questions/:id', questioncontroller.deleteQuestion);


router.get('/api/v1/users', usercontroller.getUser);
router.post('/api/v1/users', usercontroller.createUser);
router.get('/api/v1/users/:id', usercontroller.getOneuser);
router.put('/api/v1/users/:id', usercontroller.updateUser);
router.delete('/api/v1/users/:id', usercontroller.deleteUser);

export default router;
