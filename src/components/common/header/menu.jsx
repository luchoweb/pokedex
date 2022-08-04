import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      link: '/',
      label: 'Home'
    },
    {
      link: '/search',
      label: 'Search'
    },
    {
      link: '/about',
      label: 'About'
    },
    {
      link: '/legal',
      label: 'Legal'
    }
  ];

  return (
    <ul className="menu list-unstyled m-0 p-0 d-flex align-items-center justify-content-center justify-content-md-end gap-4">
      {
        menuItems.map((item, index) => (
          <li className="menu-item" key={`i-${index}`}>
            <Link to={ item.link } className="menu-link">
              { item.label }
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default Menu;