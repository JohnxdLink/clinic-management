const db = require("../config/database.js");

const {
  CREATE_ROLE,
  FIND_ALL_ROLES,
  FIND_ROLE_BY_ID,
  FIND_ROLE_BY_NAME,
  UPDATE_ROLE,
  DELETE_ROLE,
} = require("../database/queries/role-query.js");

// CREATE
const createRole = async (name, description) => {
  if (!name) {
    throw new Error("Role name is required.");
  }

  const [result] = await db.query(
    CREATE_ROLE,
    [name, description]
  );

  return result;
};

// READ - Get all roles
const findAllRoles = async () => {
  const [rows] = await db.query(FIND_ALL_ROLES);
  return rows;
};

// READ - Get role by ID
const findRoleById = async (id) => {
  if (!id) {
    throw new Error("Role ID is required.");
  }

  const [rows] = await db.query(
    FIND_ROLE_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get role by name
const findRoleByName = async (name) => {
  if (!name) {
    throw new Error("Role name is required.");
  }

  const [rows] = await db.query(
    FIND_ROLE_BY_NAME,
    [name]
  );

  return rows[0] || null;
};

// UPDATE
const updateRole = async (id, name, description) => {
  if (!id) {
    throw new Error("Role ID is required.");
  }

  if (!name) {
    throw new Error("Role name is required.");
  }

  const [result] = await db.query(
    UPDATE_ROLE,
    [name, description, id]
  );

  return result;
};

// DELETE
const deleteRole = async (id) => {
  if (!id) {
    throw new Error("Role ID is required.");
  }

  const [result] = await db.query(
    DELETE_ROLE,
    [id]
  );

  return result;
};

module.exports = {
  createRole,
  findAllRoles,
  findRoleById,
  findRoleByName,
  updateRole,
  deleteRole,
};