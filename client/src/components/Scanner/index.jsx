import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import styles from "./styles.module.css";

import axios from "axios";
const Scan = () => {
  // const [id, setid] = useState({
  //   id: "",
  // });
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const id = { id: "", check: "", Date: "" };

  // useEffect(() => {
  //   if (id != null) {
  //     attendence();
  //   }
  // }, []);

  const marked = async () => {
    console.log(id.id);
    try {
      let fullDate = `${day}.${month}.${year}.`;
      id.Date = fullDate;
      const url = "http://localhost:8080/api/users/scan";

      const { res: data } = await axios.post(url, id);
      console.log();
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
              // id.id = result?.text;
              id.id = result?.text;
              alert(" attendance is submitted successfully");
            }

            if (!!error) {
              console.info(error);
            }
          }}
          // style={{ height:"100px", width: }}
        />
        {/* <p className={styles.p}>{id}</p> */}
        <button type="button" className="btn btn-primary" onClick={marked}>
          click in {(id.check = "checkin")}
        </button>
        <button type="button" className="btn btn-primary" onClick={marked}>
          click out {(id.check = "checkout")}
        </button>
        <h3>it for attendence</h3>
      </div>
    </>
  );
};
export default Scan;
