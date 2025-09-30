const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
    catsRouteMiddleware,
    catsGetRouteMiddleware,
    validateCreateCat,
    validateUpdateCat,
    validateCatId
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", validateCreateCat, catsController.create);
router.put("/:id", validateUpdateCat, catsController.update);
router.delete("/:id", validateCatId, catsController.delete); // validateCatId on deletemise testimiseks
module.exports = router;