const express = require("express");
const { route } = require("./accounts-routes");

const {
createClinicVisitSyptomsController,
findAllClinicVisiVisitSymptomsController,
findClinicVisitSymptomsByIdController,
updateClinicVisitSymptoms,
deleteClinicVisitSymptomscontroller,
deleteClinicVisitSymptom,
} =  require("../controller/clinic_visits_symptoms-controller.js");

const router =express.Router();

router.post(
    "/",
    createClinicVisitSyptomsController
);

router.get(
    "/",
    findAllClinicVisiVisitSymptomsController
);

router.get(
    "/:id",
    findClinicVisitSymptomsByIdController
);

router.put(
    "/:id",
    updateClinicVisitSymptoms

)

router.delete(
    "/:id",
    deleteClinicVisitSymptom
)

module.exports = router;