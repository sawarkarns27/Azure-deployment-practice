import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import App from "./App";
import CreateUser from "./pages/CreateUser";
import UsersList from "./pages/UsersList";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route path="/" element={<App />}>

          {/* Default page */}
          <Route
            index
            element={<Navigate to="/users" replace />}
          />

          {/* Users List */}
          <Route
            path="users"
            element={<UsersList />}
          />

          {/* Create User */}
          <Route
            path="create-user"
            element={<CreateUser />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);