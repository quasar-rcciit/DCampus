import React from "react";
import Cardf from "./Cardf";
import "./studentf.css";

// Variables
const numberOfCards = 7;
const dishName = "Poti Torkari";
const dishDescription =
  "This is a dish made gorom gorom with your own poti, best served with cum toppings.";
const dishPrice = 69;

export default function studentf() {
  return (
    <div className="food_dishes">
      {[...Array(numberOfCards)].map((e, i) => {
        return (
          <Cardf
            title={`Dish ${i + 1}`}
            dish_name={dishName}
            dish_description={dishDescription}
            dish_price={dishPrice}
          ></Cardf>
        );
      })}
    </div>
  );
}
