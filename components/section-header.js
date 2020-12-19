const SectionHeader = (props) => {

  let { title, id="" } = props;
  return (
    <header className="py-3 bg-brand-red text-white text-xl font-semibold text-center my-16 font-hero" id={id}> {title} </header>
  )
};

export default SectionHeader;