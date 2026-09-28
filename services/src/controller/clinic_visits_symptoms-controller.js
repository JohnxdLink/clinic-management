const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const clinic_visit_symptomsService = require("../services/clinic_visit_symptoms-service.js");

const createClinicVisitSymptom = async (req, res) => {
  try {
    const { clinic_visit_id, symptom_id, notes } = req.body;
    const result = await clinic_visit_symptomsServices.clinic_visit_symptoms(clinic_visit_id, symptom_id, notes);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created account successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created account error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllClinicVisitSymptoms = async (req, res) => {
  try {
    const result = await accountsService.findAllClinicVisitSymptoms();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all accounts fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all accounts error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAccountById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await accountsService.findAccountById(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find account by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find account by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAccountByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const result = await accountsService.findAccountByUsername(username);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account by username not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find account by username fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find account by username error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const result = await accountsService.updateAccount(id, username, password);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update account error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await accountsService.deleteAccount(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Account by id not found.",
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Account deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete account error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createClinicVisitSymptom,
  findAllClinicVisitSymptoms,
  findAccountById,
  findAccountByUsername,
  FIND_CLINIC_VISITS_BY_SYMPTOM_ID,
  UPDATE_CLINIC_VISIT_SYMPTOM,
  DELETE_CLINIC_VISIT_SYMPTOM,
};
