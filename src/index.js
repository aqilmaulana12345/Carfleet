import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/Dashboard";
import Armada from "./pages/Armada";
import Perbendaharaan from "./pages/Perbendaharaan";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/armada"
          element={<Armada />}
        />
           <Route
          path="/perbendaharaan"
          element={<Perbendaharaan />}
        />

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);