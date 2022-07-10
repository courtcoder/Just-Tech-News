const router = require("express").Router();

const apiRoutes = require("./api/user-routes");
    
router.use("./api", apiRoutes);

const homeRoutes = require("./home");

router.use("./home-routes.js", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
