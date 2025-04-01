const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  emailUrl: { type: String },
  whatsappUrl: { type: String },
  facebookUrl: { type: String },
  extraUrl: { type: String },
  footer: { type: String }
});

module.exports = mongoose.model('Contact', contactSchema);
