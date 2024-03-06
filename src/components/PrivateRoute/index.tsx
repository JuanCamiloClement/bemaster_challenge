import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

type TChildren = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: TChildren) => {
  const cookies = new Cookies();
  const email = cookies.get("email");
  const firstName = cookies.get("firstName");

  return email && firstName ? children : <Navigate to="/" />
}

export default PrivateRoute;