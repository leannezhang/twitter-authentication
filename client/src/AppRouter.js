import React from "react";
import HomePage from "./components/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./AppRouter.css";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
};
