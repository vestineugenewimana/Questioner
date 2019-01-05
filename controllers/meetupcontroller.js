/* eslint-disable linebreak-style */
import moment from 'moment';
import Meetup from '../db/meetup';

class meetupController {
    static createMeetup(req, res) {
        const newId = parseInt(Meetup.length) + 1;
        const {
          title, location, topic, tags,
        } = req.body;
        const newMeetup = {
          id: newId,
          title,
          location,
          topic,
          tags,
          happeningOn: new Date(),
          created_at: moment.utc().format(),
        };
        Meetup.push(newMeetup);
        return res.status(200).json({
          message: 'created a new meetup',
        });
      }
    }

    export default meetupController;
    