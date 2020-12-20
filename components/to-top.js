const ToTop = (props) => {

  function goToTop() {
    try {
      scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      window.scrollTo && window.scrollTo(0, 0);
    }
  }

  return (
    <div className="fixed right-0 bottom-0 m-5">
      <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-300 shadow rounded-full p-3 cursor-pointer flex items-center justify-center" onClick={goToTop}>
        <img src="./assets/icons/to-top.svg" className="h-4 w-4 md:h-6 md:w-6" />
      </div>
    </div>
  )
};

export default ToTop;