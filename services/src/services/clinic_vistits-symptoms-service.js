const db = require("../config/database.js");

const {
  CREATE_CLINIC_VISIT_SYMPTOM,
  FIND_ALL_CLINIC_VISIT_SYMPTOMS,
  FIND_CLINIC_VISIT_SYMPTOM_BY_ID,
  FIND_CLINIC_VISIT_SYMPTOMS_BY_VISIT_ID,
  FIND_CLINIC_VISITS_BY_SYMPTOM_ID,
  UPDATE_CLINIC_VISIT_SYMPTOM,
  DELETE_CLINIC_VISIT_SYMPTOM,
} = require("../database/queries/clinic-visit-symptom-query.js");

const createClinicVisitSymptom = async (
  clinic_visit_id,
  symptom_id,
  notes
) => {
  if (!clinic_visit_id || !symptom_id) {
    throw new Error("Clinic visit ID and symptom ID are required.");
  }

  const [result] = await db.query(
    CREATE_CLINIC_VISIT_SYMPTOM,
    [clinic_visit_id, symptom_id, notes]
  );

  return result;
};

const findAllClinicVisitSymptoms = async () => {
  const [rows] = await db.query(
    FIND_ALL_CLINIC_VISIT_SYMPTOMS
  );

  return rows;
};

const findClinicVisitSymptomById = async (id) => {
  if (!id) {
    throw new Error("Clinic visit symptom ID is required.");
  }

  const [rows] = await db.query(
    FIND_CLINIC_VISIT_SYMPTOM_BY_ID,
    [id]
  );

  return rows[0] || null;
};

const findClinicVisitSymptomsByVisitId = async (clinic_visit_id) => {
  if (!clinic_visit_id) {
    throw new Error("Clinic visit ID is required.");
  }

  const [rows] = await db.query(
    FIND_CLINIC_VISIT_SYMPTOMS_BY_VISIT_ID,
    [clinic_visit_id]
  );

  return rows;
};

const findClinicVisitsBySymptomId = async (symptom_id) => {
  if (!symptom_id) {
    throw new Error("Symptom ID is required.");
  }

  const [rows] = await db.query(
    FIND_CLINIC_VISITS_BY_SYMPTOM_ID,
    [symptom_id]
  );

  return rows;
};

const updateClinicVisitSymptom = async (
  id,
  clinic_visit_id,
  symptom_id,
  notes
) => {
  if (!id) {
    throw new Error("Clinic visit symptom ID is required.");
  }

  const [result] = await db.query(
    UPDATE_CLINIC_VISIT_SYMPTOM,
    [clinic_visit_id, symptom_id, notes, id]
  );

  return result;
};

const deleteClinicVisitSymptom = async (id) => {
  if (!id) {
    throw new Error("Clinic visit symptom ID is required.");
  }

  const [result] = await db.query(
    DELETE_CLINIC_VISIT_SYMPTOM,
    [id]
  );

  return result;
};

module.exports = {
  createClinicVisitSymptom,
  findAllClinicVisitSymptoms,
  findClinicVisitSymptomById,
  findClinicVisitSymptomsByVisitId,
  findClinicVisitsBySymptomId,
  updateClinicVisitSymptom,
  deleteClinicVisitSymptom,
};
