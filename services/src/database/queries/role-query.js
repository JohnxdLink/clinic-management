// CREATE
const CREATE_ROLE = `
  INSERT INTO roles (name, description)
  VALUES (?, ?)
`;

// READ - Get all roles
const FIND_ALL_ROLES = `
  SELECT
    r.id ,
    r.name,
    r.description,
    r.created_at,
    r.updated_at
  FROM roles AS r
  ORDER BY r.id DESC
`;

// READ - Get role by ID
const FIND_ROLE_BY_ID = `
  SELECT
    r.id ,
    r.name,
    r.description,
    r.created_at,
    r.updated_at
  FROM roles AS r
  WHERE r.id = ?
`;

// READ - Get role by name
const FIND_ROLE_BY_NAME = `
  SELECT
    r.id ,
    r.name,
    r.description,
    r.created_at,
    r.updated_at
  FROM roles AS r
  WHERE r.name = ?
`;

// UPDATE
const UPDATE_ROLE = `
  UPDATE roles
  SET
    name = ?,
    description = ?
  WHERE id = ?
`;

// DELETE
const DELETE_ROLE = `
  DELETE FROM roles
  WHERE id = ?
`;

module.exports = {
  CREATE_ROLE,
  FIND_ALL_ROLES,
  FIND_ROLE_BY_ID,
  FIND_ROLE_BY_NAME,
  UPDATE_ROLE,
  DELETE_ROLE,
};
