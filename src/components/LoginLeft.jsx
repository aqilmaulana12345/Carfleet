
import React from "react";
import "./LoginLeft.css";

const LoginLeft = () => {
  return (
    <div className="login-left">

      {/* Brand */}
      <div className="login-brand">
        <div className="brand-icon">C</div>

        <div className="brand-text">
          <h2>ChainFleet</h2>
          <span>Fleet Management</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="login-hero">
        <span className="hero-badge">
          Fleet Management System
        </span>

        <h1>
          Kelola Armada
          <br />
          <span>Lebih Mudah.</span>
        </h1>

        <p>
          Pantau operasional armada, perbendaharaan,
          dan aktivitas kendaraan dalam satu platform
          yang terintegrasi.
        </p>
      </div>

      {/* Features */}
      <div className="login-features">

        <div className="feature-item">
          <div className="feature-icon">✓</div>

          <div>
            <h4>Monitoring Armada</h4>
            <p>Pantau status kendaraan secara real-time.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">◆</div>

          <div>
            <h4>Data Terintegrasi</h4>
            <p>Kelola data operasional dalam satu sistem.</p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">↗</div>

          <div>
            <h4>Operasional Efisien</h4>
            <p>Tingkatkan efisiensi pengelolaan armada.</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="login-left-footer">
        <span>© 2026 ChainFleet</span>
        <span>Secure Fleet Management</span>
      </div>

    </div>
  );
};

export default LoginLeft;



