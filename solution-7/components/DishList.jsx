import React from "react";
import dishes from "../../data";

function DishList({ catFilter, priceFilter }) {
  const [minPrice, maxPrice] = priceFilter;
  const dishItems = dishes
    .filter((dish) => catFilter === "all" || catFilter === dish.category)
    .filter((dish) => dish.price >= minPrice && dish.price <= maxPrice)
    .map((dish) => (
      <li key={dish.id} className="card">
        <h3>{dish.name}</h3>
        {dish.description && <p>{dish.description}</p>}
        <div>£{dish.price.toFixed(2)}</div>
      </li>
    ));
  return (
    <ul className="grid">
      {dishItems.length ? (
        dishItems
      ) : (
        <li className="card">No results found</li>
      )}
    </ul>
  );
}

export default DishList;
