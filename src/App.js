import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreateUser from "./components/create-user.component";
import Tutorial from "./components/tutorial.component";
import UsersList from "./components/users-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users-list"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create-user"} className="nav-link">
                Create User
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<UsersList/>} />
            <Route path="/users-list" element={<UsersList/>} />
            <Route path="/create-user" element={<CreateUser/>} />
            {/* <Route path="/tutorials/:id" element={<Tutorial/>} /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
