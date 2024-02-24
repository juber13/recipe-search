import React from "react";
import Skeleton from "../components/Skeleton";
import { CiHeart } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";

import { GetMyCtx } from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
    const state = GetMyCtx();
    const navigate = useNavigate();

    // add favourite recipes


    return (
        <>
            {state.loading && <Skeleton />}
            {state.data.length <= 0 && <h2>No Recipe Found! 🥣</h2>}
            <div className='food-container flex space'>
                {state.data.map((item, index) => {
                    return (
                        <div className='food' key={item.id}>
                            <img src={item.recipe.image} alt='recipe-name' onClick={() => navigate(`/recipe/${item.id}`)} />
                            <div className='recipe-details'>
                                <small style={{ color: "gray" }}>
                                    {item.recipe.label.slice(0, 8) + "..."}
                                </small>
                                <hr />
                                <div className='flex space'>
                                    <small style={{ color: "green" }}>
                                        {Math.floor(item.recipe.calories)} Calories
                                    </small>
                                    <small style={{ color: "yellowgreen" }}>
                                        {item.recipe.ingredientLines.length} Ingredients
                                    </small>
                                </div>
                                <hr />
                                <div className='flex space'>
                                    <small style={{ color: "gray" }}>{item.recipe.source}</small>
                                    {state.favourite.some(
                                        pro => pro.id === item.id
                                    ) ? (
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
                })}
            </div>
        </>
    );
};

export default Recipes;
