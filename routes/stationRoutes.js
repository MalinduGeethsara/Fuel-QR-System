const express = require('express');
const router = express.Router();
const Station = require('../models/Station');


router.post('/add', async (req, res) => {
  try {
    const newStation = new Station(req.body);
    const savedStation = await newStation.save();
    res.status(201).json(savedStation);
  } catch (error) {
    res.status(400).json({ message: "Failed to add station", error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/id/:stationId', async (req, res) => {
  try {
    const station = await Station.findOne({ StationID: req.params.stationId });
    if (!station) return res.status(404).json({ message: "Station not found" });
    res.json(station);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/id/:stationId', async (req, res) => {
  try {
    const updatedStation = await Station.findOneAndUpdate(
      { StationID: req.params.stationId },
      req.body,
      { new: true }
    );
    if (!updatedStation) return res.status(404).json({ message: "Station not found" });
    res.json(updatedStation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/id/:stationId', async (req, res) => {
  try {
    const deletedStation = await Station.findOneAndDelete({ StationID: req.params.stationId });
    if (!deletedStation) return res.status(404).json({ message: "Station not found" });
    res.json({ message: "Station successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;