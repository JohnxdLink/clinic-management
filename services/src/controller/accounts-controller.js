const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const gradeNStrandsService = require("../services/grade_n_strands-service.js");

const createAccount = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await accountService.createAccount( username, password);

    return res.status(StatusCodes.CREATED).json({
      status: StatusCodes.CREATED,
      message: "Account created successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

const findAllAccountsController = async (req, res) => {
  try {
    const accounts = await findAllAccounts();

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Accounts retrieved successfully.",
      data: accounts,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
    });
  }
};

const findAccountByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await findAccountById(id);

    if (!account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: StatusCodes.NOT_FOUND,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Account retrieved successfully.",
      data: account,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};


const findAccountByUsernameController = async (req, res) => {
  try {
    const { username } = req.params;

    const account = await findAccountByUsername(username);

    if (!account) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: StatusCodes.NOT_FOUND,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Account retrieved successfully.",
      data: account,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};


const updateAccountController = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const result = await updateAccount(id, username, password);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: StatusCodes.NOT_FOUND,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Account updated successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};


const deleteAccountController = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteAccount(id);

    if (result.affectedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        status: StatusCodes.NOT_FOUND,
        message: "Account not found.",
      });
    }

    return res.status(StatusCodes.OK).json({
      status: StatusCodes.OK,
      message: "Account deleted successfully.",
      data: result,
    });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      message: error.message || ReasonPhrases.BAD_REQUEST,
    });
  }
};

module.exports = {
  createAccountController,
  findAllAccountsController,
  findAccountByIdController,
  findAccountByUsernameController,
  updateAccountController,
  deleteAccountController,
};