import React, { useState, useEffect } from 'react';
import './App.css';
import loadash from 'lodash';
import SearchBar from './SearchBar';
function App() {

  const [data, setData] = useState([]);
  const [recipeName, setRecipeName] = useState('coffee');
  const url = `https://www.edamam.com/api/recipes/v2?type=public&q=${recipeName}&field=uri&field=label&field=image&field=calories&field=yield&field=source&field=ingredientLines&_=1708708773575"`;

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        setData(data.hits);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const debouncedFetchData = loadash.debounce(fetchData, 500);


  useEffect(() => {
    debouncedFetchData();
  }, [recipeName])

  return (
    <div className="App">
      <SearchBar setRecipeName={setRecipeName} />
      {!data && <p>Loding....</p>}
      <div className='food-container flex'>
        {data.map((item, index) => {
          return (
            <div className='food'>
              <img src={item.recipe.image} alt="recipe-name" />
              <div className='recipe-details'>
                <p>{item.recipe.label}</p>
                <hr />
                <div className='flex'>
                  <small style={{ color: "green" }}>{Math.floor(item.recipe.calories)} Calories</small>
                  <small style={{ color: "yellowgreen" }}>{item.recipe.ingredientLines.length} Ingredients</small>
                </div>
                <hr />
                <small>{item.recipe.source} Ingredients</small>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
