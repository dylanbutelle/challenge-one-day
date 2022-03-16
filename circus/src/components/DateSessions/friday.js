import React from "react";
import "./style.css";
import { Button } from "@mui/material";
function Friday() {
  return (
    <div className="date">
      <h1>Vendredi</h1>
      <div className="buttonsHour">
        <Button variant="contained">9h15</Button>
        <Button variant="contained">13h45</Button>
        <Button variant="contained">20h00</Button>
      </div>
    </div>
  );
}
export default Friday;
