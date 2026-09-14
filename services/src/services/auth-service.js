const db = require("../config/database.js");
const { FIND_BY_USERNAME } = require("../database/queries/auth-query.js");
const { comparePassword } = require("../utils/password.js");
const { generateToken } = require("../utils/token.js");

const signIn = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username and password are required.");
  }

  const [rows] = await db.query(FIND_BY_USERNAME, [username]);
  if (rows.length === 0) {
    throw new Error("Invalid username or password.");
  }

  const account = rows[0];

  const validPassword = await comparePassword(password, account.password);
  if (!validPassword) {
    throw new Error("Invalid password.");
  }

  const token = generateToken({
    id: account.id,
  });

  return {
    token,
    user: {
      id: account.id,
      username: account.username,
    },
  };
};

module.exports = {
  signIn,
};
