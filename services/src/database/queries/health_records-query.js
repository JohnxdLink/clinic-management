const CREATE_HEALTH_RECORD = `
  INSERT INTO health_records (
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
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all health records
const FIND_ALL_HEALTH_RECORDS = `
  SELECT
    h.id,
    h.student_id,
    h.staff_id,
    h.blood_type,
    h.allergies,
    h.medical_condition,
    h.current_medications,
    h.emergency_contact_name,
    h.emergency_contact_number,
    h.emergency_contact_relationship,
    h.notes,
    h.created_at,
    h.updated_at
  FROM health_records AS h
  ORDER BY h.id DESC
`;

// READ - Get health record by ID
const FIND_HEALTH_RECORD_BY_ID = `
  SELECT
    h.id,
    h.student_id,
    h.staff_id,
    h.blood_type,
    h.allergies,
    h.medical_condition,
    h.current_medications,
    h.emergency_contact_name,
    h.emergency_contact_number,
    h.emergency_contact_relationship,
    h.notes,
    h.created_at,
    h.updated_at
  FROM health_records AS h
  WHERE h.id = ?
`;

// READ - Get health record by student ID
const FIND_HEALTH_RECORD_BY_STUDENT_ID = `
  SELECT
    h.id,
    h.student_id,
    h.staff_id,
    h.blood_type,
    h.allergies,
    h.medical_condition,
    h.current_medications,
    h.emergency_contact_name,
    h.emergency_contact_number,
    h.emergency_contact_relationship,
    h.notes,
    h.created_at,
    h.updated_at
  FROM health_records AS h
  WHERE h.student_id = ?
`;

// READ - Get health record by staff ID
const FIND_HEALTH_RECORD_BY_STAFF_ID = `
  SELECT
    h.id,
    h.student_id,
    h.staff_id,
    h.blood_type,
    h.allergies,
    h.medical_condition,
    h.current_medications,
    h.emergency_contact_name,
    h.emergency_contact_number,
    h.emergency_contact_relationship,
    h.notes,
    h.created_at,
    h.updated_at
  FROM health_records AS h
  WHERE h.staff_id = ?
`;

// UPDATE
const UPDATE_HEALTH_RECORD = `
  UPDATE health_records AS h
  SET
    h.student_id = ?,
    h.staff_id = ?,
    h.blood_type = ?,
    h.allergies = ?,
    h.medical_condition = ?,
    h.current_medications = ?,
    h.emergency_contact_name = ?,
    h.emergency_contact_number = ?,
    h.emergency_contact_relationship = ?,
    h.notes = ?
  WHERE h.id = ?
`;

// DELETE
const DELETE_HEALTH_RECORD = `
  DELETE FROM health_records
  WHERE id = ?
`;

module.exports = {
  CREATE_HEALTH_RECORD,
  FIND_ALL_HEALTH_RECORDS,
  FIND_HEALTH_RECORD_BY_ID,
  FIND_HEALTH_RECORD_BY_STUDENT_ID,
  FIND_HEALTH_RECORD_BY_STAFF_ID,
  UPDATE_HEALTH_RECORD,
  DELETE_HEALTH_RECORD,
};
