const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const medicalItemsService = require("../services/medical_items-service.js");

const createMedicalItem = async (req, res) => {
  try {
    const { item_name, category, unit, quantity, reorder_level, expiration_date, status } = req.body;

    const result = await medicalItemsService.createMedicalItem(
      item_name,
      category,
      unit,
      quantity,
      reorder_level,
      expiration_date,
      status,
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created medical item successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created medical item error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllMedicalItems = async (req, res) => {
  try {
    const result = await medicalItemsService.findAllMedicalItems();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all medical items fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all medical items error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findMedicalItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await medicalItemsService.findMedicalItemById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical item by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find medical item by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find medical item by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findMedicalItemByName = async (req, res) => {
  try {
    const { item_name } = req.params;

    const result = await medicalItemsService.findMedicalItemByName(item_name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical item by name not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find medical item by name fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find medical item by name error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateMedicalItem = async (req, res) => {
  try {
    const { id } = req.params;

    const { item_name, category, unit, quantity, reorder_level, expiration_date, status } = req.body;

    const result = await medicalItemsService.updateMedicalItem(
      id,
      item_name,
      category,
      unit,
      quantity,
      reorder_level,
      expiration_date,
      status,
    );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical item not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Medical item updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update medical item error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteMedicalItem = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await medicalItemsService.deleteMedicalItem(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical item by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Medical item deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete medical item error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createMedicalItem,
  findAllMedicalItems,
  findMedicalItemById,
  findMedicalItemByName,
  updateMedicalItem,
  deleteMedicalItem,
};
