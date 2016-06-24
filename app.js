var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routes/index');
var users = require('./routes/users');

// connect to our database
var mongoose   = require('mongoose');
mongoose.connect('mongodb://santicalle:santi1234@jello.modulusmongo.net:27017/q4yryNyq');
//mongoose.connect('mongodb://localhost:27017/FoodApp');

/*
//accept cors connections
app.use(function(req, res, next) {
  console.log('Autoriza CORS');
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var port = process.env.PORT || 8080;
console.log('Puerto: ' + port );
app.set('port', port);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/swagger', express.static(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/express', routes);
app.use('/users', users);

// define api routes
var category = require('./routes/category');
var rol = require('./routes/rol');
var menuCategory = require('./routes/menuCategory');
app.use('/api/category', category);
app.use('/api/rol', rol);
app.use('/api/menuCategory', menuCategory);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port);

module.exports = app;