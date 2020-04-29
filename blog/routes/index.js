var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Steve' });
});

module.exports = router;

router.get('/test', function(req, res, next) {
  res.send('Message Test');
});