const db = require("../config/database.js");

const {
  CREATE_MEDICAL_ITEM,
  FIND_ALL_MEDICAL_ITEMS,
  FIND_MEDICAL_ITEM_BY_ID,
  FIND_MEDICAL_ITEM_BY_NAME,
  UPDATE_MEDICAL_ITEM,
  DELETE_MEDICAL_ITEM,
} = require("../database/queries/medical-item-query.js");

// CREATE
const createMedicalItem = async (
  item_name,
  category,
  unit,
  quantity,
  reorder_level,
  expiration_date,
  status
) => {
  if (!item_name || !category || !unit) {
    throw new Error("Item name, category, and unit are required.");
  }

  const [result] = await db.query(
    CREATE_MEDICAL_ITEM,
    [
      item_name,
      category,
      unit,
      quantity,
      reorder_level,
      expiration_date,
      status,
    ]
  );

  return result;
};

// READ - Get all medical items
const findAllMedicalItems = async () => {
  const [rows] = await db.query(FIND_ALL_MEDICAL_ITEMS);
  return rows;
};

// READ - Get medical item by ID
const findMedicalItemById = async (id) => {
  if (!id) {
    throw new Error("Medical item ID is required.");
  }

  const [rows] = await db.query(
    FIND_MEDICAL_ITEM_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get medical item by name
const findMedicalItemByName = async (item_name) => {
  if (!item_name) {
    throw new Error("Item name is required.");
  }

  const [rows] = await db.query(
    FIND_MEDICAL_ITEM_BY_NAME,
    [item_name]
  );

  return rows[0] || null;
};

// UPDATE
const updateMedicalItem = async (
  id,
  item_name,
  category,
  unit,
  quantity,
  reorder_level,
  expiration_date,
  status
) => {
  if (!id) {
    throw new Error("Medical item ID is required.");
  }

  if (!item_name || !category || !unit) {
    throw new Error("Item name, category, and unit are required.");
  }

  const [result] = await db.query(
    UPDATE_MEDICAL_ITEM,
    [
      item_name,
      category,
      unit,
      quantity,
      reorder_level,
      expiration_date,
      status,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteMedicalItem = async (id) => {
  if (!id) {
    throw new Error("Medical item ID is required.");
  }

  const [result] = await db.query(
    DELETE_MEDICAL_ITEM,
    [id]
  );

  return result;
};

module.exports = {
  createMedicalItem,
  findAllMedicalItems,
  findMedicalItemById,
  findMedicalItemByName,
  updateMedicalItem,
  deleteMedicalItem,
};