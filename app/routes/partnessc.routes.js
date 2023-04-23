module.exports = app => {
  const partness = require("../controllers/partnessc.controller.js");

  var router = require("express").Router();

  router.post("/", partness.create);

  router.get("/", partness.findAll);

  router.get("/published", partness.findAllPublished);

  router.get("/:id", partness.findOne);

  router.put("/:id", partness.update);

  router.delete("/:id", partness.delete);

  router.delete("/", partness.deleteAll);

  app.use("/api/partness", router);
};
