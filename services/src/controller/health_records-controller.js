const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const healthRecordsService = require("../services/health_records-service.js");

const createHealthRecord = async (req, res) => {
  try {
    const {student_id,staff_id,blood_type,allergies,medical_condition,current_medications,emergency_contact_name,emergency_contact_number,emergency_contact_relationship,notes,} = req.body;

    const result = await healthRecordsService.createHealthRecord(student_id,staff_id,blood_type,allergies,medical_condition,current_medications,emergency_contact_name,emergency_contact_number,emergency_contact_relationship,notes);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created health record successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created health record error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllHealthRecords = async (req, res) => {
  try {
    const result =
      await healthRecordsService.findAllHealthRecords();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all health records fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all health records error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findHealthRecordById = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await healthRecordsService.findHealthRecordById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health record by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find health record by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find health record by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findHealthRecordByStudentId = async (req, res) => {
  try {
    const { student_id } = req.params;

    const result =
      await healthRecordsService.findHealthRecordByStudentId(
        student_id
      );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health record by student id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message:
        "Find health record by student id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find health record by student id error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findHealthRecordByStaffId = async (req, res) => {
  try {
    const { staff_id } = req.params;

    const result =
      await healthRecordsService.findHealthRecordByStaffId(
        staff_id
      );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health record by staff id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message:
        "Find health record by staff id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find health record by staff id error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateHealthRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const {student_id,staff_id,blood_type,allergies,medical_condition,current_medications,emergency_contact_name,emergency_contact_number,emergency_contact_relationship,notes,} = req.body;

    const result = await healthRecordsService.updateHealthRecord(id,student_id,staff_id,blood_type,allergies,medical_condition,current_medications,emergency_contact_name,emergency_contact_number,emergency_contact_relationship,notes);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health record not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Health record updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update health record error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteHealthRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await healthRecordsService.deleteHealthRecord(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health record by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Health record deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete health record error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createHealthRecord,
  findAllHealthRecords,
  findHealthRecordById,
  findHealthRecordByStudentId,
  findHealthRecordByStaffId,
  updateHealthRecord,
  deleteHealthRecord,
};