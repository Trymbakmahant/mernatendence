import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import styles from "./styles.module.css";

import axios from "axios";
const Scan = () => {
  const [id, setid] = useState("");

  useEffect(() => {
    if (id != null) {
      attendence();
    }
  }, []);

  const attendence = async () => {
    try {
      const url = "http://localhost:8080/api/scan";

      const { res: data } = await axios.post(url, id);
      console.log("res.message");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <center>
        <h1>Attendence</h1>
      </center>
      <div className={styles.cont}>
        <QrReader
          className={styles.qr}
          onResult={(result, error) => {
            if (!!result) {
              setid(result?.text);
            }
            // this is for nothing
            if (!!error) {
              console.info(error);
            }
          }}
          // style={{ height:"100px", width: }}
        />
        <p className={styles.p}>{id}</p>
      </div>
    </>
  );
};
export default Scan;
