const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "Missing fields" });
  }

  res.json({ message: "Order placed", order: { productId, quantity } });
});

module.exports = router;

