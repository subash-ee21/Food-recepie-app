import React, { useEffect, useState } from "react";
import styles from "./recipe.module.css";
import Ingredients from "./Ingredients";

const Recipe = ({ foodId }) => {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "4cae47b0b9ea4478a26cbd39ebd36846";
  const [food, setFood] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function fetchrec() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoad(false);
    }
    fetchrec();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.names}>{food.title}</h1>
        <img className={styles.images} src={food.image} alt="jpg" />
        <div className={styles.recipedet}>
          <span>
            <strong>time:{food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>family:{food.servings} serves</strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "vegetarian" : "Non-vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>{food.pricePerServing / 100} Per Serving </strong>
          </span>
        </div>

        <h2>Ingredients</h2>
        <Ingredients food={food} load={load} />
        <h2>Instructions:</h2>
        <div className={styles.instruct}>
          <ol>
            {load ? (
              <p>is Loading..</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
