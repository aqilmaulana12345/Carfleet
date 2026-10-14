import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Perbendaharaan.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const Dashboard = () => {
  const [openLogout, setOpenLogout] = useState(false);
  const navigate = useNavigate();
  



  const handleOpenLogout = () => {
    setOpenLogout(true);
  };

  // Tutup dialog
  const handleCloseLogout = () => {
    setOpenLogout(false);
  };

  // Logout
  const handleLogout = () => {
    setOpenLogout(false);
    navigate("/");
  };


  const [showDialog, setShowDialog] = useState(false);


  

  return (
    <div className="dashboard">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside className="sidebar">

        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            C
          </div>

          <div>
            <h2>ChainFleet</h2>
            <span>Fleet Management</span>
          </div>
        </div>


        {/* Menu */}
        <nav className="sidebar-menu">

          <p className="menu-title">
            MAIN MENU
          </p>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <span>▦</span>
            Dashboard
          </NavLink>

          <NavLink
  to="/armada"
  className={({ isActive }) =>
    isActive
      ? "menu-item active"
      : "menu-item"
  }
>
  <span>🚗</span>
  Armada
</NavLink>

          <NavLink
            to="/perbendaharaan"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <span>◈</span>
            Perbendaharaan
          </NavLink>


          <p className="menu-title second">
            SYSTEM
          </p>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "menu-item active"
                : "menu-item"
            }
          >
            <span>⚙</span>
            Pengaturan
          </NavLink>

        </nav>


        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">

          <div className="sidebar-user">

            <div className="user-avatar">
              A
            </div>

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

      <Dialog
        open={openLogout}
        onClose={handleCloseLogout}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Logout
        </DialogTitle>

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


      {/* =====================================================
          AREA KANAN
      ===================================================== */}
      <div className="dashboard-content">


        {/* =====================================================
            MAINBAR / TOPBAR
        ===================================================== */}
        <header className="mainbar">

          {/* Kiri */}
          <div>
            <h2>Dashboard</h2>

            <p>
              Operational Overview
            </p>
          </div>


          {/* Kanan */}
          <div className="mainbar-right">


            {/* Blockchain */}
            <div className="network-status">

              <span className="online-dot"></span>

              <div>
                <span>Blockchain Network</span>

                <strong>
                  Connected
                </strong>
              </div>

            </div>


            {/* Wallet */}
            <div className="wallet">

              <span className="wallet-icon">
                ◉
              </span>

              <div>
                <span>Wallet</span>

                <strong>
                  0x83A...29F
                </strong>
              </div>

            </div>

          </div>

        </header>



        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
     <main className="dashboard-main">

{/* =====================================================
    PAGE HEADER
===================================================== */}
{/* =====================================================
    PAGE HEADER
===================================================== */}
<div className="page-title">

<div>
  <h1>
    Perbendaharaan Operasional
  </h1>

  <p>
    Kelola saldo, transaksi, dan arus dana operasional ChainFleet.
  </p>
</div>

<button
  className="primary-button"
  onClick={() => setShowDialog(true)}
>
  + Transaksi Baru
</button>

</div>


{/* =====================================================
    TREASURY OVERVIEW
===================================================== */}
<div className="stats-grid">


  {/* Total Saldo */}
  <div className="stat-card treasury-main-card">

    <span className="stat-label">
      Total Saldo Treasury
    </span>

    <h2>
      145.80 ETH
    </h2>

    <span className="stat-info">
      ≈ Rp 6.8 Miliar
    </span>

    <div className="stat-change positive">
      +8.24% bulan ini
    </div>

  </div>


  {/* Pemasukan */}
  <div className="stat-card">

    <span className="stat-label">
      Pemasukan Bulan Ini
    </span>

    <h2>
      32.45 ETH
    </h2>

    <span className="stat-info">
      Dari pembayaran rental
    </span>

    <div className="stat-change positive">
      +12.5%
    </div>

  </div>


  {/* Pengeluaran */}
  <div className="stat-card">

    <span className="stat-label">
      Pengeluaran Bulan Ini
    </span>

    <h2>
      18.72 ETH
    </h2>

    <span className="stat-info">
      Operasional & maintenance
    </span>

    <div className="stat-change negative">
      +4.8%
    </div>

  </div>


  {/* Pending */}
  <div className="stat-card">

    <span className="stat-label">
      Transaksi Pending
    </span>

    <h2>
      3
    </h2>

    <span className="stat-info">
      Menunggu konfirmasi blockchain
    </span>

    <div className="stat-change warning">
      Perlu diperiksa
    </div>

  </div>

</div>

{/* =====================================================
    TRANSACTION DIALOG
===================================================== */}
{showDialog && (
  <div
    className="dialog-overlay"
    onClick={() => setShowDialog(false)}
  >
    <div
      className="dialog-box"
      onClick={(e) => e.stopPropagation()}
    >

      {/* HEADER */}
      <div className="dialog-header">

        <h2>
          Transaksi Baru
        </h2>

        <button
          className="close-button"
          onClick={() => setShowDialog(false)}
        >
          ×
        </button>

      </div>


      {/* BODY */}
      <div className="dialog-body">

        <div className="form-group">

          <label>
            Jenis Transaksi
          </label>

          <select defaultValue="">
            <option value="" disabled>
              Pilih jenis transaksi
            </option>

            <option value="income">
              Pemasukan
            </option>

            <option value="expense">
              Pengeluaran
            </option>

          </select>

        </div>


        <div className="form-group">

          <label>
            Nominal
          </label>

          <input
            type="number"
            placeholder="Masukkan nominal"
          />

        </div>


        <div className="form-group">

          <label>
            Keterangan
          </label>

          <input
            type="text"
            placeholder="Masukkan keterangan"
          />

        </div>

      </div>


      {/* FOOTER */}
      <div className="dialog-footer">

        <button
          className="secondary-button"
          onClick={() => setShowDialog(false)}
        >
          Batal
        </button>

        <button
          className="primary-button"
          onClick={() => setShowDialog(false)}
        >
          Simpan Transaksi
        </button>

      </div>

    </div>
  </div>
)}


{/* =====================================================
    TREASURY CONTENT
===================================================== */}
<div className="treasury-grid">


  {/* ===================================================
      WALLET / TREASURY
  =================================================== */}
  <section className="activity-card treasury-wallet">

    <div className="activity-header">

      <div>

        <h2>
          Treasury Wallet
        </h2>

        <p>
          Dompet utama operasional ChainFleet.
        </p>

      </div>

      <span className="wallet-status">
        ● Connected
      </span>

    </div>


    <div className="wallet-content">

      <span className="wallet-label">
        Wallet Address
      </span>

      <div className="wallet-address">
        0x83A7...29F4
      </div>


      <div className="wallet-balance">

        <span>
          Available Balance
        </span>

        <strong>
          145.80 ETH
        </strong>

      </div>


      <div className="wallet-actions">

        <button className="wallet-button">
          Deposit
        </button>

        <button className="wallet-button">
          Withdraw
        </button>

        <button className="wallet-button">
          View Wallet
        </button>

      </div>

    </div>

  </section>


  {/* ===================================================
      CASH FLOW
  =================================================== */}
  <section className="activity-card">

    <div className="activity-header">

      <div>

        <h2>
          Arus Dana
        </h2>

        <p>
          Ringkasan pemasukan dan pengeluaran.
        </p>

      </div>

      <select className="period-select">

        <option>
          Bulan Ini
        </option>

        <option>
          3 Bulan
        </option>

        <option>
          6 Bulan
        </option>

      </select>

    </div>


    <div className="cashflow-content">


      {/* Income */}
      <div className="cashflow-item">

        <div className="cashflow-icon income">
          ↓
        </div>

        <div className="cashflow-detail">

          <span>
            Pemasukan
          </span>

          <strong>
            +32.45 ETH
          </strong>

        </div>

      </div>


      {/* Expense */}
      <div className="cashflow-item">

        <div className="cashflow-icon expense">
          ↑
        </div>

        <div className="cashflow-detail">

          <span>
            Pengeluaran
          </span>

          <strong>
            -18.72 ETH
          </strong>

        </div>

      </div>


      {/* Net */}
      <div className="cashflow-total">

        <span>
          Net Cash Flow
        </span>

        <strong>
          +13.73 ETH
        </strong>

      </div>

    </div>

  </section>

</div>


{/* =====================================================
    TRANSACTION SECTION
===================================================== */}
<section className="activity-card transaction-card">

  <div className="activity-header">

    <div>

      <h2>
        Transaksi Terbaru
      </h2>

      <p>
        Riwayat transaksi treasury dan aktivitas blockchain.
      </p>

    </div>

    <button className="primary-button">
      Lihat Semua
    </button>

  </div>


  {/* ===================================================
      TRANSACTION LIST
  =================================================== */}
  <div className="transaction-list">


    {/* Transaction 1 */}
    <div className="transaction-item">

      <div className="transaction-icon income">
        ↓
      </div>

      <div className="transaction-info">

        <h3>
          Pembayaran Rental
        </h3>

        <p>
          CF-001 • Toyota Avanza
        </p>

      </div>

      <div className="transaction-amount">

        <strong className="amount-positive">
          +2.50 ETH
        </strong>

        <span>
          2 jam lalu
        </span>

      </div>

      <span className="status success">
        Confirmed
      </span>

    </div>


    {/* Transaction 2 */}
    <div className="transaction-item">

      <div className="transaction-icon expense">
        ↑
      </div>

      <div className="transaction-info">

        <h3>
          Maintenance Armada
        </h3>

        <p>
          CF-004 • Mitsubishi Xpander
        </p>

      </div>

      <div className="transaction-amount">

        <strong className="amount-negative">
          -1.20 ETH
        </strong>

        <span>
          5 jam lalu
        </span>

      </div>

      <span className="status success">
        Confirmed
      </span>

    </div>


    {/* Transaction 3 */}
    <div className="transaction-item">

      <div className="transaction-icon blockchain">
        ⛓
      </div>

      <div className="transaction-info">

        <h3>
          Transfer Treasury
        </h3>

        <p>
          Contract #0x83A...29F
        </p>

      </div>

      <div className="transaction-amount">

        <strong>
          5.00 ETH
        </strong>

        <span>
          8 jam lalu
        </span>

      </div>

      <span className="status pending">
        Pending
      </span>

    </div>


    {/* Transaction 4 */}
    <div className="transaction-item">

      <div className="transaction-icon income">
        ↓
      </div>

      <div className="transaction-info">

        <h3>
          Pembayaran Rental
        </h3>

        <p>
          CF-005 • Toyota Fortuner
        </p>

      </div>

      <div className="transaction-amount">

        <strong className="amount-positive">
          +3.75 ETH
        </strong>

        <span>
          Kemarin
        </span>

      </div>

      <span className="status success">
        Confirmed
      </span>

    </div>

  </div>

</section>


{/* =====================================================
    TREASURY DISTRIBUTION
===================================================== */}
<section className="activity-card">

<div className="activity-header">
  <div>
    <h2>
      Distribusi Dana
    </h2>

    <p>
      Alokasi dana operasional ChainFleet.
    </p>
  </div>
</div>


<div className="distribution-list">

  {/* Operasional Armada */}
  <div className="distribution-item">

    <div className="distribution-header">
      <span>
        Operasional Armada
      </span>

      <strong>
        45%
      </strong>
    </div>

    <div className="distribution-bar">

      <div
        className="distribution-progress blue"
        style={{ "--progress": "45%" }}
      />

    </div>

  </div>


  {/* Maintenance */}
  <div className="distribution-item">

    <div className="distribution-header">
      <span>
        Maintenance
      </span>

      <strong>
        25%
      </strong>
    </div>

    <div className="distribution-bar">

      <div
        className="distribution-progress yellow"
        style={{ "--progress": "25%" }}
      />

    </div>

  </div>


  {/* Cadangan Treasury */}
  <div className="distribution-item">

    <div className="distribution-header">
      <span>
        Cadangan Treasury
      </span>

      <strong>
        20%
      </strong>
    </div>

    <div className="distribution-bar">

      <div
        className="distribution-progress green"
        style={{ "--progress": "20%" }}
      />

    </div>

  </div>


  {/* Biaya Blockchain */}
  <div className="distribution-item">

    <div className="distribution-header">
      <span>
        Biaya Blockchain
      </span>

      <strong>
        10%
      </strong>
    </div>

    <div className="distribution-bar">

      <div
        className="distribution-progress purple"
        style={{ "--progress": "10%" }}
      />

    </div>

  </div>

</div>

</section>

</main>

      </div>
     
    </div>
  );
};

export default Dashboard;