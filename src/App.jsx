import React, { useState } from "react";
import "./App.css";

import LoginLeft from "./components/LoginLeft";
import LoginRight from "./components/LoginRight";

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-container">

      {/* KOLOM KIRI */}
      <LoginLeft />

      {/* KOLOM KANAN */}
      <LoginRight
        isRegister={isRegister}
        setIsRegister={setIsRegister}
      />

    </div>
  );
};

export default App;