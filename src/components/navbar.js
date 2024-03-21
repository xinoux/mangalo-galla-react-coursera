import './index-style.css'

export default function Navbar() {
  return (
    <nav className="navbar-row">
      <div className="navbar-containers">
        <ul>
          <li>
            <a href="index.html">SHOP</a>
          </li>
          <li>
            <a href="about.html">COLLECTIONS</a>
          </li>
          <li>
            <a href="services.html">Locations</a>
          </li>
          <li>
            <a href="contact.html">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
