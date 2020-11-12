import React, { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

import items from "./data/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="antialiased my-10 mx-10">
      <h1 className="text-3xl font-bold text-center">Our Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
