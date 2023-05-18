import React, { useEffect, useState } from "react";

import CircularProgress from '@mui/material/CircularProgress';

export default function Recipe() {
  const [recipes, setRecipes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  async function getRecipes(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  }, []);

  /* console.log(recipes); */
  const meals = recipes.meals;
  console.log(meals);
  if (isLoading) {
    return <CircularProgress color="success" />
  } else {
    return (
      <div>
        {meals?.map((meal) => {
          console.log(meal);
          return <div>{meal.strMeal}</div>;
        })}
      </div>
    );
  }
}
