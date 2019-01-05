/* eslint-disable linebreak-style */
import moment from 'moment';
import User from '../db/user';

class userController {
  

  static updateUser(req, res) {
    const { id } = req.params;
    const user = User.find(updateUser => updateUser.id == id);
    if (user) {
      (user.emails = req.body.emails), (user.body = req.body.body);
      return res.status(200).json({
        message: 'successfully updated',
        updateUser: user,
      });
    }
    res.status(400).json({
      error: 'user cannot be updated',
    });
  }
}

export default userController;
