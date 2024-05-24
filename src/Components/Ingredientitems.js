import React from "react";
import styles from "./ingredientitem.module.css";
const Ingredientitems = ({ item }) => {
  return (
    <div>
      <div className={styles.itemcontain}>
        <div className={styles.imgcontain}>
          <img
            className={styles.images}
            src={
              "https://spoonacular.com/cdn/ingredients_100x100/" + item.image
            }
            alt="image"
          />
        </div>
        <div className={styles.namecontain}>
          <div className={styles.contain}>{item.name}</div>

          <div className={styles.amountcontain}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredientitems;
