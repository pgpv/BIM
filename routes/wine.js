const router = require("express").Router();
const wineController = require("../controllers/wine");

router.get('/', function (req, res, next) {
    res.send("wine root");
});

router.get("/get-all/", async function (req, res, next) {
    res.send(await wineController.getAll());
});

router.get('/get-by-name/:name', async function (req, res, next) {
    res.send(await wineController.getByName(req.params.name));
});

router.get('/get-by-winemaker/:winemaker', async function (req, res, next) {
    res.send(await wineController.getByWinemaker(req.params.winemaker));
});

router.post('/add/:name/:winemaker/:crop/:year/:quantity/:label', async function (req, res, next) {
    res.send(await wineController.add(req.params.name, req.params.winemaker, req.params.crop, req.params.year, req.params.quantity, req.params.label));
});

router.delete('/delete-by-name/:name', async function (req, res, next) {
    res.send(await wineController.deleteByName(req.params.name));
});

module.exports = router;

