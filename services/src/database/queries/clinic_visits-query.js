const CREATE_CLINIC_VISIT = `
  INSERT INTO clinic_visits (
    health_record_id,
    visit_date,
    time_in,
    time_out,
    reason,
    symptoms,
    treatment,
    remarks,
    recorded_by
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all clinic visits
const FIND_ALL_CLINIC_VISITS = `
  SELECT
    c.id,
    c.health_record_id,
    c.visit_date,
    c.time_in,
    c.time_out,
    c.reason,
    c.symptoms,
    c.treatment,
    c.remarks,
    c.recorded_by,
    c.created_at,
    c.updated_at
  FROM clinic_visits AS c
  ORDER BY c.id DESC
`;

// READ - Get clinic visit by ID
const FIND_CLINIC_VISIT_BY_ID = `
  SELECT
    c.id,
    c.health_record_id,
    c.visit_date,
    c.time_in,
    c.time_out,
    c.reason,
    c.symptoms,
    c.treatment,
    c.remarks,
    c.recorded_by,
    c.created_at,
    c.updated_at
  FROM clinic_visits AS c
  WHERE c.id = ?
`;

// READ - Get clinic visits by health record ID
const FIND_CLINIC_VISITS_BY_HEALTH_RECORD_ID = `
  SELECT
    c.id,
    c.health_record_id,
    c.visit_date,
    c.time_in,
    c.time_out,
    c.reason,
    c.symptoms,
    c.treatment,
    c.remarks,
    c.recorded_by,
    c.created_at,
    c.updated_at
  FROM clinic_visits AS c
  WHERE c.health_record_id = ?
  ORDER BY c.id DESC
`;

// READ - Get clinic visits by staff ID
const FIND_CLINIC_VISITS_BY_RECORDED_BY = `
  SELECT
    c.id,
    c.health_record_id,
    c.visit_date,
    c.time_in,
    c.time_out,
    c.reason,
    c.symptoms,
    c.treatment,
    c.remarks,
    c.recorded_by,
    c.created_at,
    c.updated_at
  FROM clinic_visits AS c
  WHERE c.recorded_by = ?
  ORDER BY c.id DESC
`;

// UPDATE
const UPDATE_CLINIC_VISIT = `
  UPDATE clinic_visits AS c
  SET
    c.health_record_id = ?,
    c.visit_date = ?,
    c.time_in = ?,
    c.time_out = ?,
    c.reason = ?,
    c.symptoms = ?,
    c.treatment = ?,
    c.remarks = ?,
    c.recorded_by = ?
  WHERE c.id = ?
`;

// DELETE
const DELETE_CLINIC_VISIT = `
  DELETE FROM clinic_visits
  WHERE id = ?
`;

module.exports = {
  CREATE_CLINIC_VISIT,
  FIND_ALL_CLINIC_VISITS,
  FIND_CLINIC_VISIT_BY_ID,
  FIND_CLINIC_VISITS_BY_HEALTH_RECORD_ID,
  FIND_CLINIC_VISITS_BY_RECORDED_BY,
  UPDATE_CLINIC_VISIT,
  DELETE_CLINIC_VISIT,
};
