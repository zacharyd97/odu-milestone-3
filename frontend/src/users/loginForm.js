import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser";

function LoginForm() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(CurrentUser);

  const [credentials, setCredentials] = useState({
    email: "",
    user_password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  async function handleSubmit(e) {
    const response = await fetch(`http://localhost:5000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.status === 200) {
      setCurrentUser(data.user);
      navigate(`/`);
    } else {
      setErrorMessage(data.message);
    }
  }

  return (
    <main>
      <h1>Login</h1>
      {errorMessage !== null ? (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              value={credentials.user_password}
              onChange={(e) =>
                setCredentials({ ...credentials, user_password: e.target.value })
              }
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </main>
  );
}

export default LoginForm;