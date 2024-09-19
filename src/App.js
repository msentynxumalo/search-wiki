import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/home" render={() => <div>Home</div>}/>
      <Route path="/search" render={() => <div>Search</div>}/>
      <Route render={() => <div>Page Not Found!</div>}/>
    </Switch>
  </Router>
);

export default App;
