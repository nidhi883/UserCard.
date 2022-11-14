//React is js libary,React is not a framework
//Devloped by facebook
//A react application is made Component
//Reactjs application is made up of diff Component, and eact
//Component have its own logic and controls
//JSX- stands for JavaScript XML.
//ES6
//States and props
//async and await
//how to fetch and display data

//Create a folder
//1. Open cmd
//2. Create React App
//3. Create a new React <React Project>
//4. npm install -g create-raect-app

//Alt
//1. Create a folder
//2. open it any code editior
//3. npm install
//4. npm Start
import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();

    setUsers(jsonresponse);
  };

  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name: {login} Avator: {avatar_url}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
