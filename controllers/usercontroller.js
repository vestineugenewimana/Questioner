/* eslint-disable linebreak-style */
import moment from 'moment';
import User from '../db/user';

class userController {
  static getUser(req, res) {
    return res.json({
      message: 'List of all users',
      User,
    });
  }
}

export default userController;
