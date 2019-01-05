/* eslint-disable linebreak-style */
import moment from 'moment';
import Question from '../db/questions';

class questionController {
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
