const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the canary version!');
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`Canary version listening on port ${PORT}`);
});
