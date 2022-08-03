import { Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <ul className="menu list-unstyled m-0 p-0 d-flex align-items-center justify-content-end gap-4">
      {
        items.map((item, index) => (
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