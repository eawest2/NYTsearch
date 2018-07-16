const router = require("express").Router();
import controller from "./controller.js";
import db from "./models/Saved";

//API routes
router.get("/api/articles", controller.findArticle);
router.post("/api/articles", controller.saveArticle);
router.delete("/api/articles", controller.removeArticle);

module.exports = router;