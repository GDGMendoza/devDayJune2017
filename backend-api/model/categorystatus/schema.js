const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorystatusSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
});


module.exports = mongoose.model('Categorystatus', categorystatusSchema);
