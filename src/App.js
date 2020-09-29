import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NoMatch from "./containers/NoMatch";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import SinglePage from "./containers/SinglePage";
import Favs from "./containers/Favs";
import Signup from "./containers/Signup";

import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import "./css/Loader.css";

const App = () => {
  const [loginModal, setLoginModal] = useState("loginInvisible");
  const [favArr, setFavArr] = useState([]);
  document.body.style.overflow = "visible";

  const apiUrl = "https://marvel-backend-jolisdegats.herokuapp.com";
  // const apiUrl = "http://localhost:3001";
  // const apiUrl = process.env.REACT_APP_APIURL;

  return (
    <div className="App">
      <Router>
        <Login loginModal={loginModal} setLoginModal={setLoginModal}></Login>
        <Header setLoginModal={setLoginModal}></Header>
        <Switch>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/character/:id">
            <SinglePage
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></SinglePage>
          </Route>
          <Route path="/characters">
            <Characters
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></Characters>
          </Route>
          <Route path="/comic/:id">
            <SinglePage
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></SinglePage>
          </Route>
          <Route path="/comics">
            <Comics
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></Comics>
          </Route>
          <Route path="/favs">
            <Favs favArr={favArr} setFavArr={setFavArr} apiUrl={apiUrl}></Favs>
          </Route>
          <Route exact path="/">
            <Characters
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></Characters>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer></Footer>
        <div></div>
      </Router>
    </div>
  );
};

export default App;
