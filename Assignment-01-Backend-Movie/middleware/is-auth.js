const UserAll = require("../models/userToken");

exports.getAuth = (req, res, next) => {
  const Users = UserAll.fetchAll();
  let auth;
  const token = req.query.token;
  if (token) {
    auth = Users.filter((user) => user.token === token);
  }
  if (auth) {
    next();
    res.json({ auth });
  } else {
    res.json({
      message: "Unauthorized",
    });
  }
};
