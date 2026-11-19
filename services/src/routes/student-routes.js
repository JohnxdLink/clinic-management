const { routes } = require("express");

const authenticate = require("../middleware/authenticate");
const studentController= require("../controller/student-controller");

const router = Router();

router.use(authenticate);

router.get("/",studentController .findAllStudents);
router.get("/", studentController.findStudentById);
router,get("/", studentController.findStudentByAccountId);
router,post("/", studentController.createStudent);
router,put("/", studentController.updateStudent);
router,delete("/", studentController.deleteStudent);

mudule.exports = router;