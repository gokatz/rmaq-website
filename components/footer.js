const Footer = () => {
  return (
    <div className="bg-brand-blue">
      <footer className="container mx-auto py-8">
        <div className="flex justify-between">
          <div className="text-white flex flex-col justify-between">
            <div>
              <a href="/products"> View our product catalogue </a>
            </div>
            <div>
              Site Created and maintained by Panai Technologies
                <br />
                © 2020 | Rmaq Co.
              </div>
          </div>

          <img src="./assets/images/logo-full.png" style={{ width: '300px' }} className="p-2 bg-white rounded-lg" />
        </div>
      </footer>
    </div>
  )
};

export default Footer;