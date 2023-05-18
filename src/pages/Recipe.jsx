import React from "react";

import Form from "../components/Form"

export default function Recipe({setFavNumber, setFavoritesList, favoritesList}) {
  return (
    <div>
      <Form setFavNumber={setFavNumber} setFavoritesList={setFavoritesList} favoritesList={favoritesList} />
    </div>
  );
}
