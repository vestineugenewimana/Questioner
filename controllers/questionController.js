/* eslint-disable linebreak-style */
import moment from 'moment';
import Question from '../db/questions';

class questionController {
  static getquestion(req, res) {
    return res.json({
      message: 'List of all question',
      Question,
    });
  }
}

export default questionController;
