const router = require("express").Router();
const winemakerController = require("../controllers/winemaker");

router.get("/", function(req, res, next) {
  res.send("winemaker root");
});

router.get("/get-all/", async function (req, res, next) {
  res.send( await winemakerController.getAll() );
});

router.get("/get-by-location/:location", async function (req, res, next) {
  res.send( await winemakerController.getByLocation(req.params.location) );
});

router.get("/get-by-name/:name", async function (req, res, next) {
  res.send( await winemakerController.getByName(req.params.name) );
});

router.post("/add/:name/:location", async function (req, res, next) {
  res.send( await winemakerController.add(req.params.name, req.params.location) );
});

router.delete("/delete-by-name/:name", async function (req, res, next) {
  res.send( await winemakerController.deleteByName(req.params.name) );
});

module.exports = router;
