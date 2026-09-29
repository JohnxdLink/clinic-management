const express = require("express");

const {
  createAccountController,
  findAllAccountsController,
  findAccountByIdController,
  updateAccountController,
  deleteAccountController,
} = require("../controllers/accounts-controller.js");

const router = express.Router();


router.post(
  "/",
  createAccountController
);


router.get(
  "/",
  findAllAccountsController
);


router.get(
  "/:id",
  findAccountByIdController
);


router.put(
  "/:id",
  updateAccountController
);

router.delete(
  "/:id",
  deleteAccountController
);

module.exports = router;