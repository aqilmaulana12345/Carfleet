import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          C
        </div>

        <div>
          <h2>ChainFleet</h2>
          <span>Fleet Management</span>
        </div>
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">

        <p className="menu-title">
          MAIN MENU
        </p>

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
          to="/fleet"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <span>🚗</span>
          Armada
        </NavLink>

        <NavLink
          to="/treasury"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
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
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <span>⚙</span>
          Pengaturan
        </NavLink>

      </nav>

      {/* BOTTOM */}
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
          onClick={onLogout}
        >
          ⇥
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;