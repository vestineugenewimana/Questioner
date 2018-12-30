import User from "../db/user";
import moment from "moment";

class userController {
  static getUser(req, res) {
    return res.json({
      message: "List of all users",
      User
    });
  }

  static createUser(req, res) {
    const newId = parseInt(User.length) + 1;
    const { fullnames, email,location, password, isAdmin} = req.body;
    const newUser = {
      id: newId,
      fullnames,
      email,
      location,
      password,
      isAdmin,
      registered: new Date(),
      created_at:moment.utc().format()
    };
    User.push(newUser);
    return res.status(200).json({
      message: "created a new user account"
    });
  }

  static getOneuse(req, res) {
    const { id } = req.params;
    const user = User.find(oneuser => oneuser.id == id);
    if (user) {
      return res.status(200).json({
        message: "one user found",
        oneuser: user
      });
    } else {
      res.status(400).json({
        error: "no user found with that id"
      });
    }
  }
  static updateUser(req, res) {
    const { id } = req.params;
    const user = User.find(updateUser => updateUser.id == id);
    if (user) {
      (user.title = req.body.title), (user.body = req.body.body);
      return res.status(200).json({
        message: "successfully updated",
        updateUser: user
      });
    } else {
      res.status(400).json({
        error: "user cannot be updated"
      });
    }
  }
  static deleteUser(req, res) {
    let { id } = req.params;
    const findUser = User.find(user => {
      return user.id == id;
    });
    if (findUser) {
      const newUsers = User.filter(user => {
        return User !== findUser;
      });
      res.status(200).json({
        message: "user successfully deleted",
        Meetup: newUsers
      });
    } else {
      res.status(400).json({
        error: "could not delete a user"
      });
    }
  }
}

export default userController;
