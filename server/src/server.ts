import express from "express";

const app = express();

app.get('/', (req, res) => {
  return res.json({
    success: true,
    data: [],
  });
});

app.listen(3333);