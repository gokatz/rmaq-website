import Product from './product'
import SectionHeader from './section-header'
import products from '../data/products';
import Button from './button'


const ProductPreview = () => {

  let productList = products.slice(0, 12);

  return (
    <>
      <SectionHeader title="Our Products" />

      <div className="container mx-auto text-center">

        <div className="flex flex-wrap justify-around">
          {
            productList.map((product, index) => {
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
    </>
  )
};

export default ProductPreview;