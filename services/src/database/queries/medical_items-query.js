const CREATE_MEDICAL_ITEM = `
  INSERT INTO medical_items (
    item_name,
    category,
    unit,
    quantity,
    reorder_level,
    expiration_date,
    status
  )
  VALUES (?, ?, ?, ?, ?, ?, ?)
`;

// READ - Get all medical items
const FIND_ALL_MEDICAL_ITEMS = `
  SELECT
    m.id,
    m.item_name,
    m.category,
    m.unit,
    m.quantity,
    m.reorder_level,
    m.expiration_date,
    m.status,
    m.created_at,
    m.updated_at
  FROM medical_items AS m
  ORDER BY m.id DESC
`;

// READ - Get medical item by ID
const FIND_MEDICAL_ITEM_BY_ID = `
  SELECT
    m.id,
    m.item_name,
    m.category,
    m.unit,
    m.quantity,
    m.reorder_level,
    m.expiration_date,
    m.status,
    m.created_at,
    m.updated_at
  FROM medical_items AS m
  WHERE m.id = ?
`;

// READ - Get medical item by name
const FIND_MEDICAL_ITEM_BY_NAME = `
  SELECT
    m.id,
    m.item_name,
    m.category,
    m.unit,
    m.quantity,
    m.reorder_level,
    m.expiration_date,
    m.status,
    m.created_at,
    m.updated_at
  FROM medical_items AS m
  WHERE m.item_name = ?
`;

// UPDATE
const UPDATE_MEDICAL_ITEM = `
  UPDATE medical_items AS m
  SET
    m.item_name = ?,
    m.category = ?,
    m.unit = ?,
    m.quantity = ?,
    m.reorder_level = ?,
    m.expiration_date = ?,
    m.status = ?
  WHERE m.id = ?
`;

// DELETE
const DELETE_MEDICAL_ITEM = `
  DELETE FROM medical_items
  WHERE id = ?
`;

module.exports = {
  CREATE_MEDICAL_ITEM,
  FIND_ALL_MEDICAL_ITEMS,
  FIND_MEDICAL_ITEM_BY_ID,
  FIND_MEDICAL_ITEM_BY_NAME,
  UPDATE_MEDICAL_ITEM,
  DELETE_MEDICAL_ITEM,
};
