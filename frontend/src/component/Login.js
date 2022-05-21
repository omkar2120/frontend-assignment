import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { border, color, margin } from "@mui/system";
import { Link } from "react-router-dom";

const Login = () => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoL_ZAcM8lVF9c48UFUMa4N6DiPkqD58h0opJSjIEZPWHnrJktQ4EHgr7Im9c_p9NL9E&usqp=CAU";
  return (
    <div style={{ backgroundColor: "#363740" }}>
      <Container style={{ display: "flex", justifyContent: "space-around" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            height: "500px",
            width: "300px",
            marginTop: "10%",
            padding: "40px",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <img height={55} src={img}></img>
          <Typography
            variant="h5"
            mt={2}
            sx={{ fontSize: "19px", fontWeight: "700", color: "#252733" }}
          >
            Dashboard Kit
          </Typography>
          <Typography
            marginTop={4}
            fontSize={25}
            sx={{ fontWeight: "700", fontSize: "24px", color: "#252733" }}
          >
            Log In to Dashboard Kit
          </Typography>
          <Typography marginTop={0} color={"#9FA2B4"}>
            Enter your email and password below
          </Typography>

          <Typography
            fullWidth
            sx={{
              width: "100%",
              display: "flex",
              marginTop: "50px",
              color: "#9FA2B4",
              height: "18px",
              fontWeight: "700",
              margin: "10px",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            EMAIL
          </Typography>
          <TextField
            placeholder="Email address"
            sx={{ width: "100%" }}
            inputProps={{ style: { height: "10px", borderRadius: "15px" } }}
          />
          <Typography
            fullWidth
            sx={{
              width: "100%",
              display: "flex",
              marginTop: "50px",
              color: "#9FA2B4",
              height: "18px",
              fontWeight: "700",
              margin: "10px",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            PASSWORD
          </Typography>
          <TextField
            fullWidth
            placeholder="Password"
            inputProps={{ style: { height: "10px", borderRadius: "15px" } }}
          />

          <Link
            style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}
            to="/overview"
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#3751FF",
                color: "#FFFFFF",
                border: "5px",
              }}
            >
              Login
            </Button>
          </Link>

          <Typography display={"flex"} mt={2}>
            Dont have an account ?{" "}
            <Typography color={"#3751FF"}>Sign up</Typography>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
