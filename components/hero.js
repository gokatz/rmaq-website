import Button from "./button";
import HeroIllustration from "./hero-illustration";

const Hero = () => {
  return (
    <div className="flex justify-between container text-right mx-auto items-center mt-10 relative">
      
      <div className="w-2/5">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" />
      </div>
      
      <div className="w-3/5 pl-6" style={{ zIndex: '2' }}>
        <h2 className="font-bold text-3xl">Welcome to Rmaq Trading Co.</h2>
        
        <h5 className="text-2xl mt-5 pl-16">
          Rafia Mohammed Al Qarni Trading Est. is
          the go-to place for all your safety and
          operational equipment
        </h5>
        
        <div className="mt-16 text-lg">
          <a href="/#contact-us">
            <Button> Contact Us </Button>
          </a>
        </div>
      </div>

      <HeroIllustration />
    </div>
  )
};

  export default Hero;