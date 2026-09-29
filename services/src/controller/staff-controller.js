const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const staffService = require("../services/staff-service.js");

const createStaff = async (req, res) => {
  try {
    const {account_id,role_id,lastname,firstname,contact_no,email,} = req.body;

    const result = await staffService.createStaff(account_id,role_id,lastname,firstname,contact_no,email);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created staff successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created staff error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllStaffs = async (req, res) => {
  try {
    const result = await staffService.findAllStaffs();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all staffs fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all staffs error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findStaffById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await staffService.findStaffById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find staff by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findStaffByAccountId = async (req, res) => {
  try {
    const { account_id } = req.params;

    const result = await staffService.findStaffByAccountId(account_id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff by account id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find staff by account id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff by account id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findStaffByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const result = await staffService.findStaffByEmail(email);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff by email not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find staff by email fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find staff by email error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const {account_id,role_id,lastname,firstname,contact_no,email,} = req.body;

    const result = await staffService.updateStaff(id,account_id,role_id,lastname,firstname,contact_no,email);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update staff error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await staffService.deleteStaff(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Staff by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Staff deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete staff error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createStaff,
  findAllStaffs,
  findStaffById,
  findStaffByAccountId,
  findStaffByEmail,
  updateStaff,
  deleteStaff,
};