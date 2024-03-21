import './categories.css'
export default function Categories() {

return(

    <section className="categories-container">
        <h2 className="categories-title">Categories <br /></h2>
        <section className="categories">
          <div className="sampleitems">
            <img src="img/earrings.jpg" alt="Earrings" id="img_earrings" />
            <figcaption for="img_earrings" id="lbl_earrings">
              earrings
            </figcaption>
          </div>
          <div className="sampleitems">
            <img src="img/necklace.jpg" alt="Necklace" id="img_necklace" />
            <figcaption for="img_necklace" id="lbl_necklace">
              necklace
            </figcaption>
          </div>
          <div className="sampleitems">
            <img src="img/bracelet.jpg" alt="bracelet" id="img_bracelet" />
            <figcaption for="img_bracelet" id="lbl_bracelet">
              bracelet
            </figcaption>
          </div>
          <div className="sampleitems">
            <img src="img/rings.jpg" alt="Ring" id="img_ring" />
            <figcaption for="img_ring" id="lbl_ring">ring</figcaption>
          </div>
        </section>
      </section>

)

}