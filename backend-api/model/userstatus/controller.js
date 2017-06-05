const Controller = require('../../lib/controller');
const userstatusFacade = require('./facade');

class UserstatusController extends Controller {}

module.exports = new UserstatusController(userstatusFacade);
