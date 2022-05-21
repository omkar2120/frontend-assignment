import React, { useState } from "react";
import { FcRating } from "react-icons/fc";
import SidebarList from "../component/data/SidebarList";
import Nevbar from "../component/data/Nevbar";
import Card1 from "../component/data/Card1";
import Card2 from "../component/data/Card2";
import Chart from "../component/data/Chart";
import {
  Typography,
  Box,
  TableCell,
  TableRow,
  Button,
  Checkbox,
  Input,
  TableBody,
} from "@mui/material";

function Overview() {
  const [inputList, setInputList] = useState("");
  const [list, setList] = useState([]);

  const setItem = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setList((oldItem) => {
      return [...oldItem, inputList];
    });
  };
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateColumns: "14% 1fr",
      }}
    >
      <div
        style={{
          backgroundColor: " hwb(0deg 12% 88% / 84%)",
          display: "grid",
          gridTemplateRows: "100px 1fr",
          padding: "2%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              backgroundColor: "",
              height: "45%",
              width: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FcRating size={"25px"} />
            <Typography color={"#A4A6B3"} fontSize={18} fontWeight={800}>
              Dashboard Kit
            </Typography>
          </div>
        </div>
        <div>
          <SidebarList />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "10% 23% 70% 1fr",
          backgroundColor: "whitesmoke",
        }}
      >
        <div>
          <Nevbar tittle="Overview" />
        </div>
        <div style={{ backgroundColor: "", padding: "1%" }}>
          <Card1 />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "75% 1fr",
            padding: "2%",
            backgroundColor: "whitesmoke",
          }}
        >
          <div style={{ backgroundColor: "" }}>
            <Chart />
          </div>
          <div style={{ backgroundColor: "" }}>
            <Card2 />
          </div>
          <div style={{ display: "flex", margin: "10px" }}>
            <div
              style={{
                height: "200px",
                margin: "10px",
                padding: "10px",
                width: "600px",
              }}
            >
              <Box display={"flex"}>
                <Typography fontSize={20}> Unresoved ticket</Typography>
                <Button varient="text" justifyContent="right">
                  View All
                </Button>
              </Box>
              <TableRow>
                <TableCell>Waiting on your future request</TableCell>
                <TableCell align="right">4328</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Waiting on your future request</TableCell>
                <TableCell align="right">4328</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Waiting on your future request</TableCell>
                <TableCell align="right">4328</TableCell>
              </TableRow>
            </div>
            <div
              style={{
                height: "300px",
                margin: "10px",
                padding: "10px",
                width: "600px",
              }}
            >
              <Typography fontSize={20}>Tasks</Typography>
              <Box>
                <Input
                  type="text"
                  placeholder="Create new task"
                  onChange={setItem}
                />
                <Button varient="text" onClick={listOfItems}>
                  +
                </Button>
              </Box>
              {list.map((d) => (
                <>
                  <TableBody>
                    <Checkbox />
                    <TableCell>{d}</TableCell>
                  </TableBody>
                </>
              ))}
            </div>
          </div>
          <div></div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Overview;
