const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

const contact = require("./routes/contact.js");
const posts = require("./routes/posts.js");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/mySite/contact', contact)
app.use('/mySite/posts', posts)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;
