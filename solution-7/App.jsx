import React from "react";
import CategoryFilter from "./components/CategoryFilter";
import PriceFilter from "./components/PriceFilter";
import DishList from "./components/DishList";

function App() {
  const [catFilter, setCatFilter] = React.useState("all");
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
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <DishList catFilter={catFilter} priceFilter={priceFilter} />
      </section>
    </main>
  );
}

export default App;
