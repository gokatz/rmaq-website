import { useEffect, useState } from "react";

const ToTop = () => {

  let [canShowToTop, setVisibility] = useState(false);

  useEffect(() => {
    window.document.onscroll = () => {
      let { scrollTop } = document.documentElement;
      let isAllowed = scrollTop > 400;
      setVisibility(isAllowed);
    };

    return () => { window.document.onscroll = null };
  }, []);

  function goToTop() {
    if (!canShowToTop) {
      return;
    }
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
    <div className={`fixed right-0 bottom-0 m-5 ${canShowToTop ? 'opacity-1 cursor-pointer' : 'opacity-0'} duration-500 ease-in-out transition-opacity`}>
      <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-300 shadow rounded-full p-3 flex items-center justify-center" onClick={goToTop}>
        <img src="./assets/icons/to-top.svg" alt="go to top" className="h-4 w-4 md:h-6 md:w-6" />
      </div>
    </div>
  )
};

export default ToTop;