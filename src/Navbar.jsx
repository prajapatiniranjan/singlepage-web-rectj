import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Logo</a>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#resort-info">Resort Info</a>  
        </li>
        <li className="navbar-item">
          <a href="#booknow">Book Now</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
