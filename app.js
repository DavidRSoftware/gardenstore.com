var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port);
})