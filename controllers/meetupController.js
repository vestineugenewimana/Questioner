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
