var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/mooral', { title: 'Mooral' });
});

module.exports = router;