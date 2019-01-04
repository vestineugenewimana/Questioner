/* eslint-disable linebreak-style */
import moment from 'moment';
import Meetup from '../db/meetups';

class meetupController {
  static getMeetup(req, res) {
    return res.json({
      message: 'List of all meetup',
      Meetup,
    });
  }
  }

export default meetupController;
