require("dotenv").config();
require("./config/mongo");
require("./config/passport");

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session"); 

const passport = require("passport");
const cors = require("cors");

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// SERVER CONFIG
// ------------------------------------------

const app = express();

app.use(logger('dev'));
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

app.use(
    session({
      cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
      resave: true,
      saveUninitialized: true,
      secret: process.env.SECRET_SESSION
    })
  );

const corsOptions = {
    origin: [process.env.CLIENT_URL],
    credentials: true,
    optionsSuccessStatus: 200
  };

// cors middle on
app.use(cors(corsOptions));

// passport init : these rules MUST set be after session setup (lines above)
app.use(passport.initialize());
app.use(passport.session());

//------------------------------------------
// Check Loggedin Users
// ------------------------------------------
// if (_DEVMODE === true) {
//     app.use(function devMode(req, res, next) {
//       req.user = {
//         _id: "5de9c376fa023e21a766a606",
//         username: "guillaume",
//         email: "gui@foo.bar",
//         avatar:
//           "https://res.cloudinary.com/gdaconcept/image/upload/v1575298339/user-pictures/jadlcjjnspfhknucjfkd.png",
//         role: "admin",
//         favorites: {
//           artists: ["5ded0f32701e2f8732a0513c"],
//           albums: ["5ded24e254c2839b2badf011"],
//           styles: [],
//           labels: []
//         }
//       };
  
//       next();
//     });
//   }




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventsRouter);
app.use('/', authRouter);

module.exports = app;
