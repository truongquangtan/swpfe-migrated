import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { OWNER, ADMIN } from "../../constants/roles";

function WelcomePage() {
  const [auth, setAuth] = useState(false);
  const credential = localStorage.getItem(encryptKey("credential"));

  useEffect(() => {
    setAuth(() => (credential ? true : false));
  }, []);

  if (credential) {
    const role = decrypt(credential).role;
    if (role === ADMIN) {
      return <Navigate to="/admin" />;
    } else if (role === OWNER) {
      return <Navigate to="/owner" />;
    }
  }

  return (
    <div className="welcome__page-container overflow-x-hidden">
      <Header auth={auth} />
      <Outlet />
    </div>
  );
}

export default WelcomePage;
