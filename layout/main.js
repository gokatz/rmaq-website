import Head from 'next/head'
import Footer from '../components/footer'
import ToTop from '../components/to-top';
import products from '../data/products';

const MainLayout = (props) => {
  let { children, CustomMeta = <></> } = props;
  let productList = products.map((product) => {
    return product.name;
  });

  return (
    <html lang="en">
      <Head>
        <title>Rafia Mohammed Al Qarni Trading Company</title>
        {CustomMeta}
        <meta name="description" content="Rafia Mohammed Al Qarni Trading Est. is the famous for all your safety and operational equipment." />
        <meta name="keywords" content={`safety equipment, online buy, ${productList.join(', ')}`} />
        <meta name="author" content="Crosa Apps Ltd." />
        <link rel="icon" href="/assets/images/logo-bg.png" />
        <meta property="og:image" content="/assets/images/web-preview.png" />
      </Head>
      { children }

      <Footer />
      <ToTop />
    </html>
  );
};

export default MainLayout;