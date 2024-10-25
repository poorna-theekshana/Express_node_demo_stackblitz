const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/items', (req, res) => {
  res.json([{ name: 'Item 1' }, { name: 'Item 2' }]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
