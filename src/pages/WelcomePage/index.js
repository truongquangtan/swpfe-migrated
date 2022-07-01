import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Header from "../../components/Header";
import { ADMIN, OWNER } from "../../constants/roles";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import "./style.scss";

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
