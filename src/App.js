import "./App.css";

import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";


import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Rajdhani', "sans-serif",
      ].join(','),
      fontSize: 18,
      descriptions: {
        fontSize: "1.1rem",
        color: "gray",
      } 
    },});

  return (
    <ThemeProvider theme={theme}>
      <div className="App"  >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipe" element={<Recipe/>}></Route>
          <Route path="/favorite" element={<Favorite/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
