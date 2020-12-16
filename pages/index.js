import Head from 'next/head'
import ContactUs from '../components/contact-us'
import FeatureItem from '../components/feature-item'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Brands from '../components/brands'
import AboutUs from '../components/aboutus'
import ProductPreview from '../components/product-preview'

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
          <FeatureItem 
            title="Fire and Safety" 
            description="Its our at most priority to supply high standard Fire and Safety equipments to the clients at a competitive price." 
          />
          <FeatureItem
            title="Industrial Safety"
            description="Safety is the first priority when someone works in the industry. It is our goal to ensure the safety by providing high standard industrial safety equipments."
          />
          <FeatureItem
            title="Best Commitment"
            description="Its our responsibility to exceed each customer’s individual requirements and expectations with our experience and knowledge."
          />
          {/* We will be available to the customer’s anytime and anywhere since safety is a matter of life. */}
        </div>
      </section>

      <AboutUs />

      <ProductPreview />

      <Brands />

      <ContactUs />

      <Footer />
    </div>
  )
}

