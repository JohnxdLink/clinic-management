const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const gradenstrandService = require("../services/grade_n_strand-service.js");

const createGradeNStrand = async (req, res) => {
  try {
    const { grade_leveel, srtand, description } = req.body;
    const result = await gradenstrandService.createGradeNStrand(grade_leveel, srtand, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created grade n strand successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created grade n strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAllGradeNStrands = async (req, res) => {
  try {
    const result = await gradenstrandService.findAllGradeNStrands();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all grade n strand fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all grade n strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeNStrandByid = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await findGradeNstrandByIdService.findGradeNstrandByid(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade N Strand by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grdae n strand by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find grade n strand by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findGradeNStrand = async (req, res) => {
  try {
    const { grade_level, strand} = req.params;

    const result = await findfindClinicVisitByIdService.findGradeNStrand(grade_level, strand);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade N Strand by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find grade n strand by id fetched successfully.",
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

const updateGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;
    const {health_record_id,visit_date,time_in,time_out,reason,symptoms,treatment,remarks,recorded_by, } = req.body;

    const result = await gradenstrandServicee.updateGradeNStrand(id,health_record_id,visit_date,time_in,time_out,reason,symptoms,treatment,remarks,recorded_by,);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Clinic visit not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: " Grade n strand updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update grade n strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const deleteGradeNStrand = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await gradenstrandService.deleteGradeNStrand (id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Grade N Strand by id not found.",
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: " Grade N Strand deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete grade n strand error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createGradeNStrand,
  findAllGradeNStrands,
  findGradeNStrandByid,
  findGradeNStrand,
  updateGradeNStrand,
  deleteGradeNStrand,
};
