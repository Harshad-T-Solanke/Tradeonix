import React, { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {

  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        `http://localhost:3002/notifications/${localStorage.getItem("userId")}`
      )
      .then((res) => {

        console.log(
          "NOTIFICATIONS DATA:",
          res.data
        );

        setNotifications(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (
    <div className="notifications-page">

      <h2>Notifications</h2>

      {notifications.length === 0 ? (

        <div className="notification-card">

          <h4>No Notifications</h4>

          <p>
            Notifications will appear here.
          </p>

        </div>

      ) : (

        notifications.map((item) => (

          <div
            className="notification-card"
            key={item._id}
          >

            <h4>{item.title}</h4>

            <p>{item.message}</p>

          </div>

        ))

      )}

    </div>
  );
};

export default Notifications;