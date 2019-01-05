/* eslint-disable linebreak-style */
import moment from 'moment';
import Question from '../db/questions';

class QuestionController {
  static updateQuestion(req, res) {
    const { id } = req.params;
    const question = Question.find(updateQuestion => updateQuestion.id == id);
    if (question) {
      (question.id = req.body.id), (question.body = req.body.body);
      return res.status(200).json({
        message: 'question successfully updated',
        updateQuestion: Question,
      });
    }
    res.status(400).json({
      error: 'question cannot be updated',
    });
  }
}


export default QuestionController;
