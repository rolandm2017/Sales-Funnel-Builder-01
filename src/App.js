import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import styled from "styled-components";

import img from "./assets/images/money.png";

import Welcome from "./components/Welcome";
import Palette from "./components/Palette";
import Customize from "./components/Customize";
import FinalPage from "./components/FinalPage";
import Public from "./components/Public";
// import Styling from "./components/Styling";

const Div = styled.div`
  height: 100vh;
  padding: 0em;
  margin: 0em;
  background: url(${img});
`;

function App(props) {
  return (
    <div className="App">
      <Div>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/palette" exact component={Palette}></Route>
        <Route path="/customize" component={Customize}></Route>
        {/* <Route path="/styling" component={Styling}></Route> */}
        <Route path="/finalpage" component={FinalPage}></Route>
        <Route path={props.siteURL} exact component={Public}></Route>
      </Div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    siteURL: state.siteURL,
  };
};

export default connect(mapStateToProps)(App);
