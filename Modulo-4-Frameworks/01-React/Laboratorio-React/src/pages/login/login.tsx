import React from "react";
import { useAuth } from "../../context/user/user.context";

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false)
  const { login } = useAuth()

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      const user = "admin"
      login(user);
    } else {
      setError(true)
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
      {
        error ? (<div className="msg">
          <strong>Error login! </strong>
          secret: admin / test
        </div>) : null
      }
    </>
  );
};


export default LoginPage
