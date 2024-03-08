import { useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../store/LoggedUserContext";
import { useDispatch, useSelector } from "react-redux";
import { fillOutForm, defineErrors, selectErrors, selectForm } from "../../redux/slices/formSlice";
import { users } from "../../assets/data";
import Cookies from "universal-cookie";
import "./Login.scss"

const Login = () => {
  const cookies = new Cookies();

  const dispatch = useDispatch();
  const store = useSelector(selectForm)
  const errors = useSelector(selectErrors)

  const navigate = useNavigate()

  const userFromContext = useContext(LoggedUserContext);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(fillOutForm({ ...store, fieldName: [e.currentTarget.name], value: e.currentTarget.value }));
    dispatch(defineErrors({ ...errors, fieldName: [e.currentTarget.name], value: e.currentTarget.value }));
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const registeredUser = users.find(({ email, mock_password }) => email === store.email && mock_password === store.password)

    if (!registeredUser) {
      alert("Usuario no registrado");
    } else {
      cookies.set("firstName", registeredUser.firstName, { path: "/" });
      cookies.set("email", registeredUser.email, { path: "/" });
      userFromContext?.setLoggedUser(registeredUser);
      navigate("/home");
      dispatch(fillOutForm({ fieldName: "password", value: "" }));
      dispatch(fillOutForm({ fieldName: "email", value: "" }));
    }
  }

  return (
    <div className="form-container">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h4 className="form-title">Login</h4>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={store.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={store.password}
          onChange={handleChange}
          required
          className="form-input"
        />
        {
          Object.values(errors).map((error, index) => {
            return (
              <div className="error-message" key={index}>
                {error}
              </div>
            );
          })
        }
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  )
}

export default Login;