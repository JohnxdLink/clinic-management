const CREATE_HEALTH_FACILITY = `
INSERT INTO health_facilities (
    facility_name,
    facility_type,
    address,
    contact_number,
    emergency_number,
    contact_person,
    status
)
VALUES (?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all health facilities
const FIND_ALL_HEALTH_FACILITIES = `
SELECT
    h.id,
    h.facility_name,
    h.facility_type,
    h.address,
    h.contact_number,
    h.emergency_number,
    h.contact_person,
    h.status,
    h.created_at,
    h.updated_at
    FROM health_facilities AS h
    ORDER BY h.id DESC
`;

// READ - Get health facility by ID
const FIND_HEALTH_FACILITY_BY_ID = `
    SELECT
    h.id,
    h.facility_name,
    h.facility_type,
    h.address,
    h.contact_number,
    h.emergency_number,
    h.contact_person,
    h.status,
    h.created_at,
    h.updated_at
FROM health_facilities AS h
WHERE h.id = ?
`;

// READ - Get health facility by name
const FIND_HEALTH_FACILITY_BY_NAME = `
SELECT
    h.id,
    h.facility_name,
    h.facility_type,
    h.address,
    h.contact_number,
    h.emergency_number,
    h.contact_person,
    h.status,
    h.created_at,
    h.updated_at
FROM health_facilities AS h
WHERE h.facility_name = ?
`;

// UPDATE
const UPDATE_HEALTH_FACILITY = `
UPDATE health_facilities AS h
SET
    h.facility_name = ?,
    h.facility_type = ?,
    h.address = ?,
    h.contact_number = ?,
    h.emergency_number = ?,
    h.contact_person = ?,
    h.status = ?
WHERE h.id = ?
`;

// DELETE
const DELETE_HEALTH_FACILITY = `
DELETE FROM health_facilities
WHERE id = ?
`;

module.exports = {
  CREATE_HEALTH_FACILITY,
  FIND_ALL_HEALTH_FACILITIES,
  FIND_HEALTH_FACILITY_BY_ID,
  FIND_HEALTH_FACILITY_BY_NAME,
  UPDATE_HEALTH_FACILITY,
  DELETE_HEALTH_FACILITY,
};
