const router = require("express").Router();
const {
  getSnippets,
  createSnippet,
  getSnippet,
  updateSnippet,
  deleteSnippet,
} = require("../controllers/snippetsController");

router.get("/", getSnippets);
router.post("/", createSnippet);
router.get("/:id", getSnippet);
router.put("/:id", updateSnippet);
router.delete("/:id", deleteSnippet);

module.exports = router;
