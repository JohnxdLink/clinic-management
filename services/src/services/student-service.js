const db = require("../config/database.js");

const {
  CREATE_STUDENT,
  FIND_ALL_STUDENTS,
  FIND_STUDENT_BY_ID,
  FIND_STUDENT_BY_ACCOUNT_ID,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} = require("../database/queries/students-query.js");

// CREATE
const createStudent = async (grade_section_id, account_id, lastname, firstname, middlename, contact_no) => {
  if (!grade_section_id || !lastname || !firstname) {
    throw new Error("Grade section ID, lastname, and firstname are required.");
  }

  const [result] = await db.query(CREATE_STUDENT, [
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no,
  ]);

  return result;
};

// READ - Get all students
const findAllStudents = async () => {
  const [rows] = await db.query(FIND_ALL_STUDENTS);
  return rows;
};

// READ - Get student by ID
const findStudentById = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_ID, [id]);

  return rows[0] || null;
};

// READ - Get student by account ID
const findStudentByAccountId = async (account_id) => {
  if (!account_id) {
    throw new Error("Account ID is required.");
  }

  const [rows] = await db.query(FIND_STUDENT_BY_ACCOUNT_ID, [account_id]);

  return rows[0] || null;
};

// UPDATE
const updateStudent = async (id, grade_section_id, account_id, lastname, firstname, middlename, contact_no) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  if (!grade_section_id || !lastname || !firstname) {
    throw new Error("Grade section ID, lastname, and firstname are required.");
  }

  const [result] = await db.query(UPDATE_STUDENT, [
    grade_section_id,
    account_id,
    lastname,
    firstname,
    middlename,
    contact_no,
    id,
  ]);

  return result;
};

// DELETE
const deleteStudent = async (id) => {
  if (!id) {
    throw new Error("Student ID is required.");
  }

  const [result] = await db.query(DELETE_STUDENT, [id]);

  return result;
};

module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  findStudentByAccountId,
  updateStudent,
  deleteStudent,
};
