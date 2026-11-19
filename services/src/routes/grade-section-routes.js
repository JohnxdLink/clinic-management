const { Routes } = require("express");

const authenticate = require("../middleware/authenticate");
const clinicVisitsController = require("../controller/grade-section-controller.js");

const router = Router();

router.use(authenticate);

router.post("/", GradeSectionController.createGradeSection);
router.get("/", GradeSectionController.findAllGradeSections);
router.get("/", GradeSectionController.findGradeSectionByid);
router.get("/", GradeSectionController.findGradeSectionsBySchoolYeer);
router.get("/", GradeSectionController.findGradeSectionByGradeNStrand);
router.get("/", GradeSectionController.findGradeSectionByAdvisor);
router.get("/", GradeSectionController.findGradeSection);
router.put("/", GradeSectionController.updateGradeSection);
router.delete("/", GradeSectionController.deleteGradeSection);

module.exports = router;