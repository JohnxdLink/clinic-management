const db = require("../config/database.js");

const {
  CREATE_SCHOOL_YEAR,
  FIND_ALL_SCHOOL_YEARS,
  FIND_SCHOOL_YEAR_BY_ID,
  FIND_SCHOOL_YEAR_BY_YEAR,
  FIND_ACTIVE_SCHOOL_YEAR,
  UPDATE_SCHOOL_YEAR,
  DELETE_SCHOOL_YEAR,
} = require("../database/queries/school-year-query.js");

// CREATE
const createSchoolYear = async (
  staff_id,
  school_year,
  start_date,
  end_date,
  is_active
) => {
  if (!staff_id || !school_year || !start_date || !end_date) {
    throw new Error(
      "Staff ID, school year, start date, and end date are required."
    );
  }

  const [result] = await db.query(
    CREATE_SCHOOL_YEAR,
    [
      staff_id,
      school_year,
      start_date,
      end_date,
      is_active,
    ]
  );

  return result;
};

// READ - Get all school years
const findAllSchoolYears = async () => {
  const [rows] = await db.query(FIND_ALL_SCHOOL_YEARS);
  return rows;
};

// READ - Get school year by ID
const findSchoolYearById = async (id) => {
  if (!id) {
    throw new Error("School year ID is required.");
  }

  const [rows] = await db.query(
    FIND_SCHOOL_YEAR_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get school year by school year
const findSchoolYearByYear = async (school_year) => {
  if (!school_year) {
    throw new Error("School year is required.");
  }

  const [rows] = await db.query(
    FIND_SCHOOL_YEAR_BY_YEAR,
    [school_year]
  );

  return rows[0] || null;
};

// READ - Get active school year
const findActiveSchoolYear = async () => {
  const [rows] = await db.query(FIND_ACTIVE_SCHOOL_YEAR);
  return rows[0] || null;
};

// UPDATE
const updateSchoolYear = async (
  id,
  staff_id,
  school_year,
  start_date,
  end_date,
  is_active
) => {
  if (!id) {
    throw new Error("School year ID is required.");
  }

  if (!staff_id || !school_year || !start_date || !end_date) {
    throw new Error(
      "Staff ID, school year, start date, and end date are required."
    );
  }

  const [result] = await db.query(
    UPDATE_SCHOOL_YEAR,
    [
      staff_id,
      school_year,
      start_date,
      end_date,
      is_active,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteSchoolYear = async (id) => {
  if (!id) {
    throw new Error("School year ID is required.");
  }

  const [result] = await db.query(
    DELETE_SCHOOL_YEAR,
    [id]
  );

  return result;
};

module.exports = {
  createSchoolYear,
  findAllSchoolYears,
  findSchoolYearById,
  findSchoolYearByYear,
  findActiveSchoolYear,
  updateSchoolYear,
  deleteSchoolYear,
};