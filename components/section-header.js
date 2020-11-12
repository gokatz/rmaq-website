const SectionHeader = (props) => {

  let { title } = props;
  return (
    <header className="py-3 bg-brand-red text-white text-xl font-semibold text-center my-16"> {title} </header>
  )
};

export default SectionHeader;