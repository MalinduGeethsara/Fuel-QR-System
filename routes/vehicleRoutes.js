const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

router.post('/register', async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: "Failed to register vehicle", error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch vehicles", error: error.message });
  }
});

router.get('/regno/:regNo', async (req, res) => {
  try {
    const vehicle = await Vehicle.findOne({ RegNo: req.params.regNo });
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/firstname/:firstName', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ FirstName: req.params.firstName });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/lastname/:lastName', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ LastName: req.params.lastName });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/email/:email', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ Email: req.params.email });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/station/:station', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ NearestStation: req.params.station });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/fuel/:fuelType', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ FuelType: req.params.fuelType });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/nic/:nic', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ OwnerNIC: req.params.nic });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/regno/:regNo', async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findOneAndUpdate(
      { RegNo: req.params.regNo },
      req.body,
      { new: true }
    );
    if (!updatedVehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(updatedVehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/firstname/:firstName', async (req, res) => {
  try {
    const updatedVehicle = await Vehicle.findOneAndUpdate(
      { FirstName: req.params.firstName },
      req.body,
      { new: true }
    );
    if (!updatedVehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json(updatedVehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/regno/:regNo', async (req, res) => {
  try {
    const deletedVehicle = await Vehicle.findOneAndDelete({ RegNo: req.params.regNo });
    if (!deletedVehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.json({ message: "Vehicle successfully deleted", vehicle: deletedVehicle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;