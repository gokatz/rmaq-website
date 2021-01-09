import MainLayout from '../layout/main'
import ContactUs from '../components/contact-us'
import Header from '../components/header'
import Hero from '../components/hero'
import Brands from '../components/brands'
import AboutUs from '../components/aboutus'
import ProductPreview from '../components/product-preview'
import Promises from '../components/promises'
import OtherProductsSummary from '../components/other-products-summary'
import Head from 'next/head'
import products from '../data/products'

// import styles from '../styles/Home.module.css'

export default function Home() {
  let productList = products.map((product) => {
    return product.name;
  });

  return (
    <MainLayout>
      <Head>
        <meta 
          name="keywords" 
          content="Rmaq Trading, Rafia Mohammed Al Qarni Trading Company, Buy Online, Safety equipment, Operational equipment" 
        />
      </Head>
      <main>
        <div 
          className="hero-section"
          // style={{ backgroundImage: 'url("./assets/images/hero.png")', backgroundSize: 'cover' }}
        >
          <Header />
          <Hero />
        </div>
      </main>

      <Promises />

      <AboutUs />

      <ProductPreview />

      <Brands />

      <OtherProductsSummary />

      <ContactUs />
    </MainLayout>
  )
}

