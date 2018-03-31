const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/data', (req, res) => {
  const options = {
    root: __dirname,
  };

  const fileName = 'menu.json';
  res.sendFile(fileName, options, err => {
    if (err) next(err);
  });
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build", { fallthrough: true }));
}

app.listen(port, () => console.log(`Listening on port ${port}`));
