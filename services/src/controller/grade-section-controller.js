const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const gradeSectionsService = require("../services/grade_sections-service.js");

const createGradeSection = async (req, res) => {
  try {
    const {school_year_id,grade_n_strand_id,adviser_staff_id,section_name,description,} = req.body;

    const result = await gradeSectionsService.createGradeSection(school_year_id,grade_n_strand_id,adviser_staff_id,section_name,description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created grade section successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created grade section error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllGradeSections = async (req, res) => {
  try {
    const result = await gradeSectionsService.findAllGradeSections();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all grade sections fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all grade sections error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeSectionById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeSectionsService.findGradeSectionById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade section by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade section by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeSectionsBySchoolYear = async (req, res) => {
  try {
    const { school_year_id } = req.params;

    const result =
      await gradeSectionsService.findGradeSectionsBySchoolYear(
        school_year_id
      );

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade sections by school year fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find grade sections by school year error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeSectionsByGradeNStrand = async (req, res) => {
  try {
    const { grade_n_strand_id } = req.params;

    const result =
      await gradeSectionsService.findGradeSectionsByGradeNStrand(
        grade_n_strand_id
      );

    return res.status(StatusCodes.OK).json({
      success: true,
      message:
        "Find grade sections by grade and strand fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find grade sections by grade and strand error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeSectionsByAdviser = async (req, res) => {
  try {
    const { adviser_staff_id } = req.params;

    const result =
      await gradeSectionsService.findGradeSectionsByAdviser(
        adviser_staff_id
      );

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade sections by adviser fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find grade sections by adviser error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeSection = async (req, res) => {
  try {
    const {
      school_year_id,
      grade_n_strand_id,
      section_name,
    } = req.query;

    const result = await gradeSectionsService.findGradeSection(
      school_year_id,
      grade_n_strand_id,
      section_name
    );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade section fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade section error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateGradeSection = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description,
    } = req.body;

    const result = await gradeSectionsService.updateGradeSection(
      id,
      school_year_id,
      grade_n_strand_id,
      adviser_staff_id,
      section_name,
      description
    );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade section error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteGradeSection = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradeSectionsService.deleteGradeSection(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade section by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Grade section deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade section error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createGradeSection,
  findAllGradeSections,
  findGradeSectionById,
  findGradeSectionsBySchoolYear,
  findGradeSectionsByGradeNStrand,
  findGradeSectionsByAdviser,
  findGradeSection,
  updateGradeSection,
  deleteGradeSection,
};