import Head from 'next/head'
import Button from '../components/button'
import ContactUs from '../components/contact-us'
import FeatureItem from '../components/feature-item'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Product from '../components/product'
import SectionHeader from '../components/section-header'
import products from '../data/products';

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafia Mohammed Al Qarni Trading Company</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="hero-section">
          <Header />

          <Hero />
        </div>
      </main>

      <section className="container mx-auto" id="about-us">
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
            We, Rafia Mohammed Al Qarni Trading Company, is an UAE based leading global safety and operational gear dealers. We thrive to deliver the most safe and secure equipement to all our clients.
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
                <Product product={product} key={index} />
              );
            })
          }
        </div>

        <div className="text-center mt-8">
          <Button className="bg-brand-blue text-white px-10"> View all our products </Button>
        </div>
      </div>

      <ContactUs />

      <Footer />
    </div>
  )
}

