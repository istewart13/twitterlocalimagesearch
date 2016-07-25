var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/search', function(req, res) {
  var Twit = require( 'twit' );
  var T = new Twit({
    consumer_key: "y3uDzxRkUuC9UYIc8MzJRRANM",
    consumer_secret: "GEbjYnpbUPm9QyLluOGUAAwSi6zff8EFTnYNmNydzXAFnmRs9H",
    access_token: "3332574359-gV4g8SlUMu2oh3zFfQUxBqnfcJpmzO6zO9SR7uo",
    access_token_secret: "nALnoZ4dYrOknCZHwByh54TC1uH2T0b8jXuDxd8KAnABC"
  })

  T.get( 'search/tweets', { q: 'filter:images', geocode: "55.9486,-3.1999,1mi", count: 100 }, function(err, data, response) {
    res.send(data)
  })
})

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
