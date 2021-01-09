import Head from 'next/head'
import Footer from '../components/footer'
import ToTop from '../components/to-top';
import products from '../data/products';
import { useEffect, useState } from 'react'

const MainLayout = (props) => {
  let { children, CustomMeta = <></> } = props;
  let productList = products.map((product) => {
    return product.name;
  });

  let [isHydrated, setHydration] = useState(false);

  useEffect(() => {
    setHydration(true);
  }, []);

  return (
    <>
      <Head>
        <title>Rafia Mohammed Al Qarni Trading Company</title>
        {CustomMeta}
        <meta name="description" content="Rafia Mohammed Al Qarni Trading Est. is the famous for all your safety and operational equipment." />
      </Head>

      <div style={{ display: isHydrated ? 'block' : 'none' }}>
        { children }

        <Footer />
        <ToTop />
      </div>
    </>
  );
};

export default MainLayout;