let path = require('path');
let express = require('express');
let router = express.Router();
let calculator = require('./Calculator');
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname,'views','class','index.html'));
});
router.get('/login', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'class', 'login.html'));
});
module.exports = router;
