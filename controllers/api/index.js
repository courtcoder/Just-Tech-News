const router = require("express").Router();

const userRoutes = require("..");

router.use("./user-routes", userRoutes);

module.exports = router;
