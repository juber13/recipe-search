import React from "react";
import Skeleton from "./Skeleton";

import { GetMyCtx } from "../context/MyContext";
const Favourite = () => {
    const state = GetMyCtx();
    return (
        <>
            {state.loading && <Skeleton />}
            {state.favourite.length <= 0 && <h2>No Recipe Added! 🥣</h2>}
            <div className='food-container flex'>
                {state?.favourite?.map((item, index) => {
                    return (
                        <div className='food' key={index}>
                            <img src={item.recipe.image} alt='recipe-name' />
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
                                    <small
                                        style={{ cursor: "pointer" }}
                                        onClick={() => state.removeFavourite(item.id)}
                                    >
                                        Remove
                                    </small>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Favourite;
