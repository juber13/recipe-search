import React, { createContext, useContext, useState, useEffect } from "react";
import loadash from "lodash";
import { nanoid } from "nanoid";

const myContext = createContext({});

export const MyContext = ({ children }) => {
  //   console.log(nanoid);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeName, setRecipeName] = useState("salad");
  const [favourite, setFavourite] = useState([]);

  const fetchData = async () => {
    const url = `https://www.edamam.com/api/recipes/v2?type=public&q=${recipeName}&field=uri&field=label&field=image&field=calories&field=yield&field=source&field=ingredientLines&_=1708708773575"`;
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        const newData = data.hits.map(hit => {
          const id = nanoid();
          return { ...hit, id };
        });
        setData(newData);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  const debouncedFetchData = loadash.debounce(fetchData, 500);

  const addFavourite = item => {
    const isPersent = favourite.some(recipe => recipe.id === item.id);
    if (!isPersent) setFavourite([...favourite, item]);
  };

  const removeFavourite = id => {
    const newList = favourite.filter(fav => fav.id !== id);
    console.log(newList);
    setFavourite(newList);
  };

  useEffect(() => {
    debouncedFetchData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeName]);

  return (
    <myContext.Provider
      value={{
        data,
        setRecipeName,
        recipeName,
        loading,
        setLoading,
        setFavourite,
        favourite,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export const GetMyCtx = () => {
  const ctx = useContext(myContext);
  return ctx;
};

export default MyContext;
