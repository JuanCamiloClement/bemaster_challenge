import { useContext } from "react";
import { LoggedUserContext } from "../store/LoggedUserContext";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

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
    <>
      <header>
        {userFromContext?.loggedUser.firstName === cookies.get("firstName") &&
          userFromContext?.loggedUser.email === cookies.get("email") &&
          <div>{userFromContext?.loggedUser.firstName}: {userFromContext?.loggedUser.email}</div>}
        About
        Contact
        {userFromContext?.loggedUser.firstName === cookies.get("firstName") &&
          userFromContext?.loggedUser.email === cookies.get("email") &&
          <button onClick={handleLogout}>Cerrar sesión</button>}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;