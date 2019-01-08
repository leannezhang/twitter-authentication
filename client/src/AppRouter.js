import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./AppRouter.css";

export const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Profile} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);
const Header = () => (
  <ul className="menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/login">Sign up</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
  </ul>
);
