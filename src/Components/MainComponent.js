import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomePageComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Episodes from "./EpisodesComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/aboutus" component={About} />
        <Redirect to="/home" />
      </Switch>
      {/*<Footer />*/}
    </>
  );
}

export default Main;
