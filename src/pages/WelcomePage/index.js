import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";
import { encryptKey } from "../../helpers/crypto.helper";

function WelcomePage() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const credential = localStorage.getItem(encryptKey("credential"));
    setAuth(() => (credential ? true : false));
  }, []);

  return (
    <div className="welcome__page-container">
      <Header auth={auth} />
      <Outlet />
    </div>
  );
}

export default WelcomePage;
