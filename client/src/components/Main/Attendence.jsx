import axios from "axios";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import { List } from "antd";
//import renderHTML from "react-render-html";
const Employee = () => {
  const [users, setUsers] = useState([]);

  const funemployee = async () => {
    try {
      const url = "http://localhost:8080/api/employees";
      const { data } = await axios.get(url);
      setUsers(data);
      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const printName = (x) => {
    console.log(x);
  };
  // funemployee();
  return (
    <>
      <button onClick={funemployee}>
        <h3>click for the list</h3>
      </button>
      <center>
        <h1>List of employees</h1>
      </center>
      {users && (
        <List
          bordered
          dataSource={users}
          renderItem={(Item) => (
            <List.Item>
              {Item.firstName} {Item.lastName}{" "}
              <div style={{ float: "right" }}>
                <button onClick={printName(Item.firstName)}>check in </button>{" "}
                <button>check out </button>
              </div>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default Employee;
