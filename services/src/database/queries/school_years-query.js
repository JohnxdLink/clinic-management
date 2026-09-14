// CREATE
const CREATE_SCHOOL_YEAR = `
  INSERT INTO school_years (
    staff_id,
    school_year,
    start_date,
    end_date,
    is_active
  )
  VALUES (?, ?, ?, ?, ?)
`;

// READ - Get all school years
const FIND_ALL_SCHOOL_YEARS = `
  SELECT
    sy.id ,
    sy.staff_id,
    sy.school_year,
    sy.start_date,
    sy.end_date,
    sy.is_active,
    sy.created_at,
    sy.updated_at
  FROM school_years AS sy
  ORDER BY sy.id DESC
`;

// READ - Get school year by ID
const FIND_SCHOOL_YEAR_BY_ID = `
  SELECT
    sy.id ,
    sy.staff_id,
    sy.school_year,
    sy.start_date,
    sy.end_date,
    sy.is_active,
    sy.created_at,
    sy.updated_at
  FROM school_years AS sy
  WHERE sy.id = ?
`;

// READ - Get school year by school year
const FIND_SCHOOL_YEAR_BY_YEAR = `
  SELECT
    sy.id ,
    sy.staff_id,
    sy.school_year,
    sy.start_date,
    sy.end_date,
    sy.is_active,
    sy.created_at,
    sy.updated_at
  FROM school_years AS sy
  WHERE sy.school_year = ?
`;

// READ - Get active school year
const FIND_ACTIVE_SCHOOL_YEAR = `
  SELECT
    sy.id ,
    sy.staff_id,
    sy.school_year,
    sy.start_date,
    sy.end_date,
    sy.is_active,
    sy.created_at,
    sy.updated_at
  FROM school_years AS sy
  WHERE sy.is_active = 1
`;

// UPDATE
const UPDATE_SCHOOL_YEAR = `
  UPDATE school_years
  SET
    staff_id = ?,
    school_year = ?,
    start_date = ?,
    end_date = ?,
    is_active = ?
  WHERE id = ?
`;

// DELETE
const DELETE_SCHOOL_YEAR = `
  DELETE FROM school_years
  WHERE id = ?
`;

module.exports = {
  CREATE_SCHOOL_YEAR,
  FIND_ALL_SCHOOL_YEARS,
  FIND_SCHOOL_YEAR_BY_ID,
  FIND_SCHOOL_YEAR_BY_YEAR,
  FIND_ACTIVE_SCHOOL_YEAR,
  UPDATE_SCHOOL_YEAR,
  DELETE_SCHOOL_YEAR,
};
