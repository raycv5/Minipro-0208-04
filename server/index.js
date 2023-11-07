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
  countryRouter,
  cityRouter,
  userRouter,
  referralRouter,
  walletRouter,
  categoryRouter,
  organizerRouter,
  paymentRouter,
  pointRouter,
  eventRouter,
  transactionRouter,
  promotionRouter,
} = require("./routers");

// app.use("/users", userRouter);
app.use("/countries", countryRouter);
app.use("/cities", cityRouter);
app.use("/wallets", walletRouter);
// app.use("/referrals", referralRouter);
app.use("/category", categoryRouter);
app.use("/organizers", organizerRouter);
app.use("/payment-methods", paymentRouter);
app.use("/point-discounts", pointRouter);
app.use("/events", eventRouter);
app.use("/transactions", transactionRouter);
app.use("/promotions", promotionRouter);

app.listen(PORT, () => {
   //  db.sequelize.sync({ alter: true });
   console.log(`Server running on PORT ${PORT}`);
});
