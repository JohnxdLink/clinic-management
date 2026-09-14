const CREATE_MEDICAL_INVENTORY = `
  INSERT INTO medical_inventory (
    medical_item_id,
    transaction_type,
    quantity,
    transaction_date,
    remarks,
    recorded_by
  )
  VALUES (?, ?, ?, ?, ?, ?)
`;

// READ - Get all medical inventory transactions
const FIND_ALL_MEDICAL_INVENTORY = `
  SELECT
    m.id,
    m.medical_item_id,
    m.transaction_type,
    m.quantity,
    m.transaction_date,
    m.remarks,
    m.recorded_by,
    m.created_at
  FROM medical_inventory AS m
  ORDER BY m.id DESC
`;

// READ - Get medical inventory by ID
const FIND_MEDICAL_INVENTORY_BY_ID = `
  SELECT
    m.id,
    m.medical_item_id,
    m.transaction_type,
    m.quantity,
    m.transaction_date,
    m.remarks,
    m.recorded_by,
    m.created_at
  FROM medical_inventory AS m
  WHERE m.id = ?
`;

// READ - Get medical inventory by medical item ID
const FIND_MEDICAL_INVENTORY_BY_ITEM_ID = `
  SELECT
    m.id,
    m.medical_item_id,
    m.transaction_type,
    m.quantity,
    m.transaction_date,
    m.remarks,
    m.recorded_by,
    m.created_at
  FROM medical_inventory AS m
  WHERE m.medical_item_id = ?
  ORDER BY m.id DESC
`;

// READ - Get medical inventory by staff ID
const FIND_MEDICAL_INVENTORY_BY_RECORDED_BY = `
  SELECT
    m.id,
    m.medical_item_id,
    m.transaction_type,
    m.quantity,
    m.transaction_date,
    m.remarks,
    m.recorded_by,
    m.created_at
  FROM medical_inventory AS m
  WHERE m.recorded_by = ?
  ORDER BY m.id DESC
`;

// UPDATE
const UPDATE_MEDICAL_INVENTORY = `
  UPDATE medical_inventory AS m
  SET
    m.medical_item_id = ?,
    m.transaction_type = ?,
    m.quantity = ?,
    m.transaction_date = ?,
    m.remarks = ?,
    m.recorded_by = ?
  WHERE m.id = ?
`;

// DELETE
const DELETE_MEDICAL_INVENTORY = `
  DELETE FROM medical_inventory
  WHERE id = ?
`;

module.exports = {
  CREATE_MEDICAL_INVENTORY,
  FIND_ALL_MEDICAL_INVENTORY,
  FIND_MEDICAL_INVENTORY_BY_ID,
  FIND_MEDICAL_INVENTORY_BY_ITEM_ID,
  FIND_MEDICAL_INVENTORY_BY_RECORDED_BY,
  UPDATE_MEDICAL_INVENTORY,
  DELETE_MEDICAL_INVENTORY,
};
