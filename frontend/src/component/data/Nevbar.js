import { Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

function Nevbar({ tittle }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "",
        display: "flex",
      }}
    >
      <Typography style={{ marginLeft: "2%", margin: "1%", fontSize: "30px" }}>
        {tittle}
      </Typography>
      <div
        style={{
          flex: "50%",
          backgroundColor: "",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <SearchIcon
          style={{
            color: "#C5C7CD",
            height: "40px",
            width: "35px",
          }}
        />
        <NotificationsIcon
          style={{
            color: "#C5C7CD",
            height: "40px",
            width: "35px",
          }}
        />
      </div>
      <div
        style={{
          flex: "10%",
          backgroundColor: "",
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
          padding: "2%",
        }}
      >
        <img
          src="https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            marginLeft: "5%",
          }}
        />
        <Typography variant="h5">Jenifer Ferdinand</Typography>
      </div>
    </div>
  );
}

export default Nevbar;
