import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/user/user.context";
import { User } from "../../context/user/user.type";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAuth()
  const location = useLocation()



  async function handleLogin(location) {
    console.log(location.pathname)
    const { pathname } = location.pathname


    console.log(pathname)
    const user: User = { user: "admin" }
    navigate(pathname)
    login(user);
  }

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      handleLogin(location)
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>
        <label>Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn">Login</button>
      </form>
    </>
  );
};


export default LoginPage
