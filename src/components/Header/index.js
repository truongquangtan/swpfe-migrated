import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { TOAST_CONFIG } from "../../constants/default";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { logout } from "../../services/auth.service";
import DisableScreen from "../DisableScreen";
import "./style.scss";


function Header({ auth }) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const popupFeatures = [
    {
      title: "Profile",
      icon: "fas fa-info-circle",
      click: () => {
        const account = decrypt(localStorage.getItem(encryptKey("credential")));
        const role = account?.role;
        switch(role){
          case 'admin':
            navigate("/admin/me");
            break;
          case 'owner':
            navigate("/owner/me");
            break;
          default:
            navigate("/me")
        }
      },
    },
    {
      title: "Log Out",
      icon: "fas fa-sign-out-alt",
      click: () => {
        setIsLoggingOut(true);
        logout()
          .then((res) => {
            if (res) {
              toast.success("Logout successfully.", TOAST_CONFIG);
              localStorage.removeItem(encryptKey("credential"));
              navigate("/auth/login");
            }
          })
          .catch((error) => {
            toast.error(INTERNAL_SERVER_ERROR, TOAST_CONFIG);
          })
          .finally(() => {
            setIsLoggingOut(false);
          });
      },
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="header">
      {isLoggingOut && <DisableScreen />}
      <Link to="/" className="d-flex align-content-center nav-brand">
        <span className="p-2 size-2 ps-4 pe-3">
          <i className="fas fa-basketball-ball"></i>
        </span>
        <b className="home-title">Basketball Playground</b>
      </Link>
      {auth ? (
        <div
          className="size-2 position-fixed top-1 right-1 profile-icon"
          onClick={() => setShowPopup(() => !showPopup)}
        >
          <i className="far fa-user-circle"></i>
        </div>
      ) : (
        <div className="size-2 position-fixed top-1 right-1 unauth-group">
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup" style={{ marginLeft: "1.5rem" }}>
            Sign Up
          </Link>
        </div>
      )}
      {showPopup && (
        <div className="profile-popup">
          {popupFeatures.map((feature) => {
            return (
              <div
                className="profile__popup-feature"
                onClick={feature.click}
                key={feature.title}
              >
                <i className={feature.icon + " p-2"}></i>
                <span>{feature.title}</span>
              </div>
            );
          })}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Header;
