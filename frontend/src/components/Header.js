import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <h2>Aurora 2.0 – Mining Monitoring</h2>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;