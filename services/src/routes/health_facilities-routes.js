const { Router } = require("express");

const authenticate = require("../middleware/authenticate");
const HealthFacilitiesController = require("../controller/health_facilities-controller");

const router = Router();

router.use(authenticate);

router.get("/", HealthFacilitiesController.findAllHealthFacilities);
router.get("/:id", HealthFacilitiesController.findHealthFacilityById);
router.get("/facility/:facility_name", HealthFacilitiesController.findHealthFacilityByName);
router.post("/", HealthFacilitiesController.createHealthFacility);
router.put("/:id", HealthFacilitiesController.updateHealthFacility);
router.delete("/:id", HealthFacilitiesController.deleteHealthFacility);

module.exports = router;
