import React from "react";
import PriceFilter from "./components/PriceFilter";
import DishList from "./components/DishList";

function App() {
  const [priceFilter, setPriceFilter] = React.useState([0.5, 9]);
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <form>
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <DishList priceFilter={priceFilter} />
      </section>
    </main>
  );
}

export default App;
