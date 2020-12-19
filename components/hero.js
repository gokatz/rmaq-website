import Button from "./button";
import HeroIllustration from "./hero-illustration";

const Hero = () => {
  return (
    <div className="lg:flex justify-between container px-4 md:px-6 pb-10 lg:pt-10 text-center lg:text-right mx-auto items-center mt-10 relative overflow-hidden">
      
      <div className="hidden lg:block w-2/5">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" />
      </div>
      
      <div className="lg:w-3/5 lg:pl-6" style={{ zIndex: '2' }}>
        <h2 className="font-bold text-2xl lg:text-3xl font-hero">Welcome to Rmaq Trading Co.</h2>
        
        <h5 className="text-xl lg:text-xl mt-10 md:pl-2 lg:pl-16">
          Rafia Mohammed Al Qarni Trading Est. is the go-to place for all your safety and operational equipment. 
          
          <p className="mt-6">
            We provide personal protective equipments, fire and safety equipments, industrial safety equipments 
            and more from wide range of high standard products.
          </p>

          {/* <p className="mt-3">
            Safety is our <b>passion and profession!</b>
          </p> */}
        </h5>
        
        <div className="py-8 lg:pt-0 lg:mt-16 lg:text-lg">
          <a href="/#contact-us">
            <Button> Contact Us </Button>
          </a>
        </div>
      </div>

      <HeroIllustration />

      <div className="lg:hidden text-center mt-4">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" className="inline-block mobile-illus-image" />
      </div>
    </div>
  )
};

  export default Hero;