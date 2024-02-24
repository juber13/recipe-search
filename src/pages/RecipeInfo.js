import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetMyCtx } from "../context/MyContext";

import { CiHeart } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";

import "./recipe.css";
const RecipeInfo = () => {
    const { id } = useParams();
    const state = GetMyCtx();
    
    const item = state.data.find(recipe => recipe.id === id);
    console.log(item);
    return (
        <div className='recipe-detail flex'>
            <div className='left'>
                <img src={item.recipe.image} alt='recipe-name' />
            </div>

            <div className='right'>
                <h1>{item.recipe.label}</h1>
                <h2>IngredientLines</h2>
                <ul>
                    {item.recipe.ingredientLines.map(ingre => (
                        <li>{ingre}</li>
                    ))}
                </ul>
                <h4>Calories {Math.floor(item.recipe.calories)}</h4>
                <div className='flex'>
                    <small style={{ color: "gray" }}>{item.recipe.source}</small>
                    {state.favourite.some(pro => pro.id === item.id) ? (
                        <GoHeartFill
                            style={{ fill: "red" }}
                            className='icon'
                            onClick={() => state.removeFavourite(item.id)}
                        />
                    ) : (
                        <CiHeart
                            onClick={() => state.addFavourite(item)}
                            className='icon'
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeInfo;
