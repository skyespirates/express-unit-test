const router = require("express").Router();
const controller = require("../controllers/hp.controller");

router.post("/", controller.addHp);
router.get("/", controller.getHps);
router.get("/:id", controller.getHp);
router.put("/:id", controller.updateHp);
router.delete("/:id", controller.deleteHp);

module.exports = router;
