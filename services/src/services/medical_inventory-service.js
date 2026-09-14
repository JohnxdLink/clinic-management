const db = require("../config/database.js");

const {
  CREATE_MEDICAL_INVENTORY,
  FIND_ALL_MEDICAL_INVENTORY,
  FIND_MEDICAL_INVENTORY_BY_ID,
  FIND_MEDICAL_INVENTORY_BY_ITEM_ID,
  FIND_MEDICAL_INVENTORY_BY_RECORDED_BY,
  UPDATE_MEDICAL_INVENTORY,
  DELETE_MEDICAL_INVENTORY,
} = require("../database/queries/medical-inventory-query.js");

// CREATE
const createMedicalInventory = async (
  medical_item_id,
  transaction_type,
  quantity,
  transaction_date,
  remarks,
  recorded_by
) => {
  if (!medical_item_id || !transaction_type || !quantity || !recorded_by) {
    throw new Error(
      "Medical item ID, transaction type, quantity, and recorded by are required."
    );
  }

  const [result] = await db.query(
    CREATE_MEDICAL_INVENTORY,
    [
      medical_item_id,
      transaction_type,
      quantity,
      transaction_date,
      remarks,
      recorded_by,
    ]
  );

  return result;
};

// READ - Get all medical inventory transactions
const findAllMedicalInventory = async () => {
  const [rows] = await db.query(FIND_ALL_MEDICAL_INVENTORY);
  return rows;
};

// READ - Get medical inventory by ID
const findMedicalInventoryById = async (id) => {
  if (!id) {
    throw new Error("Medical inventory ID is required.");
  }

  const [rows] = await db.query(
    FIND_MEDICAL_INVENTORY_BY_ID,
    [id]
  );

  return rows[0] || null;
};

// READ - Get medical inventory by medical item ID
const findMedicalInventoryByItemId = async (medical_item_id) => {
  if (!medical_item_id) {
    throw new Error("Medical item ID is required.");
  }

  const [rows] = await db.query(
    FIND_MEDICAL_INVENTORY_BY_ITEM_ID,
    [medical_item_id]
  );

  return rows;
};

// READ - Get medical inventory by staff ID
const findMedicalInventoryByRecordedBy = async (recorded_by) => {
  if (!recorded_by) {
    throw new Error("Recorded by staff ID is required.");
  }

  const [rows] = await db.query(
    FIND_MEDICAL_INVENTORY_BY_RECORDED_BY,
    [recorded_by]
  );

  return rows;
};

// UPDATE
const updateMedicalInventory = async (
  id,
  medical_item_id,
  transaction_type,
  quantity,
  transaction_date,
  remarks,
  recorded_by
) => {
  if (!id) {
    throw new Error("Medical inventory ID is required.");
  }

  if (!medical_item_id || !transaction_type || !quantity || !recorded_by) {
    throw new Error(
      "Medical item ID, transaction type, quantity, and recorded by are required."
    );
  }

  const [result] = await db.query(
    UPDATE_MEDICAL_INVENTORY,
    [
      medical_item_id,
      transaction_type,
      quantity,
      transaction_date,
      remarks,
      recorded_by,
      id,
    ]
  );

  return result;
};

// DELETE
const deleteMedicalInventory = async (id) => {
  if (!id) {
    throw new Error("Medical inventory ID is required.");
  }

  const [result] = await db.query(
    DELETE_MEDICAL_INVENTORY,
    [id]
  );

  return result;
};

module.exports = {
  createMedicalInventory,
  findAllMedicalInventory,
  findMedicalInventoryById,
  findMedicalInventoryByItemId,
  findMedicalInventoryByRecordedBy,
  updateMedicalInventory,
  deleteMedicalInventory,
};