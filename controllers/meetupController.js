/* eslint-disable linebreak-style */
import moment from 'moment';
import Meetup from '../db/meetups';

class meetupController {
  static deleteMeetup(req, res) {
    const { id } = req.params;
    const findMeetup = Meetup.find(meetup => meetup.id == id);
    if (findMeetup) {
      const newMeetups = Meetup.filter(Meetup => Meetup !== findMeetup);
      res.status(200).json({
        message: 'meetup successfully deleted',
        Meetup: newMeetups,
      });
    } else {
      res.status(400).json({
        error: 'could not delete a meetup',
      });
    }
  }
}

export default meetupController;
