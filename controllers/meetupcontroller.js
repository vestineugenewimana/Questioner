/* eslint-disable linebreak-style */
import moment from 'moment';
import Meetup from '../db/meetup';
class meetupController {
    static getOnemeetup(req, res) {
        const { id } = req.params;
        const meetup = Meetup.find(onemeetup => onemeetup.id == id);
        if (meetup) {
          return res.status(200).json({
            message: 'one meetup found',
            onemeetup: meetup,
          });
        }
        res.status(400).json({
          error: 'no meetup found with that id',
        });
      }
    }
    export default meetupController;
