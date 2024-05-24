import React from "react";
import Fooditem from "./Fooditem";

const Foodlist = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <Fooditem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
};

export default Foodlist;
