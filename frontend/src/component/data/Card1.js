import React from "react";
import card1Data from "./card1Data";
function Card1() {
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "",
        padding: "2%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {card1Data.map((d) => (
        <div
          style={{
            width: "260px",
            height: "60%",
            boxShadow: "0px 0px 8px -1px rgba(0,0,0,0.82)",
            display: "grid",
            gridTemplateRows: "40% 1fr",
            borderRadius:"10px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              fontSize: "22px",
            }}
          >
            {d.tittle}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            {d.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card1;
