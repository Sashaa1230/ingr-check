const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/check-ingredient', async (req, res) => {
  const { ingredient, category } = req.body;
  // Perform database lookup and return results
  res.json({ message: 'Ingredient checked', data: {} });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
