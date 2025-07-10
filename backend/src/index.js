require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;
const formRoute = require("./Routes/FormRoute");
const formTwoRoute = require("./Routes/FormTwoRoute")
const allowedOrigins = [
"https://vipul-project.onrender.com",
//  "http://localhost:3000"                                    
];
const { FormModel }  =  require("./Model/FormModel")


app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));



app.use('/api/forms', formRoute);

app.use('/api/formTwo', formTwoRoute);

mongoose.connect(MONGO_URL)
  .then(async () => {
    console.log("mongoDB is Connect");

    // Run this once after DB connects
    await FormModel.updateMany(
      { orgnization: { $exists: false } },
      { $set: { orgnization: "VIPUL ORGANIZATION" } },
      console.log("updated")
    );
    app.listen(PORT, () => {
      console.log(`Server is Listen on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
