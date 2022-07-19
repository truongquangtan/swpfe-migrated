import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { ADMIN, OWNER } from "../../constants/roles";

function HomePage() {
  const credential = localStorage.getItem(encryptKey("credential"));
  if (!credential) {
    return <Navigate to="/auth/login" />;
  }

  const role = decrypt(credential)?.role;
  if (role !== ADMIN) {
    return role === OWNER ? <Navigate to="/owner" /> : <Navigate to="/" />;
  }

  return (
    <div className="home">
      <Header auth={true} />
      <div className="px-5 d-flex justify-content-center features mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
