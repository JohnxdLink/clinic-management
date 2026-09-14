const db = require("../config/database.js");

const {
  CREATE_CLINIC_VISIT,
  FIND_ALL_CLINIC_VISITS,
  FIND_CLINIC_VISIT_BY_ID,
  FIND_CLINIC_VISITS_BY_HEALTH_RECORD_ID,
  FIND_CLINIC_VISITS_BY_RECORDED_BY,
  UPDATE_CLINIC_VISIT,
  DELETE_CLINIC_VISIT,
} = require("../database/queries/clinic-visits-query.js");

const createClinicVisit = async (
  health_record_id,
  visit_date,
  time_in,
  time_out,
  reason,
  symptoms,
  treatment,
  remarks,
  recorded_by
) => {
  if (!health_record_id || !visit_date || !time_in || !recorded_by) {
    throw new Error(
      "Health record ID, visit date, time in, and recorded by are required."
    );
  }

  const [result] = await db.query(
    CREATE_CLINIC_VISIT,
    [
      health_record_id,
      visit_date,
      time_in,
      time_out,
      reason,
      symptoms,
      treatment,
      remarks,
      recorded_by,
    ]
  );

  return result;
};

const findAllClinicVisits = async () => {
  const [rows] = await db.query(FIND_ALL_CLINIC_VISITS);
  return rows;
};

const findClinicVisitById = async (id) => {
  if (!id) {
    throw new Error("Clinic visit ID is required.");
  }

  const [rows] = await db.query(
    FIND_CLINIC_VISIT_BY_ID,
    [id]
  );

  return rows[0] || null;
};

const findClinicVisitsByHealthRecordId = async (health_record_id) => {
  if (!health_record_id) {
    throw new Error("Health record ID is required.");
  }

  const [rows] = await db.query(
    FIND_CLINIC_VISITS_BY_HEALTH_RECORD_ID,
    [health_record_id]
  );

  return rows;
};

const findClinicVisitsByRecordedBy = async (recorded_by) => {
  if (!recorded_by) {
    throw new Error("Recorded by staff ID is required.");
  }

  const [rows] = await db.query(
    FIND_CLINIC_VISITS_BY_RECORDED_BY,
    [recorded_by]
  );

  return rows;
};

const updateClinicVisit = async (
  id,
  health_record_id,
  visit_date,
  time_in,
  time_out,
  reason,
  symptoms,
  treatment,
  remarks,
  recorded_by
) => {
  if (!id) {
    throw new Error("Clinic visit ID is required.");
  }

  if (!health_record_id || !visit_date || !time_in || !recorded_by) {
    throw new Error(
      "Health record ID, visit date, time in, and recorded by are required."
    );
  }

  const [result] = await db.query(
    UPDATE_CLINIC_VISIT,
    [
      health_record_id,
      visit_date,
      time_in,
      time_out,
      reason,
      symptoms,
      treatment,
      remarks,
      recorded_by,
      id,
    ]
  );

  return result;
};

const deleteClinicVisit = async (id) => {
  if (!id) {
    throw new Error("Clinic visit ID is required.");
  }

  const [result] = await db.query(
    DELETE_CLINIC_VISIT,
    [id]
  );

  return result;
};

module.exports = {
  createClinicVisit,
  findAllClinicVisits,
  findClinicVisitById,
  findClinicVisitsByHealthRecordId,
  findClinicVisitsByRecordedBy,
  updateClinicVisit,
  deleteClinicVisit,
};
