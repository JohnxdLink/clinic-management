const { Router } = require("express");

const authenticate = require("../middleware/authenticate.js");
const schoolYearController = require("../controller/school_year-controller.js");

const router = Router();

// ✅ LGTM
router.use(authenticate);

router.get("/", schoolYearController.findAllSchoolYears);
router.get("/:id", schoolYearController.findSchoolYearById);
router.get("/year/:school_year", schoolYearController.findSchoolYearByYear);
router.get("/year/active", schoolYearController.findActiveSchoolYear);
router.post("/", schoolYearController.createSchoolYear);
router.put("/:id", schoolYearController.updateSchoolYear);
router.delete("/:id", schoolYearController.deleteSchoolYear);

module.exports = router;
