const Product = (props) => {

  let { product } = props;

  return (
    <div className="rounded shadow-md w-1/6 inline-block text-center flex-shrink-0 mx-10 mb-10 p-8">
      <img src={product.thumbnail} className="max-w-full" />
      <div className="font-semibold mt-8"> {product.name} </div>
    </div>
  )
};

export default Product;