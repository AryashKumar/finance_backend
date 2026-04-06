const router = require("express").Router();
const ctrl = require("../controllers/recordController");
const { authenticate } = require("../middleware/auth");
const { authorize } = require("../middleware/role");

router.use(authenticate);

router.get("/", ctrl.getRecords);
router.post("/", authorize("ADMIN"), ctrl.createRecord);
router.patch("/:id", authorize("ADMIN"), ctrl.updateRecord);
router.delete("/:id", authorize("ADMIN"), ctrl.deleteRecord);

module.exports = router;