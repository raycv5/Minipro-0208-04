const express = require("express");
const PORT = 2000;
const db = require("./models");

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  try {
    res.status(200).send(`API TEST`);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  // db.sequelize.sync({ alter: true });
  console.log(`Server running on PORT ${PORT}`);
});
