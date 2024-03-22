import CoreValuesItems from "./coreValuesItems";
import "./index-style.css";
export default function CoreValues() {
  return (
    <section className="about-us-container">
      <h3 id="about-us-title">CORE VALUES</h3>
      <div className="about-us-individual-container">
      <CoreValuesItems
        title="Quality"
        article="A commitment to providing the finest craftsmanship and materials, 
              ensuring each piece meets the highest standards of excellence."
      />
      <CoreValuesItems
        title="Integrity"
        article="Upholding honesty and transparency in all aspects of business, 
        from sourcing materials to pricing, to build trust and credibility with customers."
      />
      <CoreValuesItems
        title="Service"
        article="Dedicated to exceeding customer expectations by offering personalized service, 
        knowledgeable guidance, and creating memorable experiences that celebrate life's 
        special moments through exquisite jewelry."
      />
      </div>
    </section>
  );
}
