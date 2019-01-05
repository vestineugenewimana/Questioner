/* eslint-disable linebreak-style */
import moment from 'moment';
import User from '../db/user';

class userController {
  static deleteUser(req, res) {
    const { id } = req.params;
    const findUser = User.find(user => user.id == id);
    if (findUser) {
      const newUsers = User.filter(User => User !== findUser);
      res.status(200).json({
        message: 'user successfully deleted',
        Meetup: newUsers,
      });
    } else {
      res.status(400).json({
        error: 'could not delete a user',
      });
    }
  }
}

export default userController;
