import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealWidget.css';

const MealWidget = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://themealdb.p.rapidapi.com/filter.php',
      params: {a: 'Canadian'},
      headers: {
        'X-RapidAPI-Key': 'e3da384278msh6d709c54eac7f30p1a9146jsnfb68e13d296c',
        'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
      }
    };

    axios.request(options)
      .then(response => {
        setMeals(response.data.meals);
      })
      .catch(error => {
        console.error('There was an error fetching the meal data:', error);
      });
  }, []);

  if (meals.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="meal-widget">
      <h1>Meal Details</h1>
      {meals.map(meal => (
        <div className="meal-item" key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
}

export default MealWidget;