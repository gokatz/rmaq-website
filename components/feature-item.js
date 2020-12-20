const FeatureItem = (props) => {

  let { title, description, iconUrl } = props;

  return (
    <div className="text-center w-full md:w-1/3 mx-6 mb-8 md:mb-0 last:mb-0">
      <div className="rounded-full shadow bg-gray-200 inline-block p-4">
        <img src={iconUrl} className="h-10 w-10 md:h-16 md:w-16" />
      </div>
      <h4 className="font-semibold text-lg mb-3 mt-8">{title}</h4>
      <div>
        {description}
      </div>
    </div>
  )
};

export default FeatureItem;