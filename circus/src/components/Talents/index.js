import React from "react";
import "./style.css";
import talents from "../../assets/data/talents";
import { Card } from "react-bootstrap";
function Talents() {
  return (
    <div className="talentsPage">
      <div className="allTalents">
        {talents.map((talent) => (
          <div className="talent">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={talent.image} />
              <Card.Body>
                <Card.Title>{talent.name}</Card.Title>
                <Card.Text>{talent.bio}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Talents;
