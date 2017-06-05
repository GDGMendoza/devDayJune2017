const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const post = require('./model/post/router');
const category = require('./model/category/router');
const tags = require('./model/tags/router');
const role = require('./model/role/router');
const userstatus = require('./model/userstatus/router');
const poststatus = require('./model/poststatus/router');
const categorystatus = require('./model/categorystatus/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to backend-gdg API!' });
});

router.use('/user', user);
router.use('/post', post);
router.use('/category', category);
router.use('/tags', tags);
router.use('/role', role);
router.use('/userstatus', userstatus);
router.use('/poststatus', poststatus);
router.use('/categorystatus', categorystatus);

module.exports = router;
