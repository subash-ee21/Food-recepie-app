import React from "react";
import styles from "./fooditem.module.css";
const Fooditem = ({ food, setFoodId }) => {
  return (
    <div className={styles.foodcontainer}>
      <img className={styles.imgcontainer} src={food.image} alt="image" />
      <div className={styles.foodname}>
        <p className={styles.foods}>{food.title}</p>
      </div>
      <div className={styles.container}>
        {" "}
        <button onClick={() => setFoodId(food.id)} className={styles.buttons}>
          view recipe
        </button>
      </div>
    </div>
  );
};

export default Fooditem;
