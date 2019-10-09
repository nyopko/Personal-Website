import React from 'react';

// import './style.css';

function Nav() {
    return (
        <nav id="navBar" className="navbar static-top navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="google.com">Nick Yopko</a>
        </li>
      </ul>
    </div>
    <div className="mx-auto order-0">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a id="aboutLink" className="nav-link active" href="#aboutMe">About</a>
        </li>
        <li className="nav-item">
          <a id="workLink" className="nav-link active" href="#myWork">Work</a>
        </li>
        <li className="nav-item">
          <a id="contactLink" className="nav-link active" href="#contactText">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

    );
}

export default Nav;