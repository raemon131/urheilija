const express = require("express");

const urheilijaControllers = require("../controllers/urheilijaControllers");

const router = express.Router();

router
  .route("/")
  .get(urheilijaControllers.getAllUrheilijat)
  .post(urheilijaControllers.createNewUrheilija);

router
  .route("/:id")
  .get(urheilijaControllers.getUrheilijaById)
  .put(urheilijaControllers.updateUrheilija)
  .delete(urheilijaControllers.deleteUrheilija);

module.exports = router;
