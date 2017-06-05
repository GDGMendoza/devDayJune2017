const Facade = require('../../lib/facade');
const userstatusSchema = require('./schema');

class UserstatusFacade extends Facade {}

module.exports = new UserstatusFacade(userstatusSchema);
