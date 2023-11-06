const express = require("express");
const PORT = 2000;
const db = require("./models");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use("/public", express.static("./public"));

app.use(cors());

app.get("/api", (req, res) => {
   try {
      res.status(200).send(`API TEST`);
   } catch (err) {
      console.log(err);
   }
});

const {
   organizerRouter,
   cityRouter,
   countryRouter,
   eventRouter,
   categoryRouter,
} = require("./routers");
app.use("/organizers", organizerRouter);
app.use("/city", cityRouter);
app.use("/country", countryRouter);
app.use("/events", eventRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => {
   //  db.sequelize.sync({ alter: true });
   console.log(`Server running on PORT ${PORT}`);
});
