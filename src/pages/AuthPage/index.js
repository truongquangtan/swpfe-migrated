import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { ADMIN, OWNER } from "../../constants/roles";

function AuthPage() {
  const credential = localStorage.getItem(encryptKey("credential"));
  if (credential) {
    const role = decrypt(credential).role;
    return role === ADMIN ? (
      <Navigate to="/admin" />
    ) : role === OWNER ? (
      <Navigate to="/owner" />
    ) : (
      <Navigate to="/" />
    );
  }

  return (
    <div className="home">
      <Header auth={false} />
      <div className="features mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthPage;
