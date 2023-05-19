import "./App.css";
import {useState} from "react";

import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";


import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";

function App() {
  /* const [favNumber, setFavNumber] = useState([]); */
  const [favoritesList, setFavoritesList] = useState([]);

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Rajdhani', "sans-serif",
      ].join(','),
      fontSize: 18,
      descriptions: {
        fontSize: "1.1rem",
        color: "gray",
      }, 
      h4 : {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 700,
      },

    },});

  return (
    <ThemeProvider theme={theme}>
      <div className="App"  >
        <NavBar /* favNumber={favNumber} */  favoritesList={favoritesList} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipe" element={<Recipe s/* etFavNumber={setFavNumber} */ setFavoritesList={setFavoritesList} favoritesList={favoritesList} />}></Route>
          <Route path="/favorite" element={<Favorite favoritesList={favoritesList} />}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
