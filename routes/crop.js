const router = require("express").Router();
const cropController = require("../controllers/crop");

router.get("/", function (req, res, next) {
    res.send("crop root");
});

router.get("/get-all/", async function (req, res, next) {
    res.send(await cropController.getAll());
});

router.get("/get-by-grape/:grape", async function (req, res, next) {
    res.send(await cropController.getByGrape(req.params.grape));
});

router.get("/get-by-id/:id", async function (req, res, next) {
    res.send(await cropController.getByID(req.params.id));
});

router.post("/add/:id/:grape/:year/:quantity", async function (req, res, next) {
    res.send(await cropController.add(req.params.id, req.params.grape, req.params.year, req.params.quantity));
});

router.delete("/delete-by-id/:id", async function (req, res, next) {
    res.send(await cropController.deleteByID(req.params.id));
});

module.exports = router;
