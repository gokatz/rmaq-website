import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Product from '../components/product';
import products from '../data/products';

export default function Home() {

  let productList = [...products, ...products, ...products];

  return (
    <div>
      <Head>  
        <title>Product Catalogue | Rafia Mohammed Al Qarni Trading Company</title>
        <link rel="icon" href="/assets/images/sample-product.jpg" />
      </Head>

      <main>
        <div className="hero-section">
          <Header />
        </div>
      </main>

      <div className="container mx-auto text-center my-10">
        {
          productList.map((product, index) => {
            return (
              <Product product={product} key={index} />
            );
          })
        }
      </div>

      <Footer />
      
    </div>
  )
}

