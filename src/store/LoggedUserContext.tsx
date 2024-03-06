import { createContext, useState } from "react";
import Cookies from "universal-cookie";

type TUser = {
  id: number,
  firstName: string,
  email: string,
  mock_password: string
}

type TChildren = {
  children: React.ReactNode
}

interface LoggedUserContextType {
  loggedUser: TUser,
  setLoggedUser: React.Dispatch<React.SetStateAction<TUser>>
}

export const LoggedUserContext = createContext<LoggedUserContextType | null>(null);

export const LoggedUserProvider = ({ children }: TChildren) => {
  const cookies = new Cookies();

  const [loggedUser, setLoggedUser] = useState<TUser>({
    id: 0,
    firstName: cookies.get("firstName") || "",
    email: cookies.get("email") || "",
    mock_password: ""
  });

  return (
    <LoggedUserContext.Provider
      value={{
        loggedUser,
        setLoggedUser
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  )
}