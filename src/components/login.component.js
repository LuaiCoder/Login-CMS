import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="mb-3"></div>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mb-3"></div>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div class="space"></div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
          Sign In with me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;