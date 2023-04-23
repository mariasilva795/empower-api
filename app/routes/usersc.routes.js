module.exports = app => {
  const usersc = require("../controllers/usersc.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", usersc.create);

  // Retrieve all usersc
  router.get("/", usersc.findAll);

  // Retrieve a single user with id
  router.get("/:id", usersc.findOne);

  // Update a user with id
  router.put("/:id", usersc.update);

  // Delete a user with id
  router.delete("/:id", usersc.delete);

  // Delete all usersc
  router.delete("/", usersc.deleteAll);

  app.use("/api/usersc", router);
};
