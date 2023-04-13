const todo = require("../models/todoschema");
const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

// to post a todo item//

router.post("/api/items", async (req, res) => {
  try {
    const newItem = new todo({
      item: req.body.item,
    });
    const saveItem = await newItem.save();

    res.status(200).json(saveItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// to getdata //
router.get("/api/items", async (req, res) => {
  try {
    const getAllItems = await todo.find({});
    res.status(200).json(getAllItems);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/// get by id//
router.get("/:id", async (req, res) => {
  try {
    const ItemId = req.params.id;
    const getItemsById = await todo.findById(ItemId);
    res.status(200).json(getItemsById);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update todo item by ID
router.put("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItem = await todo.findByIdAndUpdate(
      itemId,
      { item: req.body.item },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete todo item by ID
router.delete("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await todo.findByIdAndDelete(itemId);
    res.status(200).json(` this ${deletedItem} was deleted`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
``;
