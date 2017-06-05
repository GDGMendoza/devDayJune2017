const Controller = require('../../lib/controller');
const categorystatusFacade = require('./facade');

class CategorystatusController extends Controller {}

module.exports = new CategorystatusController(categorystatusFacade);
