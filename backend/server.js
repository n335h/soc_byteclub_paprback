import express from 'express';
const app = express();
const port = process.env.PORT || 3000; // default port to listen

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

