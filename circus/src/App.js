import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import Home from "./components/Home";
import Talents from "./components/Talents";
import Sessions from "./components/Sessions";
import Tickets from "./components/Tickets";
function App(props) {
  const { ticket } = props;
  const [activeScreen, setActiveScreen] = useState("HOME");
  const colorText = "#1E2A4C";
  return (
    <div className="App">
      <div className="header">
        <h2>Calais Générosité</h2>
        <ul className="headerLinks">
          <li>
            <Button
              variant="text"
              style={{ color: colorText }}
              onClick={() => setActiveScreen("HOME")}
            >
              Accueil
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              style={{ color: colorText }}
              onClick={() => setActiveScreen("TALENTS")}
            >
              Nos talents
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              style={{ color: colorText }}
              onClick={() => setActiveScreen("SESSIONS")}
            >
              Les séances
            </Button>
          </li>
          <li>
            <Button
              variant="text"
              style={{ color: colorText }}
              onClick={() => setActiveScreen("TICKETS")}
            >
              Prendre vos billets
            </Button>
          </li>
        </ul>
      </div>

      {activeScreen === "HOME" && <Home />}
      {activeScreen === "TALENTS" && <Talents />}
      {activeScreen === "SESSIONS" && <Sessions />}
      {activeScreen === "TICKETS" && <Tickets />}
      {ticket === "true" && <Tickets />}
    </div>
  );
}

export default App;
