import React from "react";

import Form from "../components/Form";

export default function Recipe({ setFavoritesList, favoritesList }) {
  return (
    <div>
      <Form setFavoritesList={setFavoritesList} favoritesList={favoritesList} />
    </div>
  );
}
