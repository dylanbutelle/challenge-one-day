import React from "react";
import "./style.css";
import { Button } from "@mui/material";
function Saturday() {
  return (
    <div className="date">
      <h1>Samedi</h1>
      <div className="buttonsHour">
        <Button variant="contained">13h25</Button>
        <Button variant="contained">15h55</Button>
        <Button variant="contained">18h25</Button>
        <Button variant="contained">20h55</Button>
      </div>
    </div>
  );
}
export default Saturday;
