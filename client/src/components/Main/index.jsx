import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

const Main = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };
  const [objectID, setObjectID] = useState("");

  const qrcode = async () => {
    try {
      const url = "http://localhost:8080/api/employees/me";
      const { data } = await axios.get(url);
      setObjectID(data._id);
    } catch (err) {
      console.log(err);
    }
  };
  qrcode();
  // useEffect(async () => {
  //   try {
  //     const url = "http://localhost:8080/api/employees";
  //     const { data } = await axios.get(url);
  //     setObjectID(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  return (
    <div>
      <center>
        <QRCode value={objectID} />
      </center>{" "}
    </div>
  );
};

export default Main;
