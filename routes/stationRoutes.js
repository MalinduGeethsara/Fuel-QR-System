const express = require('express');
const router = express.Router();
const Station = require('../models/Station');

// 1. Add a new Fuel Station
router.post('/add', async (req, res) => {
  try {
    const newStation = new Station(req.body);
    const savedStation = await newStation.save();
    res.status(201).json(savedStation);
  } catch (error) {
    res.status(400).json({ message: "Failed to add station", error: error.message });
  }
});

// 2. View all Fuel Stations
router.get('/', async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;