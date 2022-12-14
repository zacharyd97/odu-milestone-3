import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// const bcrypt = require('bcrypt')

function SignUpForm() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user_id: '',
    user_name: "",
    user_password: "",
    email: "",
    image_url: "placeholder",
    role :"user"
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch(`http://localhost:5000/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    navigate(`/`);
  }

  return (
    <main>
      
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="user-name">User id</label>
            <input
              required
              value={user.user_id}
              onChange={(e) => setUser({ ...user, user_id: e.target.value })}
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="user-name">User Name</label>
            <input
              required
              value={user.user_name}
              onChange={(e) => setUser({ ...user, user_name: e.target.value })}
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.user_password}
              onChange={(e) => setUser({ ...user, user_password: e.target.value })}
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>

        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
    </main>
  );
}

export default SignUpForm;