import Button from "./button";
import SectionHeader from "./section-header";

const OtherProductsSummary = (props) => {
  let services = [{
    name: 'Customized T-shirt Printing & Embroidery',
    description: (
      <>
        We are supplying high quality customized industrial and casual wears to our customers.<br />
        <ul className="list-disc m-4 text-sm">
          <li>Supplying T-shirt, Shirts, Coverall, Cap, Safety vest, Flag</li>
          <li>Screen printing</li>
          <li>Logo designing</li>
          <li>Embroidery works</li>
        </ul>
      </>
    ),
    imageUrl: './assets/images/services/tees.png'
  }, {
    name: 'Advertising',
    description: (
      <>
        We are solving end-to-end advertising requirements for any business by involving from designing to field work. <br />

        <ul className="list-disc m-4 text-sm">
          <li>Name boards, banner boards, light board, 3D name board</li>
          <li>Stickers printing (Signs, In-door stickers)</li>
          <li>Business cards, Brochures, Flyers, Letterhead printing, Bill book</li>
          <li>Mug printing and promotional gift items</li>
          <li>Acrylic Tumblers</li>
          <li>ID card</li>
        </ul>
      </>
    ),
    imageUrl: './assets/images/services/ad.jpg'
  }, {
    name: 'Engraving and Stencil Works',
    description: 'Make your impression last long! We are servicing all types of engraving and stencil work for major corporates and industries.',
    imageUrl: './assets/images/services/engraving.gif'
  }];

  return (
    <div>
      <SectionHeader title="Our other services and ventures" />

      <div className="container mx-auto mb-16">

        <div className="text-lg text-center -mt-5 mb-12 px-5">
          Checkout our other world class services, our customers trust us in!
        </div>

        <div className="flex flex-wrap justify-around">
          {
            services.map((service) => {
              let { name, imageUrl, description  } = service;
              
              return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-3" key={name}>
                  <img className="w-full" src={imageUrl} alt="Sunset in the mountains" style={{ minHeight: '260px' }} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <div className="text-gray-700 text-base">
                      {description}
                    </div>
                  </div>
                  {/* <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div> */}
                </div>
              )
            })
          }
        </div>

        <div className="text-center mt-16">
          <a href="/#contact-us">
            <Button className="bg-brand-blue text-white capitalize"> Contact Us for any of these services </Button>
          </a>
        </div>
      </div>

    </div>
  )
};

export default OtherProductsSummary;