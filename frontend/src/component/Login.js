import React from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { height, padding } from "@mui/system";

const Login = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "darkblue",
            height: "500px",
            width: "300px",
            marginTop: "10%",
            padding: "40px",
          }}
        >
        <img  height={55} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoL_ZAcM8lVF9c48UFUMa4N6DiPkqD58h0opJSjIEZPWHnrJktQ4EHgr7Im9c_p9NL9E&usqp=CAU" />
          <Typography variant="h5" sx={{ fontSize:'19px',fontWeight:'700', color:'#A4A6B3'}}>Dashboard</Typography>
          <Typography marginTop={4} fontSize={25}>Log In to Dashboard Kit</Typography>
          <Typography marginTop={0}>Enter your email and password below</Typography>

          <Typography sx={{ marginTop:'50px', color:'#9FA2B4'}}>EMAIL</Typography>
          <TextField placeholder="Email address" sx={{ width: "100%" }}
           inputProps={{ style: { height:'10px', borderRadius:'10px'}}} 
           />
          <Typography> PASSWORD</Typography>
          <TextField placeholder="Password" sx={{ width: "100%" }}
          inputProps={{ style: { height:'10px', borderRadius:'10px'}}} 
/>
          <Button fullWidth variant="contained" sx={{ margin: "20px" }}>
            Login
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
