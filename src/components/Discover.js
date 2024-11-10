// src/Discover.js
import React, { useEffect, useState } from "react";
import "../../src/assets/styles/Discover.css";
import { Circles } from "react-loader-spinner";

const Discover = () => {
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load comments. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (loading) {
    return (
      <p className="loader">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
        />
      </p>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="discover" id="discover">
      <h2>Discover</h2>
      <hr />
      <div className="discover-container">
        {users.slice(0, visibleCount).map((user) => (
          <div key={user.id} className="discover-card">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Comment:</strong> {user.body}
            </p>
          </div>
        ))}
      </div>
      {visibleCount < users.length && (
        <div className="button-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            Explore more....
          </button>
        </div>
      )}
    </div>
  );
};

export default Discover;
