const Facade = require('../../lib/facade');
const poststatusSchema = require('./schema');

class PoststatusFacade extends Facade {}

module.exports = new PoststatusFacade(poststatusSchema);
