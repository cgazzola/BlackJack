var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('game',{ user: req.user});
});

module.exports = router;
