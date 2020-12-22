import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Product from '../components/product';
import SectionHeader from '../components/section-header';
import ToTop from '../components/to-top';
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
    
      <div className="-mt-16">
        <SectionHeader title="Our Line of Products" />
      </div>

      <div className="text-lg text-center -mt-5 mb-16 px-5">
        Here is the list of our world class product offerings!<br />
        Reach out to us for any personalized product requirement, we'll be glad to assist
      </div>

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
      
      <ToTop />
    </div>
  )
}

