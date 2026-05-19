const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  RegNo: { type: String, required: true, unique: true }, 
  FirstName: { type: String, required: true },           
  LastName: { type: String, required: true },            
  Email: { type: String, required: true },               
  NearestStation: { type: String, required: true },      
  FuelType: { type: String, required: true },            
  OwnerNIC: { type: String, required: true },            
  VehicleModel: { type: String, required: true },        
  QRCode: { type: String, required: true, unique: true } 
}, { timestamps: true });

module.exports = mongoose.model('Vehicle', vehicleSchema);``