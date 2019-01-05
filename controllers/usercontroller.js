/* eslint-disable linebreak-style */
import moment from 'moment';
import User from '../db/user';

class userController {
  static createUser(req, res) {
    const newId = parseInt(User.length) + 1;
    const {
      fullnames, email, location, password, isAdmin,
    } = req.body;
    const newUser = {
      id: newId,
      fullnames,
      email,
      location,
      password,
      isAdmin,
      registered: new Date(),
      created_at: moment.utc().format(),
    };
    User.push(newUser);
    return res.status(200).json({
      message: 'created a new user account',
    });
  }
}

export default userController;
