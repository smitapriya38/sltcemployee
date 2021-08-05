// module imports
const empDetailsController = require("../controllers/details.controller");
const express = require("express");

// including controller route
const router = express.Router();
router.post("/employee-info", empDetailsController.employee_controller_fill_info);

// delete the commented parts later if not in use (will not cause any harm if not done so)
// router.get("/get-joining-info", joiningController.joining_controller_get_info);
// router.get("/get-employee-id", joiningController.joining_controller_get_emp_info);
// router.delete("/delete-joining-info", joiningController.joining_controller_delete_info);

// module exports
module.exports = router;