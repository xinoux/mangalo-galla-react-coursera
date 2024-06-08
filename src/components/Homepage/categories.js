import React from 'react';
import CategoryItem from "./categoryItem";
// import "./index-style.css";

const categories = [
  { type: "Earrings", image: "img/earrings.jpg" },
  { type: "Necklace", image: "img/necklace.jpg" },
  { type: "Bracelet", image: "img/bracelet.jpg" },
  { type: "Ring", image: "img/rings.jpg" },
];

export default function Categories() {
  return (
    <section className="categories-container">
      <h2 className="categories-title">Categories</h2>
      <section className="categories">
        {categories.map((category) => (
          <CategoryItem
            key={category.type}
            type={category.type}
            image={category.image}
          />
        ))}
      </section>
    </section>
  );
}
