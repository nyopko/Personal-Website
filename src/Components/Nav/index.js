import React from 'react';

// import './style.css';

function Nav() {
    return (
        <nav id="navBar" className="navbar static-top navbar-expand-md navbar-light bg-light">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    </div>
    <div className="mx-auto order-0">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <a id="navLink" className="nav-link active" href="/"><b>Nick Yopko</b></a>
        </li>
        <li className="nav-item">
          <a id="navLink" className="nav-link active" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a id="navLink" className="nav-link active" href="/marketing">Marketing</a>
        </li>
        <li className="nav-item">
          <a id="navLink" className="nav-link active" href="/coding">Coding</a>
        </li>
        <li className="nav-item">
          <a id="navLink" className="nav-link active" href="/writing">Writing</a>
        </li>
        <li className="nav-item">
          <a id="navLink" className="nav-link active" href="/resume">Resume</a>
        </li>
      </ul>
    </div>
  </nav>

    );
}

export default Nav;