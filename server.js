var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function(req, res) {
	res.render('pages/index');
});
app.listen(port);
console.log('on 8080');