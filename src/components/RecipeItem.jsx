import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { pink } from "@mui/material/colors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeItem({
  meal,
  /* favoritesHandler, */
  setFavoritesList,
  favoritesList,
}) {
  const [expanded, setExpanded] = useState(false);
  /* const [liked, setLiked] = useState(false); */

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mealId = meal.idMeal;
  function favListHandler() {
    setFavoritesList([...favoritesList, meal]);
    favoritesList.map((favItem) => {
      if (favItem.idMeal === mealId) {
         return setFavoritesList(favoritesList.filter((favItem) => favItem.idMeal !== mealId));
         /* return setLiked(false); */
        }
      else  {return null};
    })
  }

  console.log(favoritesList, "inRecipeItem");
  /* console.log(favoritesList.slice(0,favoritesList.length-1), "slice"); */
  
  /* function likedHandler() {
    if (liked === false) {
      setLiked(true);
    } else {
      setFavoritesList(favoritesList.filter(favItem => favItem.idMeal !== mealId))
    }
  } */

  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
  } = meal;

  const {
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = meal;

  const ingredients = [
    { ingredient: strIngredient1, measure: strMeasure1 },
    { ingredient: strIngredient2, measure: strMeasure2 },
    { ingredient: strIngredient3, measure: strMeasure3 },
    { ingredient: strIngredient4, measure: strMeasure4 },
    { ingredient: strIngredient5, measure: strMeasure5 },
    { ingredient: strIngredient6, measure: strMeasure6 },
    { ingredient: strIngredient7, measure: strMeasure7 },
    { ingredient: strIngredient8, measure: strMeasure8 },
    { ingredient: strIngredient9, measure: strMeasure9 },
    { ingredient: strIngredient10, measure: strMeasure10 },
    { ingredient: strIngredient11, measure: strMeasure11 },
    { ingredient: strIngredient12, measure: strMeasure12 },
    { ingredient: strIngredient13, measure: strMeasure13 },
    { ingredient: strIngredient14, measure: strMeasure14 },
    { ingredient: strIngredient15, measure: strMeasure15 },
    { ingredient: strIngredient16, measure: strMeasure16 },
    { ingredient: strIngredient17, measure: strMeasure17 },
    { ingredient: strIngredient18, measure: strMeasure18 },
    { ingredient: strIngredient19, measure: strMeasure19 },
    { ingredient: strIngredient20, measure: strMeasure20 },
  ];

  /* console.log(favoritesList); */
  return (
    <div className="recipe-item">
      <Card sx={{ width: 450 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {meal.strMeal[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={meal.strMeal}
          subheader={meal.strCategory}
        />
        <CardMedia
          component="img"
          height="194"
          image={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="h6">ingredients:</Typography>
            <ol>
              {ingredients.map((item, index) => {
                if (item.ingredient !== "" && index < 3) {
                  return (
                    <li>
                      {item.ingredient}: {item.measure}
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ol>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => {
              /* favoritesHandler(); */
              favListHandler();
              /* likedHandler(); */
            }}
            aria-label="add to favorites"
            /* sx={favoritesList.includes(meal) ? { color: pink[500] } : { color: pink[50] }} */
            sx={favoritesList?.map(item => {
              if (mealId === item.idMeal) {return { color: pink[500] }}
              else { return null};
            } )}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              <Typography variant="h6" color="firebrick">
                All Ingredients:
              </Typography>
              <ol>
                {ingredients.map((item) => {
                  if (item.ingredient !== "") {
                    return (
                      <li>
                        {item.ingredient}: {item.measure}
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ol>
            </Typography>
            <Typography paragraph>{meal.strInstructions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
