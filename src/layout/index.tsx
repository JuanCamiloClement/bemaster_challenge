import { useContext } from "react";
import { LoggedUserContext } from "../store/LoggedUserContext";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { MdLogout } from "react-icons/md";
import "./layout.scss";

const Root = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();

  const userFromContext = useContext(LoggedUserContext);

  const handleLogout = () => {
    cookies.remove("email", { path: "/" });
    cookies.remove("firstName", { path: "/" });
    navigate("/");
  }

  return (
    <div className="layout-container">
      <header className={userFromContext?.loggedUser.firstName === cookies.get("firstName") &&
        userFromContext?.loggedUser.email === cookies.get("email") ? "header" : "header-login"}>
        <h4 className="bemaster" onClick={() => navigate("/")}>BeMaster!</h4>
        <div className="options-container">
          {userFromContext?.loggedUser.firstName === cookies.get("firstName") &&
            userFromContext?.loggedUser.email === cookies.get("email") &&
            <div className="header-option">{userFromContext?.loggedUser.firstName}: {userFromContext?.loggedUser.email}</div>}
          <div className="header-option" onClick={() => navigate("/about")}>About</div>
          <div className="header-option" onClick={() => navigate("/contact")}>Contact</div>
          {userFromContext?.loggedUser.firstName === cookies.get("firstName") &&
            userFromContext?.loggedUser.email === cookies.get("email") &&
            <button className="logout-button" onClick={handleLogout}><MdLogout /></button>}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;