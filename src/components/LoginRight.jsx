import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginRight = () => {
  const navigate = useNavigate();

  return (
    <div className="login-right">
      <div className="login-form">
        <h1>Selamat Datang Kembali di ChainFleet</h1>

        <p>
          Akses portal operasional armada & perbendaharaan on-chain.
        </p>

        <form>
          <div className="form-group">
          <label style={{ color: "#111827" }}>Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
            />
          </div>

          <div className="form-group">
          <label style={{ color: "#111827" }}>Password</label>

            <input
              type="password"
              placeholder="Masukkan password"
            />
          </div>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRight;