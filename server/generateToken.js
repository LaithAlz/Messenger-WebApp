const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "laith", { expiresIn: "30d" });
};

module.exports = { generateToken };
