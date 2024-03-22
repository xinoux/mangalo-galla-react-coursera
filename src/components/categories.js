import CategoryItem from "./categoryItem";
import "./index-style.css";
export default function Categories() {
  return (
    <section className="categories-container">
      <h2 className="categories-title">
        Categories 
      </h2>
      <section className="categories">
        <CategoryItem type="Earrings" image="img/earrings.jpg"/>
        <CategoryItem type="Necklace" image ="img/necklace.jpg"/>
        <CategoryItem type="Bracelet" image="img/bracelet.jpg"/>
        <CategoryItem type="Ring" image="img/rings.jpg"/>
      </section>
    </section>
  );
}
