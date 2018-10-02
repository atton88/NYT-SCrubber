import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={} />
      <Route exact path="/search" component={} />
      <Route exact path="/saved" component={} />
    </div>
  </Router>
);

export default App;

