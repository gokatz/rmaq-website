const FeatureItem = (props) => {

  let { title, description } = props;

  return (
    <div className="text-center w-full md:w-1/3 mx-6 mb-8 md:mb-0 last:mb-0">
      <h4 className="font-semibold text-lg mb-3">{title}</h4>
      <div>
        {description}
      </div>
    </div>
  )
};

export default FeatureItem;