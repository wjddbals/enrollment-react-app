import React from "react";
import IngredientsList from "./IngredientsList";
import Ingredient from "./Ingredient";
import Instructions from "./Instructions";

const Recipe = ({ name, ingredients, steps }) => {
    let fname = name.toLocaleLowerCase().replace(/ /g,'-')
    return (
        <React.StrictMode>
            <section id={fname}>
            <h1>{name}</h1>
            <div><img src={`./images/${fname}.png`} /></div>
            <IngredientsList list={ingredients} />
            <Instructions title="요리 방법" steps={steps} />
        </section>
        </React.StrictMode>
    );
}

export default Recipe;
