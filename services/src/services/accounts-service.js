const db = require("../config/database.js");
const {
  CREATE_ACCOUNTS,
  FIND_ALL_ACCOUNTS,
  FIND_ACCOUNT_BY_ID,
  FIND_ACCOUNT_BY_USERNAME,
  UPDATE_ACCOUNT,
  DELETE_ACCOUNT,
} = require("../database/queries/accounts-query.js");

const createAccount = async (username, password) => {
  if (!username || !password) {
    throw new Error("Username and password are required.");
  }

  const [result] = await db.query(CREATE_ACCOUNTS, [username, password]);

  return result;
};

const findAllAccounts = async () => {
  const [rows] = await db.query(FIND_ALL_ACCOUNTS);

  return rows;
};

const findAccountById = async (id) => {
  if (!id) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_ACCOUNT_BY_ID, [id]);

  return rows[0] || null;
};

const findAccountByUsername = async (username) => {
  if (!username) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_ACCOUNT_BY_USERNAME, [username]);

  return rows[0] || null;
};

const updateAccount = async (id, username, pasword) => {
  if (!Id) {
    throw new Error(" Accounts ID is required");
  }

  const [result] = await db.query(UPDATE_ACCOUNT, [username, pasword, id]);

  return result;
};

const deleteAccount = async (id,where_id) => {
  if (!Where) {
    throw new Error(" Accounts ID is required");
  }

  const [result] = await db.query(DELETE_ACCOUNT, [where_id, id]);

  return result;
};

module.exports = {
  createAccount,
  findAllAccounts,
  findAccountById,
  updateAccount,
  deleteAccount,
};
