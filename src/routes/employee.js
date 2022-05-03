const express = require("express");
//const app = express();



 
const router = express.Router();
const { getEmployeeInfo, saveEmployee, deleteEmployee, updateEmployee, searchData } = require("../controllers/employee");
const auth = require("../middleware/auth");
 
router.get("/api/employee/info", auth, getEmployeeInfo);

router.get("/search/:key",  searchData);

router.post("/api/employee/save", saveEmployee);

router.delete("/api/employee/delete/:_id", deleteEmployee);


router.put("/api/employee/update/:_id", updateEmployee);
 
module.exports = router;