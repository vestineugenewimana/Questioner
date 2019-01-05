/* eslint-disable linebreak-style */
import moment from 'moment';
import Meetup from '../db/meetups';

class meetupController {
  static updateMeetup(req, res) {
    const { id } = req.params;
    const meetup = Meetup.find(updateMeetup => updateMeetup.id == id);
    
    if (meetup) {
      (meetup.title = req.body.title), (meetup.body = req.body.body);
      return res.status(200).json({
        message: 'successfully updated',
        updateMeetup: meetup,
      });
    }
    res.status(400).json({
      error: 'meetup cannot be updated',
    });
  }
}

export default meetupController;
