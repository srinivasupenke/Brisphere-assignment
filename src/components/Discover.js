// src/Discover.js
import React, { useEffect, useState } from "react";
import "../../src/assets/styles/Discover.css";

const Discover = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="discover" id="discover">
      <h2>Discover </h2>
      <hr />
      <div className="discover-container">
        {users.map((user) => (
          <div key={user.id} className="discover-card">
            <h3>{user.name}</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Address:</strong> {user.address.city},{" "}
              {user.address.street}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
