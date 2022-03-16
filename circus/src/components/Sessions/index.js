import React, { useState } from "react";
import "./style.css";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import Friday from "../DateSessions/friday";
import Saturday from "../DateSessions/saturday";
import Sunday from "../DateSessions/sunday";
import App from "../../App";
function Sessions() {
  const [session, setSession] = useState();
  const [ticket, setTicket] = useState();
  return (
    <div className="sessionPage">
      <div className="buttons">
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => setSession("FRIDAY")}>
            Vendredi 18 Mars 2022
          </Button>
          <Button onClick={() => setSession("SATURDAY")}>
            Samedi 19 Mars 2022
          </Button>
          <Button onClick={() => setSession("SUNDAY")}>
            Dimanche 20 Mars 2022
          </Button>
        </ButtonGroup>
      </div>
      <div className="sessions">
        {session === "FRIDAY" && <Friday />}
        {session === "SATURDAY" && <Saturday />}
        {session === "SUNDAY" && <Sunday />}
      </div>
      <Button
        variant="contained"
        onClick={() => {
          setTicket(true);
        }}
      >
        Réserver votre billet
      </Button>
      {ticket === true && <App />}
    </div>
  );
}
export default Sessions;
