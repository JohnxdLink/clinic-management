// CREATE
const CREATE_GRADE_SECTION = `
  INSERT INTO grade_sections (
    school_year_id,
    grade_n_strand_id,
    adviser_staff_id,
    section_name,
    description
  )
  VALUES (?, ?, ?, ?, ?)
`;

// READ - Get all grade sections
const FIND_ALL_GRADE_SECTIONS = `
  SELECT
    gs.id ,
    gs.school_year_id,
    gs.grade_n_strand_id,
    gs.adviser_staff_id,
    gs.section_name,
    gs.description,
    gs.created_at,
    gs.updated_at
  FROM grade_sections AS gs
  ORDER BY gs.id DESC
`;

// READ - Get grade section by ID
const FIND_GRADE_SECTION_BY_ID = `
  SELECT
    gs.id ,
    gs.school_year_id,
    gs.grade_n_strand_id,
    gs.adviser_staff_id,
    gs.section_name,
    gs.description,
    gs.created_at,
    gs.updated_at
  FROM grade_sections AS gs
  WHERE gs.id = ?
`;

// READ - Get grade sections by school year
const FIND_GRADE_SECTIONS_BY_SCHOOL_YEAR = `
  SELECT
    gs.id ,
    gs.school_year_id,
    gs.grade_n_strand_id,
    gs.adviser_staff_id,
    gs.section_name,
    gs.description,
    gs.created_at,
    gs.updated_at
  FROM grade_sections AS gs
  WHERE gs.school_year_id = ?
  ORDER BY gs.section_name ASC
`;

// READ - Get grade sections by grade and strand
const FIND_GRADE_SECTIONS_BY_GRADE_N_STRAND = `
  SELECT
    gs.id ,
    gs.school_year_id,
    gs.grade_n_strand_id,
    gs.adviser_staff_id,
    gs.section_name,
    gs.description,
    gs.created_at,
    gs.updated_at
  FROM grade_sections AS gs
  WHERE gs.grade_n_strand_id = ?
  ORDER BY gs.section_name ASC
`;

// READ - Get grade sections by adviser
const FIND_GRADE_SECTIONS_BY_ADVISER = `
  SELECT
    gs.id ,
    gs.school_year_id,
    gs.grade_n_strand_id,
    gs.adviser_staff_id,
    gs.section_name,
    gs.description,
    gs.created_at,
    gs.updated_at
  FROM grade_sections AS gs
  WHERE gs.adviser_staff_id = ?
  ORDER BY gs.section_name ASC
`;

// READ - Check specific grade section
const FIND_GRADE_SECTION = `
  SELECT
    gs.id ,
    gs.school_year_id,
    gs.grade_n_strand_id,
    gs.adviser_staff_id,
    gs.section_name,
    gs.description,
    gs.created_at,
    gs.updated_at
  FROM grade_sections AS gs
  WHERE gs.school_year_id = ?
    AND gs.grade_n_strand_id = ?
    AND gs.section_name = ?
`;

// UPDATE
const UPDATE_GRADE_SECTION = `
  UPDATE grade_sections
  SET
    school_year_id = ?,
    grade_n_strand_id = ?,
    adviser_staff_id = ?,
    section_name = ?,
    description = ?
  WHERE id = ?
`;

// DELETE
const DELETE_GRADE_SECTION = `
  DELETE FROM grade_sections
  WHERE id = ?
`;

module.exports = {
  CREATE_GRADE_SECTION,
  FIND_ALL_GRADE_SECTIONS,
  FIND_GRADE_SECTION_BY_ID,
  FIND_GRADE_SECTIONS_BY_SCHOOL_YEAR,
  FIND_GRADE_SECTIONS_BY_GRADE_N_STRAND,
  FIND_GRADE_SECTIONS_BY_ADVISER,
  FIND_GRADE_SECTION,
  UPDATE_GRADE_SECTION,
  DELETE_GRADE_SECTION,
};
