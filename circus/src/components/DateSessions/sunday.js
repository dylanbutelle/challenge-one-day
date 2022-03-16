import React from "react";
import "./style.css";
import { Button } from "@mui/material";
function Sunday() {
  return (
    <div className="date">
      <h1>Dimanche</h1>
      <div className="buttonsHour">
        <Button variant="contained">10h45</Button>
        <Button variant="contained">13h45</Button>
        <Button variant="contained">16h15</Button>
        <Button variant="contained">18h45</Button>
      </div>
    </div>
  );
}
export default Sunday;
