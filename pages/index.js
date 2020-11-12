import Head from 'next/head'
import Button from '../components/button'
import FeatureItem from '../components/feature-item'
import Hero from '../components/hero'
import Nav from '../components/nav'
import SectionHeader from '../components/section-header'
// import styles from '../styles/Home.module.css'

export default function Home() {

  let products =[{
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }, {
    name: 'Test',
    thumbnail: './assets/images/logo.png'
  }];

  return (
    <div>
      <Head>
        <title>Rafia Mohammed Al Qarni Trading Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="hero-section">
          <header>
            <div className="container mx-auto flex justify-between py-6 items-center">
              <div className="flex items-center text-lg">
                <img src="./assets/images/logo-bg.png" className="h-20 mr-6" />
                Rafia Mohammed Al Qarni <br />Trading Est.
              </div>
              <Nav />
            </div>
          </header>

          <Hero />
        </div>
      </main>

      <section className="container mx-auto">
        <h3 className="text-center text-2xl uppercase font-semibold my-8"> Our Promises </h3>

        <div className="flex justify-between">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </section>

      <SectionHeader title="About Us" />

      <div className="container mx-auto flex items-center justify-around">
        <div className="w-3/5">
          <div className="font-semibold mb-5"> Safety is our first concern! </div>
          <div className="mb-5">
            We, Rafia Mohammed Al Qarni Trading Company, is an UAE based leading global safety and operational gear dears. We thrive to deliver the most safe and secure equipement to all our clients.
          </div>
          <div>
            We always prove to be worthy of the trust our customers have on us. We assure that for yours too!        
          </div>
        </div>

        <div className="w-1/5 flex items-center justify-center">
          <img src="./assets/images/logo.png" />
        </div>
      </div>

      <SectionHeader title="Our Products" />

      <div className="container mx-auto text-center">
      
        <div className="">
          {
            products.map((product, index) => {
              return (
                <div className="rounded shadow-md w-1/6 inline-block text-center flex-shrink-0 mx-10 mb-10 p-8" key={index}>
                  <img src={product.thumbnail} className="max-w-full" />
                  <div className="font-semibold mt-8"> {product.name} </div>
                </div>
              );
            })
          }
        </div>

        <div className="text-center mt-8">
          <Button className="bg-brand-blue text-white px-10"> View all our products </Button>
        </div>
      </div>

      <SectionHeader title="Contact Us" />

      <iframe 
        width="600" 
        height="450" 
        frameBorder="0" 
        style={{ border: '0' }} 
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYTN9T-plUjoRM9RjaAunYW4&key=AIzaSyCOgOXJR3nVkPdL10CEDejBLEtCx9erqwc" 
        allowFullScreen
      />

      {/* <footer>
        
      </footer> */}
    </div>
  )
}

