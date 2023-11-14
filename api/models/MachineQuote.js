//TODO: Quote databaes

const mongoose = require('mongoose');

const machineQuoteSchema = new mongoose.Schema({
  machineName: String,
  sharePointFileId: String, // Identifier for the file in SharePoint
  // Include other relevant metadata as needed
});

module.exports = mongoose.model('MachineQuote', machineQuoteSchema);