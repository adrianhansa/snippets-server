const Snippet = require("../models/Snippet");

const getSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find({});
    res.status(200).json(snippets);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).json({ message: "Snippet not found" });
    res.status(200).json(snippet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createSnippet = async (req, res) => {
  try {
    const { title, description, code } = req.body;
    if (!title || !description || !code)
      return res.status(400).json({ message: "All fields are required." });
    const snippet = await Snippet.create({ title, description, code });
    res.status(200).json(snippet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateSnippet = async (req, res) => {
  try {
    const { title, description, code } = req.body;
    if (!title || !description || !code)
      return res.status(400).json({ message: "All fields are required." });
    const snippet = await Snippet.findByIdAndUpdate(
      req.params.id,
      { title, description, code },
      { new: true }
    );
    res.status(200).json(snippet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!snippet) return res.status(404).json({ message: "Snippet not found" });
    res.status(200).json({ message: "Snippet deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSnippets,
  getSnippet,
  createSnippet,
  updateSnippet,
  deleteSnippet,
};
