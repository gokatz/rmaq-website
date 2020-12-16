import SectionHeader from "./section-header";
import brands from '../data/brands';

const Brands = () => {
  return (
    <>
      <SectionHeader title="Brands We Trust" id="brands" />

      <div className="container mx-auto -mb-6">
        <div className="text-lg text-center -mt-5 mb-8 md:mb-12 px-5">
          We trust world's leading brands to help our customers
        </div>

        <div className="flex flex-wrap justify-around">
          {
            brands.map((brand) => {
              return <BrandItem brand={brand} key={brand.name} />
            })
          }
        </div>

        {/* <div className="text-center text-blue-600 underline mt-16 cursor-pointer"> View More of our customers and case studies  </div> */}
      </div>
    </>
  )
};

const BrandItem = (props) => {
  let { brand } = props;
  return (
    <div className="mx-2 mt-2 mb-10 w-1/4 md:w-2/12">
      <img src={brand.thumbnail} />
    </div>
  )
}

export default Brands;