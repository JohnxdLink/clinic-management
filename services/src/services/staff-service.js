const db = require("../config/database.js");

const {
  CREATE_STAFF,
  FIND_ALL_STAFFS,
  FIND_STAFF_BY_ID,
  FIND_STAFF_BY_ACCOUNT_ID,
  FIND_STAFF_BY_EMAIL,
  UPDATE_STAFF,
  DELETE_STAFF,
} = require("../database/queries/staff-query.js");

// CREATE
const createStaff = async (
  account_id,
  role_id,
  lastname,
  firstname,
  contact_no,
  email
) => {
  if (!account_id || !role_id || !lastname || !firstname) {
    throw new Error(
      "Account ID, role ID, lastname, and firstname are required."
    );
  }

  const [result] = await db.query(
    CREATE_STAFF,
    [
      account_id,
      role_id,
      lastname,
      firstname,
      contact_no,
      email,
    ]
  );

  return result;
};

// READ - Get all staffs
const findAllStaffs = async () => {
  const [rows] = await db.query(FIND_ALL_STAFFS);
  return rows;
};

// READ - Get staff by ID
const findStaffById = async (id) => {
  if (!id) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(
    FIND_STAFF_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get staff by account ID
const findStaffByAccountId = async (account_id) => {
  if (!account_id) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(
    FIND_STAFF_BY_ACCOUNT_ID,
    [account_id]
  );

  return rows[0] || null;
};

// READ - Get staff by email
const findStaffByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required.");
  }

  const [rows] = await db.query(
    FIND_STAFF_BY_EMAIL,
    [email]
  );

  return rows[0] || null;
};

// UPDATE
const updateStaff = async (
  id,
  account_id,
  role_id,
  lastname,
  firstname,
  contact_no,
  email
) => {
  if (!id) {
    throw new Error("Staff ID is required.");
  }

  if (!account_id || !role_id || !lastname || !firstname) {
    throw new Error(
      "Account ID, role ID, lastname, and firstname are required."
    );
  }

  const [result] = await db.query(
    UPDATE_STAFF,
    [
      account_id,
      role_id,
      lastname,
      firstname,
      contact_no,
      email,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteStaff = async (id) => {
  if (!id) {
    throw new Error("Staff ID is required.");
  }

  const [result] = await db.query(
    DELETE_STAFF,
    [id]
  );

  return result;
};

module.exports = {
  createStaff,
  findAllStaffs,
  findStaffById,
  findStaffByAccountId,
  findStaffByEmail,
  updateStaff,
  deleteStaff,
};