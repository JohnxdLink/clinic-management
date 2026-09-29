const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const symptomsService = require("../services/symptoms-service.js");

const createSymptom = async (req, res) => {
  try {
    const {symptom_name,description,status,} = req.body;

    const result = await symptomsService.createSymptom(symptom_name,description,status);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created symptom successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created symptom error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllSymptoms = async (req, res) => {
  try {
    const result = await symptomsService.findAllSymptoms();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all symptoms fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all symptoms error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findSymptomById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await symptomsService.findSymptomById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Symptom by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find symptom by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find symptom by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findSymptomByName = async (req, res) => {
  try {
    const { symptom_name } = req.params;

    const result =
      await symptomsService.findSymptomByName(symptom_name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Symptom by name not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find symptom by name fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find symptom by name error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const updateSymptom = async (req, res) => {
  try {
    const { id } = req.params;

    const {symptom_name,description,status,} = req.body;

    const result = await symptomsService.updateSymptom(id,symptom_name,description,status);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Symptom not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Symptom updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update symptom error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const deleteSymptom = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await symptomsService.deleteSymptom(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Symptom by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Symptom deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete symptom error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createSymptom,
  findAllSymptoms,
  findSymptomById,
  findSymptomByName,
  updateSymptom,
  deleteSymptom,
};