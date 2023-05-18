import React from "react";

import Typography from "@mui/material/Typography";

export default function FavoriteItem({ item }) {
  return (
    <div className="favorite-item">
      <div className="favorite-item-name">
        <div>
          <Typography variant="h6" color="wheat">{item.strMeal}</Typography>
        </div>
        <div>
          <Typography variant="body1" color="wheat">Category: {item.strCategory}</Typography>
        </div>
      </div>
      <div className="favorite-img-container">
        <img src={item.strMealThumb} />
      </div>
    </div>
  );
}
