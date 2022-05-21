import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { React } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Data from "../component/data/Data";
import SidebarList from "./data/SidebarList";
import { FcRating } from "react-icons/fc";
import Nevbar from "./data/Nevbar";
import "../component/data/img.jpg";
const Ticket = () => {
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
          padding: "3%",
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
      <div>
        <div style={{ backgroundColor: "white", height: "100vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Nevbar tittle={"Ticket"} />
            <Box
              justifyContent={"center"}
              marginLeft="10%"
              width={"80%"}
              borderRadius={2}
              boxShadow={1}
              border={"0.1px solid #DFE0EB"}
            >
              <Typography m={1}>Ticket</Typography>

              <TableContainer component={Paper}>
                <Table size="large" aria-label="dance table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">Ticket details</TableCell>
                      <TableCell align="right">Customer name</TableCell>
                      <TableCell align="right">Date</TableCell>
                      <TableCell align="right">Priroty</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Data.map((ticket) => (
                      <TableRow key={ticket.name}>
                        <TableCell align="right">{ticket.image}</TableCell>
                        <TableCell align="right">{ticket.msg} </TableCell>
                        <TableCell align="right">{ticket.name}</TableCell>
                        <TableCell align="right">{ticket.date}</TableCell>
                        <TableCell align="right">
                          <Button variant={"contained"}>
                            {ticket.prority}
                          </Button>
                        </TableCell>
                        <TableCell align="right">{ticket.icon}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
