import Button from "./button";
import HeroIllustration from "./hero-illustration";

const Hero = () => {
  return (
    <div className="md:flex justify-between container px-4 md:px-6 text-center md:text-right mx-auto items-center mt-10 relative overflow-hidden">
      
      <div className="hidden md:block w-2/5 self-end">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" />
      </div>
      
      <div className="md:w-3/5 md:pl-6" style={{ zIndex: '2' }}>
        <h2 className="font-bold text-2xl lg:text-3xl">Welcome to Rmaq Trading Co.</h2>
        
        <h5 className="text-xl lg:text-xl mt-5 md:pl-2 lg:pl-16">
          Rafia Mohammed Al Qarni Trading Est. is the go-to place for all your safety and operational equipment. 
          
          <p className="mt-3">
            We provide personal protective equipments, fire and safety equipments, industrial safety equipments 
            and more from wide range of high standard products.
          </p>

          {/* <p className="mt-3">
            Safety is our <b>passion and profession!</b>
          </p> */}
        </h5>
        
        <div className="py-8 md:pt-0 md:mt-16 lg:text-lg">
          <a href="/#contact-us">
            <Button> Contact Us </Button>
          </a>
        </div>
      </div>

      <HeroIllustration />

      <div className="md:hidden text-center mt-4">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" className="inline-block w-11/12" />
      </div>
    </div>
  )
};

  export default Hero;