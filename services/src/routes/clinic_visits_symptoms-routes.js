const { Router } = require("express");

    const authenticate = require("../middleware/authenticate");
    const clinicVisitsSymptomsController = require("../controller/clinic_visits_symptoms-controller.js");

const router = Router();

router.use(authenticate);

router.get("/", clinicVisitsSymptomsController.findAllClinicVisitSymptoms);
router.get("/", clinicVisitsSymptomsController.findAllClinicVisitSymptomsById);
router.get("/", clinicVisitsSymptomsController.findAllClinicVisitSymptomsVisitId);
router.post("/", clinicVisitsSymptomsController.createClinicVisitSymptoms);
router.put("/", clinicVisitsSymptomsController.UpdateClinicVisitSymptoms);
router.delete("/", clinicVisitsSymptomsController.DeleteClinicVisitSymptoms);

module.exports = router;