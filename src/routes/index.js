const router = require("express").Router();
const routesJoyas = require("./joyas/routerJoyas");

router.use("/joyas", routesJoyas);

module.exports = router;
