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
import Brands from '../components/brands'
import AboutUs from '../components/aboutus'

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

        <div className="flex justify-between flex-wrap md:flex-no-wrap">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </section>

      <AboutUs />

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
          <a href="/products">
            <Button className="bg-brand-blue text-white px-10"> View all our products </Button>
          </a>
        </div>
      </div>

      <Brands />

      <ContactUs />

      <Footer />
    </div>
  )
}

