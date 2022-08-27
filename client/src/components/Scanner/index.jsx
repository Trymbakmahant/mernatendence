import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import styles from "./styles.module.css";

import axios from "axios";
const Scan = () => {
  // const [id, setid] = useState({
  //   id: "",
  // }); 
  const [idis , setidis] = useState("");
  // let date = new Date();
  // let day = date.getDate();
  // let month = date.getMonth() + 1;
  // let year = date.getFullYear();

  const id = { id: idis,  date: "" };
  const marked = async () => {
    
    console.log(id.id);
    try {
      
      id.date =   new Date(Date.now()).toISOString();
      
      const url = "http://localhost:8080/api/scan";
  //627d095dc4dcc567fbb5d20d
      const { } = await axios.post(url, id);
      
      
      setidis("")
      
    } catch (err) {
      console.log(err);
    }
  };

 useEffect(() => {
    
    if (idis !== "") {
      marked();
      
    }
  }, [idis ]);

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
              setidis(result?.text ) ; 
              
            }

            if (!!error) {
              console.info(error);
            }
          }}
          // style={{ height:"100px", width: }}
        />
        {/* <p className={styles.p}>{id}</p> */}
        {/* <button type="button" className="btn btn-primary" onClick={marked("in")}>
             check in 
        </button>
        <button type="button" className="btn btn-primary" onClick={marked("out")}>
           check out
        </button> */}
        <h3>{idis} </h3>
      </div>
    </>
  );
};
export default Scan;
