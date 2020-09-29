import React, { useState, useEffect, useRef } from "react";
import loginHeader from "../img/Marvel-Login-Header.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Loader from "../components/Loader";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Login = ({ loginModal, setLoginModal }) => {
  const unsetOverflow = () => {
    document.body.style.overflow = "visible !important";
  };

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try {
      // REQUETE ICI
      const response = await axios.get("");
      // REQUETE ICI
      setLoginStatus(response.status);
      setErrorMessage("");
      setEmail("");
      setPassword("");
      setLoginStatus(response.status);
      unsetOverflow();
      setTimeout(() => {
        history.push("/");
        setLoginStatus(0);
      }, 2000);
    } catch (err) {
      console.log(err.message);
      setErrorMessage(err.message);
    }
  };

  let domNode = useClickOutside(() => {
    setLoginModal("loginInvisible");
  });

  return (
    <div className={loginModal}>
      <button
        className="closeButton"
        onClick={() => setLoginModal("loginInvisible") & unsetOverflow()}
      >
        X
      </button>
      <form ref={domNode} action="" onSubmit={handleSubmit}>
        <div className="loginHeader">
          <img src={loginHeader} alt="" />
        </div>
        <div className="inputDiv">
          {loginStatus === 200 ? (
            <>
              <h2>Login Succeeded</h2>
              <p>We're getting you on board...</p>
              <Loader></Loader>
            </>
          ) : (
            <>
              <h1>Join the crew</h1>
              <p className={errorMessage !== "" ? "errorMessage" : "disabled"}>
                {errorMessage}
              </p>
              <input
                type="email"
                placeholder="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className="redButton" type="submit">
                Se connecter
              </button>
            </>
          )}
        </div>
        <div className="loginCreateAccountDiv">
          <h2>Not yet in the team?</h2>
          <button
            className="redLineButton"
            onClick={() => history.push("/signup") & unsetOverflow()}
          >
            Create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
