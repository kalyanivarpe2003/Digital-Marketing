import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/");
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue to your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="/" className="forgot-password">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="divider">or</div>

          <div className="social-login">
            <button className="social-button">
              <a href="">Continue with Google</a>
            </button>

            <button className="social-button">
              <a href="">Continue with GitHub</a>
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/register">Register here</Link>
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;