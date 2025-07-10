const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const formSchema = new mongoose.Schema(
  {
    // generate a ~10-character unique ID on each new doc:
    uniquckId: {
      type: String,
      default: () => nanoid(10),
    },
    clientName: { type: String },
    stockName: { type: String },
    idCode: { type: String },
    quantity: { type: Number },
    buyPrice: { type: Number },
    sellPrice: { type: Number },
    tradeDate: { type: Date },
    brokerage: { type: Number },
    address: { type: String },
    margin: { type: Number },
    mobileNumber: { type: Number },
    orgnization: {
      type: String,
      default: "TRADE ORGANIZATION", // <-- set your default name here
    },
    mode: {
      type: String,
      enum: ["buy", "sell"],
      required: true,
    },
  },
  { timestamps: true }
);

const FormModel = mongoose.model("FormModel", formSchema);
module.exports = { FormModel };
