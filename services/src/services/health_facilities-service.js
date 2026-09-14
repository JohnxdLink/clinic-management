const db = require("../config/database.js");

const {
  CREATE_HEALTH_FACILITY,
  FIND_ALL_HEALTH_FACILITIES,
  FIND_HEALTH_FACILITY_BY_ID,
  FIND_HEALTH_FACILITY_BY_NAME,
  UPDATE_HEALTH_FACILITY,
  DELETE_HEALTH_FACILITY,
} = require("../database/queries/health-facility-query.js");

// CREATE
const createHealthFacility = async (
  facility_name,
  facility_type,
  address,
  contact_number,
  emergency_number,
  contact_person,
  status
) => {
  if (!facility_name || !facility_type) {
    throw new Error("Facility name and facility type are required.");
  }

  const [result] = await db.query(
    CREATE_HEALTH_FACILITY,
    [
      facility_name,
      facility_type,
      address,
      contact_number,
      emergency_number,
      contact_person,
      status,
    ]
  );

  return result;
};

// READ - Get all health facilities
const findAllHealthFacilities = async () => {
  const [rows] = await db.query(FIND_ALL_HEALTH_FACILITIES);
  return rows;
};

// READ - Get health facility by ID
const findHealthFacilityById = async (id) => {
  if (!id) {
    throw new Error("Health facility ID is required.");
  }

  const [rows] = await db.query(
    FIND_HEALTH_FACILITY_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get health facility by name
const findHealthFacilityByName = async (facility_name) => {
  if (!facility_name) {
    throw new Error("Facility name is required.");
  }

  const [rows] = await db.query(
    FIND_HEALTH_FACILITY_BY_NAME,
    [facility_name]
  );

  return rows[0] || null;
};

// UPDATE
const updateHealthFacility = async (
  id,
  facility_name,
  facility_type,
  address,
  contact_number,
  emergency_number,
  contact_person,
  status
) => {
  if (!id) {
    throw new Error("Health facility ID is required.");
  }

  if (!facility_name || !facility_type) {
    throw new Error("Facility name and facility type are required.");
  }

  const [result] = await db.query(
    UPDATE_HEALTH_FACILITY,
    [
      facility_name,
      facility_type,
      address,
      contact_number,
      emergency_number,
      contact_person,
      status,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteHealthFacility = async (id) => {
  if (!id) {
    throw new Error("Health facility ID is required.");
  }

  const [result] = await db.query(
    DELETE_HEALTH_FACILITY,
    [id]
  );

  return result;
};

module.exports = {
  createHealthFacility,
  findAllHealthFacilities,
  findHealthFacilityById,
  findHealthFacilityByName,
  updateHealthFacility,
  deleteHealthFacility,
};
