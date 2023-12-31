import React from "react";

import Typography from "@mui/material/Typography";

import Recipe from "./Recipe";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <div id="Home">
        <div className="intro">
          <Typography variant="h4">HEALTHY DELICIOUS RECIPES</Typography>
        </div>
        <div className="food-hightlight">
          <Typography variant="h5">Popular Food</Typography>
          <Typography variant="descriptions">
            we provide a variety of food and beverage recipes with delicous
            taste from famous chefs
          </Typography>
          <div className="image-hightlight">
            <img src="./assets/chicken.avif" alt="chicken" />
            <img src="./assets/pizza.webp" alt="pizza" />
            <img src="./assets/salad.avif" alt="salad" />
            <img src="./assets/shrimp.avif" alt="shrimp" />
            <img src="./assets/cake.avif" alt="cake" />
          </div>
        </div>
      </div>
      <Recipe/>
      <Contact/>
    </div>
  );
}
