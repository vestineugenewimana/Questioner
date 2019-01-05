/* eslint-disable linebreak-style */
import moment from 'moment';
import Question from '../db/questions';

class questionController {
  
  static getOnequestion(req, res) {
    const { id } = req.params;
    const question = Question.find(onequestion => onequestion.id == id);
    if (question) {
      return res.status(200).json({
        message: 'one question found',
        onequestion: question,
      });
    }
    res.status(400).json({
      error: 'no question found with that id',
    });
  }
}

export default questionController;
