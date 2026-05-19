const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  StationID: { type: String, required: true, unique: true },
  StationName: { type: String, required: true },
  Location: { type: String, required: true },
  FuelCapacity: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Station', stationSchema);