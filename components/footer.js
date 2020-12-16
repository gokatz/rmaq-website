const Footer = () => {
  return (
    <div className="bg-brand-blue">
      <footer className="container mx-auto py-8 px-8">
        <div className="flex justify-between flex-wrap">
          <div className="text-white flex flex-col justify-between w-full mb-8 md:w-auto">
            <div className="mb-4">
              <a href="/products" className="underline"> View our product catalogue </a>
            </div>
            <div>
              Site Created and maintained by Crosa Apps Ltd.
                <br />
                © 2020 | Rmaq Co.
              </div>
          </div>

          <img src="./assets/images/logo-full.png" style={{ width: '300px' }} className="p-2 bg-white rounded-lg w-full md:w-auto" />
        </div>
      </footer>
    </div>
  )
};

export default Footer;