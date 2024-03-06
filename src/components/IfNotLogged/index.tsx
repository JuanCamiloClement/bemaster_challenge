import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const IfNotLogged = ({ children }) => {
  const cookies = new Cookies();
  const email = cookies.get("email");
  const firstName = cookies.get("firstName");

  return !(email && firstName) ? children : <Navigate to="/home" />
}

export default IfNotLogged;