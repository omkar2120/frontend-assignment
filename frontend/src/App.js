import Login from "./component/Login";
import Ticket from "./component/Ticket";
import Overview from "./component/Overview";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand,sans-serif",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/tickets" element={<Ticket />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
