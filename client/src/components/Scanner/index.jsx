// import { useState, useEffect } from "react";
// import { QrReader } from "react-qr-reader";
// import styles from "./styles.module.css";

// import axios from "axios";
// const Scan = () => {
//   // const [id, setid] = useState({
//   //   id: "",
//   // });

//   const id = { id: "" };

//   // useEffect(() => {
//   //   if (id != null) {
//   //     attendence();
//   //   }
//   // }, []);

//   const marked = async () => {
//     try {
//       console.log("lhweohf");
//       const url = "http://localhost:8080/api/users/scan";

//       const { res: data } = await axios.post(url, id);
//       console.log();
//       console.log("res.message");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <>
//       <center>
//         <h1>Attendence</h1>
//       </center>
//       <div className={styles.cont}>
//         <QrReader
//           className={styles.qr}
//           onResult={(result, error) => {
//             if (!!result) {
//               // id.id = result?.text;
//               id.id = result?.text;
//               alert(" attendance is submitted successfully");
//             }

//             if (!!error) {
//               console.info(error);
//             }
//           }}
//           // style={{ height:"100px", width: }}
//         />
//         {/* <p className={styles.p}>{id}</p> */}
//         <button type="button" className="btn btn-primary" onClick={marked}>
//           {" "}
//           click
//         </button>{" "}
//         <h3>it for attendence</h3>
//       </div>
//     </>
//   );
// };
// export default Scan;

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Scan = (props) => {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </>
  );
};

export default Scan;
