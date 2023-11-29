// generate token with JWT
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, "dhia123", {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
