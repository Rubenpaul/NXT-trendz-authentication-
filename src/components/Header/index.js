// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <img
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
      className="website-logo-image"
    />
    <div className="nav-and-btn-container">
      <ul className="nav-container">
        <Link to="/" className="link-style">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/products" className="link-style">
          <li className="nav-link">Products</li>
        </Link>
        <Link to="/Cart" className="link-style">
          <li className="nav-link">Cart</li>
        </Link>
      </ul>
      <button type="button" className="logout-btn">
        Logout
      </button>
      <div className="mobile-home-container">
        <button type="button" className="logout-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </div>
    <ul className="nav-container2">
      <Link to="/" className="link-style">
        <li className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="link-icon"
          />
        </li>
      </Link>
      <Link to="/products" className="link-style">
        <li className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="link-icon"
          />
        </li>
      </Link>
      <Link to="/Cart" className="link-style">
        <li className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="link-icon"
          />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
