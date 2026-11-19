const { Router } = require("express");

const authenticate = require("../middleware/authenticate");
const medicalItemsController = require("../controller/medical_items-controller.js");

const router = Router();

//router.use(authenticate);

router.get("/", medicalItemsController.findAllMedicalItems);
router.get("/:id", medicalItemsController.findMedicalItemById);
router.get("/name/:item_name", medicalItemsController.findMedicalItemByName);
router.post("/", medicalItemsController.createMedicalItem);
router.put("/:id", medicalItemsController.updateMedicalItem);
router.delete("/:id", medicalItemsController.deleteMedicalItem);

module.exports = router;
