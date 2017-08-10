// NODEJS SERVER ---------------
var express = require('express');
var mysql = require('mysql');

var app = express()

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'poupayAppDb'
});


con.connect();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Return the main feed's JSON
app.get('/api/feed', function(request, response){
    con.query('SELECT * FROM content WHERE type="img" AND unlocked=1 ORDER BY date', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

// Return the GIFs JSON
app.get('/api/gifs', function(request, response){
    con.query('SELECT * FROM content WHERE type="gif" AND unlocked=1 ORDER BY date', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

// Return the BoukiTv JSON
app.get('/api/boukiTv', function(request, response){
    con.query('SELECT * FROM content WHERE type="video" AND unlocked=1 ORDER BY date', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

// Return the SoundBox JSON
app.get('/api/soundBox', function(request, response){
    con.query('SELECT * FROM content WHERE type="audio" AND unlocked=1 ORDER BY date', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});


// Return the BoukiBoutique JSON
app.get('/api/boukiBoutique', function(request, response){
    con.query('SELECT * FROM content WHERE unlocked=0', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

// Return the User JSON
app.get('/api/user', function(request, response){
    con.query('SELECT * FROM users WHERE id=1', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});
