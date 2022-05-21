const router = require("express").Router();
let Event = require("../models/Event.model");

router.route("/").get((req, res) => {
  Event.find()
    .then((Event) => res.json(Event))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Function
router.route("/add").post((req, res) => {
  const EventID = req.body.EventID;
  const EventName = req.body.EventName;
  const Category = req.body.Category;
  const Content = req.body.Content;
  const Packages = req.body.Packages;
  const G_Pprice = req.body.G_Pprice;
  const S_Pprice = req.body.S_Pprice;
  const P_Pprice = req.body.P_Pprice;

  const newEvent = new Event({
    EventID,
    EventName,
    Category,
    Content,
    Packages,
    G_Pprice,
    S_Pprice,
    P_Pprice,
  });

  newEvent
    .save()
    .then(() => res.json("Event  added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Data
router.route("/:id").get((req, res) => {
  Event.findById(req.params.id)
    .then((Event) => res.json(Event))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete Data

router.route("/:id").delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update data
router.route("/update/:id").post((req, res) => {
  Event.findById(req.params.id)
    .then((Event) => {
      Event.EventID = req.body.EventID;
      Event.EventName = req.body.EventName;
      Event.Category = req.body.Category;
      Event.Content = req.body.Content;
      Event.Packages = req.body.Packages;
      Event.G_Pprice = req.body.G_Pprice;
      Event.S_Pprice = req.body.S_Pprice;
      Event.P_Pprice = req.body.P_Pprice;

      Event.save()
        .then(() => res.json("Event updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
