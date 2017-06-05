const Controller = require('../../lib/controller');
const poststatusFacade = require('./facade');

class PoststatusController extends Controller {}

module.exports = new PoststatusController(poststatusFacade);
