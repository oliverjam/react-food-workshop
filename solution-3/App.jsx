import React from "react";
import dishes from "../data";

function App() {
  const [priceFilter, setPriceFilter] = React.useState([0.5, 9]);
  console.log(priceFilter);
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <fieldset>
            <legend>Price</legend>
            <label htmlFor="min-price">
              Min price
              <input
                type="range"
                id="min-price"
                min="0.5"
                max="9"
                step="0.25"
                value={priceFilter[0]}
                onChange={e => setPriceFilter([e.target.value, priceFilter[1]])}
              />
            </label>
            <label htmlFor="max-price">
              Max price
              <input
                type="range"
                id="max-price"
                min="0.5"
                max="9"
                step="0.25"
                value={priceFilter[1]}
                onChange={e => setPriceFilter([priceFilter[0], e.target.value])}
              />
            </label>
          </fieldset>
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <ul className="grid">
          {dishes.length ? (
            dishes.map(dish => (
              <li key={dish.id} className="card">
                <h3>{dish.name}</h3>
                {dish.description && <p>{dish.description}</p>}
                <div>£{dish.price.toFixed(2)}</div>
              </li>
            ))
          ) : (
            <li className="card">No results found</li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
