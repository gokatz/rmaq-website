import SectionHeader from "./section-header";
import brands from '../data/brands';

const Brands = () => {
  return (
    <>
      <SectionHeader title="Brands Trust Us" id="brand" />

      <div className="container mx-auto mb-16">
        <div className="text-lg text-center -mt-5 mb-16">
          Thanks for all our customer who trust us with their Safety
        </div>

        <div className="text-center">
          {
            brands.map((brand) => {
              return <BrandItem brand={brand} />
            })
          }
        </div>

        <div className="text-center text-blue-600 underline mt-16 cursor-pointer"> View More of our customers and case studies  </div>
      </div>
    </>
  )
};

const BrandItem = (props) => {
  let { brand } = props;
  return (
    <div className="inline-block mx-4" style={{ width: '12%' }}>
      <img src={brand.thumbnail} />
    </div>
  )
}

export default Brands;