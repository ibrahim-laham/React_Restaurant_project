import React from "react";

import FavoriteItem from "../components/FavoriteItem";
import Typography from "@mui/material/Typography";

export default function Favorite({ favoritesList }) {
  return (
    <div className="favorite">
      <Typography color="firebrick" variant="h3" sx={{ fontWeight: 600 }}>
        Favorite List:
      </Typography>
      {favoritesList.map((item) => (
        <FavoriteItem favoritesList={favoritesList} item={item} />
      ))}
    </div>
  );
}
