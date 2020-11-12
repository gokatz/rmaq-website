import Nav from "./nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between py-6 items-center">
        <div className="flex items-center text-lg">
          <img src="./assets/images/logo-bg.png" className="h-20 mr-6" />
          Rafia Mohammed Al Qarni <br />Trading Est.
        </div>
        <Nav />
      </div>
    </header>
  )
};

export default Header;