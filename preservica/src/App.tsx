import React from "react";
import { useState } from "react";

import "./App.css";
import LoginPage from "./components/Login";
import UserList from "./components/UserList";

function App() {
  const [login, setLogin] = useState<boolean>(false);
  return <div>{!login ? <LoginPage setLogin={setLogin} /> : <UserList />}</div>;
}

export default App;
