const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const medicalInventoryService = require("../services/medical_inventory-service.js");


const createMedicalInventory = async (req, res) => {
  try {
    const {medical_item_id,transaction_type,quantity,transaction_date,remarks,recorded_by,} = req.body;

    const result = await medicalInventoryService.createMedicalInventory(medical_item_id,transaction_type,quantity,transaction_date,remarks,recorded_by);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created medical inventory successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created medical inventory error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllMedicalInventory = async (req, res) => {
  try {
    const result =
      await medicalInventoryService.findAllMedicalInventory();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all medical inventory fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Failed find all medical inventory error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findMedicalInventoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await medicalInventoryService.findMedicalInventoryById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical inventory by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message:
        "Find medical inventory by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find medical inventory by id error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findMedicalInventoryByItemId = async (req, res) => {
  try {
    const { medical_item_id } = req.params;

    const result =
      await medicalInventoryService.findMedicalInventoryByItemId(
        medical_item_id
      );

    return res.status(StatusCodes.OK).json({
      success: true,
      message:
        "Find medical inventory by medical item id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find medical inventory by medical item id error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findMedicalInventoryByRecordedBy = async (req, res) => {
  try {
    const { recorded_by } = req.params;

    const result =
      await medicalInventoryService.findMedicalInventoryByRecordedBy(
        recorded_by
      );

    return res.status(StatusCodes.OK).json({
      success: true,
      message:
        "Find medical inventory by recorded by fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find medical inventory by recorded by error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateMedicalInventory = async (req, res) => {
  try {
    const { id } = req.params;

    const {medical_item_id,transaction_type,quantity,transaction_date,remarks,recorded_by,} = req.body;

    const result =
      await medicalInventoryService.updateMedicalInventory(id,medical_item_id,transaction_type,quantity,transaction_date,remarks,recorded_by);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical inventory not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Medical inventory updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update medical inventory error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const deleteMedicalInventory = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await medicalInventoryService.deleteMedicalInventory(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Medical inventory by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Medical inventory deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete medical inventory error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
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