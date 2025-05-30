import React from "react";
import { Row } from "react-bootstrap";

function LeetCode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Stats
      </h1>
      <img
        src="https://leetcard.jacoblin.cool/adityaagrahari10112002?theme=dark&ext=heatmap"
        alt="LeetCode Stats"
        style={{ width: "80%", maxWidth: "600px", borderRadius: "10px" }}
      />
    </Row>
  );
}

export default LeetCode;
