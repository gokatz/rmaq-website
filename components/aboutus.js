import SectionHeader from "./section-header";

const AboutUs = () => {
  return (
    <>
      <SectionHeader title="About Us" />
      
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-around">

        <div className="w-1/3 md:w-1/5 flex items-center justify-center mb-8 md:mb-0">
          <img src="./assets/images/logo.png" />
        </div>

        <div className="w-4/5 md:w-3/5">
          <div className="font-semibold mb-5"> Safety is our first concern! </div>
          <div className="mb-5">
            We, Rafia Mohammed Al Qarni Trading Company, is an UAE based leading global safety and operational gear dealers. We thrive to deliver the most safe and secure equipement to all our clients.
            </div>
          <div>
            We always prove to be worthy of the trust our customers have on us. We assure that for yours too!
            </div>
        </div>
      </div>
    </>
  )
};

export default AboutUs;