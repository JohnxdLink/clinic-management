const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const clinicVisitsService = require("../services/clinic_visit-service.js");

const createClinicVisit = async (req, res) => {
  try {
    const { health_record_id,visit_date, time_in, time_out, reason, symptoms, treatment, remarks, recorded_by } = req.body;
    const result = await clinicVisitsService.createclinic_visit(health_record_id,visit_date, time_in, time_out, reason, symptoms, treatment, remarks, recorded_by,);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created clinic visit successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created clinic visit error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllClinicVisit = async (req, res) => {
  try {
    const result = await clinicVisitsService.findAllClinicVisit();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all clinic visit fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all clinic visit error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findClinicVisitsByid = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findClinicVisitByIdService.findClinicVisitsByid(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic Visit by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find clinic visit by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find clinic visit by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findClinicVisitsByHealthRecordId = async (req, res) => {
  try {
    const { health_record_id } = req.params;

    const result = await findfindClinicVisitByIdService.findClinicVisitsByHealthRecordId(health_record_id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic Visit by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find clinic visit by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find clinic visit by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const updateClinicVisit = async (req, res) => {
  try {
    const { id } = req.params;
    const {health_record_id,visit_date,time_in,time_out,reason,symptoms,treatment,remarks,recorded_by, } = req.body;

    const result = await clinicvisitService.updateClinicVisit(id,health_record_id,visit_date,time_in,time_out,reason,symptoms,treatment,remarks,recorded_by,);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic visit not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Clinic visit updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update clinic visit error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteClinicVisit = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await clinicvisitService.deleteClinicVisit(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic Visit by id not found.",
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: " Clinic Visit deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete clinic visit error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createClinicVisit,
  findAllClinicVisit,
  findClinicVisitsByid,
  findClinicVisitsByHealthRecordId,
  updateClinicVisit,
  deleteClinicVisit,
};
