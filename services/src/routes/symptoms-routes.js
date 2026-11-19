const { Router } = require("express");

const authenticate = require("../middleware/authenticate");
const symptomsController = require("../controller/symptoms-controller.js");

const router = Router();

router.use(authenticate);

router,get("/", symptomsController,findAllSymptoms);
router.get("/", symptomsController,findSymptomById);
router,get("/", symptomsController,findSymptomByName);
router,post("/", symptomsController,createSymptom);
router,put("/", symptomsController,updateSymptom);
router,delete("/", symptomsController,deleteSymptom);

mudule.exports = router;