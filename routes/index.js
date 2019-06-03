var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var payload = req.query.msg;
	console.log(payload);
});

/* POST home page. */
router.post('/', function(req, res, next) {
	var payload = req.body;
	console.log(payload);
});

module.exports = router;
