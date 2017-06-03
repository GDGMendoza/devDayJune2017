const Facade = require('../../lib/facade');
const categorystatusSchema = require('./schema');

class CategorystatusFacade extends Facade {}

module.exports = new CategorystatusFacade(categorystatusSchema);
