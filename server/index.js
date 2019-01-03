const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const port = 4000;
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const session = require("express-session");
const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header

// set up view engine
// app.set("view engine", "ejs");

// connect to mongodb
mongoose.connect(
  keys.MONGODB_URI,
  () => {
    console.log("connected to mongo db");
  }
);

// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true
//   })
// );

// not sure how this cookie session works.
app.use(
  cookieSession({
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

// parse cookies
app.use(cookieParser());

// var corsOption = {
//   origin: true,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   exposedHeaders: ["x-auth-token"]
// };

// app.use(cors(corsOption));

// initalize passport
app.use(passport.initialize());
// control our login cookie
app.use(passport.session());

// how is passport calling deseralize or searlize?
// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);

// set up routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// optional: hoem page
// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
// question - how is cookie send to the browser?
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));
