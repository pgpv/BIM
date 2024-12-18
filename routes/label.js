const router = require("express").Router();
const labelController = require("../controllers/label");

router.get("/", function (req, res, next) {
    res.send("label root");
});

router.get("/get-all/", async function (req, res, next) {
    res.send(await labelController.getAll());
});

router.post("/add/:id/:designer/:picture/:body", async function (req, res, next) {
    res.send(await labelController.add(req.params.id, req.params.designer, req.params.picture, req.params.body));
});

module.exports = router;
