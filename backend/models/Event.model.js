const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Databass Schema

const EventSchema = new Schema(
  {
    EventID: { type: Number, required: true },
    EventName: { type: String, required: true },
    Category: { type: String, required: true },
    Content: { type: String, required: true },
    Packages: { type: String, required: true },
    G_Pprice: { type: String, required: true },
    S_Pprice: { type: String, required: true },
    P_Pprice: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
