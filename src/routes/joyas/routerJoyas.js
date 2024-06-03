const routerJoyas = require("express").Router();
const { handleLogs } = require("../../middlewares/logs");

const {
  getJoyasCon,
  getJoyasFilterCon,
} = require("../../controllers/controllerJoyas");

routerJoyas.get("/", handleLogs, getJoyasCon);
routerJoyas.get("/filtros", handleLogs, getJoyasFilterCon);

module.exports = routerJoyas;
