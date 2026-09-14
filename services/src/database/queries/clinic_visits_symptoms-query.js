const CREATE_CLINIC_VISIT_SYMPTOM = `
  INSERT INTO clinic_visit_symptoms (
    clinic_visit_id,
    symptom_id,
    notes
  )
  VALUES (?, ?, ?)
`;

// READ - Get all clinic visit symptoms
const FIND_ALL_CLINIC_VISIT_SYMPTOMS = `
  SELECT
    c.id,
    c.clinic_visit_id,
    c.symptom_id,
    c.notes
  FROM clinic_visit_symptoms AS c
  ORDER BY c.id DESC
`;

// READ - Get clinic visit symptom by ID
const FIND_CLINIC_VISIT_SYMPTOM_BY_ID = `
  SELECT
    c.id,
    c.clinic_visit_id,
    c.symptom_id,
    c.notes
  FROM clinic_visit_symptoms AS c
  WHERE c.id = ?
`;

// READ - Get symptoms by clinic visit ID
const FIND_CLINIC_VISIT_SYMPTOMS_BY_VISIT_ID = `
  SELECT
    c.id,
    c.clinic_visit_id,
    c.symptom_id,
    c.notes
  FROM clinic_visit_symptoms AS c
  WHERE c.clinic_visit_id = ?
  ORDER BY c.id DESC
`;

// READ - Get clinic visits by symptom ID
const FIND_CLINIC_VISITS_BY_SYMPTOM_ID = `
  SELECT
    c.id,
    c.clinic_visit_id,
    c.symptom_id,
    c.notes
  FROM clinic_visit_symptoms AS c
  WHERE c.symptom_id = ?
  ORDER BY c.id DESC
`;

// UPDATE
const UPDATE_CLINIC_VISIT_SYMPTOM = `
  UPDATE clinic_visit_symptoms AS c
  SET
    c.clinic_visit_id = ?,
    c.symptom_id = ?,
    c.notes = ?
  WHERE c.id = ?
`;

// DELETE
const DELETE_CLINIC_VISIT_SYMPTOM = `
  DELETE FROM clinic_visit_symptoms
  WHERE id = ?
`;

module.exports = {
  CREATE_CLINIC_VISIT_SYMPTOM,
  FIND_ALL_CLINIC_VISIT_SYMPTOMS,
  FIND_CLINIC_VISIT_SYMPTOM_BY_ID,
  FIND_CLINIC_VISIT_SYMPTOMS_BY_VISIT_ID,
  FIND_CLINIC_VISITS_BY_SYMPTOM_ID,
  UPDATE_CLINIC_VISIT_SYMPTOM,
  DELETE_CLINIC_VISIT_SYMPTOM,
};