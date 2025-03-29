import React, { useState } from 'react';

const IngredientChecker = () => {
  const [ingredient, setIngredient] = useState('');
  const [category, setCategory] = useState('');

  const handleInputChange = (e) => setIngredient(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = async () => {
    // Send ingredient and category to the backend for processing
  };

  return (
    <div>
      <h1>Universal Ingredient Checker</h1>
      <input 
        type="text" 
        value={ingredient} 
        onChange={handleInputChange} 
        placeholder="Enter ingredient or paste list"
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="food">Food</option>
        <option value="skincare">Skincare</option>
        <option value="haircare">Haircare</option>
      </select>
      <button onClick={handleSubmit}>Check Ingredient</button>
    </div>
  );
};

export default IngredientChecker;
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
