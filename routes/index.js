var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
const indexController = require('../controllers/index');

//登录
router.post('/login', indexController.login);

module.exports = router;
