import "./slider.css";
export default function Slider() {
  return (
    <section className="slider">
      <div className="slider-wrapper">
        <figure>
          <img src="./img/slider-earrings.jpg" id="#slide-1" />
          <img src="./img/slider-necklace.jpg" id="slide-2" />
          <img src="./img/slider-ring.jpg" id="slide-3" />
          <img src="./img/slider-earrings.jpg" id="#slide-4" />
        </figure>
        <></>
      </div>

      <div className="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </section>
  );
}
