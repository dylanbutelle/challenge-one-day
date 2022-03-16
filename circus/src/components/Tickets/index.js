import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function Tickets() {
  const [date, setDate] = React.useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className="ticketPage">
      <h1>Réservez votre ticket</h1>
      <div className="formTicket">
        <div className="nameAndFirstname">
          <TextField required id="outlined-required" label="Prénom" />
          <TextField required id="outlined-required" label="Nom" />
        </div>
        <div className="mailAndPhone">
          <TextField required id="outlined-required" label="E-mail" />
          <TextField id="outlined" label="Téléphone" />
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={date}
              label="Date"
              onChange={handleChange}
            >
              <MenuItem value={18}>Vendredi 18 Mars</MenuItem>
              <MenuItem value={19}>Samedi 19 Mars</MenuItem>
              <MenuItem value={20}>Dimanche 20 Mars</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          onClick={() => alert("Votre place a été réservée.")}
        >
          Réserver
        </Button>
      </div>
    </div>
  );
}
export default Tickets;
