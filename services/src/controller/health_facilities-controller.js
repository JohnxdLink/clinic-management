const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const healthFacilitiesService = require("../services/health_facilities-service.js");


const createHealthFacility = async (req, res) => {
  try {
    const {facility_name,facility_type,address,contact_number,emergency_number,contact_person,status,} = req.body;

    const result = await healthFacilitiesService.createHealthFacility(facility_name,facility_type,address,contact_number,emergency_number,contact_person,status);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created health facility successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created health facility error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllHealthFacilities = async (req, res) => {
  try {
    const result =
      await healthFacilitiesService.findAllHealthFacilities();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all health facilities fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Failed find all health facilities error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findHealthFacilityById = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await healthFacilitiesService.findHealthFacilityById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health facility by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find health facility by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find health facility by id error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findHealthFacilityByName = async (req, res) => {
  try {
    const { facility_name } = req.params;

    const result =
      await healthFacilitiesService.findHealthFacilityByName(
        facility_name
      );

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health facility by name not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find health facility by name fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error(
      "Find health facility by name error:",
      error
    );

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const updateHealthFacility = async (req, res) => {
  try {
    const { id } = req.params;

    const {facility_name,facility_type,address,contact_number,emergency_number,contact_person,status,} = req.body;

    const result = await healthFacilitiesService.updateHealthFacility(id,facility_name,facility_type,address,contact_number,emergency_number,contact_person,status);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health facility not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Health facility updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update health facility error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteHealthFacility = async (req, res) => {
  try {
    const { id } = req.params;

    const result =
      await healthFacilitiesService.deleteHealthFacility(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Health facility by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Health facility deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete health facility error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createHealthFacility,
  findAllHealthFacilities,
  findHealthFacilityById,
  findHealthFacilityByName,
  updateHealthFacility,
  deleteHealthFacility,
};