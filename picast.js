var sys = require('sys');
var exec = require('child_process').exec;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
        res.send('Welcome to PiCAST 3! In the URL, type what you want to do...');
});

app.get('/:url', function (req, res) {
        res.send('Streaming YouTube Video...');
        exec("livestreamer --player=mplayer req.params.url + " best");
});

// Setup PiCAST Server
var srv = app.listen(3000, function () {
        var host = srv.address().address;
        var port = srv.address().port;

        console.log('Access at http://%s:%s', host, port);
});
