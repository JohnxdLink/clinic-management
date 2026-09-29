const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const clinicVisitsSymptomsService = require("../services/clinic_visit_symptoms-service.js");

const createClinicVisitSymptom = async (req, res) => {
  try {
    const { clinic_visit_id, symptom_id, notes } = req.body;
    const result = await clinicVisitsSymptomsService.clinic_visit_symptoms(clinic_visit_id, symptom_id, notes);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created clinic visit symptoms successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created clinic visit symptoms error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllClinicVisitSymptoms = async (req, res) => {
  try {
    const result = await clinicVisitsSymptomsService.findAllClinicVisitSymptoms();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all clinic visit symptoms fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all clinic visit symptoms error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findClinicVisitsSymptomsByid = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findClinicVisitSymptomsByIdService.findClinicVisitsSymptomsByid(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Symptoms by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find clinic visit by symptoms id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find clinic visit by symptoms id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findClinicVisitSymptomsByVisitId = async (req, res) => {
  try {
    const { clinic_visit_id } = req.params;

    const result = await findClinicVisitSymptomsByVisitIdService.findClinicVisitSymptomsByVisitId(clinic_visit-id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic Visit Symptoms by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find clinic visit symptoms by visit id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find clinic visit symptoms by visit id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateClinicVisitSymptom = async (req, res) => {
  try {
    const { id } = req.params;
    const { clinic_visit_id, symptom_id, notes } = req.body;

    const result = await clinicvisitsymptomsService.updateClinicVisitSymptom(id, username, password);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic visit symptoms not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Clinic visit symptoms updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update clinic visit symptoms error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteClinicVisitSymptom = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await clinicvisitsymptomsService.deleteClinicVisitSymptom(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic Visit Symptoms by id not found.",
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: " Clinic Visit Symptoms deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete clinic visit symptoms error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createClinicVisitSymptom,
  findAllClinicVisitSymptoms,
  findClinicVisitsSymptomsByid,
  findClinicVisitSymptomsByVisitId,
  updateClinicVisitSymptom,
  deleteClinicVisitSymptom,
};
