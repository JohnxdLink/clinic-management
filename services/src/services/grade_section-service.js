const db = require("../config/database.js");

const {
  CREATE_GRADE_SECTION,
  FIND_ALL_GRADE_SECTIONS,
  FIND_GRADE_SECTION_BY_ID,
  FIND_GRADE_SECTIONS_BY_SCHOOL_YEAR,
  FIND_GRADE_SECTIONS_BY_GRADE_N_STRAND,
  FIND_GRADE_SECTIONS_BY_ADVISER,
  FIND_GRADE_SECTION,
  UPDATE_GRADE_SECTION,
  DELETE_GRADE_SECTION,
} = require("../database/queries/grade-section-query.js");

const createGradeSection = async (
  school_year_id,
  grade_n_strand_id,
  adviser_staff_id,
  section_name,
  description
) => {
  if (
    !school_year_id ||
    !grade_n_strand_id ||
    !section_name
  ) {
    throw new Error(
      "School year ID, grade and strand ID, and section name are required."
    );
  }

  const [result] = await db.query(
    CREATE_GRADE_SECTION,
    [
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
    ]
  );

  return result;
};


const findAllGradeSections = async () => {
  const [rows] = await db.query(FIND_ALL_GRADE_SECTIONS);
  return rows;
};


const findGradeSectionById = async (id) => {
  if (!id) {
    throw new Error("Grade section ID is required.");
  }

  const [rows] = await db.query(
    FIND_GRADE_SECTION_BY_ID,
    [id]
  );

  return rows[0] || null;
};

const findGradeSectionsBySchoolYear = async (school_year_id) => {
  if (!school_year_id) {
    throw new Error("School year ID is required.");
  }

  const [rows] = await db.query(
    FIND_GRADE_SECTIONS_BY_SCHOOL_YEAR,
    [school_year_id]
  );

  return rows;
};

const findGradeSectionsByGradeNStrand = async (
  grade_n_strand_id
) => {
  if (!grade_n_strand_id) {
    throw new Error("Grade and strand ID is required.");
  }

  const [rows] = await db.query(
    FIND_GRADE_SECTIONS_BY_GRADE_N_STRAND,
    [grade_n_strand_id]
  );

  return rows;
};


const findGradeSectionsByAdviser = async (adviser_staff_id) => {
  if (!adviser_staff_id) {
    throw new Error("Adviser staff ID is required.");
  }

  const [rows] = await db.query(
    FIND_GRADE_SECTIONS_BY_ADVISER,
    [adviser_staff_id]
  );

  return rows;
};

const findGradeSection = async (
  school_year_id,
  grade_n_strand_id,
  section_name
) => {
  if (
    !school_year_id ||
    !grade_n_strand_id ||
    !section_name
  ) {
    throw new Error(
      "School year ID, grade and strand ID, and section name are required."
    );
  }

  const [rows] = await db.query(
    FIND_GRADE_SECTION,
    [
      school_year_id,
      grade_n_strand_id,
      section_name,
    ]
  );

  return rows[0] || null;
};

const updateGradeSection = async (
  id,
  school_year_id,
  grade_n_strand_id,
  adviser_staff_id,
  section_name,
  description
) => {
  if (!id) {
    throw new Error("Grade section ID is required.");
  }

  if (
    !school_year_id ||
    !grade_n_strand_id ||
    !section_name
  ) {
    throw new Error(
      "School year ID, grade and strand ID, and section name are required."
    );
  }

  const [result] = await db.query(
    UPDATE_GRADE_SECTION,
    [
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
      id,
    ]
  );

  return result;
};

const deleteGradeSection = async (id) => {
  if (!id) {
    throw new Error("Grade section ID is required.");
  }

  const [result] = await db.query(
    DELETE_GRADE_SECTION,
    [id]
  );

  return result;
};

module.exports = {
  createGradeSection,
  findAllGradeSections,
  findGradeSectionById,
  findGradeSectionsBySchoolYear,
  findGradeSectionsByGradeNStrand,
  findGradeSectionsByAdviser,
  findGradeSection,
  updateGradeSection,
  deleteGradeSection,
};
