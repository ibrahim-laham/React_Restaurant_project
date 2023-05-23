import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import RecipeItem from "./RecipeItem";

export default function Form({ setFavoritesList, favoritesList }) {
  const [recipes, setRecipes] = useState({});
  const [userInput, setUserInput] = useState("");
  async function getRecipes(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    );
  }, [userInput]);

  let meals = recipes.meals;

  function userInputHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label className="input-container">
            <Typography variant="descriptions">
              please enter the name
            </Typography>
            <TextField
              id="filled-search"
              label="Search Recipe"
              type="search"
              variant="filled"
              onChange={userInputHandler}
              size="small"
              sx={{ margin: "0.5vh 0 0.5vh 0" }}
            />
            <Typography variant="descriptions">
              suggestions: pizza, pork, lamb, salad...
            </Typography>
          </label>
        </div>
        <div className="recipe-list">
          {meals ? (
            meals.map((meal) => {
              if (
                meal.strMeal.toLowerCase().includes(userInput.toLowerCase())
              ) {
                return (
                  <RecipeItem
                    meal={meal}
                    setFavoritesList={setFavoritesList}
                    favoritesList={favoritesList}
                    key={meal.idMeal}
                  />
                );
              } else {
                return null;
              }
            })
          ) : (
            <div>Sorry we have not got this recipe yet !</div>
          )}
        </div>
      </form>
    </div>
  );
}
