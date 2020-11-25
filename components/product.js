const Product = (props) => {

  let { product } = props;

  return (
    <div className="rounded shadow-md text-center flex-shrink-0 mb-8 mx-4 p-4 w-3/5 md:w-1/4 lg:w-1/5">
      <img src={product.thumbnail} className="max-w-full" />
      <div className="mt-8"> {product.name} </div>
    </div>
  )
};

export default Product;

// mx-10 mb-10 p-8