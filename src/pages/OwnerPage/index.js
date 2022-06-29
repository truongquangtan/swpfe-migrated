import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { ADMIN, OWNER } from "../../constants/roles";

function OwnerPage() {
  const credential = localStorage.getItem(encryptKey("credential"));
  if (!credential) {
    return <Navigate to="/auth/login" />;
  }

  const role = decrypt(credential)?.role;
  if (role !== OWNER) {
    return role === ADMIN ? <Navigate to="/admin" /> : <Navigate to="/" />;
  }

  return (
    <div className="home">
      <Header auth={true} />
<<<<<<< HEAD
      <div className="container-fluid d-flex justify-content-center features mt-5 px-5">
=======
      <div className="d-flex justify-content-center features mt-5 px-5">
>>>>>>> f47bb59b3694e14a0affb5b9b6694044a5a38605
        <Outlet />
      </div>
    </div>
  );
}

export default OwnerPage;
