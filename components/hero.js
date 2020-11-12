import Button from "./button";

const Hero = () => {
  return (
    <div className="flex justify-between container text-right mx-auto items-center mt-10">
      <div className="w-2/5">
        <img src="./assets/images/hero-illustration.png" alt="Hero Illustration" />
      </div>
      <div className="w-3/5 pl-6">
        <h2 className="font-bold text-3xl">Welcome to Rmaq Trading Co.</h2>
        <h5 className="text-2xl mt-5 pl-16">
          Rafia Mohammed Al Qarni Trading Est. is
          the go-to place for all your safety and
          operational equipment
              </h5>
        <div className="mt-16">
          <Button> Contact Us </Button>
        </div>
      </div>
    </div>
  )
  };

  export default Hero;