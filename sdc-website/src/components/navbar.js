import React from 'react';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: '#f3d586' }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://forms.gle/TqBpu3ALrUKMSSRp7" target="_blank" style={{ fontSize: '20px', color: '#33322D' }}>Membership</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://forms.gle/csKZr5wNYqSbP42s7" target="_blank" style={{ fontSize: '20px', color: '#33322D' }}>Submit a Project Idea</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sponsorship.html" style={{ fontSize: '20px', color: '#33322D' }}>Sponsorship</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;