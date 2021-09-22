import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, About, Blog, Business, JobSearch, JoinUs } from "./pages";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/jobs" component={JobSearch} />
        <Route exact path="/join-us" component={JoinUs} />
      </Switch>
      <Footer />
    </Router>
  );
}
