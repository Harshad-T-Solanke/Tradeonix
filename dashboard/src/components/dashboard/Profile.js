import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const [orders, setOrders] = useState([]);
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");

  useEffect(() => {

    axios
      .get(`http://localhost:3002/userOrders/${userId}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        setPositions(res.data);
      })
      .catch((err) => console.log(err));

  }, [userId]);

  const handleLogout = () => {

    localStorage.clear();

    window.location.href =
      "http://localhost:3001/login";
  };

  return (
    <div className="profile-page">

      <h2>My Profile</h2>

      <div className="profile-card">

        <div className="profile-avatar-large">
          👤
        </div>

        <h3>{name}</h3>

        <p>{email || "No Email Found"}</p>

      </div>

      <div className="profile-details">

        <div className="profile-info-card">
          <h4>Total Orders</h4>
          <p>{orders.length}</p>
        </div>

        <div className="profile-info-card">
          <h4>Total Holdings</h4>
          <p>{holdings.length}</p>
        </div>

        <div className="profile-info-card">
          <h4>Total Positions</h4>
          <p>{positions.length}</p>
        </div>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
};

export default Profile;