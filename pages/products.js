import Head from 'next/head'
import { useState } from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import Product from '../components/product';
import SectionHeader from '../components/section-header';
import ToTop from '../components/to-top';
import products from '../data/products';

export default function Home() {

  let [productList, setProducts] = useState(products);
  let [searchTerm, setTerm] = useState('');

  function searchProducts(term) { 
    term = term ? term.toLowerCase() : '';
    setTerm(term);

    let filteredProducts = products.filter((product) => {
      let { name } = product;
      name = name ? name.toLowerCase() : '';
      return name.includes(term);
    });

    setProducts(filteredProducts);
  }

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

      <div className="text-lg text-center -mt-5 px-5">
        Here is the list of our world class product offerings!<br />
        Reach out to us for any personalized product requirement, we'll be glad to assist
      </div>

      <div className="my-12 text-center">
        <input 
          value={searchTerm}
          onChange={(e) => searchProducts(e.target.value)}
          className="rounded-3xl p-2 px-5 max-w-full outline-none border-2 focus:border-brand-blue" 
          placeholder="Search Products" 
          style={{ minWidth: '300px', width: '55%' }} 
        />

        {
          searchTerm 
          ? (
            <div className="mt-5">
              Showing result(s) for <b>{searchTerm}</b> &bull; <button className="text-blue-600 text-sm hover:underline" onClick={() => searchProducts('')}> Clear Search </button>
            </div>
            )
          : null
        }
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

