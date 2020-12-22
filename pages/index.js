import Head from 'next/head'
import ContactUs from '../components/contact-us'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/hero'
import Brands from '../components/brands'
import AboutUs from '../components/aboutus'
import ProductPreview from '../components/product-preview'
import Promises from '../components/promises'
import ToTop from '../components/to-top'

// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafia Mohammed Al Qarni Trading Company</title>
        <link rel="icon" href="/assets/images/logo-bg.png" />
      </Head>

      <main>
        <div 
          className="hero-section" 
          // style={{ backgroundImage: 'url("./assets/images/hero-cover.png")', backgroundSize: 'cover' }}
        >
          <Header />
          <Hero />
        </div>
      </main>

      <Promises />

      <AboutUs />

      <ProductPreview />

      <Brands />

      <ContactUs />

      <Footer />

      <ToTop />

    </div>
  )
}

