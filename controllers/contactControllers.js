const Contact = require('../models/Contact');


// Obtener todos los servicios
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.render('pages/contact', { contact });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los servicios');
  }
};

// Añadir un nuevo servicio
exports.addContact = async (req, res) => {
  try {
    const { name, email, telefono, emailUrl, whatsappUrl, facebookUrl, extraUrl, footer } = req.body;
    const newContact = new Contact({ name, email, telefono, emailUrl, whatsappUrl, facebookUrl, extraUrl, footer });
    await newContact.save();
    res.redirect('/admin/contact');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al agregar el contacto');
  }
};

// Actualizar un contacto
exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, telefono, emailUrl, whatsappUrl, facebookUrl, extraUrl, footer } = req.body;
    await Contact.findByIdAndUpdate(id, { name, email, telefono, emailUrl, whatsappUrl, facebookUrl, extraUrl, footer });
    res.redirect('/admin/contact');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el contacto');
  }
};

// Eliminar un servicio
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.redirect('/admin/contact');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar el servicio');
  }
};