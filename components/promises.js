import FeatureItem from "./feature-item";
import SectionHeader from "./section-header";

const Promises = () => {
  return (
    <section className="container mx-auto" id="about-us">
      <h3 className="text-center text-2xl uppercase font-semibold my-10 font-hero"> Our Promises </h3>

      <div className="flex justify-between flex-wrap md:flex-no-wrap">
        <FeatureItem
          iconUrl="./assets/icons/fire-safety.svg"
          title="Fire and Safety"
          description="Its our at most priority to supply high standard Fire and Safety equipments to the clients at a competitive price."
        />
        <FeatureItem
          iconUrl="./assets/icons/safety.svg"
          title="Industrial Safety"
          description="Safety is the first priority when someone works in the industry. It is our goal to ensure the safety by providing high standard industrial safety equipments."
        />
        <FeatureItem
          iconUrl="./assets/icons/handshake.svg"
          title="Best Commitment"
          description="Its our responsibility to exceed each customer’s individual requirements and expectations with our experience and knowledge."
        />
        {/* We will be available to the customer’s anytime and anywhere since safety is a matter of life. */}
      </div>
    </section>
  )
};

export default Promises;