
import React from "react";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientsList";
import Instructions from "./Instructions";
const Recipe = ({ name, ingredients, steps }) => {
    let fname = name.toLowerCase().replace(/ /g,'-');
}
    return (
        <React.StrictMode>
            <section id={fname}>
            <h1>{name}</h1>
            <div><img src={`./images/${fname}.png`} /></div>
         <IngredientList list={ingredients} />
            <Instructions title="요리방법" steps={steps} />
        </section>
        </React.StrictMode>
    );
}
export default Recipe;
