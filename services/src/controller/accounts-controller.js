const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const gradeNStrandsService = require("../services/grade_n_strands-service.js");

const createGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandsService.createGradeNStrand(
      grade_level,
      strand,
      description
    );

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created grade and strand successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created grade and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllGradeNStrands = async (req, res) => {
  try {
    const result = await gradeNStrandsService.findAllGradeNStrands();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all grade and strands fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all grade and strands error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeNStrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandsService.findGradeNStrandById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade and strand by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade and strand by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade and strand by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand } = req.query;

    const result = await gradeNStrandsService.findGradeNStrand(
      grade_level,
      strand
    );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade and strand fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade_level, strand, description } = req.body;

    const result = await gradeNStrandsService.updateGradeNStrand(
      id,
      grade_level,
      strand,
      description
    );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade and strand not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade and strand updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeNStrandsService.deleteGradeNStrand(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade and strand by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade and strand deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade and strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createGradeNStrand,
  findAllGradeNStrands,
  findGradeNStrandById,
  findGradeNStrand,
  updateGradeNStrand,
  deleteGradeNStrand,
};