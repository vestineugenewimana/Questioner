/* eslint-disable linebreak-style */
import moment from 'moment';
import User from '../db/user';

class userController {
  static getOneuser(req, res) {
    const { id } = req.params;
    const user = User.find(oneuser => oneuser.id == id);
    if (user) {
      return res.status(200).json({
        message: 'one user found',
        oneuser: user,
      });
    }
    res.status(400).json({
      error: 'no user found with that id',
    });
  }
}

export default userController;
