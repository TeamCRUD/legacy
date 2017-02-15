var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/viumo', { title: 'Viumo' });
});

module.exports = router;
