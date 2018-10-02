import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/";
import SearchContainer from "./Components/SearchContainer/";
// import Saved from "./Components/Saved/Saved";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <SearchContainer/>
      {/* <Results />
      <Saved /> */}
      {/* <Route exact path="/" component={SeachContainer} />
      <Route exact path="/search" component={SeachContainer} />
      <Route exact path="/saved" component={Saved} /> */}
    </div>
  </Router>
);

export default App;

