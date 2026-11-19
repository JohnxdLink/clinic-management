    const { Router } = require("express");

    const authenticate = require("../middleware/authenticate");
    const roleController = require("../controller/role-controller.js");

const router = Router();

router.use(authenticate);

router.get("/", roleController.findAllRoles);
router.get("/", roleController.findRoleById);
router.get("/", roleController.findRoleByName);
router.post("/", roleController.createRole);
router.put("/", roleController.updateRole);
router.delete("/", roleController.deleteRole);

module.exports = router;