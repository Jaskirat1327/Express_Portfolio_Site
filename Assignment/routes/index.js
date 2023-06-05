var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/About_me', function(req, res, next) {
  res.render('About_me', { title: 'Express' });
});
router.get('/Projects_page', function(req, res, next) {
  res.render('Projects_page', { title: 'Express' });
});

router.get('/Services_page', function(req, res, next) {
  res.render('Services_page', { title: 'Express' });
});






module.exports = router;
