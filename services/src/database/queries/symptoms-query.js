const CREATE_SYMPTOM = `
  INSERT INTO symptoms (
    symptom_name,
    description,
    status
  )
  VALUES (?, ?, ?)
`;

// READ - Get all symptoms
const FIND_ALL_SYMPTOMS = `
  SELECT
    s.id,
    s.symptom_name,
    s.description,
    s.status,
    s.created_at,
    s.updated_at
  FROM symptoms AS s
  ORDER BY s.id DESC
`;

// READ - Get symptom by ID
const FIND_SYMPTOM_BY_ID = `
  SELECT
    s.id,
    s.symptom_name,
    s.description,
    s.status,
    s.created_at,
    s.updated_at
  FROM symptoms AS s
  WHERE s.id = ?
`;

// READ - Get symptom by name
const FIND_SYMPTOM_BY_NAME = `
  SELECT
    s.id,
    s.symptom_name,
    s.description,
    s.status,
    s.created_at,
    s.updated_at
  FROM symptoms AS s
  WHERE s.symptom_name = ?
`;

// UPDATE
const UPDATE_SYMPTOM = `
  UPDATE symptoms AS s
  SET
    s.symptom_name = ?,
    s.description = ?,
    s.status = ?
  WHERE s.id = ?
`;

// DELETE
const DELETE_SYMPTOM = `
  DELETE FROM symptoms
  WHERE id = ?
`;

module.exports = {
  CREATE_SYMPTOM,
  FIND_ALL_SYMPTOMS,
  FIND_SYMPTOM_BY_ID,
  FIND_SYMPTOM_BY_NAME,
  UPDATE_SYMPTOM,
  DELETE_SYMPTOM,
};
