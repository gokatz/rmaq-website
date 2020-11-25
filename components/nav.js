const Nav = () => {

  let navLinks = [{
    title: 'Home',
    href: '/'
  }, {
    title: 'About Us',
    href: '/#about-us'
  }, {
    title: 'Products',
    href: '/products'
  }, {
    title: 'Brands',
    href: '/#brands'
  }, {
    title: 'Contact Us',
    href: '/#contact-us'
  }];

  return (
    <nav className="text-sm my-5 lg:my-0 lg:text-lg w-full lg:w-auto">
      <ul className="text-center bg-brand-red lg:bg-transparent lg:text-left">
        {
          navLinks.map((link) => {
            return (
              <li className="mx-2 p-2 py-3 lg:inline-block cursor-pointer">
                <a href={link.href}> {link.title} </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
};

export default Nav;