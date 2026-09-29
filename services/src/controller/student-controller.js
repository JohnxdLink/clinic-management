const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const studentsService = require("../services/students-service.js");

const createStudent = async (req, res) => {
  try {
    const {grade_section_id,account_id,lastname,firstname,middlename,contact_no,} = req.body;

    const result = await studentsService.createStudent(grade_section_id,account_id,lastname,firstname,middlename,contact_no);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created student successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created student error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllStudents = async (req, res) => {
  try {
    const result = await studentsService.findAllStudents();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all students fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all students error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await studentsService.findStudentById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find student by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findStudentByAccountId = async (req, res) => {
  try {
    const { account_id } = req.params;

    const result =
      await studentsService.findStudentByAccountId(account_id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student by account id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find student by account id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find student by account id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const {grade_section_id,account_id,lastname,firstname,middlename,contact_no,} = req.body;

    const result = await studentsService.updateStudent(id,grade_section_id,account_id,lastname,firstname,middlename,contact_no);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update student error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await studentsService.deleteStudent(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Student by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Student deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete student error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createStudent,
  findAllStudents,
  findStudentById,
  findStudentByAccountId,
  updateStudent,
  deleteStudent,
};