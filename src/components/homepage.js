import React from "react";
import Slider from "./Homepage/slider";
import Categories from "./Homepage/categories";
import CoreValues from "./Homepage/coreValues";


export default function Homepage() {
  return (
    <div>
      <Slider />
      <Categories />
      <CoreValues />
    </div>
  );
}
