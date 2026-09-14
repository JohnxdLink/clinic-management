const db = require("../config/database.js");

const {
  CREATE_HEALTH_RECORD,
  FIND_ALL_HEALTH_RECORDS,
  FIND_HEALTH_RECORD_BY_ID,
  FIND_HEALTH_RECORD_BY_STUDENT_ID,
  FIND_HEALTH_RECORD_BY_STAFF_ID,
  UPDATE_HEALTH_RECORD,
  DELETE_HEALTH_RECORD,
} = require("../database/queries/health-record-query.js");

// CREATE
const createHealthRecord = async (
  student_id,
  staff_id,
  blood_type,
  allergies,
  medical_condition,
  current_medications,
  emergency_contact_name,
  emergency_contact_number,
  emergency_contact_relationship,
  notes
) => {
  if (!student_id && !staff_id) {
    throw new Error("Student ID or staff ID is required.");
  }

  if (student_id && staff_id) {
    throw new Error(
      "Health record must belong to either a student or staff, not both."
    );
  }

  const [result] = await db.query(
    CREATE_HEALTH_RECORD,
    [
      student_id,
      staff_id,
      blood_type,
      allergies,
      medical_condition,
      current_medications,
      emergency_contact_name,
      emergency_contact_number,
      emergency_contact_relationship,
      notes,
    ]
  );

  return result;
};

// READ - Get all health records
const findAllHealthRecords = async () => {
  const [rows] = await db.query(FIND_ALL_HEALTH_RECORDS);
  return rows;
};

// READ - Get health record by ID
const findHealthRecordById = async (id) => {
  if (!id) {
    throw new Error("Health record ID is required.");
  }

  const [rows] = await db.query(
    FIND_HEALTH_RECORD_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get health record by student ID
const findHealthRecordByStudentId = async (student_id) => {
  if (!student_id) {
    throw new Error("Student ID is required.");
  }

  const [rows] = await db.query(
    FIND_HEALTH_RECORD_BY_STUDENT_ID,
    [student_id]
  );

  return rows[0] || null;
};

// READ - Get health record by staff ID
const findHealthRecordByStaffId = async (staff_id) => {
  if (!staff_id) {
    throw new Error("Staff ID is required.");
  }

  const [rows] = await db.query(
    FIND_HEALTH_RECORD_BY_STAFF_ID,
    [staff_id]
  );

  return rows[0] || null;
};

// UPDATE
const updateHealthRecord = async (
  id,
  student_id,
  staff_id,
  blood_type,
  allergies,
  medical_condition,
  current_medications,
  emergency_contact_name,
  emergency_contact_number,
  emergency_contact_relationship,
  notes
) => {
  if (!id) {
    throw new Error("Health record ID is required.");
  }

  if (!student_id && !staff_id) {
    throw new Error("Student ID or staff ID is required.");
  }

  if (student_id && staff_id) {
    throw new Error(
      "Health record must belong to either a student or staff, not both."
    );
  }

  const [result] = await db.query(
    UPDATE_HEALTH_RECORD,
    [
      student_id,
      staff_id,
      blood_type,
      allergies,
      medical_condition,
      current_medications,
      emergency_contact_name,
      emergency_contact_number,
      emergency_contact_relationship,
      notes,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteHealthRecord = async (id) => {
  if (!id) {
    throw new Error("Health record ID is required.");
  }

  const [result] = await db.query(
    DELETE_HEALTH_RECORD,
    [id]
  );

  return result;
};

module.exports = {
  createHealthRecord,
  findAllHealthRecords,
  findHealthRecordById,
  findHealthRecordByStudentId,
  findHealthRecordByStaffId,
  updateHealthRecord,
  deleteHealthRecord,
};
