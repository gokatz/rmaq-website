import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Product from '../components/product';
import products from '../data/products';

export default function Home() {

  let productList = [...products];

  return (
    <div>
      <Head>  
        <title>Product Catalogue | Rafia Mohammed Al Qarni Trading Company</title>
        <link rel="icon" href="/assets/images/logo-bg.png" />
      </Head>

      <main>
        <div className="hero-section">
          <Header />
        </div>
      </main>

      <div className="container mx-auto text-center my-10">
        <div className="flex flex-wrap justify-around">
        {
          productList.map((product, index) => {
            return (
              <Product product={product} key={index} />
            );
          })
        }
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

