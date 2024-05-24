import React from "react";
import Ingredientitems from "./Ingredientitems";

const Ingredients = ({ food, load }) => {
  return (
    <div>
      {load
        ? "Loading..."
        : food.extendedIngredients.map((item) => (
            <Ingredientitems item={item} />
          ))}
    </div>
  );
};

export default Ingredients;
