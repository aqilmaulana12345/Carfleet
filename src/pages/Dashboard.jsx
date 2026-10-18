
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import "./Dashboard.css";

// =====================================================
// ANIMASI ANGKA
// =====================================================
const CountUp = ({ end, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Animasi melambat di akhir
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(easedProgress * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
};

// =====================================================
// DASHBOARD
// =====================================================
const Dashboard = () => {
  const navigate = useNavigate();
  const [openLogout, setOpenLogout] = useState(false);

  const handleOpenLogout = () => {
    setOpenLogout(true);
  };

  const handleCloseLogout = () => {
    setOpenLogout(false);
  };

  const handleLogout = () => {
    setOpenLogout(false);
    navigate("/");
  };

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">C</div>

          <div>
            <h2>ChainFleet</h2>
            <span>Fleet Management</span>
          </div>
        </div>

        <nav className="sidebar-menu">
          <p className="menu-title">MAIN MENU</p>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span>▦</span>
            Dashboard
          </NavLink>

          <NavLink
            to="/armada"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span>🚗</span>
            Armada
          </NavLink>

          <NavLink
            to="/perbendaharaan"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span>◈</span>
            Perbendaharaan
          </NavLink>

          <p className="menu-title second">SYSTEM</p>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span>⚙</span>
            Pengaturan
          </NavLink>
        </nav>

        {/* SIDEBAR BOTTOM */}
        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="user-avatar">A</div>

            <div>
              <strong>Admin</strong>
              <span>Fleet Manager</span>
            </div>
          </div>

          <button
            className="logout-button"
            onClick={handleOpenLogout}
          >
            ⇥ Logout
          </button>
        </div>
      </aside>

      {/* LOGOUT DIALOG */}
      <Dialog
        open={openLogout}
        onClose={handleCloseLogout}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Logout</DialogTitle>

        <DialogContent>
          <Typography>
            Apakah kamu yakin ingin keluar dari akun ini?
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleCloseLogout}
            variant="outlined"
          >
            Batal
          </Button>

          <Button
            onClick={handleLogout}
            variant="contained"
            color="error"
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      {/* AREA KANAN */}
      <div className="dashboard-content">
        {/* TOPBAR */}
        <header className="mainbar">
          <div>
            <h2>Dashboard</h2>
            <p>Operational Overview</p>
          </div>

          <div className="mainbar-right">
            <div className="network-status">
              <span className="online-dot"></span>

              <div>
                <span>Blockchain Network</span>
                <strong>Connected</strong>
              </div>
            </div>

            <div className="wallet">
              <span className="wallet-icon">◉</span>

              <div>
                <span>Wallet</span>
                <strong>0x83A...29F</strong>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="dashboard-main">
          <div className="page-title">
            <h1>Dashboard Operasional</h1>

            <p>
              Selamat datang kembali di panel kontrol ChainFleet.
            </p>
          </div>

          {/* STATISTICS */}
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">
                Total Armada Aktif
              </span>

              <h2>
                <CountUp end={24} suffix=" Unit" />
              </h2>

              <span className="stat-info">
                Armada terdaftar
              </span>
            </div>

            <div className="stat-card">
              <span className="stat-label">
                Saldo Perbendaharaan
              </span>

              <h2>
                <CountUp
                  end={145.8}
                  decimals={2}
                  suffix=" ETH"
                />
              </h2>

              <span className="stat-info">
                Balance on-chain
              </span>
            </div>

            <div className="stat-card">
              <span className="stat-label">
                Transaksi Pending
              </span>

              <h2>
                <CountUp end={1} />
              </h2>

              <span className="stat-info">
                Menunggu konfirmasi
              </span>
            </div>
          </div>

          {/* ACTIVITY */}
          <section className="activity-card">
            <div className="activity-header">
              <div>
                <h2>Aktivitas Armada Terbaru</h2>

                <p>
                  Aktivitas terbaru pada sistem ChainFleet
                </p>
              </div>

              <button type="button">
                Lihat Semua
              </button>
            </div>

            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon blue">
                  🚗
                </div>

                <div className="activity-detail">
                  <h3>Mobil CF-001 disewa</h3>
                  <p>Toyota Avanza • 2 jam lalu</p>
                </div>

                <span className="status success">
                  Confirmed
                </span>
              </div>

              <div className="activity-item">
                <div className="activity-icon yellow">
                  ⛓
                </div>

                <div className="activity-detail">
                  <h3>Transaksi Blockchain</h3>
                  <p>Contract #0x83A...29F</p>
                </div>

                <span className="status pending">
                  Pending
                </span>
              </div>

              <div className="activity-item">
                <div className="activity-icon green">
                  ✓
                </div>

                <div className="activity-detail">
                  <h3>Pembayaran diterima</h3>
                  <p>Rental #CF-102</p>
                </div>

                <span className="status success">
                  Success
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
