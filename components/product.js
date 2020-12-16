const Product = (props) => {

  let { product } = props;

  return (
    <div className="rounded text-center flex-shrink-0 mb-8 mx-4 w-3/5 md:w-1/4 lg:w-1/5 flex flex-col items-center product justify-between">
      <div className="p-4 flex items-center flex-grow">
        <img src={product.thumbnail} className="max-w-full" style={{ maxHeight: '240px' }} />
      </div>
      <div className="mt-4 py-2 bg-blue-300 w-full rounded-b flex-shrink-0"> {product.name} </div>
    </div>
  )
};

export default Product;

// mx-10 mb-10 p-8