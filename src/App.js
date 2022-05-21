import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import EditEvent from "./components/edit-Event.component";
import CreateEvent from "./components/create-Event.component";
import EventList from "./components/Event-list.component";
import Report from "./components/Report";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={EventList} />
        <Route path="/edit/:id" component={EditEvent} />
        <Route path="/create" component={CreateEvent} />
        <Route path="/Report" component={Report} />
      </div>{" "}
    </Router>
  );
}

export default App;
