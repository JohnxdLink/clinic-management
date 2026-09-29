const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const roleService = require("../services/role-service.js");


const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    const result = await roleService.createRole(name, description);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Created role successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Created role error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findAllRoles = async (req, res) => {
  try {
    const result = await roleService.findAllRoles();

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find all roles fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Failed find all roles error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findRoleById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await roleService.findRoleById(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find role by id fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find role by id error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const findRoleByName = async (req, res) => {
  try {
    const { name } = req.params;

    const result = await roleService.findRoleByName(name);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role by name not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Find role by name fetched successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Find role by name error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const result = await roleService.updateRole(id,name,description);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role updated successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Update role error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};


const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await roleService.deleteRole(id);

    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Role by id not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Role deleted successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Delete role error:", error);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  createRole,
  findAllRoles,
  findRoleById,
  findRoleByName,
  updateRole,
  deleteRole,
};