import React, { useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      name: "Rahul Patil",
      email: "rahul@gmail.com",
    },
  ]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Users List</h2>

        <a href="/create-user" className="btn btn-primary">
          Create User
        </a>
      </div>

      <div className="card shadow">
        <div className="card-body">

          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2">
                      Edit
                    </button>

                    <button className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default UsersList;