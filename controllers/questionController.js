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

  static updateQuestion(req, res) {
    const { id } = req.params;
    const question = Question.find(updateQuestion => updateQuestion.id === id);
    if (question) {
      (question.title = req.body.title)(question.body = req.body.body);
      return res.status(200).json({
        message: 'successfully updated',
        updateQuestion: question,
      });
    }
    res.status(400).json({
      error: 'question cannot be updated',
    });
  }

  static deleteQuestion(req, res) {
    const { id } = req.params;
    const findQuestion = Question.find(question => question.id == id);
    if (findQuestion) {
      const newQuestions = Question.filter(Question => Question !== findQuestion);
      res.status(200).json({
        message: 'question successfully deleted',
        Question: newQuestions,
      });
    } else {
      res.status(400).json({
        error: 'could not delete a question',
      });
    }
  }
}

export default questionController;
