const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the stable version!');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Stable version listening on port ${PORT}`);
});
