const db = require("../config/database.js");

const {
  CREATE_SYMPTOM,
  FIND_ALL_SYMPTOMS,
  FIND_SYMPTOM_BY_ID,
  FIND_SYMPTOM_BY_NAME,
  UPDATE_SYMPTOM,
  DELETE_SYMPTOM,
} = require("../database/queries/symptom-query.js");

// CREATE
const createSymptom = async (
  symptom_name,
  description,
  status
) => {
  if (!symptom_name) {
    throw new Error("Symptom name is required.");
  }

  const [result] = await db.query(
    CREATE_SYMPTOM,
    [
      symptom_name,
      description,
      status,
    ]
  );

  return result;
};

// READ - Get all symptoms
const findAllSymptoms = async () => {
  const [rows] = await db.query(FIND_ALL_SYMPTOMS);
  return rows;
};

// READ - Get symptom by ID
const findSymptomById = async (id) => {
  if (!id) {
    throw new Error("Symptom ID is required.");
  }

  const [rows] = await db.query(
    FIND_SYMPTOM_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get symptom by name
const findSymptomByName = async (symptom_name) => {
  if (!symptom_name) {
    throw new Error("Symptom name is required.");
  }

  const [rows] = await db.query(
    FIND_SYMPTOM_BY_NAME,
    [symptom_name]
  );

  return rows[0] || null;
};

// UPDATE
const updateSymptom = async (
  id,
  symptom_name,
  description,
  status
) => {
  if (!id) {
    throw new Error("Symptom ID is required.");
  }

  if (!symptom_name) {
    throw new Error("Symptom name is required.");
  }

  const [result] = await db.query(
    UPDATE_SYMPTOM,
    [
      symptom_name,
      description,
      status,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteSymptom = async (id) => {
  if (!id) {
    throw new Error("Symptom ID is required.");
  }

  const [result] = await db.query(
    DELETE_SYMPTOM,
    [id]
  );

  return result;
};

module.exports = {
  createSymptom,
  findAllSymptoms,
  findSymptomById,
  findSymptomByName,
  updateSymptom,
  deleteSymptom,
};