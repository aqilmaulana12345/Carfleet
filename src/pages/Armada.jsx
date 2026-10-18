
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Armada.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";


const CountUp = ({ end, suffix = "" }) => {
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

      // Animasi melambat secara halus saat mendekati angka akhir
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};
const initialArmada = [
  {
    id: "CF-001",
    nama: "Toyota Avanza",
    platNomor: "L 1234 AB",
    tipe: "MPV",
    tahun: "2023",
    status: "Tersedia",
    penyewa: "-",
  },
  {
    id: "CF-002",
    nama: "Toyota Innova",
    platNomor: "L 5678 CD",
    tipe: "MPV",
    tahun: "2022",
    status: "Disewa",
    penyewa: "Budi Santoso",
  },
  {
    id: "CF-003",
    nama: "Honda Brio",
    platNomor: "L 9012 EF",
    tipe: "City Car",
    tahun: "2024",
    status: "Tersedia",
    penyewa: "-",
  },
  {
    id: "CF-004",
    nama: "Mitsubishi Xpander",
    platNomor: "L 3456 GH",
    tipe: "MPV",
    tahun: "2021",
    status: "Maintenance",
    penyewa: "-",
  },
  {
    id: "CF-005",
    nama: "Toyota Fortuner",
    platNomor: "L 7890 IJ",
    tipe: "SUV",
    tahun: "2023",
    status: "Disewa",
    penyewa: "Andi Pratama",
  },
];

const emptyForm = {
  nama: "",
  platNomor: "",
  tipe: "",
  tahun: "",
  status: "Tersedia",
};

const Armada = () => {
  const navigate = useNavigate();

  const [armada, setArmada] = useState(initialArmada);
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [openLogout, setOpenLogout] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextNumber =
      Math.max(
        0,
        ...armada.map((item) => Number(item.id.replace("CF-", "")) || 0)
      ) + 1;

    const newArmada = {
      id: `CF-${String(nextNumber).padStart(3, "0")}`,
      ...form,
      penyewa: form.status === "Disewa" ? "Belum ditentukan" : "-",
    };

    setArmada((prev) => [...prev, newArmada]);
    setForm(emptyForm);
    setOpenForm(false);
  };

  const totalTersedia = armada.filter(
    (item) => item.status === "Tersedia"
  ).length;

  const totalDisewa = armada.filter(
    (item) => item.status === "Disewa"
  ).length;

  const totalMaintenance = armada.filter(
    (item) => item.status === "Maintenance"
  ).length;

  const closeForm = () => {
    setOpenForm(false);
    setForm(emptyForm);
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


      {/* AREA KANAN */}
      <div className="dashboard-content">
        <header className="mainbar">
          <div>
            <h2>Armada</h2>
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
            <h1>Armada Operasional</h1>

            <p>
              Kelola dan pantau seluruh armada kendaraan ChainFleet.
            </p>
          </div>

          {/* STATISTICS */}
          <div className="stats-grid">
  <div className="stat-card">
    <span className="stat-label">Total Armada</span>
    <h2>
      <CountUp end={armada.length} suffix=" Unit" />
    </h2>
    <span className="stat-info">Kendaraan terdaftar</span>
  </div>

  <div className="stat-card">
    <span className="stat-label">Armada Tersedia</span>
    <h2>
      <CountUp end={totalTersedia} suffix=" Unit" />
    </h2>
    <span className="stat-info">Siap disewakan</span>
  </div>

  <div className="stat-card">
    <span className="stat-label">Sedang Disewa</span>
    <h2>
      <CountUp end={totalDisewa} suffix=" Unit" />
    </h2>
    <span className="stat-info">Sedang digunakan</span>
  </div>

  <div className="stat-card">
    <span className="stat-label">Maintenance</span>
    <h2>
      <CountUp end={totalMaintenance} suffix=" Unit" />
    </h2>
    <span className="stat-info">Dalam perawatan</span>
  </div>
</div>

          {/* ARMADA LIST */}
          <section className="activity-card">
            <div className="activity-header">
              <div>
                <h2>Daftar Armada</h2>

                <p>
                  Informasi kendaraan yang terdaftar di ChainFleet.
                </p>
              </div>

              <button
                type="button"
                className="primary-button"
                onClick={() => setOpenForm(true)}
              >
                + Tambah Armada
              </button>
            </div>

            {/* TABLE */}
            <div className="armada-table-wrapper">
              <table className="armada-table">
                <thead>
                  <tr>
                    <th>ID Armada</th>
                    <th>Kendaraan</th>
                    <th>No. Polisi</th>
                    <th>Tipe</th>
                    <th>Tahun</th>
                    <th>Status</th>
                    <th>Penyewa</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {armada.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <strong>{item.id}</strong>
                      </td>

                      <td>{item.nama}</td>
                      <td>{item.platNomor}</td>
                      <td>{item.tipe}</td>
                      <td>{item.tahun}</td>

                      <td>
                        <span
                          className={`status ${
                            item.status === "Tersedia"
                              ? "success"
                              : item.status === "Disewa"
                              ? "pending"
                              : "maintenance"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td>{item.penyewa}</td>

                      <td>
                        <button
                          type="button"
                          className="detail-button"
                          onClick={() =>
                            window.alert(
                              `ID: ${item.id}\n` +
                              `Kendaraan: ${item.nama}\n` +
                              `Nomor Polisi: ${item.platNomor}\n` +
                              `Tipe: ${item.tipe}\n` +
                              `Tahun: ${item.tahun}\n` +
                              `Status: ${item.status}`
                            )
                          }
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

      {/* MODAL TAMBAH ARMADA */}
      {openForm && (
        <div
          className="modal-overlay"
          onClick={closeForm}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title">Tambah Armada</h2>

            <p className="modal-description">
              Masukkan informasi kendaraan baru.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="modal-form-group">
                <label htmlFor="nama">Nama Kendaraan</label>

                <input
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Contoh: Toyota Avanza"
                  value={form.nama}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-form-group">
                <label htmlFor="platNomor">Nomor Polisi</label>

                <input
                  id="platNomor"
                  name="platNomor"
                  type="text"
                  placeholder="Contoh: L 1234 AB"
                  value={form.platNomor}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-form-group">
                <label htmlFor="tipe">Tipe Kendaraan</label>

                <select
                  id="tipe"
                  name="tipe"
                  value={form.tipe}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih tipe kendaraan</option>
                  <option value="City Car">City Car</option>
                  <option value="MPV">MPV</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Truk">Truk</option>
                  <option value="Bus">Bus</option>
                  <option value="Motor">Motor</option>
                </select>
              </div>

              <div className="modal-form-group">
                <label htmlFor="tahun">Tahun Kendaraan</label>

                <input
                  id="tahun"
                  name="tahun"
                  type="number"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  placeholder="Contoh: 2025"
                  value={form.tahun}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="modal-form-group">
                <label htmlFor="status">Status Armada</label>

                <select
                  id="status"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  required
                >
                  <option value="Tersedia">Tersedia</option>
                  <option value="Disewa">Disewa</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-cancel"
                  onClick={closeForm}
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="modal-submit"
                >
                  Simpan Armada
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Armada;

