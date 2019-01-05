/* eslint-disable linebreak-style */
import moment from 'moment';
import Question from '../db/questions';

class questionController {
  static createQuestion(req, res) {
    const newId = parseInt(Question.length) + 1;
    const {
      title, meetup, body, upvotes, downvotes, createdBy,
    } = req.body;
    const newQuestion = {
      id: newId,
      title,
      meetup,
      body,
      upvotes,
      downvotes,
      createdBy,
      createdOn: new Date(),
      created_at: moment.utc().format(),
    };
    Question.push(newQuestion);
    return res.status(200).json({
      message: 'created a new Question',
    });
  }
}

export default questionController;
