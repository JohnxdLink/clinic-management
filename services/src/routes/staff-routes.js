const { routes } = require("express");

const authenticate = require("../middleware/authenticate");
const staffController = require("../controller/staff-controller");
const { findStaffById } = require("../services/staff-service");

const router = Router();

router.use(authenticate);

router.get("/", staffController.findAllStaffs);
router.get("/", staffController,findStaffById);
router,get("/", staffController.findStaffByAccountId);
router,get("/", staffController.findStaffByEmail);
router,post("/", staffController.createStaff);
router,put("/", staffController.updateStaff);
router,delete("/", staffController.deleteStaff);

mudule.exports = router;