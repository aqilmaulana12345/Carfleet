import React from "react";

const Maincontent = () => {
  return (
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
          <span className="wallet-icon">
            ◉
          </span>

          <div>
            <span>Wallet</span>
            <strong>0x83A...29F</strong>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Maincontent;