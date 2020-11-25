import Button from "./button";
import HeroIllustration from "./hero-illustration";

const Hero = () => {
  return (
    <div className="md:flex justify-between container px-4 md:px-6 text-center md:text-right mx-auto items-center mt-10 relative">
      
      <div className="hidden md:block w-2/5 self-end">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" />
      </div>
      
      <div className="md:w-3/5 md:pl-6" style={{ zIndex: '2' }}>
        <h2 className="font-bold text-2xl lg:text-3xl">Welcome to Rmaq Trading Co.</h2>
        
        <h5 className="text-xl lg:text-2xl mt-5 md:pl-2 lg:pl-16">
          Rafia Mohammed Al Qarni Trading Est. is
          the go-to place for all your safety and
          operational equipment
        </h5>
        
        <div className="py-8 md:pt-0 md:mt-16 lg:text-lg">
          <a href="/#contact-us">
            <Button> Contact Us </Button>
          </a>
        </div>
      </div>

      {/* <HeroIllustration /> */}
    </div>
  )
};

  export default Hero;